import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '@/lib/db/prisma';
import bcrypt from 'bcryptjs';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error('Email and password are required');
          }

          // Check database connection
          try {
            await prisma.$connect();
          } catch (dbError: any) {
            throw new Error('Database connection failed. Check DATABASE_URL in .env');
          }

          const user = await prisma.users.findUnique({
            where: { email: credentials.email },
          });

          if (!user) {
            throw new Error('User not found. Please create admin user first.');
          }

          if (!user.password) {
            throw new Error('User password not set. Please reset password.');
          }

          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!isPasswordValid) {
            throw new Error('Invalid password');
          }

          // Get user permissions
          let permissions = [];
          try {
            const { getPermissionsFromRole } = await import('@/lib/permissions');
            permissions = user.permissions
              ? (user.permissions as any)
              : getPermissionsFromRole(user.role);
          } catch (permError) {
            permissions = [];
          }

          const userData = {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
            permissions,
            image: user.image || null,
          };

          return userData;
        } catch (error: any) {
          // Return null to show generic error
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/admin/login',
  },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      // Initial sign in
      if (user) {
        token.role = (user as any).role;
        token.permissions = (user as any).permissions || [];
        token.id = (user as any).id;
        token.name = user.name;
        token.email = user.email;
        token.image = (user as any).image;
      }

      // When session is updated (e.g., after profile update)
      if (trigger === 'update') {
        // Fetch fresh user data from database
        if (token.id) {
          try {
            const updatedUser = await prisma.users.findUnique({
              where: { id: token.id as string },
              select: {
                id: true,
                email: true,
                name: true,
                role: true,
                permissions: true,
                image: true,
              },
            });

            if (updatedUser) {
              token.name = updatedUser.name;
              token.email = updatedUser.email;
              token.role = updatedUser.role;
              token.image = updatedUser.image;
              if (updatedUser.permissions) {
                token.permissions = updatedUser.permissions as any;
              }
            }
          } catch (error) {
            // Error fetching user data
          }
        }
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).role = token.role;
        (session.user as any).permissions = token.permissions || [];
        (session.user as any).id = token.id || token.sub;
        session.user.name = (token.name as string) || session.user.name;
        session.user.email = (token.email as string) || session.user.email;
        (session.user as any).image = token.image;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET || 'change-this-secret-in-production',
};

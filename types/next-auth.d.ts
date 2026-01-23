import 'next-auth';

declare module 'next-auth' {
  interface User {
    role?: string;
    permissions?: string[];
    id?: string;
    image?: string | null;
  }

  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      role?: string;
      permissions?: string[];
      image?: string | null;
    };
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role?: string;
    permissions?: string[];
    id?: string;
    image?: string | null;
  }
}

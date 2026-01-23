import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function createAdminUser() {
  const email = process.argv[2] || 'admin@example.com';
  const password = process.argv[3] || 'admin123';
  const name = process.argv[4] || 'Admin User';

  try {
    // Check if user already exists
    const existingUser = await prisma.users.findUnique({
      where: { email },
    });

    if (existingUser) {
      console.log(`⚠️  User with email ${email} already exists.`);
      console.log('🔄 Updating password and user details...');

      // Hash the new password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Update the user
      const updatedUser = await prisma.users.update({
        where: { email },
        data: {
          name,
          password: hashedPassword,
          role: 'admin',
          isActive: true,
        },
      });

      console.log('✅ Admin user updated successfully!');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('📧 Email:', email);
      console.log('🔑 Password:', password);
      console.log('👤 Name:', name);
      console.log('🎭 Role:', updatedUser.role);
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      await prisma.$disconnect();
      return;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the admin user
    const user = await prisma.users.create({
      data: {
        email,
        name,
        password: hashedPassword,
        role: 'admin',
        isActive: true,
      },
    });

    console.log('✅ Admin user created successfully!');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📧 Email:', email);
    console.log('🔑 Password:', password);
    console.log('👤 Name:', name);
    console.log('🎭 Role:', user.role);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('⚠️  Please change this password after first login!');
  } catch (error: any) {
    console.error('❌ Error creating admin user:', error.message);
    if (error.code === 'P2002') {
      console.error('User with this email already exists.');
    }
  } finally {
    await prisma.$disconnect();
  }
}

createAdminUser();

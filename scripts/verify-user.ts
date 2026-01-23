import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function verifyUser() {
  const email = process.argv[2] || 'admin@example.com';
  const password = process.argv[3] || 'cloudadmind123';

  try {
    console.log('🔍 Checking user in database...\n');

    // Check if user exists
    const user = await prisma.users.findUnique({
      where: { email },
    });

    if (!user) {
      console.log('❌ User not found in database!');
      console.log(`Email: ${email}`);
      console.log('\n💡 Run: npm run create-admin-user <email> <password> <name>');
      await prisma.$disconnect();
      return;
    }

    console.log('✅ User found in database!');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📧 Email:', user.email);
    console.log('👤 Name:', user.name);
    console.log('🎭 Role:', user.role);
    console.log('✅ Active:', user.isActive);
    console.log('🔐 Has Password:', !!user.password);
    console.log('📅 Created:', user.createdAt);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    // Test password
    if (!user.password) {
      console.log('❌ User has no password set!');
      console.log('💡 Run: npm run create-admin-user <email> <password> <name>');
      await prisma.$disconnect();
      return;
    }

    console.log('🔐 Testing password...');
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      console.log('✅ Password is CORRECT!');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('✅ Login should work with these credentials:');
      console.log('   Email:', email);
      console.log('   Password:', password);
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    } else {
      console.log('❌ Password is INCORRECT!');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('💡 The password hash in database does not match.');
      console.log('💡 Run: npm run create-admin-user <email> <password> <name>');
      console.log('   Example: npm run create-admin-user admin@example.com cloudadmind123 "Admin User"');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    }
  } catch (error: any) {
    console.error('❌ Error:', error.message);
    if (error.code === 'P1001') {
      console.error('\n💡 Database connection failed!');
      console.error('   Check your DATABASE_URL in .env file');
      console.error('   Make sure PostgreSQL is running');
    }
  } finally {
    await prisma.$disconnect();
  }
}

verifyUser();

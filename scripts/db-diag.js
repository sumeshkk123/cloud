
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function check() {
    try {
        const count = await prisma.industry_solutions.count();
        console.log(`Total Industry Solutions: ${count}`);

        const all = await prisma.industry_solutions.findMany();
        console.log("All Solutions:");
        console.log(JSON.stringify(all, null, 2));

        const en = await prisma.industry_solutions.findMany({ where: { locale: 'en' } });
        console.log(`English Solutions: ${en.length}`);
    } catch (e) {
        console.error(e);
    } finally {
        await prisma.$disconnect();
    }
}

check();

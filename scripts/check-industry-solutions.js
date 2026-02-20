
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkSolutions() {
    console.log("--- INDUSTRY SOLUTIONS (EN) ---");
    const solutions = await prisma.industry_solutions.findMany({
        where: { locale: 'en' }
    });
    solutions.forEach(s => {
        console.log(`ID: ${s.id}, TITLE: [${s.title}], ICON: [${s.icon}]`);
    });
}

checkSolutions()
    .catch(console.error)
    .finally(() => prisma.$disconnect());

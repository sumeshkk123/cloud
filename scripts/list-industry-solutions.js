
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkSolutions() {
    console.log("--- ALL INDUSTRY SOLUTIONS ---");
    const solutions = await prisma.industry_solutions.findMany();
    console.log(JSON.stringify(solutions, null, 2));
}

checkSolutions()
    .catch(console.error)
    .finally(() => prisma.$disconnect());

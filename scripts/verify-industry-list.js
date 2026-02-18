
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function listIndustries() {
    console.log("Fetching industry items from database...");
    const solutions = await prisma.industry_solutions.findMany({
        where: { locale: 'en' },
        orderBy: { createdAt: 'desc' }
    });

    console.log("\nIndustry Items in Database (EN):");
    solutions.forEach(s => {
        console.log(`- ${s.title} (ID: ${s.id}, Slug: ${s.slug})`);
    });
    console.log("\nTotal items:", solutions.length);
}

listIndustries()
    .catch(console.error)
    .finally(() => prisma.$disconnect());

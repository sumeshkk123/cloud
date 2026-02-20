
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function listAll() {
    console.log("--- ALL PAGE TITLES ---");
    const titles = await prisma.page_titles.findMany({
        take: 100
    });
    console.log(JSON.stringify(titles, null, 2));

    console.log("--- ALL META DETAILS ---");
    const metas = await prisma.meta_details.findMany({
        take: 100
    });
    console.log(JSON.stringify(metas, null, 2));
}

listAll()
    .catch(console.error)
    .finally(() => prisma.$disconnect());

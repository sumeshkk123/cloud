
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkDb() {
    console.log("--- CHECKING PAGE TITLES ---");
    const titles = await prisma.page_titles.findMany({
        where: {
            page: {
                contains: "insurance"
            }
        }
    });
    console.log("Found in page_titles:", JSON.stringify(titles, null, 2));

    console.log("--- CHECKING META DETAILS ---");
    const metas = await prisma.meta_details.findMany({
        where: {
            page: {
                contains: "insurance"
            }
        }
    });
    console.log("Found in meta_details:", JSON.stringify(metas, null, 2));
}

checkDb()
    .catch(console.error)
    .finally(() => prisma.$disconnect());

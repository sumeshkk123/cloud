
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function findMatch() {
    const searchTerm = "insurance";
    console.log(`Searching for "${searchTerm}"...`);

    const titles = await prisma.page_titles.findMany({
        where: {
            page: {
                contains: searchTerm
            }
        }
    });

    const metas = await prisma.meta_details.findMany({
        where: {
            page: {
                contains: searchTerm
            }
        }
    });

    console.log(`Results in page_titles: ${titles.length}`);
    titles.forEach(t => console.log(`- KEY: [${t.page}], LOCALE: [${t.locale}], TITLE: [${t.title}]`));

    console.log(`Results in meta_details: ${metas.length}`);
    metas.forEach(m => console.log(`- KEY: [${m.page}], LOCALE: [${m.locale}], TITLE: [${m.title}]`));
}

findMatch()
    .catch(console.error)
    .finally(() => prisma.$disconnect());


const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function fixData() {
    console.log("Searching for records to fix...");

    // 1. Find the page_titles records that look like insurance
    const titles = await prisma.page_titles.findMany({
        where: {
            page: { contains: "insurance" }
        }
    });

    console.log(`Found ${titles.length} records in page_titles.`);

    for (const t of titles) {
        const oldPage = t.page;
        const newPage = "industry-solutions/insurance";
        if (oldPage !== newPage) {
            console.log(`Updating page_titles: ${oldPage} -> ${newPage} (${t.locale})`);
            try {
                await prisma.page_titles.update({
                    where: { id: t.id },
                    data: { page: newPage }
                });
            } catch (e) {
                if (e.code === 'P2002') {
                    console.log(`Skipping duplicate for ${newPage} in ${t.locale}`);
                    // If we already have a record with the new key, we might want to delete the old one or merge.
                    // For now just delete the old one if it's redundant.
                    await prisma.page_titles.delete({ where: { id: t.id } });
                }
            }
        }
    }

    // 2. Find the meta_details records
    const metas = await prisma.meta_details.findMany({
        where: {
            page: { contains: "insurance" }
        }
    });

    console.log(`Found ${metas.length} records in meta_details.`);

    for (const m of metas) {
        const oldPage = m.page;
        const newPage = "industry-solutions/insurance";
        if (oldPage !== newPage) {
            console.log(`Updating meta_details: ${oldPage} -> ${newPage} (${m.locale})`);
            try {
                await prisma.meta_details.update({
                    where: { id: m.id },
                    data: { page: newPage }
                });
            } catch (e) {
                if (e.code === 'P2002') {
                    await prisma.meta_details.delete({ where: { id: m.id } });
                }
            }
        }
    }

    // 3. Similarly for affiliate-marketing
    const affTitles = await prisma.page_titles.findMany({
        where: {
            page: { contains: "affiliate-marketing" }
        }
    });

    for (const t of affTitles) {
        const oldPage = t.page;
        const newPage = "industry-solutions/affiliate-marketing";
        if (oldPage !== newPage) {
            console.log(`Updating page_titles: ${oldPage} -> ${newPage} (${t.locale})`);
            try {
                await prisma.page_titles.update({
                    where: { id: t.id },
                    data: { page: newPage }
                });
            } catch (e) {
                if (e.code === 'P2002') await prisma.page_titles.delete({ where: { id: t.id } });
            }
        }
    }

    const affMetas = await prisma.meta_details.findMany({
        where: {
            page: { contains: "affiliate-marketing" }
        }
    });

    for (const m of affMetas) {
        const oldPage = m.page;
        const newPage = "industry-solutions/affiliate-marketing";
        if (oldPage !== newPage) {
            console.log(`Updating meta_details: ${oldPage} -> ${newPage} (${m.locale})`);
            try {
                await prisma.meta_details.update({
                    where: { id: m.id },
                    data: { page: newPage }
                });
            } catch (e) {
                if (e.code === 'P2002') await prisma.meta_details.delete({ where: { id: m.id } });
            }
        }
    }

    console.log("Fix complete.");
}

fixData()
    .catch(console.error)
    .finally(() => prisma.$disconnect());

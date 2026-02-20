
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function cleanTitles() {
    console.log("Cleaning Industry Solution titles...");

    const solutions = await prisma.industry_solutions.findMany();

    for (const s of solutions) {
        let newTitle = s.title;
        if (s.title.toLowerCase().includes("insurance")) {
            newTitle = "Insurance";
        } else if (s.title.toLowerCase().includes("affiliate")) {
            newTitle = "Affiliate Marketing";
        }

        if (newTitle !== s.title) {
            console.log(`Updating solution title: [${s.title}] -> [${newTitle}] (${s.locale})`);
            try {
                await prisma.industry_solutions.update({
                    where: { id: s.id },
                    data: { title: newTitle }
                });
            } catch (e) {
                console.error(`Failed to update ${s.id}:`, e.message);
            }
        }
    }

    console.log("Title cleaning complete.");
}

cleanTitles()
    .catch(console.error)
    .finally(() => prisma.$disconnect());


const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

function slugFromTitle(title) {
    return (title || '')
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
}

async function populateSlugs() {
    console.log("Populating slugs for industry solutions...");
    const solutions = await prisma.industry_solutions.findMany();

    for (const s of solutions) {
        const slug = slugFromTitle(s.title);
        console.log(`Setting slug for ${s.id}: ${slug} (Title: ${s.title})`);
        await prisma.industry_solutions.update({
            where: { id: s.id },
            data: { slug }
        });
    }
    console.log("Slug population complete.");
}

populateSlugs()
    .catch(console.error)
    .finally(() => prisma.$disconnect());

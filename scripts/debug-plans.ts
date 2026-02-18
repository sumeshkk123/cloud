import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log("Fetching all MLM Plans...");
    const plans = await prisma.mlm_plans.findMany({});

    console.log(`Found ${plans.length} plans.`);

    /* import generateSlug from lib/api/mlm-plans.ts - but we can't easily import if not exported or if we are in script.
     Actually, let's just copy the function here to test the logic, OR better, use the actual function if we can import it.
     Since verified 'npx tsx' works, we can import. */

    // We need to import it.
    // But wait, the previous run didn't use imports from relative paths easily?
    // Actually it did: `import { PrismaClient } from '@prisma/client'` is node_modules.
    // importing from `@/lib/...` might assume tsconfig paths. `tsx` handles that usually.

    /* Let's try importing. */
    // @ts-ignore
    const { generateSlug } = require('../lib/api/mlm-plans');

    const output = plans.map(p => {
        let s = `ID: ${p.id}, Title: ${p.title} (Locale: ${p.locale})\n`;
        try {
            const slug = generateSlug(p.title);
            s += `   -> Generated Slug: ${slug}\n`;
        } catch (e) {
            s += `   -> Slug Gen Error: ${e}\n`;
        }

        if (p.title.includes("Auto") || p.title.includes("Australian")) {
            s += `   -> Description: ${p.description?.substring(0, 50)}...\n`;
        }
        return s;
    }).join('');

    const fs = require('fs');
    fs.writeFileSync('debug-output.txt', `Found ${plans.length} plans.\n` + output);
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

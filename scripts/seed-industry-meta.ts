
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const page = "industry-solutions-affiliate-marketing";
    const locale = "en";

    console.log(`Seeding metadata for ${page}...`);

    await prisma.meta_details.upsert({
        where: {
            page_locale: { page, locale }
        },
        update: {
            title: "TEST: Affiliate Marketing MLM Software",
            description: "TEST: This is a dynamic description fetched from meta_details table.",
            keywords: "test, affiliate, mlm, dynamic"
        },
        create: {
            page,
            locale,
            title: "TEST: Affiliate Marketing MLM Software",
            description: "TEST: This is a dynamic description fetched from meta_details table.",
            keywords: "test, affiliate, mlm, dynamic"
        }
    });

    console.log("Seeding complete.");
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

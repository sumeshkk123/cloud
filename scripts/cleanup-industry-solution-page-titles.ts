
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log("Cleaning up Industry Solution Page Titles...");

    // Find all page_titles where page starts with 'industry-solutions/'
    const pageTitles = await prisma.page_titles.findMany({
        where: {
            page: {
                startsWith: 'industry-solutions/'
            }
        }
    });

    console.log(`Found ${pageTitles.length} entries to delete.`);

    if (pageTitles.length > 0) {
        const deleted = await prisma.page_titles.deleteMany({
            where: {
                page: {
                    startsWith: 'industry-solutions/'
                }
            }
        });
        console.log(`Deleted ${deleted.count} entries.`);
    } else {
        console.log("No entries found to delete.");
    }
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

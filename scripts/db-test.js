
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function check() {
    console.log("Script started");
    try {
        console.log("Attempting to connect...");
        await prisma.$connect();
        console.log("Connected successfully");

        console.log("Fetching count...");
        const count = await prisma.industry_solutions.count();
        console.log(`Count: ${count}`);

        console.log("Fetching all...");
        const all = await prisma.industry_solutions.findMany();
        console.log(`Found ${all.length} records`);
        console.log(JSON.stringify(all, null, 2));

    } catch (e) {
        console.log("ERROR OCCURRED:");
        console.log(e.message);
        console.log(e.stack);
    } finally {
        console.log("Closing connection...");
        await prisma.$disconnect();
        console.log("Done");
        process.exit(0);
    }
}

check();

// Timeout after 10 seconds
setTimeout(() => {
    console.log("TIMEOUT REACHED");
    process.exit(1);
}, 10000);

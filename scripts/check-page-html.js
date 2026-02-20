
async function checkPage() {
    const url = 'http://localhost:3000/en/industries';
    console.log(`Fetching page ${url}...`);
    try {
        const res = await fetch(url);
        const html = await res.text();
        console.log(`Status: ${res.status}`);
        console.log(`HTML Length: ${html.length}`);

        // Check for "Industries portfolio" or similar keywords
        if (html.includes('Industries portfolio')) {
            console.log("Found 'Industries portfolio' section");
        } else {
            console.log("Section 'Industries portfolio' NOT found");
        }

        // Check for any industry titles
        const industries = ["Insurance", "Affiliate Marketing", "Investment"];
        industries.forEach(name => {
            if (html.includes(name)) {
                console.log(`Found industry: ${name}`);
            } else {
                console.log(`Industry NOT found: ${name}`);
            }
        });

    } catch (e) {
        console.error("Fetch failed:", e.message);
    }
}

checkPage();

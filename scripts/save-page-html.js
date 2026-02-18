
const fs = require('fs');

async function checkPage() {
    const url = 'http://localhost:3000/en/industries';
    console.log(`Fetching page ${url}...`);
    try {
        const res = await fetch(url);
        const html = await res.text();
        fs.writeFileSync('industries-page.html', html);
        console.log(`Status: ${res.status}`);
        console.log(`HTML Length: ${html.length}`);
        console.log("HTML saved to industries-page.html");
    } catch (e) {
        console.error("Fetch failed:", e.message);
    }
}

checkPage();


async function testApi() {
    const url = 'http://localhost:3000/api/industry-solutions?locale=en';
    console.log(`Fetching from ${url}...`);
    try {
        const res = await fetch(url);
        console.log(`Status: ${res.status}`);
        const data = await res.json();
        console.log(`Received ${data.length} items`);
        if (data.length > 0) {
            console.log("First item sample:", JSON.stringify(data[0], null, 2));
        } else {
            console.log("Empty response array.");
        }
    } catch (e) {
        console.error("Fetch failed:", e.message);
    }
}

testApi();

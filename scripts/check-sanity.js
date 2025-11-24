const { createClient } = require('next-sanity');

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2023-05-03',
    useCdn: false,
});

async function run() {
    try {
        console.log('Fetching companyInfo...');
        const data = await client.fetch('*[_type == "companyInfo"][0]');
        console.log('Data:', JSON.stringify(data, null, 2));
    } catch (err) {
        console.error('Error:', err);
    }
}

run();

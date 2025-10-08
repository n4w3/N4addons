import { FileLib } from "../../FileLib";

export async function scrapeAndSaveMayorData() {

    const TARGET_URL = 'https://skyblock.dev/election/';
    const CORS_PROXY = 'https://api.allorigins.win/raw?url=';
    const SCRAPE_URL = CORS_PROXY + encodeURIComponent(TARGET_URL);

    const FILE_PATH = '../data/Mayor.json';
    
    let resultData = {
        mayor: { name: 'Not found', perks: [] },
        minister: { name: 'Not found', perks: [] }
    };

    try {

        const response = await fetch(SCRAPE_URL);

        if (!response.ok) {
            throw new Error(`Request error: ${response.status} ${response.statusText}`);
        }
        const html = await response.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        function extractRoleData(role) {

            const roleH2 = Array.from(doc.querySelectorAll('h2'))
                .find(h2 => h2.textContent.includes(role));

            if (!roleH2) {
                return { name: 'Not found', perks: [] };
            }

            const name = roleH2.textContent.split(':').pop().trim();
            const perks = [];

            let currentNode = roleH2.nextElementSibling;
            while (currentNode && currentNode.tagName === 'P') {
                const fullPerkText = currentNode.textContent.trim();
                const perkNameOnly = fullPerkText.split('-')[0].trim(); 
                perks.push(perkNameOnly);
                currentNode = currentNode.nextElementSibling;
            }
            return { name, perks };
        }

        resultData.mayor = extractRoleData('Mayor:');
        resultData.minister = extractRoleData('Minister:');

        const jsonContent = JSON.stringify(resultData, null, 4);
        
        const moduleName = "N4";
        
        FileLib.write(moduleName, FILE_PATH, jsonContent);

        ChatLib.chat(`&a[N4] Mayor and Minister data has been refreshed.`);
        
        return resultData;

    } catch (err) {
        ChatLib.chat(`&c[N4] scraping error: ${err.message}`);
        
        return { mayor: { name: 'Error', perks: [] }, minister: { name: 'Error', perks: [] } };
    }
}

export function readMayorData() {
    try {
        const jsonContent = FileLib.read(N4, "../data/Mayor.json");
        if (jsonContent) {
            return JSON.parse(jsonContent);
        }
    } catch (e) {
        console.error("Error while reading mayor and minister data:", e);
    }
    return null;
}
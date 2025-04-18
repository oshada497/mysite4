
const fs = require('fs');
const path = require('path');

// Create data directory if it doesn't exist
const dataDir = 'data';
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
}

// Import PDF data array
const pdfData = require('./pdfs.js').pdfData;

// Remove duplicates based on URL
const seen = new Set();
const uniquePdfData = pdfData.filter(pdf => {
    const isDuplicate = seen.has(pdf.link);
    seen.add(pdf.link);
    return !isDuplicate;
});

// Log the number of duplicates removed
console.log(`Removed ${pdfData.length - uniquePdfData.length} duplicate PDFs`);
console.log(`Original count: ${pdfData.length}, Final count: ${uniquePdfData.length}`);

const ITEMS_PER_PAGE = 20;

// Split data into chunks
const chunks = [];
for (let i = 0; i < uniquePdfData.length; i += ITEMS_PER_PAGE) {
    chunks.push(uniquePdfData.slice(i, i + ITEMS_PER_PAGE));
}

// Save chunks as separate JSON files
chunks.forEach((chunk, index) => {
    fs.writeFileSync(
        path.join(dataDir, `page${index + 1}.json`),
        JSON.stringify(chunk)
    );
});

console.log(`Split ${uniquePdfData.length} unique items into ${chunks.length} pages`);

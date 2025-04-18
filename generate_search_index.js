const fs = require('fs');
const path = require('path');

// Import PDF data array
const pdfData = require('./pdfs.js').pdfData;

// Remove duplicates based on URL
const seen = new Set();
const uniquePdfData = pdfData.filter(pdf => {
    const isDuplicate = seen.has(pdf.link);
    seen.add(pdf.link);
    return !isDuplicate;
});

console.log(`Processing ${uniquePdfData.length} unique PDF entries...`);

// Create search index
const searchIndex = uniquePdfData.map((pdf, index) => {
    return {
        id: `pdf_${index}`,
        title: pdf.title || '',
        author: pdf.author || '',
        description: pdf.description || '',
        link: pdf.link,
        category: pdf.category || '',
        // Creating a searchable text field that combines all searchable content
        searchText: [
            pdf.title || '', 
            pdf.author || '', 
            pdf.description || '', 
            pdf.category || ''
        ].join(' ').toLowerCase()
    };
});

// Save search index
fs.writeFileSync(
    path.join('.', 'search_index.json'),
    JSON.stringify(searchIndex)
);

console.log(`Generated search index with ${searchIndex.length} entries`);

// Still generate the paginated files for browse functionality
const ITEMS_PER_PAGE = 20;

// Split data into chunks
const chunks = [];
for (let i = 0; i < uniquePdfData.length; i += ITEMS_PER_PAGE) {
    chunks.push(uniquePdfData.slice(i, i + ITEMS_PER_PAGE));
}

// Create data directory if it doesn't exist
const dataDir = 'data';
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
}

// Save chunks as separate JSON files
chunks.forEach((chunk, index) => {
    fs.writeFileSync(
        path.join(dataDir, `page${index + 1}.json`),
        JSON.stringify(chunk)
    );
});

console.log(`Split ${uniquePdfData.length} unique items into ${chunks.length} pages`);
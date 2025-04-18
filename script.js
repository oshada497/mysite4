// Global state
const INITIAL_LOAD = 40;
const LOAD_MORE_COUNT = 30;
var allPdfData = []; // Global array to store all loaded PDF data
var searchIndexData = []; // Global array to store search index
var currentPage = 1;
var loading = false;
var allDataLoaded = false;
var searchIndexLoaded = false;

// Load search index (only once)
async function loadSearchIndex() {
    if (searchIndexLoaded && searchIndexData.length > 0) {
        return searchIndexData;
    }
    
    try {
        const response = await fetch('search_index.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        searchIndexData = await response.json();
        searchIndexLoaded = true;
        console.log(`Loaded search index with ${searchIndexData.length} entries`);
        return searchIndexData;
    } catch (error) {
        console.error('Error loading search index:', error);
        // Fallback to old method if search index fails to load
        searchIndexLoaded = false;
        return [];
    }
}

async function loadPDFPage(page) {
    try {
        const response = await fetch(`data/page${page}.json`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const pageData = await response.json();
        
        // Add unique IDs to PDFs if they don't have one
        const processedData = pageData.map((pdf, idx) => {
            if (!pdf.id) {
                // Create a unique ID based on page number and index
                pdf.id = `pdf_p${page}_i${idx}`;
            }
            return pdf;
        });
        
        allPdfData = allPdfData.concat(processedData); // Add page data to global array
        return processedData;
    } catch (error) {
        console.error('Error loading PDF data:', error);
        allDataLoaded = true;
        return [];
    }
}

// Initial load of PDFs
async function initializePDFs() {
    let loadedCount = 0;
    let page = 1;

    // Start loading the search index in the background for faster searches later
    loadSearchIndex().catch(err => {
        console.warn('Failed to preload search index, will fall back to regular search:', err);
    });

    while (loadedCount < INITIAL_LOAD && !allDataLoaded) {
        const pageData = await loadPDFPage(page);
        if (pageData.length === 0) {
            allDataLoaded = true;
            break;
        }
        loadedCount += pageData.length;
        page++;
    }

    displayResults(allPdfData.slice(0, INITIAL_LOAD));
    updateLoadMoreButton();
}

function updateLoadMoreButton() {
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (!loadMoreBtn) return;

    const currentlyShown = document.querySelectorAll('.pdf-card').length;
    loadMoreBtn.style.display = allDataLoaded && currentlyShown >= allPdfData.length ? 'none' : 'block';
}

// Call initialization on page load
document.addEventListener('DOMContentLoaded', initializePDFs);

function displayResults(results) {
    const container = document.getElementById('results-container');
    if (!container) return;

    container.innerHTML = '';

    if (!Array.isArray(results) || results.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <i class="fas fa-file-pdf"></i>
                <p>No PDFs found. Try a different search term.</p>
            </div>`;
        return;
    }

    results.forEach((pdf, index) => {
        const card = document.createElement('div');
        card.className = 'pdf-card';
        card.style.cursor = 'pointer';
        
        // Make the card clickable
        card.addEventListener('click', function() {
            // Use the search index ID format if it exists, otherwise use the old format
            const pdfId = pdf.id || `pdf_${index}`;
            window.location.href = `pdfs/pdf.html?id=${pdfId}`;
        });
        
        card.innerHTML = `
            <i class="fas fa-file-pdf pdf-icon"></i>
            <h3 class="pdf-title">${pdf.title}</h3>
            ${pdf.author ? `<div class="pdf-author">by ${pdf.author}</div>` : ''}
            ${pdf.category ? `<div class="pdf-category"><span>${pdf.category}</span></div>` : ''}
            ${pdf.description ? `<p class="pdf-description">${pdf.description}</p>` : ''}
            <div class="view-details">
                <i class="fas fa-eye"></i> View Details
            </div>
        `;
        container.appendChild(card);
    });
}

async function loadMore() {
    if (loading) return;
    loading = true;

    try {
        const container = document.getElementById('all-pdfs-container');
        const currentlyShown = container.querySelectorAll('.pdf-card').length;

        // Check if we need to load more data from JSON files
        if (currentlyShown + LOAD_MORE_COUNT > allPdfData.length && !allDataLoaded) {
            currentPage++;
            if (currentPage <= 46) { // We know there are 46 JSON files
                const newData = await loadPDFPage(currentPage);
                if (newData.length === 0) {
                    allDataLoaded = true;
                }
            } else {
                allDataLoaded = true;
            }
        }

        // Get next batch of PDFs to display
        const newBatch = allPdfData.slice(currentlyShown, currentlyShown + LOAD_MORE_COUNT);

        // Add new PDF cards with animation
        newBatch.forEach((pdf, index) => {
            const card = document.createElement('div');
            card.className = 'pdf-card fade-in';
            card.style.cursor = 'pointer';
            
            // Make the card clickable
            card.addEventListener('click', function() {
                // Use the search index ID format if it exists, otherwise use the new format
                const pdfId = pdf.id || `pdf_${index}`;
                window.location.href = `pdfs/pdf.html?id=${pdfId}`;
            });

            card.innerHTML = `
                <i class="fas fa-file-pdf pdf-icon"></i>
                <h3 class="pdf-title">${pdf.title}</h3>
                ${pdf.author ? `<div class="pdf-author">by ${pdf.author}</div>` : ''}
                ${pdf.category ? `<div class="pdf-category"><span>${pdf.category}</span></div>` : ''}
                <div class="view-details">
                    <i class="fas fa-eye"></i> View Details
                </div>
            `;

            container.appendChild(card);

            // Stagger the animations
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 50);
        });

        // Hide load more button if all PDFs are shown
        const loadMoreBtn = document.getElementById('load-more-btn');
        if (loadMoreBtn) {
            if (allDataLoaded && currentlyShown + newBatch.length >= allPdfData.length) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'block';
            }
        }
    } catch (error) {
        console.error('Error in loadMore:', error);
    } finally {
        loading = false;
    }
}

// Dynamic search function
async function performSearch(query) {
    const searchQuery = query.trim().toLowerCase();
    if (!searchQuery) {
        displayResults([]);
        return;
    }

    const searchTerms = searchQuery.split(' ');
    let searching = true;

    // Show loading state
    const container = document.getElementById('results-container');
    container.innerHTML = '<div class="loading-spinner">Searching PDFs...</div>';

    // Function to check if search is still valid
    const isSearchValid = () => {
        const currentQuery = document.getElementById('search-input').value.trim().toLowerCase();
        return searching && currentQuery === searchQuery;
    };

    try {
        // First try to use the search index for faster searches
        const searchIndex = await loadSearchIndex();
        if (searchIndexLoaded && searchIndex.length > 0) {
            console.time('Search using index');
            
            // Much faster search using the pre-built index
            const results = searchIndex.filter(pdf => 
                searchTerms.every(term => pdf.searchText.includes(term))
            );
            
            console.timeEnd('Search using index');
            
            if (isSearchValid()) {
                displayResults(results);
                return;
            }
        } else {
            // Fallback to original search method if index not available
            console.log('Search index not available, using fallback method');
            const results = [];
            
            for (let page = 1; page <= 46; page++) {
                if (!isSearchValid()) break;

                try {
                    const pageData = await loadPDFPage(page);
                    if (!isSearchValid()) break;

                    const pageResults = pageData.filter(pdf =>
                        searchTerms.every(term =>
                            (pdf.title || '').toLowerCase().includes(term) ||
                            (pdf.author || '').toLowerCase().includes(term) ||
                            (pdf.description || '').toLowerCase().includes(term) ||
                            (pdf.category || '').toLowerCase().includes(term)
                        )
                    );

                    results.push(...pageResults);

                    // Update results in real-time
                    if (isSearchValid()) {
                        displayResults(results);
                    }
                } catch (error) {
                    console.error(`Error loading page ${page}:`, error);
                }
            }
            
            if (isSearchValid()) {
                displayResults(results);
            }
        }
    } finally {
        searching = false;
    }
}


function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Initialize AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: false
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Display total PDF count
    const totalPDFs = pdfData.length;
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) {
        subtitle.textContent = `Find and download PDFs through Telegram (${totalPDFs} books available)`;
    }

    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: false,
        mirror: true
    });

    // Toggle mobile menu
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.getElementById('nav-menu');

    menuIcon.addEventListener('click', function() {
        this.classList.toggle('change');
        navMenu.classList.toggle('active');
    });

    // DOM elements
    const searchInput = document.getElementById('search-input');
    const clearSearch = document.getElementById('clear-search');
    const resultsContainer = document.getElementById('results-container');
    const noResults = document.getElementById('no-results');
    const initialState = document.getElementById('initial-state');
    const resultsCount = document.getElementById('results-count');
    const allPdfsContainer = document.getElementById('all-pdfs-container');
    const categoryDisplay = document.getElementById('category-display');

    // Toggle categories on mobile
    const toggleCategories = document.getElementById('toggle-categories');
    const categoryFilter = document.getElementById('category-filter');

    toggleCategories.addEventListener('click', function() {
        categoryFilter.classList.toggle('show');
    });

    // Category filter functionality
    const categoryButtons = document.querySelectorAll('.category-btn');
    let currentCategory = 'all';

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Get selected category
            currentCategory = this.getAttribute('data-category');

            // Filter PDFs based on category
            if (searchInput.value.trim() !== '') {
                // If there's a search query, filter both by search and category
                performSearch(searchInput.value.trim());
            } else {
                // Otherwise, just filter by category
                clearResults();
                initialState.style.display = 'none';
                document.getElementById('all-pdfs-section').style.display = 'block';
                displayAllPdfs();
            }

            // Update category display
            if (currentCategory === 'all') {
                categoryDisplay.textContent = 'Showing all categories';
            } else {
                categoryDisplay.textContent = `Category: ${currentCategory}`;
            }

            // On mobile, hide the category filter after selection
            if (window.innerWidth <= 768) {
                categoryFilter.classList.remove('show');
            }
        });
    });


    // Initialize Fuse.js with search options
    const fuseOptions = {
        keys: ['title', 'author'],
        threshold: 0.4,
        distance: 100
    };
    const fuse = new Fuse(pdfData, fuseOptions);


    // Search suggestions
    async function showSuggestions(query) {
        const dropdown = document.getElementById('suggestions-dropdown');
        if (!query) {
            dropdown.classList.remove('show');
            return;
        }
        
        let suggestions = [];
        const searchQuery = query.toLowerCase();
        
        // Try to use the search index for faster suggestions
        if (searchIndexLoaded && searchIndexData.length > 0) {
            suggestions = searchIndexData
                .filter(pdf => pdf.searchText.includes(searchQuery))
                .slice(0, 8); // Limit to 8 suggestions
        } else {
            // Fallback to using allPdfData if search index isn't loaded
            suggestions = allPdfData
                .filter(pdf => {
                    const title = (pdf.title || '').toLowerCase();
                    const author = (pdf.author || '').toLowerCase();
                    const category = (pdf.category || '').toLowerCase();
                    
                    return title.includes(searchQuery) || 
                           author.includes(searchQuery) || 
                           category.includes(searchQuery);
                })
                .slice(0, 8); // Limit to 8 suggestions
        }

        if (suggestions.length === 0) {
            dropdown.classList.remove('show');
            return;
        }

        dropdown.innerHTML = suggestions.map(pdf => {
            const title = pdf.title || '';
            const category = pdf.category || '';
            const searchQuery = query.toLowerCase();
            
            // Highlight matching text
            const highlightedTitle = title.replace(new RegExp(searchQuery, 'gi'), 
                match => `<span class="highlight">${match}</span>`);

            return `
                <div class="suggestion-item" data-title="${title}">
                    <div class="suggestion-title">${highlightedTitle}</div>
                    <div class="suggestion-category">${category}</div>
                </div>
            `;
        }).join('');

        dropdown.classList.add('show');
    }

    // Handle suggestion clicks
    document.addEventListener('click', function(e) {
        const dropdown = document.getElementById('suggestions-dropdown');
        const searchBox = document.querySelector('.search-box');

        if (!searchBox.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });

    document.getElementById('suggestions-dropdown').addEventListener('click', function(e) {
        const item = e.target.closest('.suggestion-item');
        if (item) {
            const title = item.dataset.title;
            document.getElementById('search-input').value = title;
            this.classList.remove('show');
            performSearch(title);
        }
    });

    // Search input event listener
    let debounceTimeout;
    searchInput.addEventListener('input', function() {
        const query = this.value.trim();
        
        // Clear previous timeout
        clearTimeout(debounceTimeout);
        
        // Debounce suggestions
        debounceTimeout = setTimeout(async () => {
            await showSuggestions(query);
        }, 200);

        performSearch(query);
    });

    // Clear search button
    clearSearch.addEventListener('click', function() {
        searchInput.value = '';
        clearResults();
        initialState.style.display = 'block';
        clearSearch.classList.remove('visible');
        resultsCount.textContent = '';
        document.getElementById('all-pdfs-section').style.display = 'block';

        // Show category filter again
        const categoryFilterContainer = document.querySelector('.category-filter-container');
        categoryFilterContainer.classList.remove('hidden');
    });

    // Display all available PDFs in a grid
    async function displayAllPdfs() {
        // Clear existing cards
        allPdfsContainer.innerHTML = '';

        // Filter PDFs based on the current category
        const filteredPdfs = currentCategory === 'all'
            ? allPdfData // Use allPdfData here for complete data
            : allPdfData.filter(pdf => pdf.category === currentCategory);

        // Create PDF cards for filtered PDFs with proper animation sequence
        filteredPdfs.forEach((pdf, index) => {
            const card = createPdfCard(pdf, index);
            allPdfsContainer.appendChild(card);
        });

        // Show message if no PDFs in category (except "all")
        if (filteredPdfs.length === 0 && currentCategory !== 'all') {
            const noResultsElement = document.createElement('div');
            noResultsElement.className = 'no-results';
            noResultsElement.style.display = 'block';
            noResultsElement.innerHTML = `
                <i class="fas fa-file-pdf"></i>
                <p>No PDFs found in category "${currentCategory}".</p>
            `;
            allPdfsContainer.appendChild(noResultsElement);
        }
    }

    // Create a PDF card element
    function createPdfCard(pdf, index) {
        const card = document.createElement('div');
        card.className = 'pdf-card fade-in';
        // Make the entire card clickable
        card.style.cursor = 'pointer';
        
        // Add click event to navigate to PDF page
        card.addEventListener('click', function() {
            // Use the search index ID format if it exists, otherwise use the new format
            const pdfId = pdf.id || `pdf_${index}`;
            window.location.href = `pdfs/pdf.html?id=${pdfId}`;
        });

        // Use Intersection Observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        observer.observe(card);

        card.innerHTML = `
            <i class="fas fa-file-pdf pdf-icon"></i>
            <h3 class="pdf-title">${pdf.title}</h3>
            <div class="pdf-author">by ${pdf.author || 'Unknown Author'}</div>
            <div class="pdf-category"><span>${pdf.category}</span></div>
            <p class="pdf-description">${pdf.description}</p>
            <div class="view-details">
                <i class="fas fa-eye"></i> View Details
            </div>
        `;

        // Cards are now clickable - no need for download button handler

        return card;
    }

    // Clear results container
    function clearResults() {
        // Remove PDF cards only from the results container
        const resultCards = resultsContainer.querySelectorAll('.pdf-card');
        resultCards.forEach(card => card.remove());

        // Hide states
        noResults.style.display = 'none';
        initialState.style.display = 'none';
    }

    // Focus search input on page load
    setTimeout(() => {
        searchInput.focus();
    }, 500);


    // Initial load
    displayAllPdfs();

    // Update Load More button visibility
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = allDataLoaded ? 'none' : 'block';
        loadMoreBtn.addEventListener('click', async () => {
            if (!loading && !allDataLoaded) {
                await loadMore();
                loadMoreBtn.style.display = allDataLoaded ? 'none' : 'block';
            }
        });
    }
});
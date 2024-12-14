// Reference to the search form
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');

// List of pages and their keywords
const pages = [
  { name: 'products.html', keywords: ['product', 'shop', 'products'] },
  { name: 'about.html', keywords: ['about', 'info', 'about us'] },
  { name: 'courses.html', keywords:  ['patterns', 'designs', 'crochet']},
];

// Handle form submission
searchForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  const query = searchInput.value.trim().toLowerCase(); // Get the search query

  if (query) {
    // Find a matching page based on keywords
    const matchingPage = pages.find((page) =>
      page.keywords.some((keyword) => query.includes(keyword))
    );

    if (matchingPage) {
      // Redirect to the matching page
      window.location.href = matchingPage.name;
    } else {
      // Show a message if no match is found
      alert('No matching page found. Please try a different search term.');
    }
  }
});

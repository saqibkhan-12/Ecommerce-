// Example product data for the search feature
const products = [
    'Product 1',
    'Product 2',
    'Product 3',
    'Product 4',
    'Product 5',
    'Product 6',
  ];
  
  function filterProducts() {
    const searchQuery = document.querySelector('.search-input').value.toLowerCase();
    const filteredProducts = products.filter(product => product.toLowerCase().includes(searchQuery));
    const suggestionsList = document.getElementById('productSuggestions');
    suggestionsList.innerHTML = '';
  
    filteredProducts.forEach(product => {
      const listItem = document.createElement('li');
      listItem.classList.add('list-group-item');
      listItem.textContent = product;
      suggestionsList.appendChild(listItem);
    });
  }
  // Add any additional functionality or event listeners here (e.g., for smooth scrolling or lazy loading)
document.addEventListener("DOMContentLoaded", function () {
  console.log("Hero section loaded successfully!");
});
// You can add interactivity or analytics tracking here if needed.
document.addEventListener("DOMContentLoaded", function () {
  console.log("Categories section loaded successfully!");
});
// Add any functionality like dynamic content fetching here
document.addEventListener("DOMContentLoaded", function () {
  console.log("Today's Best Deals section loaded!");
});
// Add carousel interactivity or dynamic product fetching here
document.addEventListener("DOMContentLoaded", function () {
  console.log("New & Popular Products section loaded successfully!");
});
// Add form submission handling here
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".newsletter-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for subscribing to our newsletter!");
    form.reset();
  });
});
// Add interactive features if needed
document.addEventListener("DOMContentLoaded", () => {
  console.log("Footer and Features section loaded successfully.");
});
document.addEventListener("DOMContentLoaded", () => {
  console.log("Account icon moved between Contact and Wishlist.");
});
// JavaScript for Interactive Features

document.addEventListener("DOMContentLoaded", () => {
  console.log("Page Loaded: Interactive features enabled.");

  // Example: Log when a category is clicked
  const categoryItems = document.querySelectorAll(".category-item");

  categoryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const categoryName = item.querySelector("h5").textContent;
      console.log(`Category clicked: ${categoryName}`);
    });
  });
});
// JavaScript for Interactive Features

document.addEventListener("DOMContentLoaded", () => {
  console.log("Page Loaded: Interactive features enabled.");

  // Example: Log when a category is clicked
  const categoryItems = document.querySelectorAll(".category-item");

  categoryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const categoryName = item.querySelector("h5").textContent;
      console.log(`Category clicked: ${categoryName}`);
    });
  });

  // Information Section Toggle in Navbar
  const infoButton = document.querySelector("#infoButton");
  const infoSection = document.querySelector("#infoSection");

  if (infoButton && infoSection) {
    infoButton.addEventListener: We provide the export quality best decorative items to make your home beautiful. Trusted by thousands of customers worldwide.("click", () => {
      infoSection.classList.toggle("d-none");
      console.log("Info section toggled");
    });
  }

  // About Button Toggle in Navbar
  const aboutButton = document.querySelector("#aboutButton");
  const aboutSection = document.querySelector("#aboutSection");

  if (aboutButton && aboutSection) {
    aboutButton.addEventListener("click", () => {
      aboutSection.classList.toggle("d-none");
      console.log("About section toggled");
    });
  }
});
const products = [
  {
    name: "Wireless Headphones",
    category: "electronics",
    price: 2999,
    image: "images/product1.jpg",
  },
  {
    name: "Running Shoes",
    category: "clothing",
    price: 1999,
    image: "images/product2.jpg",
  },
  {
    name: "Face Cream",
    category: "cosmetics",
    price: 499,
    image: "images/product3.jpg",
  },
  {
    name: "Smart Watch",
    category: "electronics",
    price: 3999,
    image: "images/product4.jpg",
  },
  {
    name: "Lipstick Set",
    category: "cosmetics",
    price: 599,
    image: "images/product5.jpg",
  },
  {
    name: "Hoodie Jacket",
    category: "clothing",
    price: 1499,
    image: "images/product6.jpg",
  },
];

const productContainer = document.getElementById("productContainer");
const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");

function displayProducts(filteredProducts) {
  productContainer.innerHTML = "";
  filteredProducts.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="card-body">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
      </div>
    `;
    productContainer.appendChild(card);
  });
}

function applyFilters() {
  let filtered = [...products];

  const selectedCategory = categoryFilter.value;
  const selectedSort = sortFilter.value;

  if (selectedCategory !== "all") {
    filtered = filtered.filter((p) => p.category === selectedCategory);
  }

  if (selectedSort === "lowToHigh") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (selectedSort === "highToLow") {
    filtered.sort((a, b) => b.price - a.price);
  }

  displayProducts(filtered);
}

categoryFilter.addEventListener("change", applyFilters);
sortFilter.addEventListener("change", applyFilters);

// Initial load
displayProducts(products);

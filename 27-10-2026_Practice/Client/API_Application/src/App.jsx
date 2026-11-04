
import { useEffect, useMemo, useState } from "react";
import "./App.css";

const API_URL = "https://dummyjson.com";

function App() {
  // API data
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  // Search and filter states
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("default");

  // API status states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 1. Fetch products and categories from API
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError("");

        const [productResponse, categoryResponse] =
          await Promise.all([
            fetch(`${API_URL}/products?limit=0`),
            fetch(`${API_URL}/products/category-list`)
          ]);

        if (!productResponse.ok || !categoryResponse.ok) {
          throw new Error("Failed to fetch data from API");
        }

        const productData = await productResponse.json();
        const categoryData = await categoryResponse.json();

        setProducts(productData.products);
        setCategories(categoryData);

      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // 2. Search, filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search by product name, brand or description
    if (search.trim() !== "") {
      const searchText = search.toLowerCase();

      result = result.filter((product) =>
        product.title.toLowerCase().includes(searchText) ||
        product.brand?.toLowerCase().includes(searchText) ||
        product.description.toLowerCase().includes(searchText)
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Sort products
    if (sortOrder === "low-to-high") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high-to-low") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOrder === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [products, search, selectedCategory, sortOrder]);

  // 3. Reset all filters
  function resetFilters() {
    setSearch("");
    setSelectedCategory("all");
    setSortOrder("default");
  }

  // 4. Loading screen
  if (loading) {
    return (
      <div className="status-message">
        <h2>Loading products...</h2>
        <p>Please wait while we fetch the data.</p>
      </div>
    );
  }

  // 5. Error screen
  if (error) {
    return (
      <div className="status-message error">
        <h2>Something went wrong!</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>
          Try Again
        </button>
      </div>
    );
  }

  // 6. Main application UI
  return (
    <div className="app-container">

      <header className="header">
        <h1>Product Explorer</h1>
        <p>Explore products from a public REST API</p>
      </header>

      {/* Search and filter section */}
      <section className="filter-section">

        {/* Search input */}
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        {/* Category filter */}
        <select
          value={selectedCategory}
          onChange={(event) =>
            setSelectedCategory(event.target.value)
          }
        >
          <option value="all">All Categories</option>

          {categories.map((category) => (
            <option key={category} value={category}>
              {category.replaceAll("-", " ")}
            </option>
          ))}
        </select>

        {/* Sorting */}
        <select
          value={sortOrder}
          onChange={(event) => setSortOrder(event.target.value)}
        >
          <option value="default">Default Sorting</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>

        {/* Reset button */}
        <button className="reset-btn" onClick={resetFilters}>
          Reset Filters
        </button>

      </section>

      {/* Product count */}
      <div className="result-info">
        <h3>
          Showing {filteredProducts.length} products
        </h3>
      </div>

      {/* Dynamic product rendering */}
      {filteredProducts.length === 0 ? (
        <div className="empty-message">
          <h2>No products found</h2>
          <p>Try changing your search or filters.</p>
        </div>
      ) : (

        <section className="product-grid">

          {filteredProducts.map((product) => (

            <div className="product-card" key={product.id}>

              <img
                src={product.thumbnail}
                alt={product.title}
              />

              <div className="product-details">

                <span className="category">
                  {product.category.replaceAll("-", " ")}
                </span>

                <h3>{product.title}</h3>

                <p className="description">
                  {product.description}
                </p>

                <div className="product-info">
                  <h3>${product.price.toFixed(2)}</h3>
                  <span>⭐ {product.rating}</span>
                </div>

                <p className="brand">
                  Brand: {product.brand || "Not available"}
                </p>

                <p className="stock">
                  Stock: {product.stock}
                </p>

              </div>

            </div>

          ))}

        </section>
      )}

    </div>
  );
}

export default App;

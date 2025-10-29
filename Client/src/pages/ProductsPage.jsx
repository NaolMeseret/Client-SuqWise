import React, { useState } from "react"
import data from "../assets/data.json"
import ProductCard from "../components/product/ProductCard"

const ProductsPage = () => {
  const allProducts = data.stores.flatMap((store) =>
    store.products.map((product) => ({
      ...product,
      storeName: store.name,
      storeId: store.id,
    }))
  )

  const [filteredProducts, setFilteredProducts] = useState(allProducts)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedStore, setSelectedStore] = useState("all")
  const [sortBy, setSortBy] = useState("featured")

  const categories = [
    "all",
    ...new Set(allProducts.map((product) => product.category)),
  ]
  const stores = ["all", ...new Set(allProducts.map((product) => product.name))]

  const filterProducts = (category, store, sort) => {
    let filtered = allProducts

    if (category !== "all") {
      filtered = filtered.filter((product) => product.category === category)
    }

    if (store !== "all") {
      filtered = filtered.filter((product) => product.storeName === store)
    }

    // Sort products
    if (sort === "price-low") {
      filtered.sort((a, b) => a.price - b.price)
    } else if (sort === "price-high") {
      filtered.sort((a, b) => b.price - a.price)
    } else if (sort === "rating") {
      filtered.sort((a, b) => b.rating - a.rating)
    }

    setFilteredProducts(filtered)
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    filterProducts(category, selectedStore, sortBy)
  }

  const handleStoreChange = (store) => {
    setSelectedStore(store)
    filterProducts(selectedCategory, store, sortBy)
  }

  const handleSortChange = (sort) => {
    setSortBy(sort)
    filterProducts(selectedCategory, selectedStore, sort)
  }

  return (
    <div className="amazon-products-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <h1 className="page-title">All Products</h1>
          <p className="page-subtitle">
            Browse through our complete collection of {allProducts.length}{" "}
            products from all stores
          </p>
        </div>

        {/* Filters and Sort */}
        <div className="products-controls">
          <div className="filters-section">
            <div className="filter-group">
              <strong>Category: </strong>
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="filter-select"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <strong>Store: </strong>
              <select
                value={selectedStore}
                onChange={(e) => handleStoreChange(e.target.value)}
                className="filter-select"
              >
                {stores.map((store) => (
                  <option key={store} value={store}>
                    {store}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="sort-section">
            <strong>Sort by: </strong>
            <select
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value)}
              className="sort-select"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Customer Rating</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="results-info">
          <p>
            Showing {filteredProducts.length} of {allProducts.length} products
            {selectedCategory !== "all" && ` in "${selectedCategory}"`}
            {selectedStore !== "all" && ` from "${selectedStore}"`}
          </p>
        </div>

        {/* Products Grid */}
        <div className="amazon-products-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={`${product.storeId}-${product.base_product_id}`}
              product={product}
              storeName={product.storeName}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="empty-state">
            <div className="empty-state-icon">😔</div>
            <h3>No products found</h3>
            <p>Try adjusting your filters to see more products.</p>
            <button
              className="btn-clear-filters"
              onClick={() => {
                setSelectedCategory("all")
                setSelectedStore("all")
                setSortBy("featured")
                filterProducts("all", "all", "featured")
              }}
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductsPage

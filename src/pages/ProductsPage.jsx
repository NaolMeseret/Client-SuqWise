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

  const categories = [
    "all",
    ...new Set(allProducts.map((product) => product.category)),
  ]
  const stores = [
    "all",
    ...new Set(allProducts.map((product) => product.storeName)),
  ]

  const filterProducts = (category, store) => {
    let filtered = allProducts

    if (category !== "all") {
      filtered = filtered.filter((product) => product.category === category)
    }

    if (store !== "all") {
      filtered = filtered.filter((product) => product.storeName === store)
    }

    setFilteredProducts(filtered)
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    filterProducts(category, selectedStore)
  }

  const handleStoreChange = (store) => {
    setSelectedStore(store)
    filterProducts(selectedCategory, store)
  }

  return (
    <div className="section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">All Products</h1>
          <p className="section-subtitle">
            Browse through our complete collection of products from all stores
          </p>
        </div>

        <div className="filters">
          <div>
            <strong>Category: </strong>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`filter-btn ${
                  selectedCategory === category ? "active" : ""
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div>
            <strong>Store: </strong>
            {stores.map((store) => (
              <button
                key={store}
                onClick={() => handleStoreChange(store)}
                className={`filter-btn ${
                  selectedStore === store ? "active" : ""
                }`}
              >
                {store}
              </button>
            ))}
          </div>
        </div>

        <p
          style={{
            textAlign: "center",
            color: "#7f8c8d",
            marginBottom: "2rem",
          }}
        >
          Showing {filteredProducts.length} products
          {selectedCategory !== "all" && ` in ${selectedCategory}`}
          {selectedStore !== "all" && ` from ${selectedStore}`}
        </p>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={`${product.storeId}-${product.base_product_id}`}
              product={product}
              storeName={product.storeName}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="empty-state">
            <div className="empty-state-icon">😔</div>
            <h3>No products found</h3>
            <p>Try adjusting your filters to see more products.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductsPage

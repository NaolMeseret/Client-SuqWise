import React from "react"
import { useParams, Link } from "react-router-dom"
import data from "../assets/data.json"
import ProductCard from "../components/product/ProductCard"

const StoreDetailPage = () => {
  const { storeId } = useParams()
  const store = data.stores.find((s) => s.id === parseInt(storeId))

  if (!store) {
    return (
      <div className="amazon-store-detail">
        <div className="container">
          <div className="empty-state">
            <div className="empty-state-icon">🏪</div>
            <h3>Store not found</h3>
            <p>The store you're looking for doesn't exist.</p>
            <Link to="/stores" className="btn-primary">
              Back to Stores
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const avgRating =
    store.products.reduce((acc, product) => acc + product.rating, 0) /
    store.products.length
  const minDelivery = Math.min(...store.products.map((p) => p.deliveryDays))
  const categories = [...new Set(store.products.map((p) => p.category))]

  return (
    <div className="amazon-store-detail">
      <div className="container">
        {/* Store Header */}
        <div className="store-hero">
          <div className="store-info">
            <h1 className="store-title">🏪 {store.name}</h1>
            <p className="store-description">
              Trusted seller with {store.products.length} quality products and
              excellent customer service
            </p>

            <div className="store-stats">
              <div className="stat">
                <span className="stat-value">⭐ {avgRating.toFixed(1)}</span>
                <span className="stat-label">Average Rating</span>
              </div>
              <div className="stat">
                <span className="stat-value">{store.products.length}</span>
                <span className="stat-label">Products</span>
              </div>
              <div className="stat">
                <span className="stat-value">{categories.length}</span>
                <span className="stat-label">Categories</span>
              </div>
              <div className="stat">
                <span className="stat-value">🚚 {minDelivery}d</span>
                <span className="stat-label">Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Store Categories */}
        <div className="store-categories">
          <h3>Shop by Category</h3>
          <div className="categories-grid">
            {categories.map((category) => (
              <div key={category} className="category-tag">
                {category}
              </div>
            ))}
          </div>
        </div>

        {/* All Store Products */}
        <div className="store-products-section">
          <div className="section-header">
            <h2>All Products from {store.name}</h2>
            <p>
              Browse the complete collection of {store.products.length} products
            </p>
          </div>

          <div className="amazon-products-grid">
            {store.products.map((product) => (
              <ProductCard
                key={product.base_product_id}
                product={product}
                storeName={store.name}
              />
            ))}
          </div>
        </div>

        {/* Back to Products */}
        <div className="navigation-links">
          <Link to="/products" className="back-link">
            ← Back to All Products
          </Link>
          <Link to="/stores" className="back-link">
            ← Back to All Stores
          </Link>
        </div>
      </div>
    </div>
  )
}

export default StoreDetailPage

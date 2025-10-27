import React from "react"
import { useParams, Link } from "react-router-dom"
import data from "../assets/data.json"
import ProductCard from "../components/product/ProductCard"

const StoreDetailPage = () => {
  const { storeId } = useParams()
  const store = data.stores.find((s) => s.id === parseInt(storeId))

  if (!store) {
    return (
      <div className="section">
        <div className="container">
          <div className="empty-state">
            <div className="empty-state-icon">🏪</div>
            <h3>Store not found</h3>
            <p>The store you're looking for doesn't exist.</p>
            <Link to="/stores" className="btn btn-primary">
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
    <div className="section">
      <div className="container">
        <div className="store-section">
          <div className="store-header">
            <div>
              <h1 className="store-title">🏪 {store.name}</h1>
              <p style={{ color: "#7f8c8d", marginTop: "0.5rem" }}>
                Trusted seller with {store.products.length} quality products
              </p>
            </div>
            <div style={{ textAlign: "right" }}>
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "#3498db",
                }}
              >
                ⭐ {avgRating.toFixed(1)}
              </div>
              <div style={{ color: "#7f8c8d" }}>Average Rating</div>
            </div>
          </div>

          <div
            className="store-card-highlights"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            }}
          >
            <div className="highlight-item">
              <span className="highlight-value">{store.products.length}</span>
              <span className="highlight-label">Total Products</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-value">{categories.length}</span>
              <span className="highlight-label">Categories</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-value">🚚 {minDelivery}d</span>
              <span className="highlight-label">Fastest Delivery</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-value">⭐ {avgRating.toFixed(1)}</span>
              <span className="highlight-label">Avg Rating</span>
            </div>
          </div>

          <div style={{ marginTop: "2rem" }}>
            <h3 style={{ marginBottom: "1rem", color: "#2c3e50" }}>
              Product Categories
            </h3>
            <div className="filters">
              {categories.map((category) => (
                <span key={category} className="filter-btn">
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="products-grid">
          {store.products.map((product) => (
            <ProductCard
              key={product.base_product_id}
              product={product}
              storeName={store.name}
            />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link to="/products" className="btn btn-primary">
            ← Back to All Products
          </Link>
        </div>
      </div>
    </div>
  )
}

export default StoreDetailPage

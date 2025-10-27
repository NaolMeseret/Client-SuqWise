import React from "react"
import { Link } from "react-router-dom"
import data from "../assets/data.json"
import StoreSection from "../components/product/StoreSection"

const HomePage = () => {
  const allProducts = data.stores.flatMap((store) => store.products)
  // const featuredProducts = allProducts.slice(0, 6)
  const totalProducts = allProducts.length
  const totalStores = data.stores.length

  return (
    <div className="app">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to SuqWise</h1>
          <p className="hero-subtitle">
            Discover amazing products from trusted stores. Shop with confidence
            with our verified sellers and fast delivery.
          </p>
          <Link to="/products" className="hero-btn">
            🛍️ Start Shopping
          </Link>
        </div>
      </section>

      <section className="section" style={{ background: "#f8f9fa" }}>
        <div className="container">
          <div className="stores-grid">
            <div className="store-card">
              <div className="store-card-header">
                <div className="store-card-name">Marketplace Overview</div>
              </div>
              <p>
                Your one-stop destination for quality products from verified
                stores
              </p>
              <div className="store-card-highlights">
                <div className="highlight-item">
                  <span className="highlight-value">{totalStores}</span>
                  <span className="highlight-label">Stores</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-value">{totalProducts}</span>
                  <span className="highlight-label">Products</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-value">⭐ 4.7</span>
                  <span className="highlight-label">Rating</span>
                </div>
              </div>
            </div>

            {data.stores.map((store) => (
              <Link
                to={`/store/${store.id}`}
                key={store.id}
                className="store-card"
              >
                <div className="store-card-header">
                  <div className="store-card-name">{store.name}</div>
                  <div className="store-card-products">
                    {store.products.length} products
                  </div>
                </div>
                <p>
                  Featured products:{" "}
                  {store.products
                    .map((p) => p.category)
                    .slice(0, 3)
                    .join(", ")}
                </p>
                <div className="store-card-highlights">
                  <div className="highlight-item">
                    <span className="highlight-value">
                      ⭐{" "}
                      {Math.max(...store.products.map((p) => p.rating)).toFixed(
                        1
                      )}
                    </span>
                    <span className="highlight-label">Top Rated</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-value">
                      🚚{" "}
                      {Math.min(...store.products.map((p) => p.deliveryDays))}d
                    </span>
                    <span className="highlight-label">Fast Delivery</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Stores</h2>
            <p className="section-subtitle">
              Explore products from our verified stores with excellent ratings
              and fast delivery
            </p>
          </div>

          {data.stores.map((store) => (
            <StoreSection key={store.id} store={store} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage

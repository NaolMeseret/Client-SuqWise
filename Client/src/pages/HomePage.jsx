import React from "react"
import { Link } from "react-router-dom"
import data from "../assets/data.json"
import ProductGrid from "../components/product/ProductGrid"
import "./HomePage.css"

const HomePage = () => {
  // Get all products from all stores
  const allProducts = data.stores.flatMap((store) =>
    store.products.map((product) => ({
      ...product,
      storeName: store.name,
    }))
  )

  return (
    <div className="homepage">
      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <h2>Featured Products</h2>
            <Link to="/products" className="view-all-link">
              View All Products →
            </Link>
          </div>
          <ProductGrid products={allProducts} />
        </div>
      </section>

      {/* Stores Section */}
      <section className="stores-section">
        <div className="container">
          <h2>Our Stores</h2>
          <div className="stores-grid">
            {data.stores.map((store) => (
              <div key={store.id} className="store-card">
                <h3>{store.name}</h3>
                <p>{store.products.length} products</p>
                <Link to={`/store/${store.id}`} className="store-link">
                  Visit Store
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

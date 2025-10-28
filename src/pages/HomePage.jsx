import React from "react"
import { Link } from "react-router-dom"
import data from "../assets/data.json"
import StoreSection from "../components/product/StoreSection"

const HomePage = () => {
  const allProducts = data.stores.flatMap((store) => store.products)
  const totalProducts = allProducts.length
  const totalStores = data.stores.length

  // Amazon-style category sections
  const categorySections = [
    {
      title: "Shop holiday gift guides",
      items: [
        "Get your game on",
        "Shop Fashion for less",
        "Tears under $50",
        "Taps under $25",
        "Dresses under $30",
        "Shoes under $50",
      ],
      seeAll: true,
    },
    {
      title: "Shop for your home essentials",
      items: [
        "Cleaning Tools",
        "Home Storage",
        "Home Decor",
        "Bedding",
        "Kitchen & Dining",
        "Home Improvement",
      ],
      seeAll: true,
    },
    {
      title: "Gear up to get fit",
      items: [
        "Trackers",
        "Makersp",
        "Brushes",
        "Equipment",
        "Deals",
        "Sponges",
        "Mirrors",
      ],
      seeAll: true,
    },
    {
      title: "Wireless Tech",
      items: ["Smartphones", "Watches", "Headphones", "Tablets"],
      seeAll: true,
    },
    {
      title: "Level up your gaming",
      items: ["PC gaming", "Xbox", "PlayStation", "Nintendo Switch"],
      seeAll: false,
    },
  ]

  return (
    <div className="amazon-home">
      {/* Hero Section */}
      <section className="amazon-hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to SuqWise</h1>
          <p className="hero-subtitle">
            Discover amazing products from {totalStores} trusted stores with{" "}
            {totalProducts} quality items
          </p>
          <div className="hero-actions">
            <Link to="/products" className="hero-btn">
              🛍️ Start Shopping
            </Link>
            <Link to="/stores" className="hero-btn secondary">
              🏪 Explore Stores
            </Link>
          </div>
        </div>
      </section>

      {/* Category Grid Sections */}
      {categorySections.map((section, index) => (
        <section key={index} className="category-section">
          <div className="container">
            <h2 className="section-title">{section.title}</h2>
            <div className="category-grid">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="category-card">
                  <div className="category-icon">🛍️</div>
                  <span className="category-name">{item}</span>
                </div>
              ))}
              {section.seeAll && (
                <div className="category-card see-all">
                  <span className="see-all-text">See all deals</span>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Personalized Recommendations */}
      <section className="recommendations-section">
        <div className="container">
          <h2 className="section-title">See personalized recommendations</h2>
          <div className="sign-in-prompt">
            <button className="sign-in-btn">Sign in</button>
            <p className="new-customer">New customer? Start here.</p>
          </div>
        </div>
      </section>

      {/* Featured Stores - Amazon Style */}
      <section className="featured-stores-section">
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

      {/* Best Sellers Section */}
      <section className="bestsellers-section">
        <div className="container">
          <h2 className="section-title">Best Sellers in Books</h2>
          <div className="bestsellers-grid">
            {allProducts.slice(0, 6).map((product, index) => (
              <div key={index} className="bestseller-card">
                <div className="bestseller-rank">{index + 1}</div>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="bestseller-image"
                />
                <h3 className="bestseller-title">{product.title}</h3>
                <div className="bestseller-price">${product.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

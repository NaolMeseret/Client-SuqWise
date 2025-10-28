import React from "react"
import { Link, useLocation } from "react-router-dom"

const Header = () => {
  const location = useLocation()

  return (
    <header className="amazon-header">
      {/* Top Header */}
      <div className="header-top">
        <div className="header-top-left">
          <Link to="/" className="logo">
            🛍️ SuqWise
          </Link>
          <div className="delivery-location">
            <span className="delivery-to">Deliver to</span>
            <span className="location">📍 Ethiopia</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="search-container">
          <div className="search-select">
            <select>
              <option>All</option>
              <option>Products</option>
              <option>Stores</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="Search SuqWise"
            className="search-input"
          />
          <button className="search-btn">🔍</button>
        </div>

        <div className="header-top-right">
          <div className="header-account">
            <span className="account-label">EN</span>
            <span className="account-text">Account & Lists</span>
          </div>
          <div className="header-returns">
            <span className="returns-label">Returns</span>
            <span className="returns-text">& Orders</span>
          </div>
          <div className="header-cart">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">3</span>
            <span className="cart-text">Cart</span>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="header-nav">
        <div className="nav-left">
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          >
            All
          </Link>
          <Link
            to="/products"
            className={`nav-link ${
              location.pathname === "/products" ? "active" : ""
            }`}
          >
            Today's Deals
          </Link>
          <Link to="/stores" className="nav-link">
            Registry
          </Link>
          <Link to="/prime" className="nav-link">
            Prime Video
          </Link>
          <Link to="/gift-cards" className="nav-link">
            Gift Cards
          </Link>
          <Link to="/customer-service" className="nav-link">
            Customer Service
          </Link>
          <Link to="/sell" className="nav-link">
            Sell
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header

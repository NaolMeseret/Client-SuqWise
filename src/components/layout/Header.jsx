import React from "react"
import { Link, useLocation } from "react-router-dom"
import "../layout/header.css"

const Header = () => {
  const location = useLocation()

  return (
    <header className="ecom-header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="brand">
              <span className="brand-name">SuqWise Shop</span>
              <span className="brand-tagline">Sleeping Mode Easy</span>
            </div>
            <div className="top-bar-actions">
              <button className="auth-btn">Login</button>
              <button className="auth-btn">Register</button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="main-nav">
        <div className="container">
          <div className="nav-content">
            {/* Categories Sidebar */}
            <div className="categories-sidebar">
              <button className="categories-toggle">
                <span className="toggle-icon">☰</span>
                <span>CATEGORIES</span>
              </button>

              <div className="categories-menu">
                <Link
                  to="/"
                  className={`category-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                >
                  HOME
                </Link>
                <Link to="/about" className="category-link">
                  ABOUT US
                </Link>
                <Link to="/men" className="category-link">
                  MEN
                </Link>
                <Link to="/women" className="category-link">
                  WOMEN
                </Link>
                <Link to="/electronics" className="category-link">
                  ELECTRONIC
                </Link>
                <Link to="/contact" className="category-link">
                  CONTACT US
                </Link>
              </div>
            </div>

            {/* Search Bar */}
            <div className="search-container">
              <input
                type="text"
                placeholder="Search products..."
                className="search-input"
              />
              <button className="search-btn">🔍</button>
            </div>

            {/* Cart & Actions */}
            <div className="nav-actions">
              <button className="nav-action-btn">
                <span className="action-icon">❤️</span>
                <span className="action-text">Wishlist</span>
              </button>
              <button className="nav-action-btn">
                <span className="action-icon">🛒</span>
                <span className="action-text">Cart</span>
                <span className="cart-count">0</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

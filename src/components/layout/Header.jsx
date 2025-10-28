import React from "react"
import { Link, useLocation } from "react-router-dom"
import "../../styles/header.css"
const Header = () => {
  const location = useLocation()

  return (
    <header className="ecom-header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="brand">
              <span className="brand-name">E-Com Shop</span>
              <span className="brand-tagline">Sleeping Mode Easy</span>
            </div>
            <div className="top-bar-actions">
              <Link to="/login" className="auth-btn">
                Login
              </Link>
              <Link to="/register" className="auth-btn">
                Register
              </Link>
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
              <Link to="/wishlist" className="nav-action-btn">
                <span className="action-icon">❤️</span>
                <span className="action-text">Wishlist</span>
              </Link>
              <Link to="/cart" className="nav-action-btn">
                <span className="action-icon">🛒</span>
                <span className="action-text">Cart</span>
                <span className="cart-count">0</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

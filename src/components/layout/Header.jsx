import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "../../styles/header.css"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="modern-header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="welcome-text">
              Welcome to our store! Free shipping on orders over $50
            </div>
            <div className="top-links">
              <Link to="/track-order">Track Order</Link>
              <Link to="/support">Support</Link>
              <div className="language-currency">
                <select className="lang-select">
                  <option>EN</option>
                  <option>Amharic</option>
                  <option>Afaan Oromoo</option>
                </select>
                <select className="currency-select">
                  <option>USD</option>
                  <option>Birr</option>
                  <option>EUR</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <Link to="/" className="logo">
              <div className="logo-icon">🛍️</div>
              <span className="logo-text">SuqWise</span>
            </Link>

            {/* Search Bar */}
            <div className="search-section">
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="search-input"
                />
                <button className="search-btn">
                  <span className="search-icon">🔍</span>
                  Search
                </button>
              </div>
            </div>

            {/* Header Actions */}
            <div className="header-actions">
              <Link to="/wishlist" className="action-item">
                <span className="action-icon">❤️</span>
                <span className="action-text">Wishlist</span>
              </Link>

              <Link to="/account" className="action-item">
                <span className="action-icon">👤</span>
                <span className="action-text">Account</span>
              </Link>

              <Link to="/cart" className="action-item cart-item">
                <span className="action-icon">🛒</span>
                <span className="action-text">Cart</span>
                <span className="cart-badge">3</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="main-navigation">
        <div className="container">
          <div className="nav-content">
            <div className="categories-dropdown">
              <button className="categories-btn">
                <span className="menu-icon">☰</span>
                All Categories
                <span className="dropdown-arrow">▼</span>
              </button>
              <div className="categories-menu">
                <Link to="/men" className="category-link">
                  Men's Fashion
                </Link>
                <Link to="/women" className="category-link">
                  Women's Fashion
                </Link>
                <Link to="/electronics" className="category-link">
                  Electronics
                </Link>
                <Link to="/home" className="category-link">
                  Home & Garden
                </Link>
                <Link to="/sports" className="category-link">
                  Sports & Outdoors
                </Link>
                <Link to="/beauty" className="category-link">
                  Beauty & Health
                </Link>
              </div>
            </div>

            <div className="nav-links">
              <Link
                to="/"
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
              >
                Home
              </Link>
              <Link to="/shop" className="nav-link">
                Shop
              </Link>
              <Link to="/deals" className="nav-link hot-deal">
                Hot Deals
              </Link>
              <Link to="/new" className="nav-link">
                New Arrivals
              </Link>
              <Link to="/brands" className="nav-link">
                Brands
              </Link>
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-content">
          <Link to="/" className="mobile-nav-link">
            Home
          </Link>
          <Link to="/shop" className="mobile-nav-link">
            Shop
          </Link>
          <Link to="/deals" className="mobile-nav-link">
            Hot Deals
          </Link>
          <Link to="/new" className="mobile-nav-link">
            New Arrivals
          </Link>
          <Link to="/account" className="mobile-nav-link">
            Account
          </Link>
          <Link to="/wishlist" className="mobile-nav-link">
            Wishlist
          </Link>
          <Link to="/cart" className="mobile-nav-link">
            Cart
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header

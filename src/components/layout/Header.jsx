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
                  <span className="search-icon">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    </svg>
                  </span>
                  Search
                </button>
              </div>
            </div>

            {/* Header Actions */}
            <div className="header-actions">
              <Link to="/wishlist" className="action-item">
                <span className="action-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
                  </svg>
                </span>
                <span className="action-text">Wishlist</span>
              </Link>

              <Link to="/account" className="action-item">
                <span className="action-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </span>
                <span className="action-text">Account</span>
              </Link>

              <Link to="/cart" className="action-item cart-item">
                <span className="action-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                </span>
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
                <span className="menu-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                  </svg>
                </span>
                All Categories
                <span className="dropdown-arrow">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                </span>
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

import React from "react"
import { Link, useLocation } from "react-router-dom"

const Header = () => {
  const location = useLocation()

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          🛍️ SuqWise-Ecommerce
        </Link>

        <nav className="nav">
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/products"
            className={`nav-link ${
              location.pathname === "/products" ? "active" : ""
            }`}
          >
            All Products
          </Link>
          <Link
            to="/stores"
            className={`nav-link ${
              location.pathname === "/stores" ? "active" : ""
            }`}
          >
            Stores
          </Link>
        </nav>

        <div className="header-actions">
          <button className="cart-btn" title="Shopping Cart">
            <span className="cart-count">3</span>
          </button>
          <button className="btn btn-secondary">👤 Login</button>
        </div>
      </div>
    </header>
  )
}

export default Header

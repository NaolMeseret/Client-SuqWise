import React from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import Hero from "./components/layout/Hero"
import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"
import StoreDetailPage from "./pages/StoreDetailPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import ProductDetailPage from "./components/product/ProductDetailPage"
import "./styles/main.css"

import SearchResults from "./pages/SearchResults"

// In your routes
function App() {
  const location = useLocation()

  // Hide Hero on product detail pages
  const showHero = !(
    location.pathname.startsWith("/product/") ||
    location.pathname.startsWith("/account")
  )

  return (
    <div className="app">
      <Header />
      {showHero && <Hero />}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/account" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/store/:storeId" element={<StoreDetailPage />} />
          <Route path="/stores" element={<HomePage />} />
          <Route path="/men" element={<ProductsPage category="men" />} />
          <Route path="/women" element={<ProductsPage category="women" />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/search" element={<SearchResults />} />
          <Route
            path="/electronics"
            element={<ProductsPage category="electronics" />}
          />
          <Route path="/shop-men" element={<ProductsPage category="men" />} />
          <Route
            path="/shop-women"
            element={<ProductsPage category="women" />}
          />
          <Route path="/sale" element={<ProductsPage category="sale" />} />
          <Route
            path="/wishlist"
            element={<ProductsPage category="wishlist" />}
          />
          <Route path="/cart" element={<ProductsPage category="cart" />} />
          <Route path="/about" element={<HomePage />} />
          <Route path="/contact" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

import React from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import Hero from "./components/layout/Hero"
import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"
import StoreDetailPage from "./pages/StoreDetailPage"
import "./styles/main.css"

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/store/:storeId" element={<StoreDetailPage />} />
          <Route path="/stores" element={<HomePage />} />
          <Route path="/men" element={<ProductsPage category="men" />} />
          <Route path="/women" element={<ProductsPage category="women" />} />
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
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

import React from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"
import StoreDetailPage from "./pages/StoreDetailPage"
import "./styles/main.css"
import Hero from "./components/layout/Hero"

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
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

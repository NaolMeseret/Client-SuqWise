import React from "react"
import ProductCard from "./ProductCard"
import "./ProductGrid.css"

const ProductGrid = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={`${product.base_product_id}-${product.storeName}`}
          product={product}
        />
      ))}
    </div>
  )
}

export default ProductGrid

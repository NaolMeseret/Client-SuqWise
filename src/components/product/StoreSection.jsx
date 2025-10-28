import React from "react"
import ProductCard from "./ProductCard"

const StoreSection = ({ store }) => {
  return (
    <div className="amazon-store-section">
      <div className="store-header">
        <h2 className="store-title">
          🏪 {store.name}
          <span className="store-badge">{store.products.length} products</span>
        </h2>
        <a href="#" className="store-view-all">
          View all products →
        </a>
      </div>

      <div className="amazon-products-grid">
        {store.products.map((product) => (
          <ProductCard
            key={`${store.id}-${product.base_product_id}`}
            product={product}
            storeName={store.name}
          />
        ))}
      </div>
    </div>
  )
}

export default StoreSection

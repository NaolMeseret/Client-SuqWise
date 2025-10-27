import React from "react"
import ProductCard from "./ProductCard"

const StoreSection = ({ store }) => {
  return (
    <div className="store-section">
      <div className="store-header">
        <h2 className="store-title">
          🏪 {store.name}
          <span className="store-badge">{store.products.length} products</span>
        </h2>
      </div>

      <div className="products-grid">
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

import React from "react"
import { useNavigate } from "react-router-dom"
import "./ProductCard.css"

const ProductCard = ({ product }) => {
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate(`/product/${product.base_product_id}`)
  }

  return (
    <div
      className="product-card"
      onClick={handleCardClick}
      title={product.title} // Tooltip on hover
    >
      <div className="product-image-container">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-image"
        />
        <div className="product-overlay">
          <span className="view-details-text">View Details</span>
        </div>
      </div>

      <div className="product-info">
        <div className="product-price">${product.price}</div>
        <div className="product-title-tooltip">{product.title}</div>
      </div>
    </div>
  )
}

export default ProductCard

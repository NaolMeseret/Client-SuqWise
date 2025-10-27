import React, { useState } from "react"
import { Link } from "react-router-dom"
import Rating from "../common/Rating"

const ProductCard = ({ product, storeName }) => {
  const [showDetails, setShowDetails] = useState(false)

  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-image"
        />
        <span className="product-badge">{product.availability}</span>
      </div>

      <h3 className="product-title">{product.title}</h3>
      <p className="product-category">{product.category}</p>

      <div className="product-info-compact">
        <Rating rating={product.rating} />
        <p className="product-price">${product.price}</p>
        <p className="product-delivery">🚚 {product.deliveryDays} days</p>
      </div>

      {storeName && (
        <p className="store-info">
          Sold by: <strong>{storeName}</strong>
        </p>
      )}

      <div className="product-actions">
        <button className="btn btn-success btn-full">🛒 Add to Cart</button>
        <button
          className="btn btn-secondary btn-details"
          onClick={toggleDetails}
        >
          {showDetails ? "▲ Hide" : "▼ Details"}
        </button>
      </div>

      {/* Expandable Details Section */}
      <div className={`product-details ${showDetails ? "expanded" : ""}`}>
        {product.reviews && product.reviews.length > 0 && (
          <div className="reviews-section">
            <h4 className="reviews-title">💬 Recent Reviews</h4>
            {product.reviews.slice(0, 2).map((review, index) => (
              <div key={index} className="review">
                <div className="review-header">
                  <span className="review-user">{review.user}</span>
                  <Rating
                    rating={review.rating}
                    showValue={false}
                    size="small"
                  />
                </div>
                <p className="review-comment">{review.comment}</p>
              </div>
            ))}
          </div>
        )}

        <div className="additional-actions">
          <Link
            to={`/product/${product.base_product_id}`}
            className="btn btn-primary btn-full"
          >
            📖 View Full Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

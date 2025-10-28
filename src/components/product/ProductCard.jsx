import React, { useState } from "react"
import { Link } from "react-router-dom"
import Rating from "../common/Rating"

const ProductCard = ({ product, storeName }) => {
  const [showDetails, setShowDetails] = useState(false)

  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }

  return (
    <div className="amazon-product-card">
      <div className="product-image-container">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-image"
        />
        <span className="product-badge">{product.availability}</span>
      </div>

      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-category">{product.category}</p>

        <div className="product-rating-price">
          <Rating rating={product.rating} showValue={true} />
          <p className="product-price">${product.price}</p>
        </div>

        <p className="product-delivery">
          🚚 FREE delivery in {product.deliveryDays} days
        </p>

        {storeName && (
          <p className="store-info">
            Sold by: <strong>{storeName}</strong>
          </p>
        )}

        <div className="product-actions">
          <button className="btn-add-to-cart">Add to Cart</button>
          <button className="btn-buy-now">Buy Now</button>
          <button className="btn-details" onClick={toggleDetails}>
            {showDetails ? "▲ Hide" : "▼"} Details
          </button>
        </div>

        {/* Amazon-style Expandable Details */}
        <div className={`product-details ${showDetails ? "expanded" : ""}`}>
          {product.reviews && product.reviews.length > 0 && (
            <div className="reviews-section">
              <h4 className="reviews-title">Customer Reviews</h4>
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

          <div className="additional-info">
            <p>
              <strong>Category:</strong> {product.category}
            </p>
            <p>
              <strong>Delivery:</strong> {product.deliveryDays} days
            </p>
            <p>
              <strong>Availability:</strong> {product.availability}
            </p>
          </div>

          <div className="product-links">
            <Link
              to={`/product/${product.base_product_id}`}
              className="view-details-link"
            >
              View full product details
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

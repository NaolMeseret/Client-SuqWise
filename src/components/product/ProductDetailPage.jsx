import React, { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import Rating from "../common/Rating"
import data from "../../assets/data.json"
import "./ProductDetailPage.css"

const ProductDetailPage = () => {
  const { productId } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const findProduct = () => {
      for (const store of data.stores) {
        const foundProduct = store.products.find(
          (p) => p.base_product_id === parseInt(productId)
        )
        if (foundProduct) {
          return {
            ...foundProduct,
            store: store,
          }
        }
      }
      return null
    }

    const foundProduct = findProduct()
    setProduct(foundProduct)
    setLoading(false)
  }, [productId])

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.title} to cart`)
    // Add to cart logic here
  }

  const handleBuyNow = () => {
    console.log(`Buying ${quantity} of ${product.title}`)
    // Buy now logic here
  }

  if (loading) {
    return (
      <div className="product-detail-container">
        <div className="loading">Loading...</div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="product-detail-container">
        <div className="not-found">
          <h2>Product not found</h2>
          <button onClick={() => navigate("/")} className="btn-back">
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  const images = product.images || [product.thumbnail]

  return (
    <div className="product-detail-container">
      <div className="breadcrumb">
        <Link to="/">Home</Link> &gt;
        <span>{product.store?.name || "Store"}</span> &gt;
        <span>{product.category}</span> &gt;
        <span>{product.title}</span>
      </div>

      <div className="product-detail-content">
        {/* Product Images */}
        <div className="product-images-section">
          <div className="image-gallery">
            <div className="main-image">
              <img src={images[selectedImage]} alt={product.title} />
            </div>
            <div className="thumbnail-images">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.title} ${index + 1}`}
                  className={selectedImage === index ? "active" : ""}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="product-info-section">
          <h1 className="product-title">{product.title}</h1>

          <div className="product-rating-overview">
            <Rating
              rating={product.rating}
              showValue={true}
              size="large"
              reviewCount={product.reviews?.length}
            />
            <span className="rating-link">
              {product.reviews?.length || 0} customer reviews
            </span>
          </div>

          {/* <div className="product-price-section">
            <span className="price">${product.price}</span>
            <span className="shipping">
              FREE delivery in {product.deliveryDays} days
            </span>
          </div> */}

          <div className="product-description">
            <p>
              {product.description ||
                "High-quality product with excellent features and performance."}
            </p>
          </div>

          <div className="product-specs">
            <h3>Specifications</h3>
            <ul>
              <li>
                <strong>Category:</strong> {product.category}
              </li>
              <li>
                <strong>Availability:</strong> {product.availability}
              </li>
              <li>
                <strong>Brand:</strong> {product.brand || "Premium Brand"}
              </li>
              <li>
                <strong>Delivery:</strong> {product.deliveryDays} days
              </li>
            </ul>
          </div>

          {product.store && (
            <div className="store-info">
              <strong>Sold by:</strong> {product.store.name}
            </div>
          )}
        </div>

        {/* Purchase Box */}
        <div className="purchase-section">
          <div className="purchase-box">
            <div className="price">${product.price}</div>
            <div className="shipping">
              FREE delivery in {product.deliveryDays} days
            </div>

            <div className="quantity-selector">
              <label>Quantity:</label>
              <select
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            <div className="stock-status">
              <span className="in-stock">In Stock</span>
            </div>

            <div className="action-buttons">
              <button className="btn-add-to-cart" onClick={handleAddToCart}>
                Add to Cart
              </button>
              <button className="btn-buy-now" onClick={handleBuyNow}>
                Buy Now
              </button>
            </div>

            <div className="secure-transaction">
              <span>🔒 Secure transaction</span>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <section className="reviews-section">
        <h2>Customer Reviews</h2>
        <div className="rate-feedback">
          <div className="reviews-summary">
            <div className="overall-rating">
              <div className="rating-score">{product.rating}</div>
              <Rating rating={product.rating} showValue={false} size="large" />
              <div className="review-count">
                {product.reviews?.length || 0} global ratings
              </div>
            </div>
          </div>

          {product.reviews && product.reviews.length > 0 ? (
            <div className="reviews-list">
              {product.reviews.map((review, index) => (
                <div key={index} className="review">
                  <div className="review-header">
                    <span className="review-user">{review.user}</span>
                    <Rating rating={review.rating} showValue={false} />
                  </div>
                  <p className="review-comment">{review.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-reviews">
              <p>No reviews yet. Be the first to review this product!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default ProductDetailPage

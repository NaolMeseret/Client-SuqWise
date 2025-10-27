import React from "react"

const Rating = ({ rating, showValue = true, size = "medium" }) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5

  return (
    <div className={`product-rating ${size}`}>
      <div className="rating-stars">
        {[...Array(5)].map((_, index) => (
          <span key={index}>
            {index < fullStars
              ? "★"
              : index === fullStars && hasHalfStar
              ? "★"
              : "☆"}
          </span>
        ))}
      </div>
      {showValue && <span className="rating-value">{rating}</span>}
    </div>
  )
}

export default Rating

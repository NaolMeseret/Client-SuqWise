import React from "react"

const Rating = ({ rating, showValue = true, size = "medium" }) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5

  return (
    <div className={`amazon-rating ${size}`}>
      <div className="rating-stars">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`star ${
              index < fullStars
                ? "full"
                : index === fullStars && hasHalfStar
                ? "half"
                : "empty"
            }`}
          >
            {index < fullStars
              ? "★"
              : index === fullStars && hasHalfStar
              ? "★"
              : "☆"}
          </span>
        ))}
      </div>
      {showValue && (
        <div className="rating-info">
          <span className="rating-value">{rating}</span>
        </div>
      )}
    </div>
  )
}

export default Rating

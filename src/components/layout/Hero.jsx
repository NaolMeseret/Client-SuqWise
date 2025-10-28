import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: "FASHION FOR MEN",
      description:
        "That this group would somehow form a family that's the way we all became the Brady Bunch. Love exciting and new. Come aboard were expecting you. Love life's sweetest reward Let it flow It floats back to you!",
      buttonText: "SHOP NOW",
      buttonLink: "/shop-men",
      bgColor: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
      image: "👔",
    },
    {
      id: 2,
      title: "WOMEN'S COLLECTION",
      description:
        "Discover the latest trends in women's fashion. From casual wear to elegant evening dresses, find everything you need to express your unique style and confidence.",
      buttonText: "EXPLORE COLLECTION",
      buttonLink: "/shop-women",
      bgColor: "linear-gradient(135deg, #8e44ad 0%, #9b59b6 100%)",
      image: "👗",
    },
    {
      id: 3,
      title: "ELECTRONIC DEALS",
      description:
        "Get the latest gadgets and electronics at amazing prices. From smartphones to laptops, we have everything tech enthusiasts need to stay connected and productive.",
      buttonText: "VIEW DEALS",
      buttonLink: "/electronics",
      bgColor: "linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)",
      image: "📱",
    },
    {
      id: 4,
      title: "SUMMER SALE",
      description:
        "Don't miss our biggest sale of the season! Up to 50% off on all items. Limited time offer on selected fashion, electronics, and home goods.",
      buttonText: "SHOP SALE",
      buttonLink: "/sale",
      bgColor: "linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)",
      image: "🔥",
    },
  ]

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section className="hero-carousel">
      {/* Carousel Container */}
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide ${
              index === currentSlide ? "active" : ""
            }`}
            style={{ background: slide.bgColor }}
          >
            <div className="container">
              <div className="slide-content">
                <div className="slide-text">
                  <h1 className="slide-title">{slide.title}</h1>
                  <p className="slide-description">{slide.description}</p>
                  <Link to={slide.buttonLink} className="slide-btn">
                    {slide.buttonText}
                  </Link>
                </div>
                <div className="slide-image">
                  <div className="image-placeholder">
                    <span className="image-icon">{slide.image}</span>
                    <span className="image-text">Featured Product</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="carousel-arrow carousel-arrow-prev"
        onClick={prevSlide}
      >
        ‹
      </button>
      <button
        className="carousel-arrow carousel-arrow-next"
        onClick={nextSlide}
      >
        ›
      </button>

      {/* Indicators/Dots */}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="carousel-progress">
        <div
          className="progress-bar"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>
    </section>
  )
}

export default Hero

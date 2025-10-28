import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "../../styles/hero.css"
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
      image:
        "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Men's Fashion Collection",
    },
    {
      id: 2,
      title: "WOMEN'S COLLECTION",
      description:
        "Discover the latest trends in women's fashion. From casual wear to elegant evening dresses, find everything you need to express your unique style and confidence.",
      buttonText: "EXPLORE COLLECTION",
      buttonLink: "/shop-women",
      bgColor: "linear-gradient(135deg, #8e44ad 0%, #9b59b6 100%)",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Women's Fashion Collection",
    },
    {
      id: 3,
      title: "ELECTRONIC DEALS",
      description:
        "Get the latest gadgets and electronics at amazing prices. From smartphones to laptops, we have everything tech enthusiasts need to stay connected and productive.",
      buttonText: "VIEW DEALS",
      buttonLink: "/electronics",
      bgColor: "linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Smartphones and Electronics",
    },
    {
      id: 4,
      title: "SUMMER SALE",
      description:
        "Don't miss our biggest sale of the season! Up to 50% off on all items. Limited time offer on selected fashion, electronics, and home goods.",
      buttonText: "SHOP SALE",
      buttonLink: "/sale",
      bgColor: "linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)",
      image:
        "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Summer Sale Products",
    },
    {
      id: 5,
      title: "SMART PHONES",
      description:
        "Experience the future in your hands with our latest smartphone collection. Cutting-edge technology, stunning displays, and powerful performance.",
      buttonText: "BUY NOW",
      buttonLink: "/smartphones",
      bgColor: "linear-gradient(135deg, #3498db 0%, #2980b9 100%)",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Latest Smartphones",
    },
    {
      id: 6,
      title: "LAPTOP & COMPUTERS",
      description:
        "Powerful laptops and computers for work, gaming, and creativity. Find the perfect device to match your needs and budget.",
      buttonText: "EXPLORE",
      buttonLink: "/laptops",
      bgColor: "linear-gradient(135deg, #f39c12 0%, #e67e22 100%)",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Laptops and Computers",
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
                  <div className="image-container">
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="slide-img"
                      loading="lazy"
                    />
                    <div className="image-overlay"></div>
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
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        className="carousel-arrow carousel-arrow-next"
        onClick={nextSlide}
        aria-label="Next slide"
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
            aria-label={`Go to slide ${index + 1}`}
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

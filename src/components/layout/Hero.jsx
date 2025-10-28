import React from "react"
import { Link } from "react-router-dom"
import "../layout/hero.css"
const Hero = () => {
  return (
    <section className="fashion-hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">FASHION FOR MEN</h1>
            <p className="hero-description">
              That this group would somehow form a family that's the way we all
              became the Brady Bunch. Love exciting and new. Come aboard were
              expecting you. Love life's sweetest reward Let it flow It floats
              back to you!
            </p>
            <Link to="/shop-men" className="shop-now-btn">
              SHOP NOW
            </Link>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              <span>Men's Fashion Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

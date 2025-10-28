import React from "react"
import { Link } from "react-router-dom"
import data from "../assets/data.json"
import StoreSection from "../components/product/StoreSection"

const HomePage = () => {
  const allProducts = data.stores.flatMap((store) => store.products)

  // Amazon-style category sections

  return (
    <div className="amazon-home">
      {/* Featured Stores - Amazon Style */}
      <section className="featured-stores-section">
        <div className="container">
          {data.stores.map((store) => (
            <StoreSection key={store.id} store={store} />
          ))}
        </div>
      </section>

      {/* Best Sellers Section */}
    </div>
  )
}

export default HomePage

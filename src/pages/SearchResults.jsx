import React, { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import data from "../../assets/data.json"
import "../../styles/search-results.css"

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState([])
  const [selectedProducts, setSelectedProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()
  const navigate = useNavigate()

  // Get search query from URL
  const searchParams = new URLSearchParams(location.search)
  const searchQuery = searchParams.get("q") || ""

  useEffect(() => {
    if (searchQuery) {
      performSearch(searchQuery)
    }
  }, [searchQuery])

  const performSearch = (query) => {
    setIsLoading(true)

    // Simulate API delay
    setTimeout(() => {
      const allProducts = data.stores.flatMap((store) =>
        store.products.map((product) => ({
          ...product,
          storeName: store.name,
          storeId: store.id,
        }))
      )

      const results = allProducts.filter((product) => {
        const searchableText = `
          ${product.title.toLowerCase()}
          ${product.category.toLowerCase()}
          ${product.storeName.toLowerCase()}
          ${product.brand?.toLowerCase() || ""}
        `

        return searchableText.includes(query.toLowerCase())
      })

      setSearchResults(results)
      setIsLoading(false)
    }, 500)
  }

  const handleCompareChange = (productId, storeId) => {
    const productKey = `${productId}-${storeId}`
    setSelectedProducts((prev) => {
      if (prev.includes(productKey)) {
        return prev.filter((id) => id !== productKey)
      } else {
        return [...prev, productKey]
      }
    })
  }

  const handleCompareSelected = () => {
    if (selectedProducts.length > 0) {
      // Navigate to compare page with selected products
      navigate(`/compare?products=${selectedProducts.join(",")}`)
    }
  }

  const highlightMatch = (text, query) => {
    if (!query) return text

    const regex = new RegExp(`(${query})`, "gi")
    const parts = text.split(regex)

    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} className="highlight">
          {part}
        </span>
      ) : (
        part
      )
    )
  }

  if (isLoading) {
    return (
      <div className="search-results-page">
        <div className="container">
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Searching for "{searchQuery}"...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="search-results-page">
      <div className="container">
        {/* Search Header */}
        <div className="search-results-header">
          <h1>Search Results</h1>
          <p className="search-query">for "{searchQuery}"</p>
          <div className="results-meta">
            <span className="results-count">
              {searchResults.length} products found
            </span>
            {selectedProducts.length > 0 && (
              <button
                className="compare-selected-btn"
                onClick={handleCompareSelected}
              >
                Compare Selected ({selectedProducts.length})
              </button>
            )}
          </div>
        </div>

        {/* Results Grid */}
        {searchResults.length > 0 ? (
          <div className="search-results-grid">
            {searchResults.map((product) => {
              const productKey = `${product.base_product_id}-${product.storeId}`
              const isSelected = selectedProducts.includes(productKey)

              return (
                <div key={productKey} className="product-card">
                  {/* Compare Checkbox */}
                  <div className="compare-checkbox">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() =>
                          handleCompareChange(
                            product.base_product_id,
                            product.storeId
                          )
                        }
                      />
                      <span className="checkmark"></span>
                      Compare
                    </label>
                  </div>

                  {/* Product Image */}
                  <div className="product-image">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      onClick={() =>
                        navigate(`/product/${product.base_product_id}`)
                      }
                    />
                  </div>

                  {/* Product Info */}
                  <div className="product-info">
                    <h3 className="product-title">
                      {highlightMatch(product.title, searchQuery)}
                    </h3>
                    <p className="product-category">
                      in {highlightMatch(product.category, searchQuery)}
                    </p>
                    <p className="product-store">
                      from {highlightMatch(product.storeName, searchQuery)}
                    </p>

                    <div className="product-rating">
                      <span className="rating-stars">
                        {[...Array(5)].map((_, index) => (
                          <span
                            key={index}
                            className={`star ${
                              index < Math.floor(product.rating)
                                ? "full"
                                : index === Math.floor(product.rating) &&
                                  product.rating % 1 >= 0.5
                                ? "half"
                                : "empty"
                            }`}
                          >
                            {index < Math.floor(product.rating)
                              ? "★"
                              : index === Math.floor(product.rating) &&
                                product.rating % 1 >= 0.5
                              ? "★"
                              : "☆"}
                          </span>
                        ))}
                      </span>
                      <span className="rating-value">({product.rating})</span>
                    </div>

                    <div className="product-price">${product.price}</div>

                    <button
                      className="view-details-btn"
                      onClick={() =>
                        navigate(`/product/${product.base_product_id}`)
                      }
                    >
                      View Details
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h2>No products found for "{searchQuery}"</h2>
            <p>Try different keywords or check spelling</p>
            <button className="back-to-home" onClick={() => navigate("/")}>
              Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchResults

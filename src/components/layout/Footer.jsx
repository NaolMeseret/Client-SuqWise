import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  const footerSections = [
    {
      title: "Get to Know Us",
      links: [
        "Careers",
        "Blog",
        "About Amazon",
        "Investor Relations",
        "Amazon Devices",
      ],
    },
    {
      title: "Make Money with Us",
      links: [
        "Sell products on Amazon",
        "Sell on Amazon Business",
        "Sell apps on Amazon",
        "Become an Affiliate",
        "Self-Publish with Us",
        "Host an Amazon Hub",
      ],
    },
    {
      title: "Amazon Payment Products",
      links: [
        "Amazon Business Card",
        "Shop with Points",
        "Reload Your Balance",
        "Amazon Currency Converter",
      ],
    },
    {
      title: "Let Us Help You",
      links: [
        "Amazon and COVID-19",
        "Your Account",
        "Your Orders",
        "Shipping Rates & Policies",
        "Returns & Replacements",
        "Manage Your Content and Devices",
        "Help",
      ],
    },
  ]

  return (
    <footer className="amazon-footer">
      <div className="footer-main">
        <div className="footer-container">
          {footerSections.map((section, index) => (
            <div key={index} className="footer-column">
              <h3 className="footer-column-title">{section.title}</h3>
              <ul className="footer-links">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="footer-link">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="footer-logo">
            <span className="logo">🛍️ SuqWise</span>
          </div>
          <div className="footer-bottom-content">
            <div className="footer-locale">
              <span>English</span>
              <span>USD - U.S. Dollar</span>
              <span>United States</span>
            </div>
            <div className="footer-legal">
              <span className="footer-copyright">
                &copy; {new Date().getFullYear()} SuqWise. All rights reserved.
              </span>
              <div className="footer-legal-links">
                <a href="#" className="legal-link">
                  Conditions of Use
                </a>
                <a href="#" className="legal-link">
                  Privacy Notice
                </a>
                <a href="#" className="legal-link">
                  Consumer Health Data Privacy Disclosure
                </a>
                <a href="#" className="legal-link">
                  Your Ads Privacy Choices
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

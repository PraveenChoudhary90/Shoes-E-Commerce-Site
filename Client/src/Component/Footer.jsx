import React from 'react'

function Footer() {
  return (
    <>
    
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>ShoeStyle</h3>
          <p>Your destination for the latest and trendiest footwear. We deliver comfort and style to your doorstep.</p>
        </div>

        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/men">Men</a></li>
            <li><a href="/women">Women</a></li>
            <li><a href="/kids">Kids</a></li>
            <li><a href="/sale">Sale</a></li>
          </ul>
        </div>

        <div className="footer-section help">
          <h4>Customer Service</h4>
          <ul>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/returns">Returns</a></li>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/shipping">Shipping Info</a></li>
          </ul>
        </div>

        <div className="footer-section newsletter">
          <h4>Subscribe</h4>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email" required />
            <button type="submit">Subscribe</button>
          </form>
          <div className="social-icons">
            <a href="#"><img  alt="Facebook" /></a>
            <a href="#"><img  alt="Instagram" /></a>
            <a href="#"><img  alt="Twitter" /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ShoeStyle. All rights reserved.</p>
      </div>
    </footer>
    
    </>
  )
}

export default Footer
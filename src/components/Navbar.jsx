import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar({ user, logout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/images/QNC logo.png" alt="QNC Solutions" className="logo-image" />
          <span className="logo-text">QNC SOLUTIONS</span>
        </Link>

        {/* Navigation Links */}
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About Us</Link>
          <Link to="/services" onClick={closeMenu}>Services</Link>
          <Link to="/careers" onClick={closeMenu}>Careers</Link>
          <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
          
          {/* Navigation Actions */}
          <div className="nav-separator"></div>
          {user ? (
            <>
              <Link to="/dashboard" className="nav-action-link" onClick={closeMenu}>
                Dashboard
              </Link>
              <button onClick={() => { logout(); closeMenu(); }} className="nav-action-button">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="nav-action-link" onClick={closeMenu}>
              Login
            </Link>
          )}
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
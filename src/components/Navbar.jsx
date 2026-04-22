import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar({ user, logout }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      {/* Mobile Menu Backdrop */}
      <div 
        className={`mobile-menu-backdrop ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="logo">
            <img src="/images/new site logo.jpg" alt="QNC Solutions" className="logo-image" />
            <span className="logo-text">QNC SOLUTIONS</span>
          </Link>
          
          {/* Mobile Menu Button (Hamburger) */}
          <button 
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          {/* Navigation Links */}
          <div className={`nav-links ${isMobileMenuOpen ? 'nav-links-mobile-open' : ''}`}>
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>
              Services
            </Link>
            <Link to="/careers" onClick={() => setIsMobileMenuOpen(false)}>
              Careers
            </Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              Contact Us
            </Link>
            
            {/* Navigation Actions - Integrated for all screen sizes */}
            <div className="nav-separator"></div>
            {user ? (
              <>
                <span className="nav-user-welcome">Welcome, {user.name}</span>
                <Link 
                  to="/dashboard" 
                  className="nav-action-link" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <button 
                  onClick={() => {
                    logout()
                    setIsMobileMenuOpen(false)
                  }} 
                  className="nav-action-button"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="nav-action-link" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="nav-action-link" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
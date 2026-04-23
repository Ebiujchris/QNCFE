import { Link } from 'react-router-dom'

function Navbar({ user, logout }) {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <img src="/images/new site logo.jpg" alt="QNC Solutions" className="logo-image" />
          <span className="logo-text">QNC SOLUTIONS</span>
        </Link>
        
        {/* Navigation Links - Always visible */}
        <div className="nav-links">
          <Link to="/">
            Home
          </Link>
          <Link to="/about">
            About Us
          </Link>
          <Link to="/services">
            Services
          </Link>
          <Link to="/careers">
            Careers
          </Link>
          <Link to="/contact">
            Contact Us
          </Link>
          
          {/* Navigation Actions */}
          <div className="nav-separator"></div>
          {user ? (
            <>
              <span className="nav-user-welcome">Welcome, {user.name}</span>
              <Link 
                to="/dashboard" 
                className="nav-action-link"
              >
                Dashboard
              </Link>
              <button 
                onClick={logout} 
                className="nav-action-button"
              >
                Logout
              </button>
            </>
          ) : (
            <Link 
              to="/login" 
              className="nav-action-link"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
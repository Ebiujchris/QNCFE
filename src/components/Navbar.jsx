import { Link } from 'react-router-dom'

function Navbar({ user, logout }) {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <img src="/images/new site logo.jpg" alt="QNC Solutions" className="logo-image" />
          <span className="logo-text">QNC SOLUTIONS</span>
        </Link>
        
        {/* Navigation Links */}
        <div className="nav-links" style={{display: 'flex', alignItems: 'center', gap: '24px'}}>
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
        </div>

        <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
          {user ? (
            <>
              <span className="user-info">Welcome, {user.name}</span>
              <Link to="/dashboard" className="btn btn-outline" style={{padding: '8px 16px', fontSize: '14px', textDecoration: 'none'}}>
                Dashboard
              </Link>
              <button onClick={logout} className="btn btn-primary" style={{padding: '8px 16px', fontSize: '14px'}}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline" style={{padding: '8px 16px', fontSize: '14px', textDecoration: 'none'}}>
                Login
              </Link>
              <Link to="/register" className="btn btn-primary" style={{padding: '8px 16px', fontSize: '14px', textDecoration: 'none'}}>
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
import { Link } from 'react-router-dom'

function Navbar({ user, logout }) {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          QNC SOLUTIONS
        </Link>
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
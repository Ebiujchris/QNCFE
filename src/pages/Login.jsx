import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useToast } from '../contexts/ToastContext'
import LoadingSpinner from '../components/LoadingSpinner'
import api from '../config/api'

function Login({ setUser }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { showSuccess, showError } = useToast()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await api.post('/auth/login', formData)
      const { user, token } = response.data

      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('token', token)
      setUser(user)

      showSuccess(`Welcome back, ${user.name}!`)
      
      // Redirect to unified dashboard
      navigate('/dashboard')
    } catch (error) {
      const message = error.response?.data?.message || 'Login failed. Please check your credentials.'
      showError(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container" style={{maxWidth: '450px', marginTop: '60px'}}>
      <div className="card card-elevated">
        <div style={{textAlign: 'center', marginBottom: '32px'}}>
          <h2 style={{fontSize: '2rem', fontWeight: '700', marginBottom: '8px', color: '#1f2937'}}>
            Welcome Back
          </h2>
          <p style={{color: '#6b7280'}}>Sign in to your QNC Solutions account</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              disabled={loading}
            />
          </div>

          <button 
            type="submit" 
            className="btn btn-primary btn-large" 
            style={{width: '100%', marginTop: '8px'}}
            disabled={loading}
          >
            {loading ? <LoadingSpinner size="small" text="Signing in..." /> : 'Sign In'}
          </button>
        </form>

        <div style={{textAlign: 'center', marginTop: '24px', padding: '20px 0', borderTop: '1px solid #e5e7eb'}}>
          <p style={{color: '#6b7280', marginBottom: '16px'}}>
            Don't have an account?
          </p>
          <Link to="/register" className="btn btn-outline" style={{textDecoration: 'none'}}>
            Create Account
          </Link>
        </div>

        <div style={{textAlign: 'center', marginTop: '20px', padding: '16px', backgroundColor: '#f8fafc', borderRadius: '8px'}}>
          <p style={{fontSize: '0.875rem', color: '#6b7280', marginBottom: '8px'}}>
            <strong>Demo Accounts:</strong>
          </p>
          <p style={{fontSize: '0.875rem', color: '#6b7280'}}>
            Admin: admin@qnc.com / admin123
          </p>
          <Link to="/admin/login" style={{fontSize: '0.875rem', color: '#667eea', textDecoration: 'none'}}>
            → Admin Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
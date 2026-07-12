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
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { showSuccess, showError } = useToast()

  const EyeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
    </svg>
  )
  const EyeOffIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/>
    </svg>
  )

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
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
    <div style={{
      minHeight: 'calc(100vh - 80px)',
      backgroundImage: "url('/images/group photo.jpeg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px'
    }}>
      <div className="card card-elevated" style={{
        maxWidth: '450px', 
        width: '100%', 
        margin: 0, 
        backgroundColor: 'rgba(255, 255, 255, 0.92)',
        backdropFilter: 'blur(8px)'
      }}>
        <div style={{textAlign: 'center', marginBottom: '32px'}}>
          <h2 style={{fontSize: '2rem', fontWeight: '700', marginBottom: '8px', color: 'var(--primary-maroon)'}}>
            Welcome Back
          </h2>
          <p style={{color: 'var(--primary-blue)'}}>Sign in to your QNC Solutions account</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label style={{color: 'var(--primary-blue)'}}>Email Address</label>
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
            <label style={{color: 'var(--primary-blue)'}}>Password</label>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                disabled={loading}
              />
              <button
                type="button"
                className="password-toggle-btn"
                onClick={togglePasswordVisibility}
                disabled={loading}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
            <div style={{ textAlign: 'right', marginTop: '8px' }}>
              <Link to="/forgot-password" style={{ color: '#7c2d12', fontSize: '0.875rem', textDecoration: 'none', fontWeight: '500' }}>
                Forgot password?
              </Link>
            </div>
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

        <div style={{textAlign: 'center', marginTop: '24px', paddingTop: '24px', borderTop: '1px solid #e5e7eb'}}>
          <p style={{color: '#6b7280', marginBottom: '12px'}}>
            Don't have an account?
          </p>
          <Link 
            to="/register" 
            className="btn btn-outline" 
            style={{textDecoration: 'none'}}
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
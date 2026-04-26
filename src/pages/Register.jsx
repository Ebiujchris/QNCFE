import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useToast } from '../contexts/ToastContext'
import LoadingSpinner from '../components/LoadingSpinner'
import api from '../config/api'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    role: 'patient'
  })
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { showSuccess, showError } = useToast()

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

    // Validation
    if (formData.password.length < 6) {
      showError('Password must be at least 6 characters long')
      setLoading(false)
      return
    }

    try {
      await api.post('/auth/register', formData)
      showSuccess('Account created successfully! Please login to continue.')
      navigate('/login')
    } catch (error) {
      const message = error.response?.data?.message || 'Registration failed. Please try again.'
      showError(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container" style={{maxWidth: '500px', marginTop: '60px'}}>
      <div className="card card-elevated">
        <div style={{textAlign: 'center', marginBottom: '32px'}}>
          <h2 style={{fontSize: '2rem', fontWeight: '700', marginBottom: '8px', color: '#1f2937'}}>
            Join QNC Solutions
          </h2>
          <p style={{color: '#6b7280'}}>Create your account to get started</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <span style={{
                padding: '12px 16px',
                backgroundColor: '#f3f4f6',
                border: '1px solid #d1d5db',
                borderRight: 'none',
                borderRadius: '8px 0 0 8px',
                fontSize: '0.9rem',
                color: '#374151',
                fontWeight: '500'
              }}>+256</span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number (e.g., 791785931)"
                required
                disabled={loading}
                style={{
                  borderRadius: '0 8px 8px 0',
                  borderLeft: 'none'
                }}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a secure password (min 6 characters)"
                required
                disabled={loading}
              />
              <button
                type="button"
                className="password-toggle-btn"
                onClick={togglePasswordVisibility}
                disabled={loading}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>

          <div className="form-group">
            <label>Account Type</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              disabled={loading}
            >
              <option value="patient">Patient - Book Healthcare Services</option>
            </select>
          </div>

          <button 
            type="submit" 
            className="btn btn-primary btn-large" 
            style={{width: '100%', marginTop: '8px'}}
            disabled={loading}
          >
            {loading ? <LoadingSpinner size="small" text="Creating Account..." /> : 'Create Account'}
          </button>
        </form>

        <div style={{textAlign: 'center', marginTop: '24px', padding: '20px 0', borderTop: '1px solid #e5e7eb'}}>
          <p style={{color: '#6b7280', marginBottom: '16px'}}>
            Already have an account?
          </p>
          <Link to="/login" className="btn btn-outline" style={{textDecoration: 'none'}}>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useToast } from '../contexts/ToastContext'
import LoadingSpinner from '../components/LoadingSpinner'
import axios from 'axios'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'patient',
    providerType: ''
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

    // Validation
    if (formData.role === 'provider' && !formData.providerType) {
      showError('Please select your provider specialization')
      setLoading(false)
      return
    }

    if (formData.password.length < 6) {
      showError('Password must be at least 6 characters long')
      setLoading(false)
      return
    }

    try {
      await axios.post('/api/auth/register', formData)
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
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a secure password (min 6 characters)"
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label>I want to register as:</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              disabled={loading}
            >
              <option value="patient">Patient - Book Healthcare Services</option>
              <option value="provider">Healthcare Provider - Offer Services</option>
            </select>
          </div>

          {formData.role === 'provider' && (
            <div className="form-group">
              <label>Provider Specialization</label>
              <select
                name="providerType"
                value={formData.providerType}
                onChange={handleChange}
                required
                disabled={loading}
              >
                <option value="">Select your specialization</option>
                <option value="nurse">Registered Nurse</option>
                <option value="doctor">General Practitioner</option>
                <option value="caregiver">Professional Caregiver</option>
              </select>
            </div>
          )}

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

        {formData.role === 'provider' && (
          <div style={{marginTop: '20px', padding: '16px', backgroundColor: '#eff6ff', borderRadius: '8px', border: '1px solid #dbeafe'}}>
            <p style={{fontSize: '0.875rem', color: '#1e40af', marginBottom: '8px'}}>
              <strong>Healthcare Provider Requirements:</strong>
            </p>
            <ul style={{fontSize: '0.875rem', color: '#1e40af', paddingLeft: '20px'}}>
              <li>Valid professional license</li>
              <li>Background verification required</li>
              <li>Insurance coverage mandatory</li>
            </ul>
          </div>
        )}

        <div style={{textAlign: 'center', marginTop: '16px'}}>
          <Link to="/admin/register" style={{color: '#6b7280', fontSize: '0.875rem'}}>
            Need admin access? →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register
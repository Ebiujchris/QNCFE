import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useToast } from '../../contexts/ToastContext'
import LoadingSpinner from '../../components/LoadingSpinner'
import axios from 'axios'

function AdminRegister() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    adminCode: '',
    role: 'admin'
  })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { showSuccess, showError, showWarning } = useToast()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    // Simple admin code validation (in production, this should be server-side)
    if (formData.adminCode !== 'QNC2024ADMIN') {
      showError('Invalid admin registration code. Contact system administrator.')
      setLoading(false)
      return
    }

    try {
      await axios.post('/api/auth/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: 'admin'
      })
      
      showSuccess('Admin account created successfully! You can now login.')
      navigate('/admin/login')
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
            🛡️ Admin Registration
          </h2>
          <p style={{color: '#6b7280'}}>Create QNC Solutions Admin Account</p>
        </div>
        
        <div style={{marginBottom: '24px', padding: '16px', backgroundColor: '#fef3c7', borderRadius: '8px', border: '1px solid #fbbf24'}}>
          <p style={{fontSize: '0.875rem', color: '#92400e', marginBottom: '8px'}}>
            <strong>⚠️ Admin Registration Requirements:</strong>
          </p>
          <ul style={{fontSize: '0.875rem', color: '#92400e', paddingLeft: '20px', margin: 0}}>
            <li>Valid admin registration code required</li>
            <li>Admin accounts have full system access</li>
            <li>Contact system administrator for registration code</li>
          </ul>
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
              placeholder="Create a secure password"
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label>Admin Registration Code</label>
            <input
              type="password"
              name="adminCode"
              value={formData.adminCode}
              onChange={handleChange}
              placeholder="Enter admin registration code"
              required
              disabled={loading}
            />
            <small style={{color: '#6b7280', fontSize: '0.875rem'}}>
              Contact system administrator for the registration code
            </small>
          </div>

          <button 
            type="submit" 
            className="btn btn-primary btn-large" 
            style={{width: '100%', marginTop: '8px'}}
            disabled={loading}
          >
            {loading ? <LoadingSpinner size="small" text="Creating Account..." /> : 'Create Admin Account'}
          </button>
        </form>

        <div style={{textAlign: 'center', marginTop: '24px', padding: '20px 0', borderTop: '1px solid #e5e7eb'}}>
          <p style={{color: '#6b7280', marginBottom: '16px'}}>
            Already have an admin account?
          </p>
          <Link to="/admin/login" className="btn btn-outline" style={{textDecoration: 'none'}}>
            Admin Sign In
          </Link>
        </div>

        <div style={{textAlign: 'center', marginTop: '16px'}}>
          <Link to="/register" style={{color: '#6b7280', fontSize: '0.875rem'}}>
            ← Register as regular user
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AdminRegister
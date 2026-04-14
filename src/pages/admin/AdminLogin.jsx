import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useToast } from '../../contexts/ToastContext'
import LoadingSpinner from '../../components/LoadingSpinner'
import axios from 'axios'

function AdminLogin({ setUser }) {
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
      const response = await axios.post('/api/auth/login', formData)
      const { user, token } = response.data

      if (user.role !== 'admin') {
        showError('Access denied. Admin credentials required.')
        setLoading(false)
        return
      }

      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('token', token)
      setUser(user)

      showSuccess(`Welcome back, ${user.name}!`)
      navigate('/admin/dashboard')
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
            🛡️ Admin Login
          </h2>
          <p style={{color: '#6b7280'}}>Access QNC Solutions Admin Panel</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Admin Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter admin email"
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
              placeholder="Enter admin password"
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
            {loading ? <LoadingSpinner size="small" text="Signing in..." /> : 'Admin Sign In'}
          </button>
        </form>

        <div style={{textAlign: 'center', marginTop: '24px', padding: '20px 0', borderTop: '1px solid #e5e7eb'}}>
          <p style={{color: '#6b7280', marginBottom: '16px'}}>
            Need admin access?
          </p>
          <Link to="/admin/register" className="btn btn-outline" style={{textDecoration: 'none'}}>
            Request Admin Account
          </Link>
        </div>

        <div style={{textAlign: 'center', marginTop: '20px', padding: '16px', backgroundColor: '#fef3c7', borderRadius: '8px', border: '1px solid #fbbf24'}}>
          <p style={{fontSize: '0.875rem', color: '#92400e', marginBottom: '8px'}}>
            <strong>Default Admin:</strong>
          </p>
          <p style={{fontSize: '0.875rem', color: '#92400e'}}>
            Email: admin@qnc.com | Password: admin123
          </p>
        </div>

        <div style={{textAlign: 'center', marginTop: '16px'}}>
          <Link to="/login" style={{color: '#6b7280', fontSize: '0.875rem'}}>
            ← Back to regular login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
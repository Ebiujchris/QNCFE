import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useToast } from '../contexts/ToastContext'
import api from '../config/api'

function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const { showError } = useToast()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await api.post('/auth/forgot-password', { email })
      setSent(true)
    } catch (error) {
      showError(error.response?.data?.message || 'Failed to send reset email.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container" style={{ maxWidth: '450px', marginTop: '60px' }}>
      <div className="card card-elevated">
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span style={{ fontSize: '3rem', display: 'block', marginBottom: '12px' }}>🔑</span>
          <h2 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#1f2937', marginBottom: '8px' }}>
            Forgot Password?
          </h2>
          <p style={{ color: '#6b7280' }}>
            Enter your email and we'll send you a reset link
          </p>
        </div>

        {sent ? (
          <div>
            <div style={{
              padding: '20px', backgroundColor: '#ecfdf5', borderRadius: '12px',
              border: '1px solid #d1fae5', textAlign: 'center', marginBottom: '24px'
            }}>
              <span style={{ fontSize: '2rem', display: 'block', marginBottom: '8px' }}>📧</span>
              <p style={{ color: '#065f46', fontWeight: '600', marginBottom: '4px' }}>Check your inbox!</p>
              <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
                If <strong>{email}</strong> is registered, a reset link has been sent. Check your spam folder too.
              </p>
            </div>
            <Link to="/login" className="btn btn-primary" style={{ width: '100%', display: 'block', textAlign: 'center', textDecoration: 'none' }}>
              Back to Login
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your registered email"
                required
                disabled={loading}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-large"
              style={{ width: '100%', marginTop: '8px' }}
              disabled={loading}
            >
              {loading ? '⏳ Sending...' : '📧 Send Reset Link'}
            </button>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <Link to="/login" style={{ color: '#6b7280', fontSize: '0.9rem', textDecoration: 'none' }}>
                ← Back to Login
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default ForgotPassword

import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams, Link } from 'react-router-dom'
import { useToast } from '../contexts/ToastContext'
import api from '../config/api'

function ResetPassword() {
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const { showError, showSuccess } = useToast()
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) navigate('/forgot-password')
  }, [token, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password.length < 6) return showError('Password must be at least 6 characters.')
    if (password !== confirm) return showError('Passwords do not match.')

    setLoading(true)
    try {
      await api.post('/auth/reset-password', { token, password })
      setDone(true)
      showSuccess('Password reset successfully!')
      setTimeout(() => navigate('/login'), 3000)
    } catch (error) {
      showError(error.response?.data?.message || 'Reset failed. The link may have expired.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container" style={{ maxWidth: '450px', marginTop: '60px' }}>
      <div className="card card-elevated">
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span style={{ fontSize: '3rem', display: 'block', marginBottom: '12px' }}>🔒</span>
          <h2 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#1f2937', marginBottom: '8px' }}>
            Set New Password
          </h2>
          <p style={{ color: '#6b7280' }}>Choose a strong password for your account</p>
        </div>

        {done ? (
          <div style={{
            padding: '20px', backgroundColor: '#ecfdf5', borderRadius: '12px',
            border: '1px solid #d1fae5', textAlign: 'center'
          }}>
            <span style={{ fontSize: '2rem', display: 'block', marginBottom: '8px' }}>✅</span>
            <p style={{ color: '#065f46', fontWeight: '600', marginBottom: '4px' }}>Password reset!</p>
            <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>Redirecting you to login...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>New Password</label>
              <div className="password-input-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="At least 6 characters"
                  required
                  disabled={loading}
                />
                <button type="button" className="password-toggle-btn" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            <div className="form-group">
              <label>Confirm New Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
                placeholder="Repeat your new password"
                required
                disabled={loading}
              />
            </div>

            {password && confirm && password !== confirm && (
              <p style={{ color: '#ef4444', fontSize: '0.85rem', marginBottom: '12px' }}>
                ⚠️ Passwords do not match
              </p>
            )}

            <button
              type="submit"
              className="btn btn-primary btn-large"
              style={{ width: '100%', marginTop: '8px' }}
              disabled={loading || (password && confirm && password !== confirm)}
            >
              {loading ? '⏳ Resetting...' : '🔒 Reset Password'}
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

export default ResetPassword

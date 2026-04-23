import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useToast } from '../contexts/ToastContext'
import LoadingSpinner from '../components/LoadingSpinner'
import api from '../config/api'

function BookService({ user }) {
  const [formData, setFormData] = useState({
    serviceType: '',
    description: '',
    location: '',
    phoneNumber: '',
    preferredDate: '',
    urgency: 'normal'
  })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { showSuccess, showError } = useToast()

  // Redirect if not logged in
  if (!user) {
    return (
      <div className="container" style={{maxWidth: '500px', marginTop: '100px'}}>
        <div className="card card-elevated" style={{textAlign: 'center'}}>
          <h2>Login Required</h2>
          <p style={{marginBottom: '20px'}}>Please login to schedule healthcare services.</p>
          <Link to="/login" className="btn btn-primary">
            Login to Continue
          </Link>
        </div>
      </div>
    )
  }

  // Only patients can book
  if (user.role !== 'patient') {
    return (
      <div className="container" style={{maxWidth: '500px', marginTop: '100px'}}>
        <div className="card card-elevated" style={{textAlign: 'center'}}>
          <h2>Access Denied</h2>
          <p style={{marginBottom: '20px'}}>Only patients can schedule services. Please register as a patient.</p>
          <Link to="/register" className="btn btn-primary">
            Register as Patient
          </Link>
        </div>
      </div>
    )
  }

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
    if (!formData.serviceType || !formData.description || !formData.location || !formData.phoneNumber || !formData.preferredDate) {
      showError('Please fill in all required fields')
      setLoading(false)
      return
    }

    if (formData.description.length < 10) {
      showError('Please provide a more detailed description (at least 10 characters)')
      setLoading(false)
      return
    }

    try {
      await api.post('/bookings', formData)
      
      showSuccess('Appointment request submitted successfully! You will be notified once a provider is assigned.')
      
      // Reset form
      setFormData({
        serviceType: '',
        description: '',
        location: '',
        phoneNumber: '',
        preferredDate: '',
        urgency: 'normal'
      })

      // Redirect to dashboard after 2 seconds
      setTimeout(() => {
        navigate('/dashboard')
      }, 2000)
    } catch (error) {
      const message = error.response?.data?.message || 'Appointment scheduling failed. Please try again.'
      showError(message)
    } finally {
      setLoading(false)
    }
  }

  const serviceOptions = [
    { value: 'nursing', label: '🏥 Nursing Care', desc: 'Professional nursing services at home' },
    { value: 'doctor', label: '👨‍⚕️ Medical Consultation', desc: 'General practitioner consultation' },
    { value: 'caregiver', label: '🤝 Caregiver Support', desc: 'Personal care and assistance' }
  ]

  const urgencyOptions = [
    { value: 'normal', label: 'Normal - Within 2-3 days', color: '#10b981' },
    { value: 'urgent', label: 'Urgent - Within 24 hours', color: '#f59e0b' },
    { value: 'emergency', label: 'Emergency - Immediate attention needed', color: '#ef4444' }
  ]

  return (
    <div className="container" style={{maxWidth: '700px', marginTop: '40px'}}>
      <div className="card card-elevated">
        <div style={{textAlign: 'center', marginBottom: '32px'}}>
          <h2 style={{fontSize: '2rem', fontWeight: '700', marginBottom: '8px', color: '#1f2937'}}>
            Make an Appointment
          </h2>
          <p style={{color: '#6b7280'}}>Tell us about your healthcare needs and we'll connect you with the right professional</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Service Type *</label>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
              disabled={loading}
            >
              <option value="">Select the service you need</option>
              {serviceOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label} - {option.desc}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Description of Your Healthcare Needs *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Please provide detailed information about your healthcare needs, any specific requirements, medical conditions, or preferences..."
              rows="5"
              required
              disabled={loading}
            />
            <small style={{color: '#6b7280', fontSize: '0.875rem'}}>
              {formData.description.length}/500 characters (minimum 10 required)
            </small>
          </div>

          <div className="form-group">
            <label>Service Location *</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter your complete address for the home visit"
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label>Phone Number *</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number (e.g., +256 700 123 456)"
              required
              disabled={loading}
            />
            <small style={{color: '#6b7280', fontSize: '0.875rem'}}>
              We'll use this number to contact you about your appointment
            </small>
          </div>

          <div className="form-group">
            <label>Preferred Date *</label>
            <input
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label>Urgency Level</label>
            <select
              name="urgency"
              value={formData.urgency}
              onChange={handleChange}
              disabled={loading}
            >
              {urgencyOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <button 
            type="submit" 
            className="btn btn-success btn-large" 
            style={{width: '100%', marginTop: '16px'}}
            disabled={loading}
          >
            {loading ? <LoadingSpinner size="small" text="Submitting Request..." /> : '📅 Submit Appointment Request'}
          </button>
        </form>

        <div style={{marginTop: '24px', padding: '20px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0'}}>
          <h4 style={{color: '#1f2937', marginBottom: '12px', fontSize: '1.125rem'}}>What happens next?</h4>
          <div style={{fontSize: '0.875rem', color: '#6b7280', lineHeight: '1.6'}}>
            <p>✅ Your request will be reviewed by our admin team</p>
            <p>✅ We'll match you with a qualified healthcare provider</p>
            <p>✅ You'll receive notification with provider details</p>
            <p>✅ Complete payment and receive your healthcare service</p>
          </div>
        </div>

        <div style={{textAlign: 'center', marginTop: '20px'}}>
          <Link to="/dashboard" style={{color: '#6b7280', fontSize: '0.875rem'}}>
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BookService
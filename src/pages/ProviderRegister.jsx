import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useToast } from '../contexts/ToastContext'
import LoadingSpinner from '../components/LoadingSpinner'
import api from '../config/api'

function ProviderRegister() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    location: '',
    providerType: '',
    experience: '',
    qualifications: '',
    licenseNumber: '',
    availability: '',
    bio: ''
  })
  const [documents, setDocuments] = useState({
    license: null,
    certificate: null,
    cv: null
  })
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { showSuccess, showError } = useToast()

  const totalSteps = 3

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFileChange = (e) => {
    const { name, files } = e.target
    if (files[0]) {
      setDocuments({
        ...documents,
        [name]: files[0]
      })
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const nextStep = () => {
    if (validateCurrentStep()) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    setCurrentStep(currentStep - 1)
  }

  const validateCurrentStep = () => {
    switch (currentStep) {
      case 1:
        if (!formData.name || !formData.email || !formData.phone || !formData.password || !formData.location) {
          showError('Please fill in all required fields in Step 1')
          return false
        }
        if (formData.password.length < 6) {
          showError('Password must be at least 6 characters long')
          return false
        }
        return true
      case 2:
        if (!formData.providerType || !formData.experience || !formData.licenseNumber) {
          showError('Please fill in all required fields in Step 2')
          return false
        }
        return true
      case 3:
        if (!documents.license) {
          showError('Please upload your professional license')
          return false
        }
        return true
      default:
        return true
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateCurrentStep()) return

    setLoading(true)
    try {
      const submitData = new FormData()
      Object.keys(formData).forEach(key => submitData.append(key, formData[key]))
      if (documents.license) submitData.append('license', documents.license)
      if (documents.certificate) submitData.append('certificate', documents.certificate)
      if (documents.cv) submitData.append('cv', documents.cv)

      await api.post('/auth/register-provider', submitData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })

      showSuccess('Provider application submitted successfully! We will review your application and contact you within 48 hours.')
      navigate('/login')
    } catch (error) {
      const message = error.response?.data?.message || 'Registration failed. Please try again.'
      showError(message)
    } finally {
      setLoading(false)
    }
  }

  const renderStepIndicator = () => (
    <div style={{marginBottom: '32px'}}>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '16px'}}>
        {[1, 2, 3].map((step) => (
          <div key={step} style={{display: 'flex', alignItems: 'center'}}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: currentStep >= step ? 'var(--primary-maroon)' : '#e5e7eb',
              color: currentStep >= step ? 'white' : '#9ca3af',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '600',
              fontSize: '0.9rem',
              transition: 'all 0.3s ease'
            }}>
              {step}
            </div>
            {step < 3 && (
              <div style={{
                width: '60px',
                height: '2px',
                backgroundColor: currentStep > step ? 'var(--primary-maroon)' : '#e5e7eb',
                margin: '0 8px',
                transition: 'all 0.3s ease'
              }}></div>
            )}
          </div>
        ))}
      </div>
      <div style={{textAlign: 'center'}}>
        <p style={{color: '#6b7280', fontSize: '0.9rem', margin: 0}}>
          Step {currentStep} of {totalSteps}: {
            currentStep === 1 ? 'Personal Information' :
            currentStep === 2 ? 'Professional Details' :
            'Documents & Verification'
          }
        </p>
      </div>
    </div>
  )

  const renderStep1 = () => (
    <div>
      <h3 style={{fontSize: '1.3rem', fontWeight: '600', color: '#374151', marginBottom: '20px', borderBottom: '2px solid #e5e7eb', paddingBottom: '8px'}}>
        Personal Information
      </h3>
      
      <div className="form-group">
        <label>Full Name *</label>
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
        <label>Email Address *</label>
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
        <label>Phone Number *</label>
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
        <label>Location/Address *</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Enter your location or address"
          required
          disabled={loading}
        />
      </div>

      <div className="form-group">
        <label>Password *</label>
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
    </div>
  )

  const renderStep2 = () => (
    <div>
      <h3 style={{fontSize: '1.3rem', fontWeight: '600', color: '#374151', marginBottom: '20px', borderBottom: '2px solid #e5e7eb', paddingBottom: '8px'}}>
        Professional Information
      </h3>

      <div className="form-group">
        <label>Provider Specialization *</label>
        <select
          name="providerType"
          value={formData.providerType}
          onChange={handleChange}
          required
          disabled={loading}
        >
          <option value="">Select your specialization</option>
          <option value="nurse">Registered Nurse</option>
          <option value="doctor">General Practitioner / Doctor</option>
        </select>
      </div>

      <div className="form-group">
        <label>Years of Experience *</label>
        <select
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          required
          disabled={loading}
        >
          <option value="">Select experience level</option>
          <option value="0-2">0-2 years</option>
          <option value="3-5">3-5 years</option>
          <option value="6-10">6-10 years</option>
          <option value="11-15">11-15 years</option>
          <option value="15+">15+ years</option>
        </select>
      </div>

      <div className="form-group">
        <label>Professional License Number *</label>
        <input
          type="text"
          name="licenseNumber"
          value={formData.licenseNumber}
          onChange={handleChange}
          placeholder="Enter your professional license number"
          required
          disabled={loading}
        />
      </div>

      <div className="form-group">
        <label>Qualifications & Education</label>
        <textarea
          name="qualifications"
          value={formData.qualifications}
          onChange={handleChange}
          placeholder="List your educational background, certifications, and qualifications"
          rows="3"
          disabled={loading}
        />
      </div>

      <div className="form-group">
        <label>Availability</label>
        <select
          name="availability"
          value={formData.availability}
          onChange={handleChange}
          disabled={loading}
        >
          <option value="">Select your availability</option>
          <option value="full-time">Full-time (40+ hours/week)</option>
          <option value="part-time">Part-time (20-39 hours/week)</option>
          <option value="flexible">Flexible/On-call</option>
          <option value="weekends">Weekends only</option>
          <option value="evenings">Evenings only</option>
        </select>
      </div>

      <div className="form-group">
        <label>Professional Bio</label>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          placeholder="Tell us about yourself, your experience, and why you want to join QNC Solutions"
          rows="4"
          disabled={loading}
        />
      </div>
    </div>
  )

  const renderStep3 = () => (
    <div>
      <h3 style={{fontSize: '1.3rem', fontWeight: '600', color: '#374151', marginBottom: '20px', borderBottom: '2px solid #e5e7eb', paddingBottom: '8px'}}>
        Required Documents
      </h3>

      <div className="form-group">
        <label>Professional License * (PDF, JPG, PNG - Max 5MB)</label>
        <input
          type="file"
          name="license"
          onChange={handleFileChange}
          accept=".pdf,.jpg,.jpeg,.png"
          required
          disabled={loading}
          style={{
            padding: '12px',
            border: '2px dashed #d1d5db',
            borderRadius: '8px',
            backgroundColor: '#f9fafb'
          }}
        />
        {documents.license && (
          <p style={{fontSize: '0.875rem', color: '#059669', marginTop: '4px'}}>
            ✓ {documents.license.name}
          </p>
        )}
      </div>

      <div className="form-group">
        <label>Professional Certificate/Diploma (PDF, JPG, PNG - Max 5MB)</label>
        <input
          type="file"
          name="certificate"
          onChange={handleFileChange}
          accept=".pdf,.jpg,.jpeg,.png"
          disabled={loading}
          style={{
            padding: '12px',
            border: '2px dashed #d1d5db',
            borderRadius: '8px',
            backgroundColor: '#f9fafb'
          }}
        />
        {documents.certificate && (
          <p style={{fontSize: '0.875rem', color: '#059669', marginTop: '4px'}}>
            ✓ {documents.certificate.name}
          </p>
        )}
      </div>

      <div className="form-group">
        <label>CV/Resume (PDF - Max 5MB)</label>
        <input
          type="file"
          name="cv"
          onChange={handleFileChange}
          accept=".pdf"
          disabled={loading}
          style={{
            padding: '12px',
            border: '2px dashed #d1d5db',
            borderRadius: '8px',
            backgroundColor: '#f9fafb'
          }}
        />
        {documents.cv && (
          <p style={{fontSize: '0.875rem', color: '#059669', marginTop: '4px'}}>
            ✓ {documents.cv.name}
          </p>
        )}
      </div>

      {/* Requirements Notice */}
      <div style={{marginBottom: '24px', padding: '20px', backgroundColor: '#fef3c7', borderRadius: '12px', border: '1px solid #f59e0b'}}>
        <h4 style={{fontSize: '1.1rem', color: '#92400e', marginBottom: '12px', fontWeight: '600'}}>
          📋 Application Requirements
        </h4>
        <ul style={{fontSize: '0.9rem', color: '#92400e', paddingLeft: '20px', margin: 0}}>
          <li>Valid professional license and registration</li>
          <li>Minimum 2 years of relevant healthcare experience</li>
          <li>Background verification and reference checks</li>
          <li>Professional indemnity insurance coverage</li>
          <li>Commitment to QNC's quality standards and ethics</li>
        </ul>
      </div>
    </div>
  )

  const renderNavigationButtons = () => (
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '32px'}}>
      <div>
        {currentStep > 1 && (
          <button
            type="button"
            onClick={prevStep}
            className="btn btn-outline"
            disabled={loading}
            style={{marginRight: '12px'}}
          >
            ← Previous
          </button>
        )}
      </div>
      
      <div>
        {currentStep < totalSteps ? (
          <button
            type="button"
            onClick={nextStep}
            className="btn btn-primary"
            disabled={loading}
          >
            Next →
          </button>
        ) : (
          <button 
            type="submit" 
            className="btn btn-primary btn-large"
            disabled={loading}
          >
            {loading ? <LoadingSpinner size="small" text="Submitting Application..." /> : '📤 Submit Provider Application'}
          </button>
        )}
      </div>
    </div>
  )

  return (
    <div style={{background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', minHeight: '100vh', padding: '40px 0'}}>
      <div className="container" style={{maxWidth: '700px'}}>
        <div className="card card-elevated">
          <div style={{textAlign: 'center', marginBottom: '32px'}}>
            <h2 style={{fontSize: '2.2rem', fontWeight: '700', marginBottom: '8px', color: '#1f2937'}}>
              Join Our Healthcare Team
            </h2>
            <p style={{color: '#6b7280', fontSize: '1.1rem'}}>Apply to become a healthcare provider with QNC Solutions</p>
          </div>
          
          {renderStepIndicator()}
          
          <form onSubmit={handleSubmit}>
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}
            
            {renderNavigationButtons()}
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
    </div>
  )
}

export default ProviderRegister
import { useState } from 'react'
import { useToast } from '../contexts/ToastContext'
import api from '../config/api'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
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
      await api.post('/contact', formData)
      showSuccess('Thank you for your message! We will get back to you within 24 hours.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      showError('Failed to send message. Please try again or contact us directly.')
      console.error('Contact form error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="hero" style={{
        background: `linear-gradient(rgba(245, 158, 11, 0.8), rgba(217, 119, 6, 0.8)), url('/images/contact us background image.avif')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '80px 0'
      }}>
        <div className="container">
          <div style={{textAlign: 'center', color: 'white'}}>
            <h1 style={{fontSize: '3rem', fontWeight: '700', marginBottom: '20px'}}>Contact Us</h1>
            <p style={{fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto'}}>
              Get in touch with our team for any questions, support, or partnership opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="container" style={{padding: '60px 0'}}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '50px'}}>
          
          {/* Contact Information */}
          <div>
            <h2 style={{fontSize: '2rem', fontWeight: '700', color: '#1f2937', marginBottom: '30px'}}>
              Get In Touch
            </h2>
            <p style={{fontSize: '1.1rem', color: '#6b7280', marginBottom: '40px', lineHeight: '1.6'}}>
              We're here to help and answer any questions you might have. We look forward to hearing from you.
            </p>

            <div style={{marginBottom: '60px'}}>
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '25px'}}>
                <div style={{
                  width: '50px', 
                  height: '50px', 
                  backgroundColor: '#f59e0b', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginRight: '20px',
                  color: 'white',
                  fontSize: '1.2rem'
                }}>📍</div>
                <div>
                  <h4 style={{color: '#1f2937', marginBottom: '5px'}}>Our Location</h4>
                  <p style={{color: '#6b7280', margin: 0}}>
                    Buziga Katuso<br />
                    P.O. Box: 201036 Kampala GPO, Uganda
                  </p>
                </div>
              </div>

              <div style={{display: 'flex', alignItems: 'center', marginBottom: '25px'}}>
                <div style={{
                  width: '50px', 
                  height: '50px', 
                  backgroundColor: '#f59e0b', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginRight: '20px',
                  color: 'white',
                  fontSize: '1.2rem'
                }}>📞</div>
                <div>
                  <h4 style={{color: '#1f2937', marginBottom: '5px'}}>Phone Number</h4>
                  <p style={{color: '#6b7280', margin: 0}}>
                    <a href="tel:+256791785931" style={{color: '#6b7280', textDecoration: 'none'}}>
                      +256-791-785931
                    </a>
                  </p>
                </div>
              </div>

              <div style={{display: 'flex', alignItems: 'center', marginBottom: '25px'}}>
                <div style={{
                  width: '50px', 
                  height: '50px', 
                  backgroundColor: '#f59e0b', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginRight: '20px',
                  color: 'white',
                  fontSize: '1.2rem'
                }}>✉️</div>
                <div>
                  <h4 style={{color: '#1f2937', marginBottom: '5px'}}>Email Address</h4>
                  <p style={{color: '#6b7280', margin: 0}}>
                    <a href="mailto:qncsolutions3@gmail.com" style={{color: '#6b7280', textDecoration: 'none'}}>
                      qncsolutions3@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div style={{display: 'flex', alignItems: 'center', marginBottom: '25px'}}>
                <div style={{
                  width: '50px', 
                  height: '50px', 
                  backgroundColor: '#f59e0b', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginRight: '20px',
                  color: 'white',
                  fontSize: '1.2rem'
                }}>🕒</div>
                <div>
                  <h4 style={{color: '#1f2937', marginBottom: '5px'}}>Business Hours</h4>
                  <p style={{color: '#6b7280', margin: 0}}>
                    Monday - Friday: 8:00 AM - 6:00 PM (EAT)<br />
                    Saturday: 9:00 AM - 4:00 PM (EAT)<br />
                    Sunday: Emergency services only
                  </p>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="card card-elevated" style={{padding: '25px', backgroundColor: '#fef3c7', border: '1px solid #fbbf24'}}>
              <h4 style={{color: '#92400e', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                🚨 Emergency Services
              </h4>
              <p style={{color: '#92400e', margin: 0, fontSize: '0.9rem'}}>
                For medical emergencies, please call 911 or 999 immediately. For urgent healthcare needs outside business hours, 
                call our emergency line: <strong><a href="tel:+256791785931" style={{color: '#92400e'}}>+256-791-785931</a></strong>
              </p>
            </div>

            {/* Social Media Links */}
            <div style={{marginTop: '30px'}}>
              <h4 style={{color: '#1f2937', marginBottom: '20px', textAlign: 'center'}}>Connect With Us</h4>
              <div style={{display: 'flex', justifyContent: 'center', gap: '20px'}}>
                <a 
                  href="https://facebook.com/qncsolutions" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#1877f2',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.5rem',
                    textDecoration: 'none',
                    transition: 'transform 0.2s ease'
                  }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                >
                  📘
                </a>
                <a 
                  href="https://twitter.com/qncsolutions" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#1da1f2',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.5rem',
                    textDecoration: 'none',
                    transition: 'transform 0.2s ease'
                  }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                >
                  🐦
                </a>
                <a 
                  href="https://linkedin.com/company/qncsolutions" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#0077b5',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.5rem',
                    textDecoration: 'none',
                    transition: 'transform 0.2s ease'
                  }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                >
                  💼
                </a>
                <a 
                  href="https://instagram.com/qncsolutions" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#e4405f',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.5rem',
                    textDecoration: 'none',
                    transition: 'transform 0.2s ease'
                  }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                >
                  📷
                </a>
                <a 
                  href="https://wa.me/256791785931" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#25d366',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.5rem',
                    textDecoration: 'none',
                    transition: 'transform 0.2s ease'
                  }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                >
                  💬
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="card card-elevated" style={{padding: '40px'}}>
              <h3 style={{fontSize: '1.8rem', fontWeight: '700', color: '#1f2937', marginBottom: '25px'}}>
                Send Us a Message
              </h3>
              
              <form onSubmit={handleSubmit}>
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
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    disabled={loading}
                  />
                </div>

                <div className="form-group">
                  <label>Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="booking">Booking Support</option>
                    <option value="provider">Provider Application</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your inquiry or message in detail..."
                    rows="5"
                    required
                    disabled={loading}
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-large" 
                  style={{width: '100%'}}
                  disabled={loading}
                >
                  {loading ? '📤 Sending...' : '📤 Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{backgroundColor: '#f8fafc', padding: '60px 0'}}>
        <div className="container">
          <h2 style={{textAlign: 'center', fontSize: '2.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '50px'}}>
            Frequently Asked Questions
          </h2>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px'}}>
            <div className="card card-elevated" style={{padding: '30px'}}>
              <h4 style={{color: '#f59e0b', marginBottom: '15px'}}>How do I book a service?</h4>
              <p style={{color: '#6b7280', fontSize: '0.95rem', lineHeight: '1.6'}}>
                You can book any of our services through our online booking system. Simply select your needed service, 
                fill out the form, and we'll match you with a qualified healthcare professional.
              </p>
            </div>

            <div className="card card-elevated" style={{padding: '30px'}}>
              <h4 style={{color: '#f59e0b', marginBottom: '15px'}}>What areas do you serve?</h4>
              <p style={{color: '#6b7280', fontSize: '0.95rem', lineHeight: '1.6'}}>
                We currently serve the greater metropolitan area and surrounding communities. Contact us to confirm 
                service availability in your specific location.
              </p>
            </div>

            <div className="card card-elevated" style={{padding: '30px'}}>
              <h4 style={{color: '#f59e0b', marginBottom: '15px'}}>Are your providers licensed?</h4>
              <p style={{color: '#6b7280', fontSize: '0.95rem', lineHeight: '1.6'}}>
                Yes, all our healthcare providers are fully licensed, certified, and undergo thorough background checks. 
                We maintain the highest standards for professional qualifications.
              </p>
            </div>

            <div className="card card-elevated" style={{padding: '30px'}}>
              <h4 style={{color: '#f59e0b', marginBottom: '15px'}}>How do I become a provider?</h4>
              <p style={{color: '#6b7280', fontSize: '0.95rem', lineHeight: '1.6'}}>
                Visit our Careers page and click "Enlist as Provider" to start the application process. We'll guide you 
                through registration, verification, and onboarding.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
import { useState } from 'react'
import { Link } from 'react-router-dom'
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
    <div style={{background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', minHeight: '100vh'}}>
      {/* Hero Section */}
      <section className="hero" style={{
        background: `linear-gradient(135deg, rgba(245, 158, 11, 0.9), rgba(217, 119, 6, 0.8)), url('/images/contact us background image.avif')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '50px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <div style={{textAlign: 'center', color: 'white'}}>
            <h1 style={{
              fontSize: '2.5rem', 
              fontWeight: '700', 
              marginBottom: '15px',
              background: 'linear-gradient(135deg, #ffffff, #fef3c7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)'
            }}>Contact Us</h1>
            <p style={{
              fontSize: '1.1rem', 
              maxWidth: '600px', 
              margin: '0 auto',
              opacity: '0.95',
              textShadow: '0 1px 3px rgba(0,0,0,0.3)'
            }}>
              Get in touch with our team for any questions, support, or partnership opportunities
            </p>
          </div>
        </div>
        {/* Floating elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '70px',
          height: '70px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '15%',
          width: '50px',
          height: '50px',
          background: 'rgba(245, 158, 11, 0.2)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite reverse'
        }}></div>
      </section>

      {/* Contact Information & Form */}
      <section className="container" style={{padding: '40px 0'}}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '30px'}}>
          
          {/* Contact Information */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            borderRadius: '20px',
            padding: '30px',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Background decoration */}
            <div style={{
              position: 'absolute',
              top: '-30px',
              right: '-30px',
              width: '100px',
              height: '100px',
              background: 'rgba(245, 158, 11, 0.1)',
              borderRadius: '50%',
              backdropFilter: 'blur(10px)'
            }}></div>
            
            <h2 style={{
              fontSize: '1.8rem', 
              fontWeight: '700', 
              background: 'linear-gradient(135deg, var(--primary-blue) 0%, #f59e0b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '20px',
              position: 'relative',
              zIndex: 2
            }}>
              Get In Touch
            </h2>
            <p style={{fontSize: '1rem', color: '#6b7280', marginBottom: '25px', lineHeight: '1.5', position: 'relative', zIndex: 2}}>
              We're here to help and answer any questions you might have. We look forward to hearing from you.
            </p>

            <div style={{marginBottom: '40px', position: 'relative', zIndex: 2}}>
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
                <div style={{
                  width: '45px', 
                  height: '45px', 
                  background: 'linear-gradient(135deg, var(--primary-blue), #1e40af)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginRight: '15px',
                  color: 'white',
                  fontSize: '1.1rem',
                  boxShadow: '0 4px 15px rgba(30, 64, 175, 0.3)'
                }}>📍</div>
                <div>
                  <h4 style={{color: '#1f2937', marginBottom: '4px', fontSize: '1rem', fontWeight: '600'}}>Our Location</h4>
                  <p style={{color: '#6b7280', margin: 0, fontSize: '0.9rem'}}>
                    Buziga Katuso<br />
                    P.O. Box: 201036 Kampala GPO, Uganda
                  </p>
                </div>
              </div>

              <div style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
                <div style={{
                  width: '45px', 
                  height: '45px', 
                  background: 'linear-gradient(135deg, var(--primary-blue), #1e40af)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginRight: '15px',
                  color: 'white',
                  fontSize: '1.1rem',
                  boxShadow: '0 4px 15px rgba(30, 64, 175, 0.3)'
                }}>📞</div>
                <div>
                  <h4 style={{color: '#1f2937', marginBottom: '4px', fontSize: '1rem', fontWeight: '600'}}>Phone Number</h4>
                  <p style={{color: '#6b7280', margin: 0, fontSize: '0.9rem'}}>
                    <a href="tel:+256791785931" style={{color: '#6b7280', textDecoration: 'none'}}>
                      +256-791-785931
                    </a>
                  </p>
                </div>
              </div>

              <div style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
                <div style={{
                  width: '45px', 
                  height: '45px', 
                  background: 'linear-gradient(135deg, var(--primary-blue), #1e40af)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginRight: '15px',
                  color: 'white',
                  fontSize: '1.1rem',
                  boxShadow: '0 4px 15px rgba(30, 64, 175, 0.3)'
                }}>✉️</div>
                <div>
                  <h4 style={{color: '#1f2937', marginBottom: '4px', fontSize: '1rem', fontWeight: '600'}}>Email Address</h4>
                  <p style={{color: '#6b7280', margin: 0, fontSize: '0.9rem'}}>
                    <a href="mailto:qncsolutions3@gmail.com" style={{color: '#6b7280', textDecoration: 'none'}}>
                      qncsolutions3@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
                <div style={{
                  width: '45px', 
                  height: '45px', 
                  background: 'linear-gradient(135deg, var(--primary-blue), #1e40af)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginRight: '15px',
                  color: 'white',
                  fontSize: '1.1rem',
                  boxShadow: '0 4px 15px rgba(30, 64, 175, 0.3)'
                }}>🕒</div>
                <div>
                  <h4 style={{color: '#1f2937', marginBottom: '4px', fontSize: '1rem', fontWeight: '600'}}>Business Hours</h4>
                  <p style={{color: '#6b7280', margin: 0, fontSize: '0.9rem'}}>
                    Monday - Friday: 8:00 AM - 6:00 PM (EAT)<br />
                    Saturday: 9:00 AM - 4:00 PM (EAT)<br />
                    Sunday: Emergency services only
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div style={{marginTop: '25px', position: 'relative', zIndex: 2}}>
              <h4 style={{color: '#1f2937', marginBottom: '15px', textAlign: 'center', fontSize: '1.1rem', fontWeight: '600'}}>Connect With Us</h4>
              <div style={{display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap'}}>
                <a 
                  href="https://facebook.com/qncsolutions" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    width: '45px',
                    height: '45px',
                    background: 'linear-gradient(135deg, #1877f2, #166fe5)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.3rem',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(24, 119, 242, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                    e.target.style.boxShadow = '0 6px 20px rgba(24, 119, 242, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 4px 15px rgba(24, 119, 242, 0.3)';
                  }}
                >
                  📘
                </a>
                <a 
                  href="https://twitter.com/qncsolutions" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    width: '45px',
                    height: '45px',
                    background: 'linear-gradient(135deg, #1da1f2, #1a91da)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.3rem',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(29, 161, 242, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                    e.target.style.boxShadow = '0 6px 20px rgba(29, 161, 242, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 4px 15px rgba(29, 161, 242, 0.3)';
                  }}
                >
                  🐦
                </a>
                <a 
                  href="https://linkedin.com/company/qncsolutions" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    width: '45px',
                    height: '45px',
                    background: 'linear-gradient(135deg, #0077b5, #006fa6)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.3rem',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(0, 119, 181, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                    e.target.style.boxShadow = '0 6px 20px rgba(0, 119, 181, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 4px 15px rgba(0, 119, 181, 0.3)';
                  }}
                >
                  💼
                </a>
                <a 
                  href="https://instagram.com/qncsolutions" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    width: '45px',
                    height: '45px',
                    background: 'linear-gradient(135deg, #e4405f, #d73447)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.3rem',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(228, 64, 95, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                    e.target.style.boxShadow = '0 6px 20px rgba(228, 64, 95, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 4px 15px rgba(228, 64, 95, 0.3)';
                  }}
                >
                  📷
                </a>
                <a 
                  href="https://wa.me/256791785931" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    width: '45px',
                    height: '45px',
                    background: 'linear-gradient(135deg, #25d366, #20ba5a)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.3rem',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                    e.target.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.3)';
                  }}
                >
                  💬
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div style={{
              background: 'rgba(255, 255, 255, 0.3)',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              borderRadius: '20px',
              padding: '30px',
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Background decoration */}
              <div style={{
                position: 'absolute',
                top: '-30px',
                right: '-30px',
                width: '100px',
                height: '100px',
                background: 'rgba(30, 64, 175, 0.1)',
                borderRadius: '50%',
                backdropFilter: 'blur(10px)'
              }}></div>
              
              <h3 style={{
                fontSize: '1.6rem', 
                fontWeight: '700', 
                background: 'linear-gradient(135deg, var(--primary-blue) 0%, #f59e0b 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '20px',
                position: 'relative',
                zIndex: 2
              }}>
                Send Us a Message
              </h3>
              
              <form onSubmit={handleSubmit} style={{position: 'relative', zIndex: 2}}>
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
                    style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: '10px'
                    }}
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
                    style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: '10px'
                    }}
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
                    style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: '10px'
                    }}
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
                    style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: '10px'
                    }}
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
                    rows="4"
                    required
                    disabled={loading}
                    style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: '10px'
                    }}
                  />
                </div>

                <button 
                  type="submit" 
                  style={{
                    width: '100%',
                    background: loading ? 'rgba(156, 163, 175, 0.5)' : 'linear-gradient(135deg, #7c2d12, #991b1b)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '15px',
                    padding: '12px 20px',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: loading ? 'none' : '0 4px 15px rgba(124, 45, 18, 0.3)'
                  }}
                  disabled={loading}
                  onMouseEnter={(e) => {
                    if (!loading) {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 6px 20px rgba(124, 45, 18, 0.4)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!loading) {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 4px 15px rgba(124, 45, 18, 0.3)';
                    }
                  }}
                >
                  {loading ? '📤 Sending...' : '📤 Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section with Links and Map */}
      <section style={{
        background: 'linear-gradient(135deg, var(--primary-blue), #1e40af)', 
        color: 'white', 
        padding: '30px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '25px'}}>
            
            {/* Quick Links */}
            <div>
              <h4 style={{fontSize: '1.1rem', marginBottom: '12px', color: '#f3f4f6', fontWeight: '600'}}>Quick Links</h4>
              <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                <li style={{marginBottom: '8px'}}>
                  <Link to="/about" style={{color: '#d1d5db', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.3s ease'}}
                    onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                    onMouseLeave={(e) => e.target.style.color = '#d1d5db'}>About Us</Link>
                </li>
                <li style={{marginBottom: '8px'}}>
                  <Link to="/services" style={{color: '#d1d5db', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.3s ease'}}
                    onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                    onMouseLeave={(e) => e.target.style.color = '#d1d5db'}>Our Services</Link>
                </li>
                <li style={{marginBottom: '8px'}}>
                  <Link to="/careers" style={{color: '#d1d5db', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.3s ease'}}
                    onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                    onMouseLeave={(e) => e.target.style.color = '#d1d5db'}>Careers</Link>
                </li>
                <li style={{marginBottom: '8px'}}>
                  <Link to="/contact" style={{color: '#d1d5db', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.3s ease'}}
                    onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                    onMouseLeave={(e) => e.target.style.color = '#d1d5db'}>Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 style={{fontSize: '1.1rem', marginBottom: '12px', color: '#f3f4f6', fontWeight: '600'}}>Our Services</h4>
              <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                <li style={{marginBottom: '8px'}}>
                  <Link to="/book" style={{color: '#d1d5db', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.3s ease'}}
                    onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                    onMouseLeave={(e) => e.target.style.color = '#d1d5db'}>Nursing Care</Link>
                </li>
                <li style={{marginBottom: '8px'}}>
                  <Link to="/book" style={{color: '#d1d5db', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.3s ease'}}
                    onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                    onMouseLeave={(e) => e.target.style.color = '#d1d5db'}>Medical Consultation</Link>
                </li>
                <li style={{marginBottom: '8px'}}>
                  <Link to="/book" style={{color: '#d1d5db', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.3s ease'}}
                    onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                    onMouseLeave={(e) => e.target.style.color = '#d1d5db'}>Caregiver Support</Link>
                </li>
                <li style={{marginBottom: '8px'}}>
                  <Link to="/book" style={{color: '#d1d5db', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.3s ease'}}
                    onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                    onMouseLeave={(e) => e.target.style.color = '#d1d5db'}>Mobile Health</Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 style={{fontSize: '1.1rem', marginBottom: '12px', color: '#f3f4f6', fontWeight: '600'}}>Contact Info</h4>
              <div style={{fontSize: '0.85rem', color: '#d1d5db', lineHeight: '1.5'}}>
                <p style={{marginBottom: '8px'}}>📍 Buziga Katuso<br />P.O. Box: 201036 Kampala GPO, Uganda</p>
                <p style={{marginBottom: '8px'}}>📞 <a href="tel:+256791785931" style={{color: '#d1d5db', textDecoration: 'none'}}>+256-791-785931</a></p>
                <p style={{marginBottom: '8px'}}>✉️ <a href="mailto:qncsolutions3@gmail.com" style={{color: '#d1d5db', textDecoration: 'none'}}>qncsolutions3@gmail.com</a></p>
              </div>
            </div>

            {/* Location Map */}
            <div>
              <h4 style={{fontSize: '1.1rem', marginBottom: '12px', color: '#f3f4f6', fontWeight: '600'}}>Our Location</h4>
              <div style={{
                width: '100%',
                height: '150px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                overflow: 'hidden'
              }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7520895823944!2d32.6078!3d0.2619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0f9c3b5555%3A0x1234567890abcdef!2sBuziga%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{border: 0, borderRadius: '12px'}}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="QNC Solutions Location"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            marginTop: '25px',
            paddingTop: '12px',
            textAlign: 'center',
            fontSize: '0.8rem',
            color: '#d1d5db'
          }}>
            <p style={{margin: 0}}>
              © 2026 QNC Solutions. All rights reserved. | Professional Healthcare Services in Uganda
            </p>
          </div>
        </div>
        
        {/* Floating elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '60px',
          height: '60px',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '15%',
          right: '8%',
          width: '40px',
          height: '40px',
          background: 'rgba(245, 158, 11, 0.2)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite reverse'
        }}></div>
      </section>
    </div>
  )
}

export default Contact
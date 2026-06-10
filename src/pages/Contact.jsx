import { useState } from 'react'
import { useToast } from '../contexts/ToastContext'
import SEO from '../components/SEO'

function Contact() {
  const { showToast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      showToast('Message sent successfully! We will get back to you soon.', 'success')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      showToast('Failed to send message. Please try again.', 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div style={{background: '#ffffff', minHeight: '100vh'}}>
      <SEO 
        title="Contact Us - QNC Solutions"
        description="Get in touch with QNC Solutions for professional healthcare services. Located in Buziga Katuso, Kampala, Uganda. Call us or send a message."
        keywords="contact QNC, healthcare Uganda, nursing services contact"
        canonical="https://www.qncsolutions.com/contact"
      />

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, var(--primary-blue), #1e40af)',
        color: 'white',
        padding: '60px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{fontSize: '2.5rem', fontWeight: '700', marginBottom: '15px'}}>
            Contact Us
          </h1>
          <p style={{fontSize: '1.1rem', opacity: '0.95'}}>
            We're here to provide the care and support you need.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section style={{padding: '60px 0', background: '#f9fafb'}}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '50px',
            alignItems: 'start'
          }}>
            
            {/* Contact Form */}
            <div>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: 'var(--primary-blue)',
                marginBottom: '25px'
              }}>Send Us a Message</h2>

              <form onSubmit={handleSubmit} style={{
                background: 'white',
                padding: '35px',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}>
                <div style={{marginBottom: '20px'}}>
                  <label style={{
                    display: 'block',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '8px'
                  }}>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      fontSize: '1rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '4px',
                      outline: 'none',
                      transition: 'border 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary-blue)'}
                    onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                  />
                </div>

                <div style={{marginBottom: '20px'}}>
                  <label style={{
                    display: 'block',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '8px'
                  }}>Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      fontSize: '1rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '4px',
                      outline: 'none',
                      transition: 'border 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary-blue)'}
                    onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                  />
                </div>

                <div style={{marginBottom: '20px'}}>
                  <label style={{
                    display: 'block',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '8px'
                  }}>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      fontSize: '1rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '4px',
                      outline: 'none',
                      transition: 'border 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary-blue)'}
                    onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                  />
                </div>

                <div style={{marginBottom: '25px'}}>
                  <label style={{
                    display: 'block',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '8px'
                  }}>Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    style={{
                      width: '100%',
                      padding: '12px',
                      fontSize: '1rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '4px',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary-blue)'}
                    onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    background: 'var(--primary-maroon)',
                    color: 'white',
                    padding: '14px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    opacity: isSubmitting ? 0.7 : 1,
                    transition: 'all 0.3s ease'
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: 'var(--primary-blue)',
                marginBottom: '25px'
              }}>Contact Information</h2>

              <div style={{
                background: 'white',
                padding: '35px',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                marginBottom: '30px'
              }}>
                <div style={{marginBottom: '25px'}}>
                  <div style={{display: 'flex', alignItems: 'start', gap: '15px'}}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      background: '#eff6ff',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      flexShrink: 0
                    }}>📍</div>
                    <div>
                      <h3 style={{
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        color: 'var(--primary-blue)',
                        marginBottom: '8px'
                      }}>Buziga Katuso</h3>
                      <p style={{
                        fontSize: '0.95rem',
                        color: '#6b7280',
                        lineHeight: '1.6',
                        margin: 0
                      }}>
                        P.O. Box: 201036<br />
                        Kampala GPO, Uganda
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{marginBottom: '25px'}}>
                  <div style={{display: 'flex', alignItems: 'start', gap: '15px'}}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      background: '#fef3c7',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      flexShrink: 0
                    }}>📞</div>
                    <div>
                      <h3 style={{
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        color: 'var(--primary-blue)',
                        marginBottom: '8px'
                      }}>+256 791 785 931</h3>
                      <p style={{
                        fontSize: '0.95rem',
                        color: '#6b7280',
                        margin: 0
                      }}>
                        8AM - 7PM Mon-Fri, 8AM - 4PM Sat
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{marginBottom: '25px'}}>
                  <div style={{display: 'flex', alignItems: 'start', gap: '15px'}}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      background: '#fce7f3',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      flexShrink: 0
                    }}>✉️</div>
                    <div>
                      <h3 style={{
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        color: 'var(--primary-blue)',
                        marginBottom: '8px'
                      }}>qncsolutions3@gmail.com</h3>
                      <p style={{
                        fontSize: '0.95rem',
                        color: '#6b7280',
                        margin: 0
                      }}>
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div style={{display: 'flex', alignItems: 'start', gap: '15px'}}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      background: '#d1fae5',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      flexShrink: 0
                    }}>🕐</div>
                    <div>
                      <h3 style={{
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        color: 'var(--primary-blue)',
                        marginBottom: '8px'
                      }}>24/7 - We never close</h3>
                      <p style={{
                        fontSize: '0.95rem',
                        color: '#6b7280',
                        margin: 0
                      }}>
                        Always here for urgent care
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div style={{
                height: '300px',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7520895823944!2d32.6078!3d0.2619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0f9c3b5555%3A0x1234567890abcdef!2sBuziga%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{border: 0}}
                  allowFullScreen=""
                  loading="lazy"
                  title="QNC Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section style={{
        background: 'linear-gradient(135deg, var(--primary-maroon), #7c2d12)',
        padding: '40px 0',
        textAlign: 'center',
        color: 'white'
      }}>
        <div className="container">
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginBottom: '15px'}}>
            <div style={{fontSize: '2rem'}}>💚</div>
            <h2 style={{fontSize: '1.5rem', fontWeight: '600', margin: 0}}>
              Quality care, Compassionate service, Always with you.
            </h2>
          </div>
          <div style={{display: 'flex', gap: '30px', justifyContent: 'center', fontSize: '2rem'}}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{color: 'white', textDecoration: 'none'}}>📘</a>
            <a href="https://wa.me/256791785931" target="_blank" rel="noopener noreferrer" style={{color: 'white', textDecoration: 'none'}}>💬</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{color: 'white', textDecoration: 'none'}}>💼</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section style={{backgroundColor: 'var(--primary-blue)', color: 'white', padding: '40px 0'}}>
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px'}}>
            
            <div>
              <h4 style={{fontSize: '1.2rem', marginBottom: '15px'}}>Quick Links</h4>
              <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                <li style={{marginBottom: '10px'}}><a href="/" style={{color: '#d1d5db', textDecoration: 'none'}}>Home</a></li>
                <li style={{marginBottom: '10px'}}><a href="/about" style={{color: '#d1d5db', textDecoration: 'none'}}>About Us</a></li>
                <li style={{marginBottom: '10px'}}><a href="/services" style={{color: '#d1d5db', textDecoration: 'none'}}>Services & Solutions</a></li>
                <li style={{marginBottom: '10px'}}><a href="/careers" style={{color: '#d1d5db', textDecoration: 'none'}}>Careers</a></li>
                <li style={{marginBottom: '10px'}}><a href="/contact" style={{color: '#d1d5db', textDecoration: 'none'}}>Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 style={{fontSize: '1.2rem', marginBottom: '15px'}}>Our Services</h4>
              <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                <li style={{marginBottom: '10px'}}><span style={{color: '#d1d5db'}}>Nursing Care</span></li>
                <li style={{marginBottom: '10px'}}><span style={{color: '#d1d5db'}}>Medical Consultation</span></li>
                <li style={{marginBottom: '10px'}}><span style={{color: '#d1d5db'}}>Caregiver Support</span></li>
                <li style={{marginBottom: '10px'}}><span style={{color: '#d1d5db'}}>Mobile Health</span></li>
              </ul>
            </div>

            <div>
              <h4 style={{fontSize: '1.2rem', marginBottom: '15px'}}>Contact Info</h4>
              <div style={{fontSize: '0.9rem', color: '#d1d5db', lineHeight: '1.8'}}>
                <p style={{marginBottom: '10px'}}>📍 Buziga Katuso<br />P.O. Box: 201036 Kampala GPO, Uganda</p>
                <p style={{marginBottom: '10px'}}>📞 <a href="tel:+256791785931" style={{color: '#d1d5db', textDecoration: 'none'}}>+256-791-785931</a></p>
                <p>✉️ <a href="mailto:qncsolutions3@gmail.com" style={{color: '#d1d5db', textDecoration: 'none'}}>qncsolutions3@gmail.com</a></p>
              </div>
            </div>

            <div>
              <h4 style={{fontSize: '1.2rem', marginBottom: '15px'}}>Our Location</h4>
              <div style={{
                width: '100%',
                height: '180px',
                backgroundColor: '#374151',
                borderRadius: '8px',
                overflow: 'hidden'
              }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7520895823944!2d32.6078!3d0.2619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0f9c3b5555%3A0x1234567890abcdef!2sBuziga%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{border: 0}}
                  allowFullScreen=""
                  loading="lazy"
                  title="QNC Location"
                ></iframe>
              </div>
            </div>
          </div>

          <div style={{
            borderTop: '1px solid #374151',
            marginTop: '30px',
            paddingTop: '20px',
            textAlign: 'center',
            fontSize: '0.85rem',
            color: '#9ca3af'
          }}>
            <p style={{margin: '0 0 8px 0'}}>
              © 2026 QNC Solutions. All rights reserved. | Professional Healthcare Services in Uganda
            </p>
            <p style={{margin: 0, fontStyle: 'italic'}}>
              Made by <span style={{fontWeight: '700', color: '#ffffff'}}>INFINITI ANALYTICS</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

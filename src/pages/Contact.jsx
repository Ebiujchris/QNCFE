import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useToast } from '../contexts/ToastContext'
import SEO from '../components/SEO'

const contactInfo = [
  {
    label: 'Address',
    value: 'Buziga Katuso\nP.O. Box 201036\nKampala GPO, Uganda',
    sub: null
  },
  {
    label: 'Phone',
    value: '+256 791 785 931',
    sub: '8AM–7PM Mon–Fri, 8AM–4PM Sat',
    href: 'tel:+256791785931'
  },
  {
    label: 'Email',
    value: 'qncsolutions3@gmail.com',
    sub: "We'll respond within 24 hours",
    href: 'mailto:qncsolutions3@gmail.com'
  },
  {
    label: 'Availability',
    value: '24/7 — We Never Close',
    sub: 'Always here for urgent care'
  }
]

function Contact() {
  const { showToast } = useToast()
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      showToast('Message sent successfully! We will get back to you soon.', 'success')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch {
      showToast('Failed to send message. Please try again.', 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputStyle = {
    width: '100%',
    padding: '13px 16px',
    fontSize: '0.93rem',
    border: '1.5px solid #e5e7eb',
    borderRadius: '8px',
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    background: '#fafafa',
    color: '#1f2937',
    boxSizing: 'border-box'
  }

  return (
    <div style={{background: '#ffffff', minHeight: '100vh'}}>
      <SEO
        title="Contact Us - QNC Solutions"
        description="Get in touch with QNC Solutions for professional healthcare services. Located in Buziga Katuso, Kampala, Uganda."
        keywords="contact QNC, healthcare Uganda, nursing services contact"
        canonical="https://www.qncsolutions.com/contact"
      />

      {/* ── Hero ── */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '42vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: "url('/images/contact us background image.avif')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(105deg, rgba(15,32,87,0.92) 0%, rgba(15,32,87,0.65) 100%)',
          zIndex: 1
        }} />
        <div className="container" style={{position: 'relative', zIndex: 2, padding: '70px 24px'}}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(255,255,255,0.12)',
            color: 'rgba(255,255,255,0.9)',
            fontSize: '0.78rem',
            fontWeight: '700',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            padding: '6px 16px',
            borderRadius: '20px',
            marginBottom: '18px',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>Reach Out</span>
          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '800',
            color: 'white',
            lineHeight: '1.2',
            letterSpacing: '-0.5px',
            maxWidth: '520px',
            marginBottom: '14px'
          }}>Contact Us</h1>
          <p style={{color: 'rgba(255,255,255,0.75)', fontSize: '1rem', maxWidth: '420px', lineHeight: '1.7', margin: 0}}>
            We're here to answer your questions and connect you with the right care.
          </p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section style={{padding: '80px 0', background: '#f8fafd'}}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: '48px',
            alignItems: 'start'
          }}>

            {/* Form */}
            <div>
              <span style={{
                display: 'inline-block',
                background: 'var(--primary-blue)',
                color: 'white',
                fontWeight: '700',
                fontSize: '0.78rem',
                padding: '5px 14px',
                borderRadius: '20px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                marginBottom: '14px'
              }}>Send a Message</span>
              <h2 style={{
                fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
                fontWeight: '800',
                color: 'var(--primary-blue)',
                marginBottom: '28px',
                letterSpacing: '-0.3px'
              }}>Get In Touch</h2>

              <form onSubmit={handleSubmit} style={{
                background: 'white',
                padding: '36px',
                borderRadius: '14px',
                boxShadow: '0 8px 32px rgba(30,64,175,0.08)',
                border: '1px solid #e8edf5'
              }}>
                {[
                  { label: 'Your Name', name: 'name', type: 'text' },
                  { label: 'Your Email', name: 'email', type: 'email' },
                  { label: 'Phone Number', name: 'phone', type: 'tel' }
                ].map(field => (
                  <div key={field.name} style={{marginBottom: '20px'}}>
                    <label style={{
                      display: 'block',
                      fontSize: '0.82rem',
                      fontWeight: '700',
                      color: '#374151',
                      marginBottom: '7px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required
                      style={inputStyle}
                      onFocus={e => { e.target.style.borderColor = 'var(--primary-blue)'; e.target.style.boxShadow = '0 0 0 3px rgba(30,64,175,0.08)'; }}
                      onBlur={e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none'; }}
                    />
                  </div>
                ))}

                <div style={{marginBottom: '28px'}}>
                  <label style={{
                    display: 'block',
                    fontSize: '0.82rem',
                    fontWeight: '700',
                    color: '#374151',
                    marginBottom: '7px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    style={{...inputStyle, resize: 'vertical'}}
                    onFocus={e => { e.target.style.borderColor = 'var(--primary-blue)'; e.target.style.boxShadow = '0 0 0 3px rgba(30,64,175,0.08)'; }}
                    onBlur={e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none'; }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    background: isSubmitting ? '#9ca3af' : 'var(--primary-maroon)',
                    color: 'white',
                    padding: '14px',
                    fontSize: '0.95rem',
                    fontWeight: '700',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    letterSpacing: '0.3px',
                    boxShadow: isSubmitting ? 'none' : '0 4px 16px rgba(124,45,18,0.28)',
                    transition: 'all 0.25s ease'
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Info + Map */}
            <div>
              <span style={{
                display: 'inline-block',
                background: 'rgba(124,45,18,0.08)',
                color: 'var(--primary-maroon)',
                fontWeight: '700',
                fontSize: '0.78rem',
                padding: '5px 14px',
                borderRadius: '20px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                marginBottom: '14px',
                border: '1px solid rgba(124,45,18,0.15)'
              }}>Contact Details</span>
              <h2 style={{
                fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
                fontWeight: '800',
                color: 'var(--primary-blue)',
                marginBottom: '28px',
                letterSpacing: '-0.3px'
              }}>Contact Information</h2>

              <div style={{
                background: 'white',
                borderRadius: '14px',
                padding: '32px',
                boxShadow: '0 8px 32px rgba(30,64,175,0.08)',
                border: '1px solid #e8edf5',
                marginBottom: '24px'
              }}>
                {contactInfo.map((info, i) => (
                  <div key={i} style={{
                    padding: '18px 0',
                    borderBottom: i < contactInfo.length - 1 ? '1px solid #f3f4f6' : 'none'
                  }}>
                    <p style={{
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      color: 'var(--primary-blue)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '4px'
                    }}>{info.label}</p>
                    {info.href ? (
                      <a href={info.href} style={{
                        fontSize: '0.95rem',
                        fontWeight: '600',
                        color: 'var(--primary-maroon)',
                        textDecoration: 'none',
                        display: 'block'
                      }}>{info.value}</a>
                    ) : (
                      <p style={{
                        fontSize: '0.95rem',
                        fontWeight: '600',
                        color: 'var(--primary-maroon)',
                        margin: 0,
                        whiteSpace: 'pre-line'
                      }}>{info.value}</p>
                    )}
                    {info.sub && (
                      <p style={{fontSize: '0.83rem', color: '#9ca3af', margin: '3px 0 0'}}>{info.sub}</p>
                    )}
                  </div>
                ))}
              </div>

              <div style={{height: '260px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e8edf5', boxShadow: '0 4px 16px rgba(30,64,175,0.06)'}}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7520895823944!2d32.6078!3d0.2619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0f9c3b5555%3A0x1234567890abcdef!2sBuziga%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%" height="100%"
                  style={{border: 0}} allowFullScreen="" loading="lazy" title="QNC Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{backgroundColor: '#0f2057', color: 'white', padding: '56px 0 0'}}>
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px', paddingBottom: '48px'}}>
            <div>
              <div style={{fontSize: '1.1rem', fontWeight: '800', color: 'white', marginBottom: '6px'}}>QNC Solutions</div>
              <p style={{fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', marginBottom: '20px', lineHeight: '1.6'}}>Exceptional care for every journey. Health with Heart.</p>
              <div style={{width: '36px', height: '3px', background: 'var(--primary-maroon)', borderRadius: '2px'}} />
            </div>
            <div>
              <h4 style={{fontSize: '0.78rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '18px'}}>Quick Links</h4>
              <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                {[{to:'/',label:'Home'},{to:'/about',label:'About Us'},{to:'/services',label:'Services'},{to:'/careers',label:'Careers'},{to:'/contact',label:'Contact Us'}].map(l => (
                  <li key={l.to} style={{marginBottom: '10px'}}>
                    <Link to={l.to} style={{color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem'}}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{fontSize: '0.78rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '18px'}}>Contact Info</h4>
              <div style={{fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.9'}}>
                <p style={{marginBottom: '8px'}}>Buziga Katuso, Kampala GPO<br/>P.O. Box 201036, Uganda</p>
                <p style={{marginBottom: '8px'}}><a href="tel:+256791785931" style={{color: 'rgba(255,255,255,0.7)', textDecoration: 'none'}}>+256-791-785931</a></p>
                <p><a href="mailto:qncsolutions3@gmail.com" style={{color: 'rgba(255,255,255,0.7)', textDecoration: 'none'}}>qncsolutions3@gmail.com</a></p>
              </div>
            </div>
            <div>
              <h4 style={{fontSize: '0.78rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '18px'}}>Our Location</h4>
              <div style={{width: '100%', height: '160px', borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)'}}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7520895823944!2d32.6078!3d0.2619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0f9c3b5555%3A0x1234567890abcdef!2sBuziga%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" title="QNC Location" />
              </div>
            </div>
          </div>
          <div style={{borderTop: '1px solid rgba(255,255,255,0.08)', padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px'}}>
            <p style={{margin: 0, fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)'}}>© 2026 QNC Solutions. All rights reserved.</p>
            <p style={{margin: 0, fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic'}}>Made by <span style={{fontWeight: '700', color: 'rgba(255,255,255,0.7)'}}>INFINITI ANALYTICS</span></p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Contact

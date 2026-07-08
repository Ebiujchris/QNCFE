import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const services = [
  {
    title: 'Nursing & Home-Based Care Services',
    desc: 'Get the care you need, right in the comfort of your home. Our professionals deliver skilled, reliable, and compassionate care tailored to support your health, dignity, and well-being every step of the way.',
    items: [
      'Elderly care',
      'Post-surgery and post-care monitoring',
      'Chronic illness management and medication management',
      'Chronic disease management and palliative care support'
    ]
  },
  {
    title: 'Field Medical Support Services',
    desc: 'Whether on-site medical support for construction sites, events, schools, offices, emergency response, health monitoring, or first aid — we bring care where you need it most.',
    items: [
      'On-site nursing support for construction sites, events, schools, offices',
      'Emergency response, health monitoring, and first aid',
      'Injury management and consultation',
      'Industrial and occupational health services'
    ]
  },
  {
    title: 'Mobile Health Services',
    desc: 'Our fully mobile health team provides flexible, on-site, on-call, delivery, administration of injections, and comprehensive health monitoring right at your home, workplace, or community.',
    items: [
      'Medication delivery and administration',
      'Vital signs monitoring, testing, and health assessments',
      'Vaccination and immunization services',
      'Nutrition counseling and psychosocial support'
    ]
  }
]

const galleryItems = [
  { src: '/images/nurse with elder.jfif', alt: 'Elderly care', title: 'Elderly Care', desc: 'Personalized support for daily living activities with dignity and respect.' },
  { src: '/images/postnatal-care1.jpeg', alt: 'Post-surgery care', title: 'Post-Surgery Recovery', desc: 'Professional care during your important recovery phase.' },
  { src: '/images/medical services pic.jpg', alt: 'Chronic care', title: 'Chronic & Medication Care', desc: 'Ongoing support for chronic conditions and medication administration.' },
  { src: '/images/help image.avif', alt: 'Palliative care', title: 'Palliative Care Support', desc: 'Compassionate care for long-term health conditions with dignity.' },
  { src: '/images/social medical research pic.jpg', alt: 'Rehabilitation', title: 'Rehabilitation & Counseling', desc: 'Structured programs to support your journey to wellness.' },
  { src: '/images/homepage photo new.jpg', alt: 'Physiotherapy', title: 'Physiotherapist Support', desc: 'Specialized support for mobility, pain management, and recovery.' }
]

function Services() {
  return (
    <div style={{background: '#ffffff', minHeight: '100vh'}}>
      <SEO
        title="Our Services - QNC Solutions Healthcare"
        description="Explore our comprehensive healthcare services: Nursing & Home-Based Care, Field Medical Support, and Mobile Health Services across Uganda."
        keywords="nursing services, home care, field medical support, mobile health, healthcare Uganda"
        canonical="https://www.qncsolutions.com/services"
      />

      {/* ── Hero ── */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '62vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url("/images/healthcare.avif")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(105deg, rgba(15,32,87,0.92) 0%, rgba(15,32,87,0.72) 55%, rgba(15,32,87,0.25) 100%)',
          zIndex: 1
        }} />
        <div className="container" style={{position: 'relative', zIndex: 2, padding: '80px 24px'}}>
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
            marginBottom: '22px',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>What We Offer</span>
          <h1 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            fontWeight: '800',
            color: 'white',
            lineHeight: '1.18',
            letterSpacing: '-0.5px',
            maxWidth: '600px',
            marginBottom: '20px'
          }}>Our Core Services</h1>
          <p style={{
            fontSize: '1.05rem',
            color: 'rgba(255,255,255,0.8)',
            lineHeight: '1.75',
            maxWidth: '480px',
            margin: 0
          }}>Professional care. Wherever you are. Whenever you need it.</p>
        </div>
      </section>

      {/* ── Service Cards ── */}
      <section style={{padding: '80px 0', background: '#f8fafd'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '52px'}}>
            <span style={{
              display: 'inline-block',
              background: 'var(--primary-blue)',
              color: 'white',
              fontWeight: '700',
              fontSize: '0.78rem',
              padding: '6px 18px',
              borderRadius: '20px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '14px'
            }}>Services</span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: '800',
              color: 'var(--primary-blue)',
              letterSpacing: '-0.3px'
            }}>Comprehensive Healthcare Solutions</h2>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px'}}>
            {services.map((svc, i) => (
              <div key={i} style={{
                background: 'white',
                borderRadius: '14px',
                overflow: 'hidden',
                border: '1.5px solid #e8edf5',
                transition: 'box-shadow 0.25s ease, transform 0.25s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(30,64,175,0.12)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, var(--primary-blue) 0%, #1e3a8a 100%)',
                  padding: '32px 28px'
                }}>
                  <h2 style={{
                    fontSize: '1.1rem',
                    fontWeight: '800',
                    color: 'white',
                    margin: 0,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    lineHeight: '1.4'
                  }}>{svc.title}</h2>
                </div>
                <div style={{padding: '28px'}}>
                  <p style={{fontSize: '0.93rem', color: '#4b5563', lineHeight: '1.75', marginBottom: '20px'}}>
                    {svc.desc}
                  </p>
                  <h3 style={{
                    fontSize: '0.78rem',
                    fontWeight: '700',
                    color: 'var(--primary-blue)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '12px'
                  }}>Services Include:</h3>
                  <ul style={{listStyle: 'none', padding: 0, margin: '0 0 24px'}}>
                    {svc.items.map((item, j) => (
                      <li key={j} style={{
                        fontSize: '0.9rem',
                        color: '#374151',
                        padding: '7px 0',
                        borderBottom: '1px solid #f3f4f6',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px'
                      }}>
                        <span style={{
                          width: '6px', height: '6px',
                          borderRadius: '50%',
                          background: 'var(--primary-maroon)',
                          flexShrink: 0,
                          marginTop: '6px'
                        }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link to="/book" style={{
                    background: 'var(--primary-maroon)',
                    color: 'white',
                    textDecoration: 'none',
                    padding: '11px 28px',
                    borderRadius: '6px',
                    fontSize: '0.88rem',
                    fontWeight: '700',
                    display: 'inline-block',
                    boxShadow: '0 4px 14px rgba(124,45,18,0.25)',
                    letterSpacing: '0.3px'
                  }}>Request Service</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery / Home-Based Services ── */}
      <section style={{padding: '80px 0', background: 'white'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '52px'}}>
            <span style={{
              display: 'inline-block',
              background: 'rgba(124,45,18,0.08)',
              color: 'var(--primary-maroon)',
              fontWeight: '700',
              fontSize: '0.78rem',
              padding: '6px 18px',
              borderRadius: '20px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '14px',
              border: '1px solid rgba(124,45,18,0.15)'
            }}>In Practice</span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: '800',
              color: 'var(--primary-blue)',
              letterSpacing: '-0.3px'
            }}>Our Home-Based Services</h2>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px'}}>
            {galleryItems.map((item, i) => (
              <div key={i} style={{
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid #e8edf5',
                transition: 'box-shadow 0.25s ease, transform 0.25s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(30,64,175,0.1)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <img
                  src={item.src}
                  alt={item.alt}
                  style={{width: '100%', height: '220px', objectFit: 'cover', display: 'block'}}
                />
                <div style={{padding: '20px 22px'}}>
                  <h3 style={{
                    fontSize: '0.95rem',
                    fontWeight: '700',
                    color: 'var(--primary-maroon)',
                    marginBottom: '6px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.4px'
                  }}>{item.title}</h3>
                  <p style={{fontSize: '0.88rem', color: '#6b7280', lineHeight: '1.6', margin: 0}}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{
        padding: '70px 0',
        background: 'linear-gradient(135deg, var(--primary-blue) 0%, #1e3a8a 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{position: 'absolute', right: '-80px', top: '-80px', width: '320px', height: '320px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)'}} />
        <div className="container" style={{position: 'relative', zIndex: 1}}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '30px'}}>
            <div style={{flex: '1', minWidth: '280px'}}>
              <p style={{color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '10px'}}>Get Started</p>
              <h2 style={{fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: '800', color: 'white', lineHeight: '1.3', margin: 0}}>
                Need Professional Healthcare Services?
              </h2>
            </div>
            <Link to="/contact" style={{
              background: 'white',
              color: 'var(--primary-blue)',
              textDecoration: 'none',
              padding: '15px 36px',
              borderRadius: '6px',
              fontSize: '0.95rem',
              fontWeight: '800',
              display: 'inline-block',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
              flexShrink: 0
            }}>Get Started</Link>
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

export default Services

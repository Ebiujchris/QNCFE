import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SEO from '../components/SEO'

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const backgroundImages = [
    '/images/horizontal homepage image put i n the background.avif',
    '/images/home page image.avif',
    '/images/home page image 2.avif',
    '/images/homepage photo new.jpg',
    '/images/homepage backgorund photo 2.jpg',
    '/images/homepage background photo 3.jpg',
    '/images/healthcare.avif',
    '/images/new background image.avif'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      )
    }, 5000)
    return () => clearInterval(interval)
  }, [backgroundImages.length])

  return (
    <div style={{background: '#ffffff', minHeight: '100vh'}}>
      <SEO 
        title="QNC Solutions - Quality Healthcare Services at Home"
        description="Professional healthcare services delivered to your home. Book qualified nurses, medical services, nutrition counseling, and postnatal care."
        keywords="home healthcare, nursing services, medical care, postnatal care, nutrition counseling, bedside nursing, healthcare Uganda"
        canonical="https://www.qncsolutions.com/"
      />
      
      {/* Hero Section */}
      <section style={{
        background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${backgroundImages[currentImageIndex]}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background-image 1s ease-in-out',
        padding: '100px 0'
      }}>
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <div style={{
            textAlign: 'left',
            color: 'white',
            maxWidth: '600px'
          }}>
            <h1 style={{
              fontSize: '2.8rem',
              fontWeight: '700',
              marginBottom: '20px',
              color: 'white',
              lineHeight: '1.2'
            }}>Quality Nursing Care<br/>Delivered with<br/>Compassion & Excellence</h1>
            <p style={{
              fontSize: '1rem',
              marginBottom: '30px',
              lineHeight: '1.6',
              color: 'white'
            }}>Professional home nursing, field medical support, healthcare advising, nutrition, and reliable medical services across Uganda and beyond.</p>
            <div style={{display: 'flex', gap: '15px'}}>
              <Link to="/book" style={{
                background: 'var(--primary-maroon)',
                color: 'white',
                textDecoration: 'none',
                padding: '12px 28px',
                borderRadius: '4px',
                fontSize: '1rem',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}>
                Request Care
              </Link>
              <Link to="/contact" style={{
                background: 'transparent',
                color: 'white',
                textDecoration: 'none',
                padding: '10px 26px',
                borderRadius: '4px',
                fontSize: '1rem',
                fontWeight: '600',
                border: '2px solid white',
                transition: 'all 0.3s ease'
              }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '8px',
          zIndex: 3
        }}>
          {backgroundImages.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              style={{
                width: index === currentImageIndex ? '30px' : '10px',
                height: '10px',
                borderRadius: '5px',
                background: index === currentImageIndex ? 'white' : 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section style={{padding: '60px 0', background: '#f9fafb'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '50px'}}>
            <h2 style={{fontSize: '2rem', fontWeight: '700', color: 'var(--primary-blue)', marginBottom: '10px'}}>
              Our Core Services
            </h2>
            <p style={{fontSize: '1rem', color: '#6b7280'}}>
              Professional care. Wherever you are. Whenever you need it.
            </p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px'}}>
            {/* Nursing Card */}
            <div style={{
              background: 'white',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{
                background: 'var(--primary-maroon)',
                padding: '40px 20px',
                textAlign: 'center'
              }}>
                <div style={{fontSize: '3rem', marginBottom: '10px'}}>🏠</div>
                <h3 style={{fontSize: '1.3rem', fontWeight: '600', color: 'white'}}>
                  NURSING &<br/>HOME-BASED<br/>CARE SERVICES
                </h3>
              </div>
              <div style={{padding: '20px'}}>
                <p style={{fontSize: '0.9rem', color: '#4b5563', lineHeight: '1.6', marginBottom: '15px'}}>
                  Get the care you need, right in the comfort of your home. Our professionals deliver skilled, reliable, and compassionate care tailored to support your health, dignity, and well-being every step of the way.
                </p>
                <Link to="/services" style={{
                  color: 'var(--primary-maroon)',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '0.9rem'
                }}>
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Field Medical Card */}
            <div style={{
              background: 'white',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{
                background: 'var(--primary-maroon)',
                padding: '40px 20px',
                textAlign: 'center'
              }}>
                <div style={{fontSize: '3rem', marginBottom: '10px'}}>🏥</div>
                <h3 style={{fontSize: '1.3rem', fontWeight: '600', color: 'white'}}>
                  FIELD MEDICAL<br/>SUPPORT SERVICES
                </h3>
              </div>
              <div style={{padding: '20px'}}>
                <p style={{fontSize: '0.9rem', color: '#4b5563', lineHeight: '1.6', marginBottom: '15px'}}>
                  Whether on-site medical support for construction sites, events, schools, offices, emergency response, health monitoring, or first aid — we bring care where you need it most.
                </p>
                <Link to="/services" style={{
                  color: 'var(--primary-maroon)',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '0.9rem'
                }}>
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Mobile Health Card */}
            <div style={{
              background: 'white',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{
                background: 'var(--primary-maroon)',
                padding: '40px 20px',
                textAlign: 'center'
              }}>
                <div style={{fontSize: '3rem', marginBottom: '10px'}}>💉</div>
                <h3 style={{fontSize: '1.3rem', fontWeight: '600', color: 'white'}}>
                  MOBILE HEALTH<br/>SERVICES
                </h3>
              </div>
              <div style={{padding: '20px'}}>
                <p style={{fontSize: '0.9rem', color: '#4b5563', lineHeight: '1.6', marginBottom: '15px'}}>
                  Our fully mobile health team provides flexible, on-site, on-call, delivery, administration of injections, and comprehensive health monitoring, right at your home, workplace, or community, healthcare at your fingertips.
                </p>
                <Link to="/services" style={{
                  color: 'var(--primary-maroon)',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '0.9rem'
                }}>
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{background: 'var(--primary-blue)', color: 'white', padding: '50px 0'}}>
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '40px', textAlign: 'center'}}>
            <div>
              <div style={{fontSize: '2.5rem', fontWeight: '700', marginBottom: '8px'}}>👥</div>
              <div style={{fontSize: '2.5rem', fontWeight: '700', marginBottom: '8px'}}>500+</div>
              <div style={{fontSize: '1rem', opacity: '0.9'}}>Clients Served</div>
            </div>
            <div>
              <div style={{fontSize: '2.5rem', fontWeight: '700', marginBottom: '8px'}}>🤝</div>
              <div style={{fontSize: '2.5rem', fontWeight: '700', marginBottom: '8px'}}>100+</div>
              <div style={{fontSize: '1rem', opacity: '0.9'}}>Healthcare Professionals</div>
            </div>
            <div>
              <div style={{fontSize: '2.5rem', fontWeight: '700', marginBottom: '8px'}}>📋</div>
              <div style={{fontSize: '2.5rem', fontWeight: '700', marginBottom: '8px'}}>10+</div>
              <div style={{fontSize: '1rem', opacity: '0.9'}}>Years of Experience</div>
            </div>
            <div>
              <div style={{fontSize: '2.5rem', fontWeight: '700', marginBottom: '8px'}}>🌍</div>
              <div style={{fontSize: '2.5rem', fontWeight: '700', marginBottom: '8px'}}>24/7</div>
              <div style={{fontSize: '1rem', opacity: '0.9'}}>Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose QNC */}
      <section style={{padding: '60px 0', background: 'white'}}>
        <div className="container">
          <h2 style={{fontSize: '2rem', fontWeight: '700', color: 'var(--primary-blue)', textAlign: 'center', marginBottom: '50px'}}>
            Why Families & Organizations Choose QNC
          </h2>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px'}}>
            <div style={{textAlign: 'center'}}>
              <div style={{
                width: '80px',
                height: '80px',
                background: '#eff6ff',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '2rem'
              }}>👨‍⚕️</div>
              <h3 style={{fontSize: '1.1rem', fontWeight: '600', color: 'var(--primary-blue)', marginBottom: '10px'}}>
                Qualified Professionals
              </h3>
              <p style={{fontSize: '0.9rem', color: '#6b7280', lineHeight: '1.6'}}>
                Registered, certified, and highly trained healthcare staff
              </p>
            </div>

            <div style={{textAlign: 'center'}}>
              <div style={{
                width: '80px',
                height: '80px',
                background: '#fef3c7',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '2rem'
              }}>💯</div>
              <h3 style={{fontSize: '1.1rem', fontWeight: '600', color: 'var(--primary-blue)', marginBottom: '10px'}}>
                Compassionate Responsiveness
              </h3>
              <p style={{fontSize: '0.9rem', color: '#6b7280', lineHeight: '1.6'}}>
                Empathetic service with quick response times
              </p>
            </div>

            <div style={{textAlign: 'center'}}>
              <div style={{
                width: '80px',
                height: '80px',
                background: '#fce7f3',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '2rem'
              }}>✅</div>
              <h3 style={{fontSize: '1.1rem', fontWeight: '600', color: 'var(--primary-blue)', marginBottom: '10px'}}>
                Proven & Trusted Experience
              </h3>
              <p style={{fontSize: '0.9rem', color: '#6b7280', lineHeight: '1.6'}}>
                Years of trusted care across diverse communities
              </p>
            </div>

            <div style={{textAlign: 'center'}}>
              <div style={{
                width: '80px',
                height: '80px',
                background: '#d1fae5',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '2rem'
              }}>💰</div>
              <h3 style={{fontSize: '1.1rem', fontWeight: '600', color: 'var(--primary-blue)', marginBottom: '10px'}}>
                Flexible & Affordable Pricing
              </h3>
              <p style={{fontSize: '0.9rem', color: '#6b7280', lineHeight: '1.6'}}>
                Transparent rates designed for accessibility
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, var(--primary-maroon), #7c2d12)',
        padding: '60px 0',
        textAlign: 'center',
        color: 'white'
      }}>
        <div className="container">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '30px'
          }}>
            <div style={{flex: '1', minWidth: '300px', textAlign: 'left'}}>
              <div style={{fontSize: '2.5rem', marginBottom: '15px'}}>❤️</div>
              <h2 style={{fontSize: '1.8rem', fontWeight: '700', marginBottom: '10px'}}>
                Need healthcare support for your family, organization, or project?
              </h2>
            </div>
            <div>
              <Link to="/contact" style={{
                background: 'white',
                color: 'var(--primary-maroon)',
                textDecoration: 'none',
                padding: '15px 35px',
                borderRadius: '4px',
                fontSize: '1.1rem',
                fontWeight: '600',
                display: 'inline-block',
                transition: 'all 0.3s ease'
              }}>
                Request a Consultation
              </Link>
            </div>
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
                <li style={{marginBottom: '10px'}}><Link to="/" style={{color: '#d1d5db', textDecoration: 'none'}}>Home</Link></li>
                <li style={{marginBottom: '10px'}}><Link to="/about" style={{color: '#d1d5db', textDecoration: 'none'}}>About Us</Link></li>
                <li style={{marginBottom: '10px'}}><Link to="/services" style={{color: '#d1d5db', textDecoration: 'none'}}>Services & Solutions</Link></li>
                <li style={{marginBottom: '10px'}}><Link to="/careers" style={{color: '#d1d5db', textDecoration: 'none'}}>Careers</Link></li>
                <li style={{marginBottom: '10px'}}><Link to="/contact" style={{color: '#d1d5db', textDecoration: 'none'}}>Contact Us</Link></li>
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

export default Home

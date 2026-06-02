import { Link } from 'react-router-dom'
import { useState } from 'react'
import SEO from '../components/SEO'

function Services() {
  const [expandedService, setExpandedService] = useState(null)

  const toggleService = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId)
  }
  return (
    <div>
      <SEO 
        title="Healthcare Services - QNC Solutions"
        description="Comprehensive healthcare services including field medical support, home nursing care, postnatal care, nutrition counseling, and bedside nursing. Professional medical services delivered to your location."
        keywords="healthcare services, nursing care, field medical support, home healthcare, postnatal care, nutrition counseling, bedside nursing, medical services Uganda"
        canonical="https://www.qncsolutions.com/services"
      />
      {/* Hero Section */}
      <section className="hero" style={{
        background: `linear-gradient(135deg, rgba(30, 64, 175, 0.9), rgba(124, 45, 18, 0.8)), url('/images/horizontal homepage image put i n the background.avif')`,
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
              background: 'linear-gradient(135deg, #ffffff, #e0e7ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)'
            }}>Our Services</h1>
            <p style={{
              fontSize: '1.1rem', 
              maxWidth: '600px', 
              margin: '0 auto',
              opacity: '0.95',
              textShadow: '0 1px 3px rgba(0,0,0,0.3)'
            }}>
              Professional healthcare solutions.
            </p>
          </div>
        </div>
        {/* Floating elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '100px',
          height: '100px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '15%',
          width: '80px',
          height: '80px',
          background: 'rgba(16, 185, 129, 0.2)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite reverse'
        }}></div>
      </section>

      {/* Comprehensive Services */}
      <section style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        padding: '40px 0',
        position: 'relative'
      }}>
        <div className="container">
          <h2 style={{
            textAlign: 'center', 
            fontSize: '2rem', 
            fontWeight: '700', 
            color: 'var(--primary-blue)', 
            marginBottom: '30px',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            Our Comprehensive Services
          </h2>

          {/* 2x2 Grid for Main Services */}
          <div style={{
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', 
            gap: '20px', 
            marginBottom: '30px'
          }}>
            {/* Bedside Nursing */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.25)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '16px',
              padding: '20px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            className="glass-card"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
            }}>
              <div style={{textAlign: 'center', marginBottom: '15px'}}>
                <img 
                  src="/images/bedside nursing pic.jpg" 
                  alt="Bedside Nursing Care" 
                  style={{
                    width: '100%', 
                    height: '160px', 
                    objectFit: 'cover', 
                    borderRadius: '12px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                  }} 
                />
              </div>
              <h3 style={{
                color: '#10b981', 
                fontSize: '1.1rem', 
                marginBottom: '10px', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px',
                fontWeight: '600'
              }}>
                🏥 NURSING & HOME-BASED CARE SERVICES
              </h3>
              <p style={{fontSize: '0.85rem', lineHeight: '1.4', color: '#374151', marginBottom: '12px'}}>
                Professional home-based nursing care for recovery, long-term support, and improved quality of life.
              </p>
              
              <div style={{display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap'}}>
                <Link to="/book" style={{
                  background: 'linear-gradient(135deg, #7c2d12, #991b1b)',
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '0.8rem',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 8px rgba(124, 45, 18, 0.3)'
                }}>
                  Book an Appointment
                </Link>
              </div>
            </div>

            {/* Field Medical Support */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.25)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '16px',
              padding: '20px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            className="glass-card"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
            }}>
              <div style={{textAlign: 'center', marginBottom: '15px'}}>
                <img 
                  src="/images/medical services pic.jpg" 
                  alt="Field Medical Support Services" 
                  style={{
                    width: '100%', 
                    height: '160px', 
                    objectFit: 'cover', 
                    borderRadius: '12px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                  }} 
                />
              </div>
              <h3 style={{
                color: '#10b981', 
                fontSize: '1.1rem', 
                marginBottom: '10px', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px',
                fontWeight: '600'
              }}>
                🚑 FIELD MEDICAL SUPPORT SERVICES
              </h3>
              <p style={{fontSize: '0.85rem', lineHeight: '1.4', color: '#374151', marginBottom: '12px'}}>
                Professional medical support for construction, industrial, and remote operations with OHS compliance.
              </p>
              
              <div style={{display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap'}}>
                <Link to="/book" style={{
                  background: 'linear-gradient(135deg, #7c2d12, #991b1b)',
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '0.8rem',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 8px rgba(124, 45, 18, 0.3)'
                }}>
                  Book an Appointment
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Health */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            borderRadius: '20px',
            padding: '25px',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
            transition: 'all 0.3s ease',
            marginBottom: '20px'
          }}
          className="glass-card"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 16px 50px rgba(0, 0, 0, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
          }}>
            <h3 style={{
              color: '#10b981', 
              fontSize: '1.3rem', 
              marginBottom: '15px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px', 
              justifyContent: 'center',
              fontWeight: '700'
            }}>
              📱 MOBILE HEALTH SERVICES
            </h3>
            <p style={{fontSize: '0.9rem', lineHeight: '1.4', color: '#374151', marginBottom: '15px', textAlign: 'center'}}>
              Healthcare delivered directly to communities and underserved areas for preventive care and early detection.
            </p>
            
            <div style={{display: 'flex', gap: '15px', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap'}}>
              <Link to="/book" style={{
                background: 'linear-gradient(135deg, #7c2d12, #991b1b)',
                color: 'white',
                textDecoration: 'none',
                fontSize: '0.85rem',
                padding: '8px 16px',
                borderRadius: '25px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(124, 45, 18, 0.3)'
              }}>
                Book an Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{
        background: 'linear-gradient(135deg, var(--primary-blue), #1e40af)',
        color: 'white', 
        padding: '35px 0', 
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <h2 style={{
            fontSize: '1.8rem', 
            fontWeight: '700', 
            marginBottom: '12px',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            Ready to Experience Quality Healthcare?
          </h2>
          <p style={{fontSize: '1rem', marginBottom: '20px', opacity: '0.95'}}>
            Connect with our professional healthcare team today
          </p>
          <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Link to="/contact" style={{
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: 'white',
              textDecoration: 'none',
              padding: '10px 20px',
              borderRadius: '25px',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              fontSize: '0.9rem'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.3)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.2)';
              e.target.style.transform = 'translateY(0)';
            }}>
              Contact Us
            </Link>
          </div>
        </div>
        {/* Floating elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '60px',
          height: '60px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '15%',
          right: '10%',
          width: '40px',
          height: '40px',
          background: 'rgba(16, 185, 129, 0.3)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite reverse'
        }}></div>
      </section>
    </div>
  )
}

export default Services
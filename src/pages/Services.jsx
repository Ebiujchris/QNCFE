import { Link } from 'react-router-dom'
import { useState } from 'react'

function Services() {
  const [expandedService, setExpandedService] = useState(null)

  const toggleService = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId)
  }
  return (
    <div>
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
              Comprehensive healthcare solutions delivered with professionalism and compassion
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
                🏥 PROFESSIONAL NURSING & HOME-BASED CARE SERVICES
              </h3>
              <p style={{fontSize: '0.85rem', lineHeight: '1.4', color: '#374151', marginBottom: '12px'}}>
                QNC offers holistic, patient-centered nursing and home-based care services that extend quality healthcare beyond health facilities.
              </p>
              
              {expandedService === 'bedside' && (
                <div style={{fontSize: '0.8rem', lineHeight: '1.4', color: '#4b5563', marginBottom: '12px'}}>
                  <p style={{marginBottom: '8px', fontWeight: '500'}}>
                    We support recovery, long-term care, and improved quality of life through personalized care delivered in the comfort and dignity of patients' homes.
                  </p>
                  <p style={{marginBottom: '6px', fontWeight: '500'}}>Services include:</p>
                  <ul style={{paddingLeft: '16px', margin: 0}}>
                    <li>Elderly care and long-term support</li>
                    <li>Post-surgical care and recovery monitoring</li>
                    <li>Post-delivery and postnatal care for mothers and newborns</li>
                    <li>Chronic illness management and palliative care support</li>
                    <li>Bedside nursing and continuous patient monitoring</li>
                    <li>Physiotherapy and rehabilitation services</li>
                    <li>Nutrition assessment, counseling, and individualized dietary planning</li>
                    <li>Mental Health and Psychosocial Support for patients and caregivers</li>
                    <li>Deployment of professional travel nursing teams</li>
                  </ul>
                </div>
              )}
              
              <div style={{display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap'}}>
                <button 
                  onClick={() => toggleService('bedside')}
                  style={{
                    background: 'rgba(30, 64, 175, 0.1)',
                    border: '1px solid rgba(30, 64, 175, 0.3)',
                    borderRadius: '20px',
                    color: 'var(--primary-blue)',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    padding: '6px 12px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(30, 64, 175, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(30, 64, 175, 0.1)';
                  }}
                >
                  {expandedService === 'bedside' ? 'Read Less' : 'Read More'}
                </button>
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
                  Schedule Service
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
                QNC delivers comprehensive and integrated field medical support tailored to construction, industrial, infrastructure, and remote operations.
              </p>
              
              {expandedService === 'field' && (
                <div style={{fontSize: '0.8rem', lineHeight: '1.4', color: '#4b5563', marginBottom: '12px'}}>
                  <p style={{marginBottom: '8px', fontWeight: '500'}}>
                    Our services ensure compliance with occupational health and safety standards while strengthening on-site medical preparedness, risk management, and emergency response systems.
                  </p>
                  <p style={{marginBottom: '6px', fontWeight: '500'}}>Services include:</p>
                  <ul style={{paddingLeft: '16px', margin: 0}}>
                    <li>Deployment of qualified field medical teams (nurses and allied professionals)</li>
                    <li>On-site first aid and emergency medical response</li>
                    <li>Occupational health screening, monitoring, and medical surveillance</li>
                    <li>Incident documentation, reporting, and referral coordination</li>
                    <li>Occupational Health and Safety (OHS) advisory and support services</li>
                    <li>First Aid and safety training for staff</li>
                    <li>Mental Health and Psychosocial Support (MHPSS), including psychological first aid, stress management, and referral pathways</li>
                    <li>Referral coordination with healthcare facilities</li>
                    <li>Community-based health support and MHPSS referrals</li>
                  </ul>
                </div>
              )}
              
              <div style={{display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap'}}>
                <button 
                  onClick={() => toggleService('field')}
                  style={{
                    background: 'rgba(30, 64, 175, 0.1)',
                    border: '1px solid rgba(30, 64, 175, 0.3)',
                    borderRadius: '20px',
                    color: 'var(--primary-blue)',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    padding: '6px 12px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(30, 64, 175, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(30, 64, 175, 0.1)';
                  }}
                >
                  {expandedService === 'field' ? 'Read Less' : 'Read More'}
                </button>
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
                  Schedule Service
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
              QNC's Mobile Health Services expand access to essential healthcare by delivering services directly to communities, workplaces, and underserved or hard-to-reach areas.
            </p>
            
            {expandedService === 'mobile' && (
              <div style={{fontSize: '0.8rem', lineHeight: '1.4', color: '#4b5563', marginBottom: '15px'}}>
                <p style={{marginBottom: '8px', fontWeight: '500', textAlign: 'center'}}>
                  This model strengthens preventive care, early detection, and continuity of treatment.
                </p>
                <p style={{marginBottom: '6px', fontWeight: '500'}}>Services include:</p>
                <ul style={{paddingLeft: '16px', margin: 0}}>
                  <li>Patient assessment, monitoring, and follow-up care</li>
                  <li>Administration of prescribed medications</li>
                  <li>Vital signs monitoring (blood pressure, temperature, pulse, respiration, oxygen saturation)</li>
                  <li>Chronic disease management and treatment adherence support</li>
                  <li>Health education, counseling, and psychosocial support</li>
                </ul>
              </div>
            )}
            
            <div style={{display: 'flex', gap: '15px', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap'}}>
              <button 
                onClick={() => toggleService('mobile')}
                style={{
                  background: 'rgba(30, 64, 175, 0.1)',
                  border: '1px solid rgba(30, 64, 175, 0.3)',
                  borderRadius: '25px',
                  color: 'var(--primary-blue)',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  padding: '8px 16px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(30, 64, 175, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(30, 64, 175, 0.1)';
                }}
              >
                {expandedService === 'mobile' ? 'Read Less' : 'Read More'}
              </button>
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
                Schedule Service
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
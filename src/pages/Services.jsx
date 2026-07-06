import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

function Services() {
  return (
    <div style={{background: '#ffffff', minHeight: '100vh'}}>
      <SEO 
        title="Our Services - QNC Solutions Healthcare"
        description="Explore our comprehensive healthcare services: Nursing & Home-Based Care, Field Medical Support, and Mobile Health Services across Uganda."
        keywords="nursing services, home care, field medical support, mobile health, healthcare Uganda"
        canonical="https://www.qncsolutions.com/services"
      />

      {/* Hero Section */}
      <section style={{
        backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%), url("/images/healthcare.avif")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div style={{ maxWidth: '600px' }}>
            <h1 style={{
              fontSize: '3rem',
              fontWeight: '700',
              marginBottom: '15px',
              color: 'var(--primary-maroon)',
              lineHeight: '1.2'
            }}>Our Core Services</h1>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--primary-blue)',
              opacity: '0.95',
              lineHeight: '1.8'
            }}>
              Professional care. Wherever you are. Whenever you need it.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{padding: '60px 0', background: '#f9fafb'}}>
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px'}}>
            
            {/* Nursing & Home-Based Care */}
            <div style={{
              background: 'white',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
              <div style={{
                background: 'var(--primary-blue)',
                padding: '40px 20px',
                textAlign: 'center'
              }}>
                <div style={{fontSize: '4rem', marginBottom: '15px'}}>🏠</div>
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: 'white',
                  marginBottom: '0'
                }}>NURSING & HOME-BASED<br/>CARE SERVICES</h2>
              </div>
              <div style={{padding: '30px'}}>
                <p style={{
                  fontSize: '1rem',
                  color: '#4b5563',
                  lineHeight: '1.8',
                  marginBottom: '20px'
                }}>
                  Get the care you need, right in the comfort of your home. Our professionals deliver skilled, reliable, and compassionate care tailored to support your health, dignity, and well-being every step of the way.
                </p>

                <div style={{marginBottom: '25px'}}>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: 'var(--primary-blue)',
                    marginBottom: '15px'
                  }}>Services Include:</h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    fontSize: '0.95rem',
                    color: '#4b5563',
                    lineHeight: '2'
                  }}>
                    <li>✓ Elderly care</li>
                    <li>✓ Post-surgery and post-care monitoring</li>
                    <li>✓ Chronic illness management and medication management</li>
                    <li>✓ Chronic disease management and palliative care support</li>
                  </ul>
                </div>

                <Link to="/book" style={{
                  background: 'var(--primary-maroon)',
                  color: 'white',
                  textDecoration: 'none',
                  padding: '10px 25px',
                  borderRadius: '4px',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  display: 'inline-block'
                }}>
                  Request Service
                </Link>
              </div>
            </div>

            {/* Field Medical Support */}
            <div style={{
              background: 'white',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
              <div style={{
                background: 'var(--primary-blue)',
                padding: '40px 20px',
                textAlign: 'center'
              }}>
                <div style={{fontSize: '4rem', marginBottom: '15px'}}>🏥</div>
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: 'white',
                  marginBottom: '0'
                }}>FIELD MEDICAL<br/>SUPPORT SERVICES</h2>
              </div>
              <div style={{padding: '30px'}}>
                <p style={{
                  fontSize: '1rem',
                  color: '#4b5563',
                  lineHeight: '1.8',
                  marginBottom: '20px'
                }}>
                  Whether on-site medical support for construction sites, events, schools, offices, emergency response, health monitoring, or first aid — we bring care where you need it most.
                </p>

                <div style={{marginBottom: '25px'}}>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: 'var(--primary-blue)',
                    marginBottom: '15px'
                  }}>We Provide Support For:</h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    fontSize: '0.95rem',
                    color: '#4b5563',
                    lineHeight: '2'
                  }}>
                    <li>✓ On-site nursing support for construction sites, events, schools, offices</li>
                    <li>✓ Emergency response, health monitoring, and first aid</li>
                    <li>✓ Injury management and consultation</li>
                    <li>✓ Industrial and occupational health services</li>
                  </ul>
                </div>

                <Link to="/book" style={{
                  background: 'var(--primary-maroon)',
                  color: 'white',
                  textDecoration: 'none',
                  padding: '10px 25px',
                  borderRadius: '4px',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  display: 'inline-block'
                }}>
                  Request Service
                </Link>
              </div>
            </div>

            {/* Mobile Health Services */}
            <div style={{
              background: 'white',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
              <div style={{
                background: 'var(--primary-blue)',
                padding: '40px 20px',
                textAlign: 'center'
              }}>
                <div style={{fontSize: '4rem', marginBottom: '15px'}}>💉</div>
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: 'white',
                  marginBottom: '0'
                }}>MOBILE HEALTH<br/>SERVICES</h2>
              </div>
              <div style={{padding: '30px'}}>
                <p style={{
                  fontSize: '1rem',
                  color: '#4b5563',
                  lineHeight: '1.8',
                  marginBottom: '20px'
                }}>
                  Our fully mobile health team provides flexible, on-site, on-call, delivery, administration of injections, and comprehensive health monitoring, right at your home, workplace, or community, healthcare at your fingertips.
                </p>

                <div style={{marginBottom: '25px'}}>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: 'var(--primary-blue)',
                    marginBottom: '15px'
                  }}>Our Services:</h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    fontSize: '0.95rem',
                    color: '#4b5563',
                    lineHeight: '2'
                  }}>
                    <li>✓ Medication delivery and administration</li>
                    <li>✓ Vital signs monitoring, testing, and health assessments</li>
                    <li>✓ Vaccination and immunization services</li>
                    <li>✓ Nutrition counseling and psychosocial support</li>
                  </ul>
                </div>

                <Link to="/book" style={{
                  background: 'var(--primary-maroon)',
                  color: 'white',
                  textDecoration: 'none',
                  padding: '10px 25px',
                  borderRadius: '4px',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  display: 'inline-block'
                }}>
                  Request Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Images Section */}
      <section style={{padding: '60px 0', background: 'white'}}>
        <div className="container">
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: 'var(--primary-blue)',
            textAlign: 'center',
            marginBottom: '50px'
          }}>Our Home-Based Services</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            <div style={{textAlign: 'center'}}>
              <img 
                src="/images/nurse with elder.jfif" 
                alt="Elderly care"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '15px'
                }}
              />
              <h3 style={{fontSize: '1.1rem', fontWeight: '600', color: 'var(--primary-maroon)', marginBottom: '8px'}}>
                Elderly care
              </h3>
              <p style={{fontSize: '0.9rem', color: 'var(--primary-blue)', lineHeight: '1.5'}}>
                Personalized support for daily living activities with dignity and respect.
              </p>
            </div>

            <div style={{textAlign: 'center'}}>
              <img 
                src="/images/postnatal-care1.jpeg" 
                alt="Post-surgery care"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '15px'
                }}
              />
              <h3 style={{fontSize: '1.1rem', fontWeight: '600', color: 'var(--primary-maroon)', marginBottom: '8px'}}>
                Post-support care and recovery monitoring
              </h3>
              <p style={{fontSize: '0.9rem', color: 'var(--primary-blue)', lineHeight: '1.5'}}>
                Professional care during your important recovery phase.
              </p>
            </div>

            <div style={{textAlign: 'center'}}>
              <img 
                src="/images/medical services pic.jpg" 
                alt="Chronic and medication care"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '15px'
                }}
              />
              <h3 style={{fontSize: '1.1rem', fontWeight: '600', color: 'var(--primary-maroon)', marginBottom: '8px'}}>
                Chronic and medication care
              </h3>
              <p style={{fontSize: '0.9rem', color: 'var(--primary-blue)', lineHeight: '1.5'}}>
                Ongoing support for chronic conditions and medication administration.
              </p>
            </div>

            <div style={{textAlign: 'center'}}>
              <img 
                src="/images/help image.avif" 
                alt="Chronic disease management"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '15px'
                }}
              />
              <h3 style={{fontSize: '1.1rem', fontWeight: '600', color: 'var(--primary-maroon)', marginBottom: '8px'}}>
                Chronic disease management and palliative care support
              </h3>
              <p style={{fontSize: '0.9rem', color: 'var(--primary-blue)', lineHeight: '1.5'}}>
                Compassionate care for long-term health conditions with dignity.
              </p>
            </div>

            <div style={{textAlign: 'center'}}>
              <img 
                src="/images/social medical research pic.jpg" 
                alt="Rehabilitation services"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '15px'
                }}
              />
              <h3 style={{fontSize: '1.1rem', fontWeight: '600', color: 'var(--primary-maroon)', marginBottom: '8px'}}>
                Rehabilitation and counseling services
              </h3>
              <p style={{fontSize: '0.9rem', color: 'var(--primary-blue)', lineHeight: '1.5'}}>
                Structured programs to support your journey to wellness.
              </p>
            </div>

            <div style={{textAlign: 'center'}}>
              <img 
                src="/images/homepage photo new.jpg" 
                alt="Physiotherapist Support"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '15px'
                }}
              />
              <h3 style={{fontSize: '1.1rem', fontWeight: '600', color: 'var(--primary-maroon)', marginBottom: '8px'}}>
                Physiotherapist Support
              </h3>
              <p style={{fontSize: '0.9rem', color: 'var(--primary-blue)', lineHeight: '1.5'}}>
                Specialized support for mobility, pain management, and recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'white',
        padding: '60px 0',
        textAlign: 'center',
        color: 'var(--primary-blue)'
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
              <h2 style={{fontSize: '1.8rem', fontWeight: '700', color: 'var(--primary-maroon)', marginBottom: '10px'}}>
                Need Professional Healthcare Services?
              </h2>
              <p style={{fontSize: '1rem', color: '#4b5563', marginBottom: '0'}}>
                Our professional nurses are committed to providing impactful, meaningful care
              </p>
            </div>
            <div>
              <Link to="/contact" style={{
                background: 'var(--primary-blue)',
                color: 'white',
                textDecoration: 'none',
                padding: '15px 35px',
                borderRadius: '4px',
                fontSize: '1.1rem',
                fontWeight: '600',
                display: 'inline-block',
                transition: 'all 0.3s ease'
              }}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Small Footer */}
      <section style={{backgroundColor: 'var(--primary-blue)', color: 'white', padding: '20px 0'}}>
        <div className="container" style={{
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
      </section>
    </div>
  )
}

export default Services

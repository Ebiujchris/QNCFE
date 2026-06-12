import { Link } from 'react-router-dom'
import { useState } from 'react'
import SEO from '../components/SEO'

function About() {
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0)

  const teamMembers = [
    {
      id: 1,
      name: 'Steicy Nankunda',
      position: 'CEO & Co-Founder',
      image: '/images/staicys pic.jpeg',
      bio: 'Leading QNC with vision for accessible, professional, and compassionate healthcare across Uganda and beyond.'
    },
    {
      id: 2,
      name: 'Ayesiga Confidence',
      position: 'Co-founder and Director',
      image: '/images/confidences pic.jpeg',
      bio: 'Ensuring seamless coordination of our healthcare programs and service delivery excellence.'
    },
    {
      id: 3,
      name: 'Kyomuhendo Brian',
      position: 'Administrator',
      image: '/images/Kyomuhendo brian pic.jpg',
      bio: 'Managing stakeholder relationships and expanding our reach to serve more communities.'
    },
    {
      id: 4,
      name: 'Kapipa Ivan Junior',
      position: 'Nutritionist',
      image: '/images/ivans pic.jpeg',
      bio: 'Overseeing quality standards and ensuring consistent delivery of exceptional healthcare services.'
    }
  ]

  return (
    <div style={{background: '#ffffff', minHeight: '100vh'}}>
      <SEO 
        title="About QNC Solutions - Professional Healthcare Services"
        description="Learn about QNC Solutions, our mission to deliver professional, reliable, and compassionate nursing and medical support services across Uganda and beyond."
        keywords="about QNC, healthcare services Uganda, nursing care, medical support"
        canonical="https://www.qncsolutions.com/about"
      />

      {/* Hero Section */}
      <section style={{
        backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%), url("/images/post sergery pics.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div style={{
            maxWidth: '600px'
          }}>
            <h1 style={{
              fontSize: '3rem',
              fontWeight: '700',
              marginBottom: '20px',
              color: 'var(--primary-blue)',
              lineHeight: '1.2'
            }}>About QNC<br/>Solutions Ltd</h1>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: 'var(--primary-maroon)',
              opacity: '0.95'
            }}>
              We are dedicated to providing high-quality, reliable, and compassionate nursing and medical support services across Uganda and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section style={{padding: '60px 0', background: '#f9fafb'}}>
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px'}}>
            
            {/* Mission */}
            <div style={{textAlign: 'center'}}>
              <div style={{
                width: '100px',
                height: '100px',
                background: 'var(--primary-maroon)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '3rem'
              }}>🎯</div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'var(--primary-maroon)',
                marginBottom: '15px'
              }}>Our Mission</h3>
              <p style={{
                fontSize: '1rem',
                color: 'var(--primary-blue)',
                lineHeight: '1.6'
              }}>
                To provide high-quality, professional, and compassionate nursing care that supports the well-being of our clients.
              </p>
            </div>

            {/* Vision */}
            <div style={{textAlign: 'center'}}>
              <div style={{
                width: '100px',
                height: '100px',
                background: 'var(--primary-blue)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '3rem'
              }}>👁️</div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'var(--primary-maroon)',
                marginBottom: '15px'
              }}>Our Vision</h3>
              <p style={{
                fontSize: '1rem',
                color: 'var(--primary-blue)',
                lineHeight: '1.6'
              }}>
                To become the most trusted name in the balance between professionalism and accessible accountability.
              </p>
            </div>

            {/* Values */}
            <div style={{textAlign: 'center'}}>
              <div style={{
                width: '100px',
                height: '100px',
                background: 'var(--primary-maroon)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '3rem',
                color: 'white'
              }}>💎</div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'var(--primary-maroon)',
                marginBottom: '15px'
              }}>Our Values</h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                fontSize: '1rem',
                color: 'var(--primary-blue)',
                lineHeight: '2'
              }}>
                <li>✓ Compassion</li>
                <li>✓ Integrity</li>
                <li>✓ Excellence</li>
                <li>✓ Accountability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section style={{padding: '60px 0', background: 'white'}}>
        <div className="container">
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: 'var(--primary-blue)',
            textAlign: 'center',
            marginBottom: '50px'
          }}>Our Leadership Team</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '30px',
            width: '100%'
          }}>
            {teamMembers.map((member) => (
              <div key={member.id} style={{
                textAlign: 'center',
                background: '#f9fafb',
                padding: '30px',
                borderRadius: '8px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                {member.image.startsWith('/') ? (
                  <img 
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: '120px',
                      height: '120px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      margin: '0 auto 15px',
                      border: '4px solid var(--primary-blue)'
                    }}
                  />
                ) : (
                  <div style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--primary-blue), var(--primary-maroon))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 15px',
                    fontSize: '3rem'
                  }}>
                    {member.image}
                  </div>
                )}
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: 'var(--primary-maroon)',
                  marginBottom: '5px'
                }}>{member.name}</h3>
                <p style={{
                  fontSize: '0.95rem',
                  color: 'var(--primary-blue)',
                  fontWeight: '500',
                  marginBottom: '10px'
                }}>{member.position}</p>
                <p style={{
                  fontSize: '0.9rem',
                  color: '#6b7280',
                  lineHeight: '1.5'
                }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section style={{
        background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
        padding: '60px 0'
      }}>
        <div className="container">
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
            background: 'white',
            padding: '40px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{
              fontSize: '1.8rem',
              fontWeight: '700',
              color: 'var(--primary-blue)',
              marginBottom: '20px'
            }}>Our Commitment</h2>
            <p style={{
              fontSize: '1rem',
              color: '#4b5563',
              lineHeight: '1.8',
              marginBottom: '20px'
            }}>
              We provide quality nursing care with compassion and accountability.
            </p>
            <div style={{
              background: '#fef3c7',
              borderRadius: '8px',
              padding: '20px',
              border: '2px solid #fbbf24'
            }}>
              <p style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: 'var(--primary-maroon)',
                margin: 0
              }}>
                Quality nursing care, accessible to all.
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
                Ready to Experience Quality Healthcare?
              </h2>
              <p style={{fontSize: '1rem', color: '#4b5563', marginBottom: '0'}}>
                Connect with our professional healthcare team today
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
                Contact Us
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
              © 2026 QNC Solutions. All rights reserved. | We are committed to compassion, professionalism, and dignity in every service we provide.
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

export default About

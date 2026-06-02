import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SEO from '../components/SEO'

function About() {
  const [expandedService, setExpandedService] = useState(null)
  const [expandedTeamMember, setExpandedTeamMember] = useState(null)
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0)
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0)

  const toggleService = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId)
  }

  const toggleTeamMember = (memberId) => {
    setExpandedTeamMember(expandedTeamMember === memberId ? null : memberId)
  }

  const services = [
    {
      id: 'field',
      title: '1. Field Medical Support Services',
      image: '/images/medical services pic.jpg',
      shortDescription: 'Professional field medical support for construction, industrial, and remote operations with occupational health compliance.',
      fullDescription: 'Risk management and emergency response for operational environments.',
      serviceList: [
        'Qualified medical teams on-site',
        'Emergency response & first aid',
        'Health screening & surveillance',
        'OHS advisory services',
        'Safety training & MHPSS support'
      ]
    },
    {
      id: 'nursing',
      title: '2. Professional Nursing & Home-Based Care',
      image: '/images/bedside nursing pic.jpg',
      shortDescription: 'Personalized home-based nursing care for recovery, long-term support, and improved quality of life.',
      fullDescription: '',
      serviceList: [
        'Elderly & long-term care',
        'Post-surgical & postnatal care',
        'Chronic illness management',
        'Physiotherapy & rehabilitation',
        'Nutrition counseling & support'
      ]
    },
    {
      id: 'mobile',
      title: '3. Mobile Health Services',
      image: '/images/healthcare.avif',
      shortDescription: 'Healthcare delivered directly to communities and underserved areas for preventive care and early detection.',
      fullDescription: '',
      serviceList: [
        'Patient monitoring & follow-up',
        'Medication administration',
        'Vital signs monitoring',
        'Chronic disease management',
        'Health education & support'
      ]
    }
  ]

  const teamMembers = [
    {
      id: 'stiesy',
      name: 'Stiesy Nankunda',
      position: 'Managing Director & Co-Founder',
      image: '👩‍⚕️',
      shortBio: 'Lead Nursing Consultant combining clinical expertise with strategic leadership in maternal, neonatal, and patient care.',
      fullBio: [
        'Expert in patient assessment, vital signs monitoring, IV therapy, wound care, and emergency response (BLS/CPR).',
        'Dedicated to quality, safety, and patient-centered care with strong psychosocial support skills.'
      ]
    },
    {
      id: 'ayesiga',
      name: 'Ayesiga Confidence',
      position: 'Director & Co-Founder',
      image: '👩‍⚕️',
      shortBio: 'Lead Maternal Consulting Midwife with expertise in clinical supervision and quality assurance.',
      fullBio: [
        'Oversees service delivery standards, patient triage, and emergency response across all clinical areas.',
        'Committed to high-quality, client-centered maternal and neonatal care.'
      ]
    },
    {
      id: 'kapipa',
      name: 'Kapipa Ivan Junior',
      position: 'Nutrition Consultant',
      image: '/images/nutrition pic.jpg',
      shortBio: 'Clinical nutrition expert with expertise in community-based nutrition and research.',
      fullBio: [
        'Provides technical advisory to ensure safe and effective nutrition services.',
        'Drives evidence-informed decision-making and continuous quality improvement.'
      ]
    },
    {
      id: 'brian',
      name: 'Kyomuhendo Brian Gilbert',
      position: 'Administrator',
      image: '/images/Kyomuhendo brian pic.jpg',
      shortBio: 'Operations expert managing organizational coordination and service delivery systems.',
      fullBio: [
        'Skilled in operations support, stakeholder coordination, and results-based management.',
        'Drives evidence-informed planning and strengthens organizational performance.'
      ]
    }
  ]

  const nextTeamMember = () => {
    setCurrentTeamIndex((prev) => (prev + 1) % teamMembers.length)
    setExpandedTeamMember(null) // Close any expanded bio when navigating
  }

  const prevTeamMember = () => {
    setCurrentTeamIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)
    setExpandedTeamMember(null) // Close any expanded bio when navigating
  }

  const nextService = () => {
    setCurrentServiceIndex((prev) => (prev + 1) % services.length)
    setExpandedService(null) // Close any expanded service when navigating
  }

  const prevService = () => {
    setCurrentServiceIndex((prev) => (prev - 1 + services.length) % services.length)
    setExpandedService(null) // Close any expanded service when navigating
  }

  // Auto-flip services every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length)
      setExpandedService(null) // Close any expanded service when auto-flipping
    }, 5000) // Change service every 5 seconds

    return () => clearInterval(interval) // Cleanup on unmount
  }, [services.length])
  return (
    <div style={{background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', minHeight: '100vh'}}>
      <SEO 
        title="About QNC Solutions - Professional Healthcare Services"
        description="Learn about QNC Solutions Ltd, a professional healthcare provider delivering quality nursing and medical support services across Uganda. Field medical support, home care, and community health services."
        keywords="about QNC, healthcare provider Uganda, nursing services, field medical support, home healthcare, professional medical services"
        canonical="https://www.qncsolutions.com/about"
      />
      {/* Modern Hero Section */}
      <div 
        className="page-header" 
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(30, 64, 175, 0.9), rgba(124, 45, 18, 0.9)), url('/images/new background image.avif')`,
          height: '40vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="page-header-content" style={{textAlign: 'center', zIndex: 2}}>
          <h1 style={{
            fontSize: '2.5rem', 
            fontWeight: '800', 
            marginBottom: '12px',
            background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 4px 20px rgba(0,0,0,0.3)'
          }}>
            About QNC Solutions
          </h1>
          <p style={{
            fontSize: '1rem', 
            opacity: '0.95',
            maxWidth: '600px',
            margin: '0 auto',
            fontWeight: '300',
            lineHeight: '1.4'
          }}>
            Professional healthcare services committed to quality, reliability, and compassionate care
          </p>
        </div>
        
        {/* Floating Elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '60px',
          height: '60px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '15%',
          width: '40px',
          height: '40px',
          background: 'rgba(255,255,255,0.08)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite reverse'
        }}></div>
      </div>

      {/* Company Profile Section - Modern Card */}
      <section className="container" style={{padding: '20px 0 15px', position: 'relative', zIndex: 1}}>
        <div style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
          borderRadius: '16px',
          padding: '20px',
          boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255,255,255,0.8)',
          border: '1px solid rgba(255,255,255,0.2)',
          backdropFilter: 'blur(10px)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Background Pattern */}
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100px',
            height: '100px',
            background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.05), rgba(124, 45, 18, 0.05))',
            borderRadius: '50%',
            transform: 'translate(50%, -50%)'
          }}></div>
          
          <h2 style={{
            fontSize: '1.8rem', 
            fontWeight: '700', 
            background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-maroon) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '12px', 
            textAlign: 'center',
            position: 'relative',
            zIndex: 2
          }}>
            Company Profile
          </h2>
          
          <div style={{fontSize: '0.9rem', lineHeight: '1.5', color: '#374151', position: 'relative', zIndex: 2}}>
            <p style={{marginBottom: '0', fontWeight: '300'}}>
              QNC Solutions delivers quality nursing and medical support across Uganda. We provide responsive, client-centered care through qualified healthcare professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Core Mission Section - Ultra Modern */}
      <section style={{padding: '15px 0'}}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
            borderRadius: '20px',
            padding: '25px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255,255,255,0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Animated Background Elements */}
            <div style={{
              position: 'absolute',
              top: '-30px',
              left: '-30px',
              width: '100px',
              height: '100px',
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(30, 64, 175, 0.1))',
              borderRadius: '50%',
              animation: 'pulse 4s ease-in-out infinite'
            }}></div>
            
            <div style={{textAlign: 'center', marginBottom: '20px', position: 'relative', zIndex: 2}}>
              <div style={{
                fontSize: '2rem', 
                marginBottom: '8px',
                background: 'linear-gradient(135deg, #10b981, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>🎯</div>
              <h3 style={{
                fontSize: '1.7rem', 
                fontWeight: '700', 
                background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-maroon) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '6px'
              }}>
                Our Mission
              </h3>
            </div>
            
            <div style={{
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '20px', 
              alignItems: 'start',
              position: 'relative',
              zIndex: 2
            }}>
              <div style={{
                background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.05), rgba(124, 45, 18, 0.05))',
                padding: '15px',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <p style={{
                  fontSize: '0.95rem', 
                  lineHeight: '1.4', 
                  color: '#374151',
                  fontWeight: '300',
                  margin: 0
                }}>
                  Deliver quality, safe, and accessible healthcare services.
                </p>
              </div>
              
              <div>
                <h4 style={{
                  fontSize: '1.1rem', 
                  fontWeight: '600', 
                  color: 'var(--primary-maroon)', 
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <span style={{
                    background: 'linear-gradient(135deg, #10b981, #059669)',
                    color: 'white',
                    borderRadius: '50%',
                    width: '20px',
                    height: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.7rem'
                  }}>✓</span>
                  Our Core Services
                </h4>
                <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  {[
                    'Field Medical Support Services',
                    'Professional Nursing & Home-Based Care Services',
                    'Mobile Health Services',
                    'General Medical Consultancy'
                  ].map((service, index) => (
                    <div key={index} style={{
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '8px',
                      padding: '8px 12px',
                      background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(16, 185, 129, 0.02))',
                      borderRadius: '8px',
                      border: '1px solid rgba(16, 185, 129, 0.1)',
                      transition: 'all 0.3s ease',
                      cursor: 'default'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateX(2px)'
                      e.target.style.boxShadow = '0 4px 15px rgba(16, 185, 129, 0.1)'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateX(0)'
                      e.target.style.boxShadow = 'none'
                    }}>
                      <span style={{
                        color: '#10b981', 
                        fontSize: '1rem',
                        fontWeight: 'bold'
                      }}>✓</span>
                      <span style={{
                        fontSize: '0.85rem', 
                        lineHeight: '1.2', 
                        color: '#374151',
                        fontWeight: '400'
                      }}>
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section - Modern Design with Background */}
      <section style={{
        backgroundImage: `linear-gradient(135deg, rgba(30, 64, 175, 0.9), rgba(124, 45, 18, 0.9)), url('/images/help image.avif')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        padding: '60px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Overlay Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Cdefs%3E%3Cpattern id=\'dots\' width=\'20\' height=\'20\' patternUnits=\'userSpaceOnUse\'%3E%3Ccircle cx=\'10\' cy=\'10\' r=\'1\' fill=\'white\' opacity=\'0.1\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100\' height=\'100\' fill=\'url(%23dots)\'/%3E%3C/svg%3E")',
          opacity: 0.3
        }}></div>
        
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <h2 style={{
            fontSize: '2.5rem', 
            fontWeight: '700', 
            color: 'white',
            marginBottom: '20px', 
            textAlign: 'center',
            textShadow: '0 4px 20px rgba(0,0,0,0.3)'
          }}>
            Our Core Values
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.9)',
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto 40px',
            textShadow: '0 2px 10px rgba(0,0,0,0.2)'
          }}>
            Our core principles
          </p>

          {/* Core Values Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '25px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            
            {/* Quality */}
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '20px',
              padding: '30px',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.25)',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #10b981, #059669)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '2rem',
                boxShadow: '0 10px 30px rgba(16, 185, 129, 0.4)'
              }}>
                ⭐
              </div>
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: '600',
                color: 'white',
                marginBottom: '15px',
                textShadow: '0 2px 10px rgba(0,0,0,0.3)'
              }}>
                Quality
              </h3>
              <p style={{
                fontSize: '0.95rem',
                lineHeight: '1.5',
                color: 'rgba(255,255,255,0.9)',
                margin: 0
              }}>
                Highest standards of quality and care.
              </p>
            </div>

            {/* Compassion */}
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '20px',
              padding: '30px',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.25)',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '2rem',
                boxShadow: '0 10px 30px rgba(245, 158, 11, 0.4)'
              }}>
                ❤️
              </div>
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: '600',
                color: 'white',
                marginBottom: '15px',
                textShadow: '0 2px 10px rgba(0,0,0,0.3)'
              }}>
                Compassion
              </h3>
              <p style={{
                fontSize: '0.95rem',
                lineHeight: '1.5',
                color: 'rgba(255,255,255,0.9)',
                margin: 0
              }}>
                Empathy, dignity, and respect for all.
              </p>
            </div>

            {/* Integrity */}
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '20px',
              padding: '30px',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.25)',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '2rem',
                boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)'
              }}>
                🛡️
              </div>
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: '600',
                color: 'white',
                marginBottom: '15px',
                textShadow: '0 2px 10px rgba(0,0,0,0.3)'
              }}>
                Integrity
              </h3>
              <p style={{
                fontSize: '0.95rem',
                lineHeight: '1.5',
                color: 'rgba(255,255,255,0.9)',
                margin: 0
              }}>
                Transparency, honesty, and accountability.
              </p>
            </div>

            {/* Innovation */}
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '20px',
              padding: '30px',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.25)',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '2rem',
                boxShadow: '0 10px 30px rgba(139, 92, 246, 0.4)'
              }}>
                💡
              </div>
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: '600',
                color: 'white',
                marginBottom: '15px',
                textShadow: '0 2px 10px rgba(0,0,0,0.3)'
              }}>
                Innovation
              </h3>
              <p style={{
                fontSize: '0.95rem',
                lineHeight: '1.5',
                color: 'rgba(255,255,255,0.9)',
                margin: 0
              }}>
                New technologies for better outcomes.
              </p>
            </div>

            {/* Accessibility */}
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '20px',
              padding: '30px',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.25)',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '2rem',
                boxShadow: '0 10px 30px rgba(239, 68, 68, 0.4)'
              }}>
                🌍
              </div>
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: '600',
                color: 'white',
                marginBottom: '15px',
                textShadow: '0 2px 10px rgba(0,0,0,0.3)'
              }}>
                Accessibility
              </h3>
              <p style={{
                fontSize: '0.95rem',
                lineHeight: '1.5',
                color: 'rgba(255,255,255,0.9)',
                margin: 0
              }}>
                Quality healthcare for all communities.
              </p>
            </div>

            {/* Collaboration */}
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '20px',
              padding: '30px',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.25)',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '2rem',
                boxShadow: '0 10px 30px rgba(6, 182, 212, 0.4)'
              }}>
                🤝
              </div>
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: '600',
                color: 'white',
                marginBottom: '15px',
                textShadow: '0 2px 10px rgba(0,0,0,0.3)'
              }}>
                Collaboration
              </h3>
              <p style={{
                fontSize: '0.95rem',
                lineHeight: '1.5',
                color: 'rgba(255,255,255,0.9)',
                margin: 0
              }}>
                Working together for better care.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        padding: '25px 0',
        position: 'relative'
      }}>
        <div className="container">
          <div style={{
            background: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            borderRadius: '16px',
            padding: '25px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Background decoration */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '80px',
              height: '80px',
              background: 'rgba(30, 64, 175, 0.1)',
              borderRadius: '50%',
              backdropFilter: 'blur(10px)'
            }}></div>
            
            <h2 style={{
              fontSize: '1.8rem', 
              fontWeight: '700', 
              background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-maroon) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '20px', 
              textAlign: 'center',
              position: 'relative',
              zIndex: 2
            }}>
              Our Commitment
            </h2>
            <div style={{
              fontSize: '0.9rem', 
              lineHeight: '1.5', 
              color: '#374151', 
              textAlign: 'center', 
              maxWidth: '700px', 
              margin: '0 auto',
              position: 'relative',
              zIndex: 2
            }}>
              <p style={{marginBottom: '15px', fontWeight: '300'}}>
                We provide quality nursing care with compassion and accountability.
              </p>
              <div style={{
                background: 'rgba(124, 45, 18, 0.1)',
                borderRadius: '10px',
                padding: '15px',
                border: '1px solid rgba(124, 45, 18, 0.2)',
                marginTop: '15px'
              }}>
                <p style={{
                  fontWeight: '600', 
                  color: 'var(--primary-maroon)',
                  fontSize: '1rem',
                  margin: 0
                }}>
                  Quality nursing care, accessible to all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Core Team Section */}
      <section className="container" style={{padding: '20px 0'}}>
        <h2 style={{
          fontSize: '1.8rem', 
          fontWeight: '700', 
          color: 'var(--primary-blue)', 
          marginBottom: '20px', 
          textAlign: 'center',
          textShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          Meet Our Core Team
        </h2>

        {/* Team Carousel */}
        <div className="team-carousel-container" style={{position: 'relative', maxWidth: '800px', margin: '0 auto'}}>
          {/* Navigation Arrows */}
          <button
            className="team-carousel-nav"
            onClick={prevTeamMember}
            style={{
              position: 'absolute',
              left: '-60px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(30, 64, 175, 0.2)',
              color: 'var(--primary-blue)',
              border: '2px solid rgba(30, 64, 175, 0.3)',
              borderRadius: '50%',
              width: '45px',
              height: '45px',
              cursor: 'pointer',
              fontSize: '18px',
              zIndex: 3,
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(30, 64, 175, 0.3)';
              e.target.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(30, 64, 175, 0.2)';
              e.target.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            ‹
          </button>

          <button
            className="team-carousel-nav"
            onClick={nextTeamMember}
            style={{
              position: 'absolute',
              right: '-60px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(30, 64, 175, 0.2)',
              color: 'var(--primary-blue)',
              border: '2px solid rgba(30, 64, 175, 0.3)',
              borderRadius: '50%',
              width: '45px',
              height: '45px',
              cursor: 'pointer',
              fontSize: '18px',
              zIndex: 3,
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(30, 64, 175, 0.3)';
              e.target.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(30, 64, 175, 0.2)';
              e.target.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            ›
          </button>

          {/* Team Member Card */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            borderRadius: '16px',
            padding: '25px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12)',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Background decoration */}
            <div style={{
              position: 'absolute',
              top: '-30px',
              right: '-30px',
              width: '80px',
              height: '80px',
              background: 'rgba(16, 185, 129, 0.1)',
              borderRadius: '50%',
              backdropFilter: 'blur(10px)'
            }}></div>
            
            <div style={{
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
              gap: '20px', 
              alignItems: 'center',
              position: 'relative',
              zIndex: 2
            }}>
              <div style={{textAlign: 'center'}}>
                {teamMembers[currentTeamIndex].image.startsWith('/') ? (
                  <img 
                    className="team-member-image"
                    src={teamMembers[currentTeamIndex].image}
                    alt={teamMembers[currentTeamIndex].name}
                    style={{
                      width: '120px', 
                      height: '120px', 
                      borderRadius: '50%',
                      objectFit: 'cover',
                      margin: '0 auto 12px',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                      border: '2px solid rgba(255,255,255,0.3)'
                    }} 
                  />
                ) : (
                  <div 
                    className="team-member-emoji"
                    style={{
                      width: '120px',
                      height: '120px',
                      borderRadius: '50%',
                      background: currentTeamIndex % 2 === 0 
                        ? 'linear-gradient(135deg, var(--primary-blue), #1e40af)' 
                        : 'linear-gradient(135deg, var(--primary-maroon), #991b1b)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 12px',
                      fontSize: '2.5rem',
                      color: 'white',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                      border: '2px solid rgba(255,255,255,0.3)'
                    }}
                  >
                    {teamMembers[currentTeamIndex].image}
                  </div>
                )}
                <h3 style={{fontSize: '1.2rem', fontWeight: '600', color: 'var(--primary-maroon)', marginBottom: '4px'}}>
                  {teamMembers[currentTeamIndex].name}
                </h3>
                <p style={{fontSize: '0.9rem', color: 'var(--primary-blue)', fontWeight: '500'}}>
                  {teamMembers[currentTeamIndex].position}
                </p>
              </div>
              
              <div>
                <p style={{fontSize: '0.9rem', lineHeight: '1.5', color: '#374151', marginBottom: '12px', fontWeight: '300'}}>
                  {teamMembers[currentTeamIndex].shortBio}
                </p>
                
                {expandedTeamMember === teamMembers[currentTeamIndex].id && (
                  <div style={{
                    marginBottom: '12px',
                    background: 'rgba(255,255,255,0.2)',
                    borderRadius: '10px',
                    padding: '12px',
                    border: '1px solid rgba(255,255,255,0.3)'
                  }}>
                    {teamMembers[currentTeamIndex].fullBio.map((paragraph, index) => (
                      <p key={index} style={{fontSize: '0.85rem', lineHeight: '1.4', color: '#4b5563', marginBottom: '8px'}}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
                
                <button 
                  onClick={() => toggleTeamMember(teamMembers[currentTeamIndex].id)}
                  style={{
                    background: 'rgba(30, 64, 175, 0.1)',
                    border: '1px solid rgba(30, 64, 175, 0.3)',
                    borderRadius: '15px',
                    color: 'var(--primary-blue)',
                    fontSize: '0.85rem',
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
                  {expandedTeamMember === teamMembers[currentTeamIndex].id ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div style={{display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px'}}>
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentTeamIndex(index)
                  setExpandedTeamMember(null)
                }}
                style={{
                  width: index === currentTeamIndex ? '30px' : '12px',
                  height: '12px',
                  borderRadius: '6px',
                  border: '2px solid rgba(30, 64, 175, 0.3)',
                  background: index === currentTeamIndex 
                    ? 'linear-gradient(135deg, var(--primary-blue), #1e40af)' 
                    : 'rgba(30, 64, 175, 0.2)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)'
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{
        background: 'linear-gradient(135deg, var(--primary-blue), #1e40af)',
        color: 'white', 
        padding: '25px 0', 
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <h2 style={{
            fontSize: '1.6rem', 
            fontWeight: '700', 
            marginBottom: '10px',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            Ready to Experience Quality Healthcare?
          </h2>
          <p style={{fontSize: '0.9rem', marginBottom: '15px', opacity: '0.95'}}>
            Connect with our professional healthcare team today
          </p>
          <div style={{display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Link to="/contact" style={{
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: 'white',
              textDecoration: 'none',
              padding: '8px 16px',
              borderRadius: '20px',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              fontSize: '0.85rem'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.3)';
              e.target.style.transform = 'translateY(-1px)';
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
          top: '15%',
          left: '8%',
          width: '40px',
          height: '40px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '12%',
          width: '30px',
          height: '30px',
          background: 'rgba(16, 185, 129, 0.3)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite reverse'
        }}></div>
      </section>
    </div>
  )
}

export default About
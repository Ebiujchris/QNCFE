import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

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
      shortDescription: 'QNC delivers comprehensive and integrated field medical support tailored to construction, industrial, infrastructure, and remote operations. Our services ensure compliance with occupational health and safety standards while strengthening on-site medical preparedness.',
      fullDescription: 'We provide risk management and emergency response systems for various operational environments.',
      serviceList: [
        'Deployment of qualified field medical teams (nurses and allied professionals)',
        'On-site first aid and emergency medical response',
        'Occupational health screening, monitoring, and medical surveillance',
        'Incident documentation, reporting, and referral coordination',
        'Occupational Health and Safety (OHS) advisory and support services',
        'First Aid and safety training for staff',
        'Mental Health and Psychosocial Support (MHPSS)',
        'Community-based health support and MHPSS referrals'
      ]
    },
    {
      id: 'nursing',
      title: '2. Professional Nursing & Home-Based Care Services',
      image: '/images/bedside nursing pic.jpg',
      shortDescription: 'QNC offers holistic, patient-centered nursing and home-based care services that extend quality healthcare beyond health facilities. We support recovery, long-term care, and improved quality of life through personalized care delivered in the comfort and dignity of patients\' homes.',
      fullDescription: '',
      serviceList: [
        'Elderly care and long-term support',
        'Post-surgical care and recovery monitoring',
        'Post-delivery and postnatal care for mothers and newborns',
        'Chronic illness management and palliative care support',
        'Bedside nursing and continuous patient monitoring',
        'Physiotherapy and rehabilitation services',
        'Nutrition assessment, counseling, and individualized dietary planning',
        'Mental Health and Psychosocial Support for patients and caregivers',
        'Deployment of professional travel nursing teams'
      ]
    },
    {
      id: 'mobile',
      title: '3. Mobile Health Services',
      image: '/images/healthcare.avif',
      shortDescription: 'QNC\'s Mobile Health Services expand access to essential healthcare by delivering services directly to communities, workplaces, and underserved or hard-to-reach areas. This model strengthens preventive care, early detection, and continuity of treatment.',
      fullDescription: '',
      serviceList: [
        'Patient assessment, monitoring, and follow-up care',
        'Administration of prescribed medications',
        'Vital signs monitoring (blood pressure, temperature, pulse, respiration, oxygen saturation)',
        'Chronic disease management and treatment adherence support',
        'Health education, counseling, and psychosocial support'
      ]
    }
  ]

  const teamMembers = [
    {
      id: 'stiesy',
      name: 'Stiesy Nankunda',
      position: 'Managing Director & Co-Founder',
      image: '👩‍⚕️',
      shortBio: 'Stiesy Nankunda is the Managing Director and Lead Nursing Consultant at QNC Solutions Ltd. She combines strong clinical expertise with strategic leadership, bringing advanced competence in maternal, neonatal, and general patient care.',
      fullBio: [
        'Her technical expertise includes comprehensive patient assessment, vital signs monitoring, medication administration, IV therapy, wound care, catheterization, pressure sore prevention, fluid balance monitoring, and emergency response (BLS/CPR).',
        'She provides expert psychosocial support, particularly in high-stress and critical care settings, while ensuring strict adherence to infection prevention, patient safety, confidentiality, and ethical standards.'
      ]
    },
    {
      id: 'ayesiga',
      name: 'Ayesiga Confidence',
      position: 'Director & Co-Founder',
      image: '👩‍⚕️',
      shortBio: 'Ayesiga Confidence is a Director and Lead Maternal Consulting Midwife at QNC Solutions Ltd, with strong clinical and leadership expertise in maternal, neonatal, and general patient care.',
      fullBio: [
        'In her leadership role, she oversees quality assurance, clinical supervision, client care coordination, and service delivery standards. Her expertise extends to patient triage, emergency response, infection prevention and control, pressure sore management, nutrition support, and chronic disease care.',
        'She is recognized for her professionalism, adaptability, and commitment to high-quality, client-centered care.'
      ]
    },
    {
      id: 'kapipa',
      name: 'Kapipa Ivan Junior',
      position: 'Nutrition Consultant',
      image: '/images/nutrition pic.jpg',
      shortBio: 'Kapipa Ivan Junior is a Nutrition Consultant at QNC Solutions Ltd, with expertise in clinical and community-based nutrition, food systems, and livelihoods research.',
      fullBio: [
        'He provides technical advisory support to ensure the safety, adequacy, and effectiveness of nutrition and health services. His skills in research, data analysis, and programme monitoring support evidence-informed decision-making and continuous quality improvement.',
        'With experience across hospital, wellness, and community settings, Kapipa strengthens QNC\'s capacity to deliver sustainable, client-centered nutrition services.'
      ]
    },
    {
      id: 'brian',
      name: 'Kyomuhendo Brian Gilbert',
      position: 'Administrator',
      image: '/images/Kyomuhendo brian pic.jpg',
      shortBio: 'Kyomuhendo Brian Gilbert serves as the Administrator at QNC Solutions Ltd, where he supports the coordination and efficient management of the organization\'s operations and service delivery processes.',
      fullBio: [
        'Brian brings strong expertise in operations support, systems strengthening, stakeholder coordination, and results-based management. His background in research and data analysis enables him to support performance monitoring, documentation, and evidence-informed planning.',
        'Recognized for his analytical skills, organization, and attention to detail, Brian supports the translation of operational priorities into structured systems that strengthen service delivery and organizational performance.'
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
            <p style={{marginBottom: '10px', fontWeight: '300'}}>
              QNC Solutions Ltd is a professional healthcare services provider committed to delivering high-quality, reliable, and compassionate nursing and medical support services across Uganda and beyond. Founded on the principle of Quality Nursing Care, QNC bridges the gap between professional healthcare delivery and accessibility.
            </p>
            
            <p style={{marginBottom: '0', fontWeight: '300'}}>
              Our service delivery model promotes continuity of care, strengthens health and safety compliance, and improves overall health outcomes through responsive, client-centered solutions delivered by qualified and licensed healthcare professionals.
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
                  To deliver professional, compassionate, and client-centered healthcare services that uphold safety, dignity, and accessibility for individuals, families, and organizations.
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

      {/* Core Services Section - Modern Carousel with Background */}
      <section style={{
        backgroundImage: `linear-gradient(135deg, rgba(30, 64, 175, 0.9), rgba(124, 45, 18, 0.9)), url('/images/help image.avif')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        padding: '30px 0',
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
            fontSize: '2rem', 
            fontWeight: '700', 
            color: 'white',
            marginBottom: '25px', 
            textAlign: 'center',
            textShadow: '0 4px 20px rgba(0,0,0,0.3)'
          }}>
            Our Core Services
          </h2>

          {/* Modern Services Carousel */}
          <div className="services-carousel-container" style={{position: 'relative', maxWidth: '1000px', margin: '0 auto'}}>
            {/* Enhanced Navigation Arrows */}
            <button
              className="services-carousel-nav"
              onClick={prevService}
              style={{
                position: 'absolute',
                left: '-60px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                border: '2px solid rgba(255,255,255,0.3)',
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
                e.target.style.background = 'rgba(255,255,255,0.3)'
                e.target.style.transform = 'translateY(-50%) scale(1.1)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.2)'
                e.target.style.transform = 'translateY(-50%) scale(1)'
              }}
            >
              ‹
            </button>

            <button
              className="services-carousel-nav"
              onClick={nextService}
              style={{
                position: 'absolute',
                right: '-60px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                border: '2px solid rgba(255,255,255,0.3)',
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
                e.target.style.background = 'rgba(255,255,255,0.3)'
                e.target.style.transform = 'translateY(-50%) scale(1.1)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.2)'
                e.target.style.transform = 'translateY(-50%) scale(1)'
              }}
            >
              ›
            </button>

            {/* Modern Service Card with Glass Effect */}
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '16px',
              padding: '25px',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.25)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Glass morphism decoration */}
              <div style={{
                position: 'absolute',
                top: '-40px',
                right: '-40px',
                width: '150px',
                height: '150px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '50%',
                backdropFilter: 'blur(10px)'
              }}></div>
              
              <div style={{
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '25px', 
                alignItems: 'center',
                position: 'relative',
                zIndex: 2
              }}>
                <div>
                  <h3 style={{
                    fontSize: '1.5rem', 
                    fontWeight: '600', 
                    color: 'white',
                    marginBottom: '12px',
                    textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                  }}>
                    {services[currentServiceIndex].title}
                  </h3>
                  <p style={{
                    fontSize: '0.9rem', 
                    lineHeight: '1.4', 
                    color: 'rgba(255,255,255,0.9)', 
                    marginBottom: '12px',
                    fontWeight: '300'
                  }}>
                    {services[currentServiceIndex].shortDescription}
                  </p>
                  
                  {expandedService === services[currentServiceIndex].id && (
                    <div style={{animation: 'fadeInUp 0.5s ease-out'}}>
                      {services[currentServiceIndex].fullDescription && (
                        <p style={{fontSize: '1rem', lineHeight: '1.5', color: 'rgba(255,255,255,0.8)', marginBottom: '20px', fontWeight: '300'}}>
                          {services[currentServiceIndex].fullDescription}
                        </p>
                      )}
                      <div style={{
                        background: 'rgba(255,255,255,0.1)',
                        padding: '20px',
                        borderRadius: '12px',
                        border: '1px solid rgba(255,255,255,0.2)',
                        backdropFilter: 'blur(10px)',
                        marginBottom: '20px'
                      }}>
                        <ul style={{fontSize: '0.95rem', lineHeight: '1.4', color: 'rgba(255,255,255,0.9)', paddingLeft: '0', margin: 0, listStyle: 'none'}}>
                          {services[currentServiceIndex].serviceList.map((service, index) => (
                            <li key={index} style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '10px',
                              marginBottom: '8px',
                              padding: '4px 0'
                            }}>
                              <span style={{color: '#10b981', fontSize: '1.1rem', marginTop: '2px'}}>✓</span>
                              <span>{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                  
                  <button 
                    onClick={() => toggleService(services[currentServiceIndex].id)}
                    style={{
                      background: 'rgba(255,255,255,0.2)',
                      color: 'white',
                      border: '2px solid rgba(255,255,255,0.3)',
                      borderRadius: '10px',
                      padding: '10px 20px',
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(10px)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(255,255,255,0.3)'
                      e.target.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(255,255,255,0.2)'
                      e.target.style.transform = 'translateY(0)'
                    }}
                  >
                    {expandedService === services[currentServiceIndex].id ? 'Show Less' : 'Learn More'}
                  </button>
                </div>
                
                <div style={{textAlign: 'center'}}>
                  <div style={{
                    position: 'relative',
                    display: 'inline-block',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '2px solid rgba(255,255,255,0.3)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                  }}>
                    <img 
                      src={services[currentServiceIndex].image}
                      alt={services[currentServiceIndex].title}
                      style={{
                        width: '100%', 
                        maxWidth: '350px', 
                        height: '250px', 
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    />
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'rgba(255,255,255,0.1)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.opacity = '1'}
                    onMouseLeave={(e) => e.target.style.opacity = '0'}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modern Carousel Indicators with Progress */}
            <div style={{display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '25px'}}>
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentServiceIndex(index)
                    setExpandedService(null)
                  }}
                  style={{
                    width: index === currentServiceIndex ? '40px' : '16px',
                    height: '16px',
                    borderRadius: '8px',
                    border: '2px solid rgba(255,255,255,0.3)',
                    background: index === currentServiceIndex 
                      ? 'rgba(255,255,255,0.8)' 
                      : 'rgba(255,255,255,0.2)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {index === currentServiceIndex && (
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      height: '100%',
                      background: 'linear-gradient(135deg, #10b981, #3b82f6)',
                      borderRadius: '6px',
                      animation: 'progressBar 5s linear infinite',
                      width: '100%'
                    }}></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="container" style={{padding: '20px 0'}}>
        <h2 style={{
          fontSize: '1.8rem', 
          fontWeight: '700', 
          color: 'var(--primary-blue)', 
          marginBottom: '20px', 
          textAlign: 'center',
          textShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          Our Core Values
        </h2>
        
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '15px'}}>
          
          <div style={{
            background: 'rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '16px',
            padding: '20px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
            textAlign: 'center',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 10px 35px rgba(0, 0, 0, 0.12)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
          }}>
            <div style={{
              fontSize: '2rem', 
              marginBottom: '12px',
              background: 'linear-gradient(135deg, #10b981, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>🤝</div>
            <h4 style={{fontSize: '1.1rem', fontWeight: '600', color: 'var(--primary-maroon)', marginBottom: '8px'}}>
              Accountability
            </h4>
            <p style={{fontSize: '0.85rem', lineHeight: '1.3', color: '#4b5563'}}>
              We uphold responsibility and transparency in all aspects of care and service delivery.
            </p>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '16px',
            padding: '20px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
            textAlign: 'center',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 10px 35px rgba(0, 0, 0, 0.12)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
          }}>
            <div style={{
              fontSize: '2rem', 
              marginBottom: '12px',
              background: 'linear-gradient(135deg, #ef4444, #f97316)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>❤️</div>
            <h4 style={{fontSize: '1.1rem', fontWeight: '600', color: 'var(--primary-maroon)', marginBottom: '8px'}}>
              Empathy
            </h4>
            <p style={{fontSize: '0.85rem', lineHeight: '1.3', color: '#4b5563'}}>
              We provide care with compassion, respect, and sensitivity to client needs.
            </p>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '16px',
            padding: '20px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
            textAlign: 'center',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 10px 35px rgba(0, 0, 0, 0.12)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
          }}>
            <div style={{
              fontSize: '2rem', 
              marginBottom: '12px',
              background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>⭐</div>
            <h4 style={{fontSize: '1.1rem', fontWeight: '600', color: 'var(--primary-maroon)', marginBottom: '8px'}}>
              Professional Excellence
            </h4>
            <p style={{fontSize: '0.85rem', lineHeight: '1.3', color: '#4b5563'}}>
              We are committed to the highest standards of quality, competence, and ethical practice.
            </p>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '16px',
            padding: '20px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
            textAlign: 'center',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 10px 35px rgba(0, 0, 0, 0.12)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
          }}>
            <div style={{
              fontSize: '2rem', 
              marginBottom: '12px',
              background: 'linear-gradient(135deg, #8b5cf6, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>💡</div>
            <h4 style={{fontSize: '1.1rem', fontWeight: '600', color: 'var(--primary-maroon)', marginBottom: '8px'}}>
              Innovation
            </h4>
            <p style={{fontSize: '0.85rem', lineHeight: '1.3', color: '#4b5563'}}>
              We continuously adapt and develop responsive, client-centered healthcare solutions.
            </p>
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
                At QNC Solutions Ltd, we are committed to serving as a trusted bridge between professionalism and accessibility in healthcare. We uphold the highest standards of nursing practice, delivering care with compassion, accountability, and respect.
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
                  QNC Solutions Ltd exists to ensure that quality nursing care is accessible to all, whenever and wherever it is needed.
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
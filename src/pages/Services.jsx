import { Link } from 'react-router-dom'
import { useState } from 'react'

function Services() {
  const [expandedService, setExpandedService] = useState(null)
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0)

  const toggleService = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId)
  }

  const services = [
    {
      id: 'nursing',
      icon: '🏥',
      title: 'Professional Nursing Care',
      description: 'Certified nurses providing comprehensive home healthcare, medication management, and post-operative support.',
      features: [
        'Elderly care and long-term support',
        'Post-surgical recovery monitoring',
        'Chronic condition management',
        'Medication administration'
      ]
    },
    {
      id: 'consultation',
      icon: '👨‍⚕️',
      title: 'General Practice Consultation',
      description: 'Licensed general practitioners offering medical consultations and health assessments at your home.',
      features: [
        'General health assessments',
        'Vital sign monitoring',
        'Health education and counseling',
        'Referral coordination'
      ]
    },
    {
      id: 'nutrition',
      icon: '🥗',
      title: 'Nutritional Services',
      description: 'Professional nutrition assessment, dietary guidance, and meal planning for optimal health and recovery.',
      features: [
        'Nutrition assessment and counseling',
        'Dietary guidance and meal planning',
        'Maternal and child nutrition',
        'Nutritional status monitoring'
      ]
    },
    {
      id: 'mental-health',
      icon: '🧠',
      title: 'Mental Health Support',
      description: 'Comprehensive mental health and psychosocial support services for emotional wellbeing and counseling.',
      features: [
        'Mental health assessments',
        'Psychosocial support and counseling',
        'Emotional wellbeing programs',
        'Crisis intervention support'
      ]
    },
    {
      id: 'occupational',
      icon: '🏗️',
      title: 'Occupational Health',
      description: 'Workplace health services, safety training, and occupational health assessments for organizations.',
      features: [
        'Workplace health assessments',
        'Safety and first aid training',
        'Health monitoring and surveillance',
        'Occupational safety advisory'
      ]
    }
  ]

  const servicesPerPage = 3
  const totalPages = Math.ceil(services.length / servicesPerPage)

  const nextService = () => {
    setCurrentServiceIndex((prev) => (prev + 1) % totalPages)
  }

  const prevService = () => {
    setCurrentServiceIndex((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const getCurrentServices = () => {
    const startIndex = currentServiceIndex * servicesPerPage
    return services.slice(startIndex, startIndex + servicesPerPage)
  }
  return (
    <div>
      {/* Hero Section */}
      <section className="hero" style={{
        background: `linear-gradient(rgba(30, 64, 175, 0.8), rgba(124, 45, 18, 0.8)), url('/images/horizontal homepage image put i n the background.avif')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '80px 0'
      }}>
        <div className="container">
          <div style={{textAlign: 'center', color: 'white'}}>
            <h1 style={{fontSize: '3rem', fontWeight: '700', marginBottom: '20px'}}>Our Services</h1>
            <p style={{fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto'}}>
              Comprehensive healthcare solutions delivered with professionalism and compassion
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Carousel */}
      <section className="container" style={{padding: '30px 0'}}>
        <div className="services-carousel-container" style={{position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '0 60px'}}>
          {/* Navigation Arrows */}
          <button
            className="services-carousel-nav"
            onClick={prevService}
            style={{
              position: 'absolute',
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'var(--primary-blue)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
              fontSize: '18px',
              zIndex: 10,
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              transition: 'all 0.2s ease',
              display: totalPages > 1 ? 'flex' : 'none',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseOver={(e) => e.target.style.background = 'var(--primary-maroon)'}
            onMouseOut={(e) => e.target.style.background = 'var(--primary-blue)'}
          >
            ‹
          </button>

          <button
            className="services-carousel-nav"
            onClick={nextService}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'var(--primary-blue)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
              fontSize: '18px',
              zIndex: 10,
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              transition: 'all 0.2s ease',
              display: totalPages > 1 ? 'flex' : 'none',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseOver={(e) => e.target.style.background = 'var(--primary-maroon)'}
            onMouseOut={(e) => e.target.style.background = 'var(--primary-blue)'}
          >
            ›
          </button>

          {/* Service Cards Grid */}
          <div style={{
            display: 'grid', 
            gridTemplateColumns: `repeat(${getCurrentServices().length}, 1fr)`, 
            gap: '20px',
            transition: 'all 0.3s ease'
          }}>
            {getCurrentServices().map((service, index) => (
              <div key={service.id} className="card service-card card-elevated services-carousel-card" style={{padding: '30px', textAlign: 'center'}}>
                <span style={{fontSize: '3.5rem', marginBottom: '15px', display: 'block'}}>
                  {service.icon}
                </span>
                <h3 style={{color: '#1f2937', marginBottom: '12px', fontSize: '1.3rem'}}>
                  {service.title}
                </h3>
                <p style={{color: '#6b7280', marginBottom: '15px', lineHeight: '1.5', fontSize: '0.9rem'}}>
                  {service.description}
                </p>
                <ul style={{textAlign: 'left', color: '#6b7280', fontSize: '0.8rem', marginBottom: '20px', paddingLeft: '20px'}}>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
                <Link to="/book" className="btn btn-primary" style={{fontSize: '0.85rem', padding: '10px 16px'}}>
                  Book {service.title.split(' ')[0]}
                </Link>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          {totalPages > 1 && (
            <div style={{display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '20px'}}>
              {Array.from({length: totalPages}).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentServiceIndex(index)}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    border: 'none',
                    background: index === currentServiceIndex ? 'var(--primary-blue)' : '#d1d5db',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Comprehensive Services */}
      <section style={{backgroundColor: '#f8fafc', padding: '30px 0'}}>
        <div className="container">
          <h2 style={{textAlign: 'center', fontSize: '2rem', fontWeight: '700', color: 'var(--primary-blue)', marginBottom: '30px'}}>
            Our Comprehensive Services
          </h2>

          {/* Bedside Nursing */}
          <div className="service-section" style={{marginBottom: '25px'}}>
            <div className="card card-elevated" style={{padding: '25px'}}>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', alignItems: 'center'}}>
                <div>
                  <h3 style={{color: '#10b981', fontSize: '1.5rem', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                    🏥 BEDSIDE NURSING & HOME-BASED CARE SERVICES
                  </h3>
                  <p style={{fontSize: '0.95rem', lineHeight: '1.5', color: '#374151', marginBottom: '15px'}}>
                    QNC offers professional home-based nursing care that ensures patients receive quality support in the comfort of their homes 
                    while maintaining continuity of care beyond health facilities.
                  </p>
                  
                  {expandedService === 'bedside' && (
                    <ul style={{fontSize: '0.9rem', lineHeight: '1.6', color: '#4b5563', paddingLeft: '20px', marginBottom: '15px'}}>
                      <li>Elderly care and long-term support</li>
                      <li>Post-surgical care and recovery monitoring</li>
                      <li>Post-delivery and postnatal care for mothers and newborns</li>
                      <li>Palliative and chronic care support</li>
                      <li>Physiotherapy and rehabilitation services</li>
                      <li>Bedside nursing and continuous patient monitoring</li>
                      <li>Mental health and psychosocial support, including emotional care and counselling for patients and caregivers</li>
                    </ul>
                  )}
                  
                  <div style={{display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap'}}>
                    <button 
                      onClick={() => toggleService('bedside')}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--primary-blue)',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        textDecoration: 'underline',
                        padding: '0'
                      }}
                    >
                      {expandedService === 'bedside' ? 'Read Less' : 'Read More'}
                    </button>
                    <Link to="/book" className="btn btn-primary" style={{fontSize: '0.85rem', padding: '8px 16px'}}>
                      Book This Service
                    </Link>
                  </div>
                </div>
                <div style={{textAlign: 'center'}}>
                  <img 
                    src="/images/bedside nursing pic.jpg" 
                    alt="Bedside Nursing Care" 
                    style={{
                      width: '100%', 
                      maxWidth: '350px', 
                      height: '250px', 
                      objectFit: 'cover', 
                      borderRadius: '12px',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                    }} 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Field Medical Support */}
          <div className="service-section" style={{marginBottom: '25px'}}>
            <div className="card card-elevated" style={{padding: '25px'}}>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', alignItems: 'center'}}>
                <div style={{textAlign: 'center'}}>
                  <img 
                    src="/images/medical services pic.jpg" 
                    alt="Field Medical Support Services" 
                    style={{
                      width: '100%', 
                      maxWidth: '350px', 
                      height: '250px', 
                      objectFit: 'cover', 
                      borderRadius: '12px',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                    }} 
                  />
                </div>
                <div>
                  <h3 style={{color: '#10b981', fontSize: '1.5rem', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                    🚑 FIELD MEDICAL SUPPORT SERVICES
                  </h3>
                  <p style={{fontSize: '0.95rem', lineHeight: '1.5', color: '#374151', marginBottom: '15px'}}>
                    QNC delivers integrated Field Medical Support Services for construction projects, industrial operations, and remote assignments, 
                    ensuring compliance with occupational health, safety, and community health standards.
                  </p>
                  
                  {expandedService === 'field' && (
                    <ul style={{fontSize: '0.9rem', lineHeight: '1.6', color: '#4b5563', paddingLeft: '20px', marginBottom: '15px'}}>
                      <li>Deployment of multidisciplinary field teams, including qualified site nurses and technical experts</li>
                      <li>On-site first aid and emergency medical response</li>
                      <li>Safety and First Aid training</li>
                      <li>Health monitoring and medical surveillance of workers</li>
                      <li>Occupational health and safety advisory and support services</li>
                      <li>Mental health and psychosocial support (MHPSS)</li>
                    </ul>
                  )}
                  
                  <div style={{display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap'}}>
                    <button 
                      onClick={() => toggleService('field')}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--primary-blue)',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        textDecoration: 'underline',
                        padding: '0'
                      }}
                    >
                      {expandedService === 'field' ? 'Read Less' : 'Read More'}
                    </button>
                    <Link to="/book" className="btn btn-primary" style={{fontSize: '0.85rem', padding: '8px 16px'}}>
                      Book This Service
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nutrition Support */}
          <div className="service-section" style={{marginBottom: '25px'}}>
            <div className="card card-elevated" style={{padding: '25px'}}>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', alignItems: 'center'}}>
                <div>
                  <h3 style={{color: '#10b981', fontSize: '1.5rem', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                    🥗 NUTRITION SUPPORT SERVICES
                  </h3>
                  <p style={{fontSize: '0.95rem', lineHeight: '1.5', color: '#374151', marginBottom: '15px'}}>
                    QNC provides integrated nutrition support services as part of holistic patient care, promoting recovery, improved health outcomes, 
                    and overall wellbeing across all life stages.
                  </p>
                  
                  {expandedService === 'nutrition' && (
                    <ul style={{fontSize: '0.9rem', lineHeight: '1.6', color: '#4b5563', paddingLeft: '20px', marginBottom: '15px'}}>
                      <li>Nutrition assessment and individualized lifestyle counselling</li>
                      <li>Dietary guidance and meal planning</li>
                      <li>Nutrition support for post-surgical and recovering patients</li>
                      <li>Maternal and child nutrition counselling</li>
                      <li>Monitoring and evaluation of nutritional status as part of ongoing care</li>
                      <li>Nutrition-related psychosocial support to encourage healthy behaviours and adherence</li>
                    </ul>
                  )}
                  
                  <div style={{display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap'}}>
                    <button 
                      onClick={() => toggleService('nutrition')}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--primary-blue)',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        textDecoration: 'underline',
                        padding: '0'
                      }}
                    >
                      {expandedService === 'nutrition' ? 'Read Less' : 'Read More'}
                    </button>
                    <Link to="/book" className="btn btn-primary" style={{fontSize: '0.85rem', padding: '8px 16px'}}>
                      Book This Service
                    </Link>
                  </div>
                </div>
                <div style={{textAlign: 'center'}}>
                  <img 
                    src="/images/nutrition pic.jpg" 
                    alt="Nutrition Support Services" 
                    style={{
                      width: '100%', 
                      maxWidth: '350px', 
                      height: '250px', 
                      objectFit: 'cover', 
                      borderRadius: '12px',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                    }} 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Research Services */}
          <div className="service-section" style={{marginBottom: '25px'}}>
            <div className="card card-elevated" style={{padding: '25px'}}>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', alignItems: 'center'}}>
                <div style={{textAlign: 'center'}}>
                  <img 
                    src="/images/social medical research pic.jpg" 
                    alt="Social and Medical Research" 
                    style={{
                      width: '100%', 
                      maxWidth: '350px', 
                      height: '250px', 
                      objectFit: 'cover', 
                      borderRadius: '12px',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                    }} 
                  />
                </div>
                <div>
                  <h3 style={{color: '#10b981', fontSize: '1.5rem', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                    📊 SOCIAL AND MEDICAL RESEARCH
                  </h3>
                  <p style={{fontSize: '0.95rem', lineHeight: '1.5', color: '#374151', marginBottom: '15px'}}>
                    QNC Solutions Ltd provides Project Evaluation and Research Services to support evidence-based planning, performance monitoring, 
                    safeguard compliance, and learning across health, infrastructure, and community development projects.
                  </p>
                  
                  {expandedService === 'research' && (
                    <>
                      <p style={{fontSize: '0.9rem', lineHeight: '1.6', color: '#4b5563', marginBottom: '10px'}}>
                        Services include baseline, mid-term, and end-line evaluations; health and social impact assessments; community and workforce surveys; 
                        and qualitative and mixed-methods research in project sites and affected communities.
                      </p>
                      <p style={{fontSize: '0.9rem', lineHeight: '1.6', color: '#4b5563', marginBottom: '15px'}}>
                        <strong>Key thematic areas include:</strong> occupational and community health, mental health and psychosocial wellbeing, 
                        SRHR and HIV/AIDS, GBV and SEA/SH risk assessment, child protection, nutrition, road safety, and occupational health and safety.
                      </p>
                    </>
                  )}
                  
                  <div style={{display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap'}}>
                    <button 
                      onClick={() => toggleService('research')}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--primary-blue)',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        textDecoration: 'underline',
                        padding: '0'
                      }}
                    >
                      {expandedService === 'research' ? 'Read Less' : 'Read More'}
                    </button>
                    <Link to="/book" className="btn btn-primary" style={{fontSize: '0.85rem', padding: '8px 16px'}}>
                      Book This Service
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Health */}
          <div className="service-section" style={{marginBottom: '25px'}}>
            <div className="card card-elevated" style={{padding: '25px'}}>
              <h3 style={{color: '#10b981', fontSize: '1.5rem', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center'}}>
                📱 MOBILE HEALTH SERVICES
              </h3>
              <p style={{fontSize: '0.95rem', lineHeight: '1.5', color: '#374151', marginBottom: '15px', textAlign: 'center'}}>
                QNC's Mobile Health Services extend professional healthcare to communities, workplaces, homes, and remote locations, 
                improving access to essential services and continuity of care.
              </p>
              
              {expandedService === 'mobile' && (
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '20px', marginBottom: '15px'}}>
                  <div>
                    <h4 style={{color: '#059669', marginBottom: '10px', fontSize: '1.1rem'}}>Core Services:</h4>
                    <ul style={{fontSize: '0.9rem', lineHeight: '1.6', color: '#4b5563', paddingLeft: '20px'}}>
                      <li>Medication and drug administration as prescribed</li>
                      <li>Patient assessment, monitoring, and follow-up care</li>
                      <li>Vital sign monitoring (blood pressure, temperature, pulse, respiration, oxygen saturation)</li>
                      <li>Counseling, health education, and psychosocial support</li>
                    </ul>
                  </div>
                  <div>
                    <h4 style={{color: '#059669', marginBottom: '10px', fontSize: '1.1rem'}}>Specialized Support:</h4>
                    <ul style={{fontSize: '0.9rem', lineHeight: '1.6', color: '#4b5563', paddingLeft: '20px'}}>
                      <li>Chronic condition management and adherence support</li>
                      <li>Referral and coordination with healthcare facilities</li>
                      <li>Community-based mental health and psychosocial support (MHPSS) and referrals</li>
                    </ul>
                  </div>
                </div>
              )}
              
              <div style={{display: 'flex', gap: '15px', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap'}}>
                <button 
                  onClick={() => toggleService('mobile')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--primary-blue)',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    padding: '0'
                  }}
                >
                  {expandedService === 'mobile' ? 'Read Less' : 'Read More'}
                </button>
                <Link to="/book" className="btn btn-primary" style={{fontSize: '0.85rem', padding: '8px 16px'}}>
                  Book This Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
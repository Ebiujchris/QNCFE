import { Link } from 'react-router-dom'
import { useState } from 'react'

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
  return (
    <div>
      {/* Page Header */}
      <div 
        className="page-header" 
        style={{
          backgroundImage: `url('/images/new background image.avif')`
        }}
      >
        <div className="page-header-content">
          <h1>About QNC Solutions Ltd</h1>
          <p>Professional healthcare services committed to quality, reliability, and compassionate care</p>
        </div>
      </div>

      {/* Book Our Services Button */}
      <section style={{padding: '20px 0', textAlign: 'center', backgroundColor: '#f8fafc'}}>
        <div className="container">
          <Link to="/book" className="btn btn-primary btn-large" style={{backgroundColor: 'var(--primary-maroon)', border: 'none'}}>
            Book Our Services
          </Link>
        </div>
      </section>

      {/* Company Profile Section */}
      <section className="container" style={{padding: '30px 0'}}>
        <div className="card card-elevated" style={{padding: '30px'}}>
          <h2 style={{fontSize: '2.25rem', fontWeight: '700', color: 'var(--primary-blue)', marginBottom: '20px', textAlign: 'center'}}>
            Company Profile
          </h2>
          
          <div style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#374151', marginBottom: '20px'}}>
            <p style={{marginBottom: '15px'}}>
              QNC Solutions Ltd is a professional healthcare services provider committed to delivering high-quality, reliable, and compassionate nursing and medical support services across Uganda and beyond. Founded on the principle of Quality Nursing Care, QNC bridges the gap between professional healthcare delivery and accessibility, ensuring that individuals, families, organizations, and field-based projects receive timely, expert care wherever it is needed.
            </p>
            
            <p style={{marginBottom: '15px'}}>
              Recognizing that healthcare needs extend beyond traditional clinical settings, QNC provides integrated services across homes, workplaces, construction sites, communities, and remote environments. Our service delivery model promotes continuity of care, strengthens health and safety compliance, and improves overall health outcomes through responsive, client-centered solutions delivered by qualified and licensed healthcare professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="container" style={{padding: '20px 0'}}>
        <h2 style={{fontSize: '2.25rem', fontWeight: '700', color: 'var(--primary-blue)', marginBottom: '25px', textAlign: 'center'}}>
          Our Core Services
        </h2>

        {/* Services Carousel */}
        <div className="services-carousel-container" style={{position: 'relative', maxWidth: '900px', margin: '0 auto'}}>
          {/* Navigation Arrows */}
          <button
            className="services-carousel-nav"
            onClick={prevService}
            style={{
              position: 'absolute',
              left: '-50px',
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
              zIndex: 2,
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              transition: 'all 0.2s ease'
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
              right: '-50px',
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
              zIndex: 2,
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => e.target.style.background = 'var(--primary-maroon)'}
            onMouseOut={(e) => e.target.style.background = 'var(--primary-blue)'}
          >
            ›
          </button>

          {/* Service Card */}
          <div className="card card-elevated services-carousel-card" style={{padding: '25px'}}>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '25px', alignItems: 'center'}}>
              <div>
                <h3 style={{fontSize: '1.6rem', fontWeight: '600', color: 'var(--primary-maroon)', marginBottom: '15px'}}>
                  {services[currentServiceIndex].title}
                </h3>
                <p style={{fontSize: '0.95rem', lineHeight: '1.6', color: '#374151', marginBottom: '15px'}}>
                  {services[currentServiceIndex].shortDescription}
                </p>
                
                {expandedService === services[currentServiceIndex].id && (
                  <>
                    {services[currentServiceIndex].fullDescription && (
                      <p style={{fontSize: '1rem', lineHeight: '1.7', color: '#374151', marginBottom: '20px'}}>
                        {services[currentServiceIndex].fullDescription}
                      </p>
                    )}
                    <ul style={{fontSize: '0.95rem', lineHeight: '1.6', color: '#4b5563', paddingLeft: '20px', marginBottom: '20px'}}>
                      {services[currentServiceIndex].serviceList.map((service, index) => (
                        <li key={index}>{service}</li>
                      ))}
                    </ul>
                  </>
                )}
                
                <button 
                  onClick={() => toggleService(services[currentServiceIndex].id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--primary-blue)',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    padding: '0'
                  }}
                >
                  {expandedService === services[currentServiceIndex].id ? 'Read Less' : 'Read More'}
                </button>
              </div>
              
              <div style={{textAlign: 'center'}}>
                <img 
                  src={services[currentServiceIndex].image}
                  alt={services[currentServiceIndex].title}
                  className="services-carousel-image"
                  style={{
                    width: '100%', 
                    maxWidth: '400px', 
                    height: '300px', 
                    objectFit: 'cover', 
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                  }} 
                />
              </div>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div style={{display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '20px'}}>
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentServiceIndex(index)
                  setExpandedService(null)
                }}
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
        </div>
      </section>

      {/* Vision, Mission, Values Section */}
      <section style={{backgroundColor: '#f8fafc', padding: '30px 0'}}>
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px'}}>
            
            {/* Vision */}
            <div className="card card-elevated" style={{padding: '20px', textAlign: 'center'}}>
              <div style={{fontSize: '2.5rem', marginBottom: '15px'}}>🎯</div>
              <h3 style={{fontSize: '1.3rem', fontWeight: '600', color: 'var(--primary-blue)', marginBottom: '10px'}}>
                Our Vision
              </h3>
              <p style={{fontSize: '0.95rem', lineHeight: '1.5', color: '#374151'}}>
                To be a trusted leader in bridging professional healthcare delivery and accessibility, making quality nursing care available to all.
              </p>
            </div>

            {/* Mission */}
            <div className="card card-elevated" style={{padding: '20px', textAlign: 'center'}}>
              <div style={{fontSize: '2.5rem', marginBottom: '15px'}}>🎯</div>
              <h3 style={{fontSize: '1.3rem', fontWeight: '600', color: 'var(--primary-blue)', marginBottom: '10px'}}>
                Our Mission
              </h3>
              <p style={{fontSize: '0.95rem', lineHeight: '1.5', color: '#374151'}}>
                To deliver professional, compassionate, and client-centered healthcare services that uphold safety, dignity, and accessibility for individuals, families, and organizations.
              </p>
            </div>

            {/* Core Objective */}
            <div className="card card-elevated" style={{padding: '20px', textAlign: 'center'}}>
              <div style={{fontSize: '2.5rem', marginBottom: '15px'}}>🎯</div>
              <h3 style={{fontSize: '1.3rem', fontWeight: '600', color: 'var(--primary-blue)', marginBottom: '10px'}}>
                Core Objective
              </h3>
              <p style={{fontSize: '0.95rem', lineHeight: '1.5', color: '#374151'}}>
                To be a leading provider of reliable, high-quality nursing and medical support services, delivering expert care where and when it is needed most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="container" style={{padding: '30px 0'}}>
        <h2 style={{fontSize: '2rem', fontWeight: '700', color: 'var(--primary-blue)', marginBottom: '25px', textAlign: 'center'}}>
          Our Core Values
        </h2>
        
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px'}}>
          
          <div className="card card-elevated" style={{padding: '20px', textAlign: 'center'}}>
            <div style={{fontSize: '2rem', marginBottom: '10px'}}>🤝</div>
            <h4 style={{fontSize: '1.2rem', fontWeight: '600', color: 'var(--primary-maroon)', marginBottom: '8px'}}>
              Accountability
            </h4>
            <p style={{fontSize: '0.9rem', lineHeight: '1.4', color: '#4b5563'}}>
              We uphold responsibility and transparency in all aspects of care and service delivery.
            </p>
          </div>

          <div className="card card-elevated" style={{padding: '20px', textAlign: 'center'}}>
            <div style={{fontSize: '2rem', marginBottom: '10px'}}>❤️</div>
            <h4 style={{fontSize: '1.2rem', fontWeight: '600', color: 'var(--primary-maroon)', marginBottom: '8px'}}>
              Empathy
            </h4>
            <p style={{fontSize: '0.9rem', lineHeight: '1.4', color: '#4b5563'}}>
              We provide care with compassion, respect, and sensitivity to client needs.
            </p>
          </div>

          <div className="card card-elevated" style={{padding: '20px', textAlign: 'center'}}>
            <div style={{fontSize: '2rem', marginBottom: '10px'}}>⭐</div>
            <h4 style={{fontSize: '1.2rem', fontWeight: '600', color: 'var(--primary-maroon)', marginBottom: '8px'}}>
              Professional Excellence
            </h4>
            <p style={{fontSize: '0.9rem', lineHeight: '1.4', color: '#4b5563'}}>
              We are committed to the highest standards of quality, competence, and ethical practice.
            </p>
          </div>

          <div className="card card-elevated" style={{padding: '20px', textAlign: 'center'}}>
            <div style={{fontSize: '2rem', marginBottom: '10px'}}>💡</div>
            <h4 style={{fontSize: '1.2rem', fontWeight: '600', color: 'var(--primary-maroon)', marginBottom: '8px'}}>
              Innovation
            </h4>
            <p style={{fontSize: '0.9rem', lineHeight: '1.4', color: '#4b5563'}}>
              We continuously adapt and develop responsive, client-centered healthcare solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section style={{backgroundColor: '#f8fafc', padding: '30px 0'}}>
        <div className="container">
          <div className="card card-elevated" style={{padding: '30px'}}>
            <h2 style={{fontSize: '2rem', fontWeight: '700', color: 'var(--primary-blue)', marginBottom: '20px', textAlign: 'center'}}>
              Our Commitment
            </h2>
            <div style={{fontSize: '1rem', lineHeight: '1.6', color: '#374151', textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
              <p style={{marginBottom: '15px'}}>
                At QNC Solutions Ltd, we are committed to serving as a trusted bridge between professionalism and accessibility in healthcare. We uphold the highest standards of nursing practice, delivering care with compassion, accountability, and respect.
              </p>
              <p style={{marginBottom: '15px'}}>
                Our commitment is to consistently provide high-quality, client-centered nursing and medical support services that safeguard health, support recovery, and promote overall wellbeing—whether at home, in workplaces, on project sites, or during travel.
              </p>
              <p style={{fontWeight: '600', color: 'var(--primary-maroon)'}}>
                QNC Solutions Ltd exists to ensure that quality nursing care is accessible to all, whenever and wherever it is needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Core Team Section */}
      <section className="container" style={{padding: '30px 0'}}>
        <h2 style={{fontSize: '2rem', fontWeight: '700', color: 'var(--primary-blue)', marginBottom: '25px', textAlign: 'center'}}>
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
              left: '-50px',
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
              zIndex: 2,
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => e.target.style.background = 'var(--primary-maroon)'}
            onMouseOut={(e) => e.target.style.background = 'var(--primary-blue)'}
          >
            ‹
          </button>

          <button
            className="team-carousel-nav"
            onClick={nextTeamMember}
            style={{
              position: 'absolute',
              right: '-50px',
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
              zIndex: 2,
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => e.target.style.background = 'var(--primary-maroon)'}
            onMouseOut={(e) => e.target.style.background = 'var(--primary-blue)'}
          >
            ›
          </button>

          {/* Team Member Card */}
          <div className="card card-elevated team-carousel-card" style={{padding: '25px'}}>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', alignItems: 'center'}}>
              <div style={{textAlign: 'center'}}>
                {teamMembers[currentTeamIndex].image.startsWith('/') ? (
                  <img 
                    className="team-member-image"
                    src={teamMembers[currentTeamIndex].image}
                    alt={teamMembers[currentTeamIndex].name}
                    style={{
                      width: '150px', 
                      height: '150px', 
                      borderRadius: '50%',
                      objectFit: 'cover',
                      margin: '0 auto 15px',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                    }} 
                  />
                ) : (
                  <div 
                    className="team-member-emoji"
                    style={{
                      width: '150px',
                      height: '150px',
                      borderRadius: '50%',
                      backgroundColor: currentTeamIndex % 2 === 0 ? 'var(--primary-blue)' : 'var(--primary-maroon)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 15px',
                      fontSize: '3rem',
                      color: 'white'
                    }}
                  >
                    {teamMembers[currentTeamIndex].image}
                  </div>
                )}
                <h3 style={{fontSize: '1.3rem', fontWeight: '600', color: 'var(--primary-maroon)', marginBottom: '5px'}}>
                  {teamMembers[currentTeamIndex].name}
                </h3>
                <p style={{fontSize: '0.95rem', color: 'var(--primary-blue)', fontWeight: '500'}}>
                  {teamMembers[currentTeamIndex].position}
                </p>
              </div>
              
              <div>
                <p style={{fontSize: '0.95rem', lineHeight: '1.6', color: '#374151', marginBottom: '15px'}}>
                  {teamMembers[currentTeamIndex].shortBio}
                </p>
                
                {expandedTeamMember === teamMembers[currentTeamIndex].id && (
                  <div style={{marginBottom: '15px'}}>
                    {teamMembers[currentTeamIndex].fullBio.map((paragraph, index) => (
                      <p key={index} style={{fontSize: '0.9rem', lineHeight: '1.5', color: '#4b5563', marginBottom: '10px'}}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
                
                <button 
                  onClick={() => toggleTeamMember(teamMembers[currentTeamIndex].id)}
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
                  {expandedTeamMember === teamMembers[currentTeamIndex].id ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div style={{display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '15px'}}>
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentTeamIndex(index)
                  setExpandedTeamMember(null)
                }}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  border: 'none',
                  background: index === currentTeamIndex ? 'var(--primary-blue)' : '#d1d5db',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{backgroundColor: 'var(--primary-blue)', color: 'white', padding: '40px 0', textAlign: 'center'}}>
        <div className="container">
          <h2 style={{fontSize: '2rem', fontWeight: '700', marginBottom: '15px'}}>
            Ready to Experience Quality Healthcare?
          </h2>
          <p style={{fontSize: '1.1rem', marginBottom: '20px', opacity: '0.9'}}>
            Connect with our professional healthcare team today
          </p>
          <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Link to="/contact" className="btn btn-outline" style={{borderColor: 'white', color: 'white'}}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
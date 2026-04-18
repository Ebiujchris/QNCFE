import { Link } from 'react-router-dom'

function Services() {
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

      {/* Main Services */}
      <section className="container" style={{padding: '60px 0'}}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px', marginBottom: '60px'}}>
          
          {/* Nursing Care */}
          <div className="card service-card card-elevated" style={{padding: '30px', textAlign: 'center'}}>
            <span style={{fontSize: '4rem', marginBottom: '20px', display: 'block'}}>🏥</span>
            <h3 style={{color: '#1f2937', marginBottom: '15px', fontSize: '1.5rem'}}>Professional Nursing Care</h3>
            <p style={{color: '#6b7280', marginBottom: '20px', lineHeight: '1.6'}}>
              Certified nurses providing comprehensive home healthcare, medication management, and post-operative support.
            </p>
            <ul style={{textAlign: 'left', color: '#6b7280', fontSize: '0.9rem', marginBottom: '25px', paddingLeft: '20px'}}>
              <li>Elderly care and long-term support</li>
              <li>Post-surgical recovery monitoring</li>
              <li>Chronic condition management</li>
              <li>Medication administration</li>
            </ul>
            <Link to="/book" className="btn btn-primary">Book Nursing Care</Link>
          </div>

          {/* Medical Consultation */}
          <div className="card service-card card-elevated" style={{padding: '30px', textAlign: 'center'}}>
            <span style={{fontSize: '4rem', marginBottom: '20px', display: 'block'}}>👨‍⚕️</span>
            <h3 style={{color: '#1f2937', marginBottom: '15px', fontSize: '1.5rem'}}>Medical Consultation</h3>
            <p style={{color: '#6b7280', marginBottom: '20px', lineHeight: '1.6'}}>
              Licensed general practitioners offering medical consultations and health assessments at your home.
            </p>
            <ul style={{textAlign: 'left', color: '#6b7280', fontSize: '0.9rem', marginBottom: '25px', paddingLeft: '20px'}}>
              <li>General health assessments</li>
              <li>Vital sign monitoring</li>
              <li>Health education and counseling</li>
              <li>Referral coordination</li>
            </ul>
            <Link to="/book" className="btn btn-primary">Book Consultation</Link>
          </div>

          {/* Caregiver Support */}
          <div className="card service-card card-elevated" style={{padding: '30px', textAlign: 'center'}}>
            <span style={{fontSize: '4rem', marginBottom: '20px', display: 'block'}}>🤝</span>
            <h3 style={{color: '#1f2937', marginBottom: '15px', fontSize: '1.5rem'}}>Caregiver Support</h3>
            <p style={{color: '#6b7280', marginBottom: '20px', lineHeight: '1.6'}}>
              Compassionate caregivers providing daily assistance, companionship, and personal care for all ages.
            </p>
            <ul style={{textAlign: 'left', color: '#6b7280', fontSize: '0.9rem', marginBottom: '25px', paddingLeft: '20px'}}>
              <li>Personal care assistance</li>
              <li>Companionship services</li>
              <li>Daily living support</li>
              <li>Emotional care and support</li>
            </ul>
            <Link to="/book" className="btn btn-primary">Book Caregiver</Link>
          </div>
        </div>
      </section>

      {/* Comprehensive Services */}
      <section style={{backgroundColor: '#f8fafc', padding: '60px 0'}}>
        <div className="container">
          <h2 style={{textAlign: 'center', fontSize: '2.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '50px'}}>
            Our Comprehensive Services
          </h2>

          {/* Bedside Nursing */}
          <div className="service-section" style={{marginBottom: '50px'}}>
            <div className="card card-elevated" style={{padding: '40px'}}>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', alignItems: 'center'}}>
                <div>
                  <h3 style={{color: '#10b981', fontSize: '1.8rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                    🏥 BEDSIDE NURSING & HOME-BASED CARE SERVICES
                  </h3>
                  <p style={{fontSize: '1.1rem', lineHeight: '1.6', color: '#374151', marginBottom: '20px'}}>
                    QNC offers professional home-based nursing care that ensures patients receive quality support in the comfort of their homes 
                    while maintaining continuity of care beyond health facilities. Our services include:
                  </p>
                  <ul style={{fontSize: '1rem', lineHeight: '1.8', color: '#4b5563', paddingLeft: '20px'}}>
                    <li>Elderly care and long-term support</li>
                    <li>Post-surgical care and recovery monitoring</li>
                    <li>Post-delivery and postnatal care for mothers and newborns</li>
                    <li>Palliative and chronic care support</li>
                    <li>Physiotherapy and rehabilitation services</li>
                    <li>Bedside nursing and continuous patient monitoring</li>
                    <li>Mental health and psychosocial support, including emotional care and counselling for patients and caregivers</li>
                  </ul>
                </div>
                <div style={{textAlign: 'center'}}>
                  <img 
                    src="/images/bedside nursing pic.jpg" 
                    alt="Bedside Nursing Care" 
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
          </div>

          {/* Field Medical Support */}
          <div className="service-section" style={{marginBottom: '50px'}}>
            <div className="card card-elevated" style={{padding: '40px'}}>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', alignItems: 'center'}}>
                <div style={{textAlign: 'center'}}>
                  <img 
                    src="/images/medical services pic.jpg" 
                    alt="Field Medical Support Services" 
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
                <div>
                  <h3 style={{color: '#10b981', fontSize: '1.8rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                    🚑 FIELD MEDICAL SUPPORT SERVICES
                  </h3>
                  <p style={{fontSize: '1.1rem', lineHeight: '1.6', color: '#374151', marginBottom: '20px'}}>
                    QNC delivers integrated Field Medical Support Services for construction projects, industrial operations, and remote assignments, 
                    ensuring compliance with occupational health, safety, and community health standards. Our services strengthen workplace medical 
                    readiness, reduce health risks, and ensure timely emergency response. Services include:
                  </p>
                  <ul style={{fontSize: '1rem', lineHeight: '1.8', color: '#4b5563', paddingLeft: '20px'}}>
                    <li>Deployment of multidisciplinary field teams, including qualified site nurses and technical experts</li>
                    <li>On-site first aid and emergency medical response</li>
                    <li>Safety and First Aid training</li>
                    <li>Health monitoring and medical surveillance of workers</li>
                    <li>Occupational health and safety advisory and support services</li>
                    <li>Mental health and psychosocial support (MHPSS)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Nutrition Support */}
          <div className="service-section" style={{marginBottom: '50px'}}>
            <div className="card card-elevated" style={{padding: '40px'}}>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', alignItems: 'center'}}>
                <div>
                  <h3 style={{color: '#10b981', fontSize: '1.8rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                    🥗 NUTRITION SUPPORT SERVICES
                  </h3>
                  <p style={{fontSize: '1.1rem', lineHeight: '1.6', color: '#374151', marginBottom: '20px'}}>
                    QNC provides integrated nutrition support services as part of holistic patient care, promoting recovery, improved health outcomes, 
                    and overall wellbeing across all life stages. Services include:
                  </p>
                  <ul style={{fontSize: '1rem', lineHeight: '1.8', color: '#4b5563', paddingLeft: '20px'}}>
                    <li>Nutrition assessment and individualized lifestyle counselling</li>
                    <li>Dietary guidance and meal planning</li>
                    <li>Nutrition support for post-surgical and recovering patients</li>
                    <li>Maternal and child nutrition counselling</li>
                    <li>Monitoring and evaluation of nutritional status as part of ongoing care</li>
                    <li>Nutrition-related psychosocial support to encourage healthy behaviours and adherence</li>
                  </ul>
                </div>
                <div style={{textAlign: 'center'}}>
                  <img 
                    src="/images/nutrition pic.jpg" 
                    alt="Nutrition Support Services" 
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
          </div>

          {/* Research Services */}
          <div className="service-section" style={{marginBottom: '50px'}}>
            <div className="card card-elevated" style={{padding: '40px'}}>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', alignItems: 'center'}}>
                <div style={{textAlign: 'center'}}>
                  <img 
                    src="/images/social medical research pic.jpg" 
                    alt="Social and Medical Research" 
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
                <div>
                  <h3 style={{color: '#10b981', fontSize: '1.8rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                    📊 SOCIAL AND MEDICAL RESEARCH
                  </h3>
                  <p style={{fontSize: '1.1rem', lineHeight: '1.6', color: '#374151', marginBottom: '20px'}}>
                    QNC Solutions Ltd provides Project Evaluation and Research Services to support evidence-based planning, performance monitoring, 
                    safeguard compliance, and learning across health, infrastructure, and community development projects. The company conducts social, 
                    medical, and health-focused research to inform decision-making and improve accountability.
                  </p>
                  <p style={{fontSize: '1rem', lineHeight: '1.8', color: '#4b5563', marginBottom: '15px'}}>
                    Services include baseline, mid-term, and end-line evaluations; health and social impact assessments; community and workforce surveys; 
                    and qualitative and mixed-methods research in project sites and affected communities.
                  </p>
                  <p style={{fontSize: '1rem', lineHeight: '1.8', color: '#4b5563'}}>
                    <strong>Key thematic areas include:</strong> occupational and community health, mental health and psychosocial wellbeing, 
                    SRHR and HIV/AIDS, GBV and SEA/SH risk assessment, child protection, nutrition, road safety, and occupational health and safety.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Health */}
          <div className="service-section" style={{marginBottom: '50px'}}>
            <div className="card card-elevated" style={{padding: '40px'}}>
              <h3 style={{color: '#10b981', fontSize: '1.8rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center'}}>
                📱 MOBILE HEALTH SERVICES
              </h3>
              <p style={{fontSize: '1.1rem', lineHeight: '1.6', color: '#374151', marginBottom: '20px', textAlign: 'center'}}>
                QNC's Mobile Health Services extend professional healthcare to communities, workplaces, homes, and remote locations, 
                improving access to essential services and continuity of care. Our services support timely treatment, monitoring, 
                and follow-up for patients across different settings.
              </p>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '30px'}}>
                <div>
                  <h4 style={{color: '#059669', marginBottom: '15px'}}>Core Services:</h4>
                  <ul style={{fontSize: '1rem', lineHeight: '1.8', color: '#4b5563', paddingLeft: '20px'}}>
                    <li>Medication and drug administration as prescribed</li>
                    <li>Patient assessment, monitoring, and follow-up care</li>
                    <li>Vital sign monitoring (blood pressure, temperature, pulse, respiration, oxygen saturation)</li>
                    <li>Counseling, health education, and psychosocial support</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{color: '#059669', marginBottom: '15px'}}>Specialized Support:</h4>
                  <ul style={{fontSize: '1rem', lineHeight: '1.8', color: '#4b5563', paddingLeft: '20px'}}>
                    <li>Chronic condition management and adherence support</li>
                    <li>Referral and coordination with healthcare facilities</li>
                    <li>Community-based mental health and psychosocial support (MHPSS) and referrals</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
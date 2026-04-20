import { Link } from 'react-router-dom'

function About() {
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

      {/* Company Profile Section */}
      <section className="container" style={{padding: '60px 0'}}>
        <div className="card card-elevated" style={{padding: '50px'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: 'var(--primary-blue)', marginBottom: '30px', textAlign: 'center'}}>
            Company Profile
          </h2>
          
          <div style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#374151', marginBottom: '40px'}}>
            <p style={{marginBottom: '25px'}}>
              QNC Solutions Ltd is a professional healthcare services provider committed to delivering high-quality, reliable, and compassionate nursing and medical support services across Uganda and beyond. Founded on the principle of Quality Nursing Care, QNC bridges the gap between professional healthcare delivery and accessibility, ensuring that individuals, families, organizations, and field-based projects receive timely, expert care wherever it is needed.
            </p>
            
            <p style={{marginBottom: '25px'}}>
              Recognizing that healthcare needs extend beyond traditional clinical settings, QNC provides integrated services across homes, workplaces, construction sites, communities, and remote environments. Our service delivery model promotes continuity of care, strengthens health and safety compliance, and improves overall health outcomes through responsive, client-centered solutions delivered by qualified and licensed healthcare professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="container" style={{padding: '40px 0'}}>
        <h2 style={{fontSize: '2.25rem', fontWeight: '700', color: 'var(--primary-blue)', marginBottom: '40px', textAlign: 'center'}}>
          Our Core Services
        </h2>

        {/* Field Medical Support Services */}
        <div className="card card-elevated" style={{padding: '40px', marginBottom: '30px'}}>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px', alignItems: 'center'}}>
            <div>
              <h3 style={{fontSize: '1.8rem', fontWeight: '600', color: 'var(--primary-maroon)', marginBottom: '20px'}}>
                1. Field Medical Support Services
              </h3>
              <p style={{fontSize: '1rem', lineHeight: '1.7', color: '#374151', marginBottom: '20px'}}>
                QNC delivers comprehensive and integrated field medical support tailored to construction, industrial, infrastructure, and remote operations. Our services ensure compliance with occupational health and safety standards while strengthening on-site medical preparedness, risk management, and emergency response systems.
              </p>
              <ul style={{fontSize: '0.95rem', lineHeight: '1.6', color: '#4b5563', paddingLeft: '20px'}}>
                <li>Deployment of qualified field medical teams (nurses and allied professionals)</li>
                <li>On-site first aid and emergency medical response</li>
                <li>Occupational health screening, monitoring, and medical surveillance</li>
                <li>Incident documentation, reporting, and referral coordination</li>
                <li>Occupational Health and Safety (OHS) advisory and support services</li>
                <li>First Aid and safety training for staff</li>
                <li>Mental Health and Psychosocial Support (MHPSS)</li>
                <li>Community-based health support and MHPSS referrals</li>
              </ul>
            </div>
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
          </div>
        </div>

        {/* Professional Nursing & Home-Based Care */}
        <div className="card card-elevated" style={{padding: '40px', marginBottom: '30px'}}>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px', alignItems: 'center'}}>
            <div style={{textAlign: 'center'}}>
              <img 
                src="/images/bedside nursing pic.jpg" 
                alt="Professional Nursing Care" 
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
              <h3 style={{fontSize: '1.8rem', fontWeight: '600', color: 'var(--primary-maroon)', marginBottom: '20px'}}>
                2. Professional Nursing & Home-Based Care Services
              </h3>
              <p style={{fontSize: '1rem', lineHeight: '1.7', color: '#374151', marginBottom: '20px'}}>
                QNC offers holistic, patient-centered nursing and home-based care services that extend quality healthcare beyond health facilities. We support recovery, long-term care, and improved quality of life through personalized care delivered in the comfort and dignity of patients' homes.
              </p>
              <ul style={{fontSize: '0.95rem', lineHeight: '1.6', color: '#4b5563', paddingLeft: '20px'}}>
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
          </div>
        </div>

        {/* Mobile Health Services */}
        <div className="card card-elevated" style={{padding: '40px', marginBottom: '30px'}}>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px', alignItems: 'center'}}>
            <div>
              <h3 style={{fontSize: '1.8rem', fontWeight: '600', color: 'var(--primary-maroon)', marginBottom: '20px'}}>
                3. Mobile Health Services
              </h3>
              <p style={{fontSize: '1rem', lineHeight: '1.7', color: '#374151', marginBottom: '20px'}}>
                QNC's Mobile Health Services expand access to essential healthcare by delivering services directly to communities, workplaces, and underserved or hard-to-reach areas. This model strengthens preventive care, early detection, and continuity of treatment.
              </p>
              <ul style={{fontSize: '0.95rem', lineHeight: '1.6', color: '#4b5563', paddingLeft: '20px'}}>
                <li>Patient assessment, monitoring, and follow-up care</li>
                <li>Administration of prescribed medications</li>
                <li>Vital signs monitoring (blood pressure, temperature, pulse, respiration, oxygen saturation)</li>
                <li>Chronic disease management and treatment adherence support</li>
                <li>Health education, counseling, and psychosocial support</li>
              </ul>
            </div>
            <div style={{textAlign: 'center'}}>
              <img 
                src="/images/healthcare.avif" 
                alt="Mobile Health Services" 
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
      </section>

      {/* Vision, Mission, Values Section */}
      <section style={{backgroundColor: '#f8fafc', padding: '60px 0'}}>
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px'}}>
            
            {/* Vision */}
            <div className="card card-elevated" style={{padding: '30px', textAlign: 'center'}}>
              <div style={{fontSize: '3rem', marginBottom: '20px'}}>🎯</div>
              <h3 style={{fontSize: '1.5rem', fontWeight: '600', color: 'var(--primary-blue)', marginBottom: '15px'}}>
                Our Vision
              </h3>
              <p style={{fontSize: '1rem', lineHeight: '1.6', color: '#374151'}}>
                To be a trusted leader in bridging professional healthcare delivery and accessibility, making quality nursing care available to all.
              </p>
            </div>

            {/* Mission */}
            <div className="card card-elevated" style={{padding: '30px', textAlign: 'center'}}>
              <div style={{fontSize: '3rem', marginBottom: '20px'}}>🎯</div>
              <h3 style={{fontSize: '1.5rem', fontWeight: '600', color: 'var(--primary-blue)', marginBottom: '15px'}}>
                Our Mission
              </h3>
              <p style={{fontSize: '1rem', lineHeight: '1.6', color: '#374151'}}>
                To deliver professional, compassionate, and client-centered healthcare services that uphold safety, dignity, and accessibility for individuals, families, and organizations.
              </p>
            </div>

            {/* Core Objective */}
            <div className="card card-elevated" style={{padding: '30px', textAlign: 'center'}}>
              <div style={{fontSize: '3rem', marginBottom: '20px'}}>🎯</div>
              <h3 style={{fontSize: '1.5rem', fontWeight: '600', color: 'var(--primary-blue)', marginBottom: '15px'}}>
                Core Objective
              </h3>
              <p style={{fontSize: '1rem', lineHeight: '1.6', color: '#374151'}}>
                To be a leading provider of reliable, high-quality nursing and medical support services, delivering expert care where and when it is needed most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="container" style={{padding: '60px 0'}}>
        <h2 style={{fontSize: '2.25rem', fontWeight: '700', color: 'var(--primary-blue)', marginBottom: '40px', textAlign: 'center'}}>
          Our Core Values
        </h2>
        
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px'}}>
          
          <div className="card card-elevated" style={{padding: '25px', textAlign: 'center'}}>
            <div style={{fontSize: '2.5rem', marginBottom: '15px'}}>🤝</div>
            <h4 style={{fontSize: '1.3rem', fontWeight: '600', color: 'var(--primary-maroon)', marginBottom: '10px'}}>
              Accountability
            </h4>
            <p style={{fontSize: '0.95rem', lineHeight: '1.5', color: '#4b5563'}}>
              We uphold responsibility and transparency in all aspects of care and service delivery.
            </p>
          </div>

          <div className="card card-elevated" style={{padding: '25px', textAlign: 'center'}}>
            <div style={{fontSize: '2.5rem', marginBottom: '15px'}}>❤️</div>
            <h4 style={{fontSize: '1.3rem', fontWeight: '600', color: 'var(--primary-maroon)', marginBottom: '10px'}}>
              Empathy
            </h4>
            <p style={{fontSize: '0.95rem', lineHeight: '1.5', color: '#4b5563'}}>
              We provide care with compassion, respect, and sensitivity to client needs.
            </p>
          </div>

          <div className="card card-elevated" style={{padding: '25px', textAlign: 'center'}}>
            <div style={{fontSize: '2.5rem', marginBottom: '15px'}}>⭐</div>
            <h4 style={{fontSize: '1.3rem', fontWeight: '600', color: 'var(--primary-maroon)', marginBottom: '10px'}}>
              Professional Excellence
            </h4>
            <p style={{fontSize: '0.95rem', lineHeight: '1.5', color: '#4b5563'}}>
              We are committed to the highest standards of quality, competence, and ethical practice.
            </p>
          </div>

          <div className="card card-elevated" style={{padding: '25px', textAlign: 'center'}}>
            <div style={{fontSize: '2.5rem', marginBottom: '15px'}}>💡</div>
            <h4 style={{fontSize: '1.3rem', fontWeight: '600', color: 'var(--primary-maroon)', marginBottom: '10px'}}>
              Innovation
            </h4>
            <p style={{fontSize: '0.95rem', lineHeight: '1.5', color: '#4b5563'}}>
              We continuously adapt and develop responsive, client-centered healthcare solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section style={{backgroundColor: '#f8fafc', padding: '60px 0'}}>
        <div className="container">
          <div className="card card-elevated" style={{padding: '50px'}}>
            <h2 style={{fontSize: '2.25rem', fontWeight: '700', color: 'var(--primary-blue)', marginBottom: '30px', textAlign: 'center'}}>
              Our Commitment
            </h2>
            <div style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#374151', textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
              <p style={{marginBottom: '25px'}}>
                At QNC Solutions Ltd, we are committed to serving as a trusted bridge between professionalism and accessibility in healthcare. We uphold the highest standards of nursing practice, delivering care with compassion, accountability, and respect.
              </p>
              <p style={{marginBottom: '25px'}}>
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
      <section className="container" style={{padding: '60px 0'}}>
        <h2 style={{fontSize: '2.25rem', fontWeight: '700', color: 'var(--primary-blue)', marginBottom: '40px', textAlign: 'center'}}>
          Meet Our Core Team
        </h2>

        {/* Stiesy Nankunda */}
        <div className="card card-elevated" style={{padding: '40px', marginBottom: '30px'}}>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', alignItems: 'center'}}>
            <div style={{textAlign: 'center'}}>
              <div style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                backgroundColor: 'var(--primary-blue)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '4rem',
                color: 'white'
              }}>
                👩‍⚕️
              </div>
              <h3 style={{fontSize: '1.5rem', fontWeight: '600', color: 'var(--primary-maroon)', marginBottom: '5px'}}>
                Stiesy Nankunda
              </h3>
              <p style={{fontSize: '1rem', color: 'var(--primary-blue)', fontWeight: '500'}}>
                Managing Director & Co-Founder
              </p>
            </div>
            <div>
              <p style={{fontSize: '1rem', lineHeight: '1.7', color: '#374151', marginBottom: '20px'}}>
                Stiesy Nankunda is the Managing Director and Lead Nursing Consultant at QNC Solutions Ltd. She combines strong clinical expertise with strategic leadership, bringing advanced competence in maternal, neonatal, and general patient care.
              </p>
              <p style={{fontSize: '0.95rem', lineHeight: '1.6', color: '#4b5563', marginBottom: '15px'}}>
                Her technical expertise includes comprehensive patient assessment, vital signs monitoring, medication administration, IV therapy, wound care, catheterization, pressure sore prevention, fluid balance monitoring, and emergency response (BLS/CPR).
              </p>
              <p style={{fontSize: '0.95rem', lineHeight: '1.6', color: '#4b5563'}}>
                She provides expert psychosocial support, particularly in high-stress and critical care settings, while ensuring strict adherence to infection prevention, patient safety, confidentiality, and ethical standards.
              </p>
            </div>
          </div>
        </div>

        {/* Ayesiga Confidence */}
        <div className="card card-elevated" style={{padding: '40px', marginBottom: '30px'}}>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', alignItems: 'center'}}>
            <div>
              <p style={{fontSize: '1rem', lineHeight: '1.7', color: '#374151', marginBottom: '20px'}}>
                Ayesiga Confidence is a Director and Lead Maternal Consulting Midwife at QNC Solutions Ltd, with strong clinical and leadership expertise in maternal, neonatal, and general patient care. She possesses advanced competencies in antenatal, intrapartum, and postnatal care, as well as newborn and premature baby management.
              </p>
              <p style={{fontSize: '0.95rem', lineHeight: '1.6', color: '#4b5563', marginBottom: '15px'}}>
                In her leadership role, she oversees quality assurance, clinical supervision, client care coordination, and service delivery standards. Her expertise extends to patient triage, emergency response, infection prevention and control, pressure sore management, nutrition support, and chronic disease care.
              </p>
              <p style={{fontSize: '0.95rem', lineHeight: '1.6', color: '#4b5563'}}>
                She is recognized for her professionalism, adaptability, and commitment to high-quality, client-centered care.
              </p>
            </div>
            <div style={{textAlign: 'center'}}>
              <div style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                backgroundColor: 'var(--primary-maroon)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '4rem',
                color: 'white'
              }}>
                👩‍⚕️
              </div>
              <h3 style={{fontSize: '1.5rem', fontWeight: '600', color: 'var(--primary-maroon)', marginBottom: '5px'}}>
                Ayesiga Confidence
              </h3>
              <p style={{fontSize: '1rem', color: 'var(--primary-blue)', fontWeight: '500'}}>
                Director & Co-Founder
              </p>
            </div>
          </div>
        </div>

        {/* Kapipa Ivan Junior */}
        <div className="card card-elevated" style={{padding: '40px', marginBottom: '30px'}}>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', alignItems: 'center'}}>
            <div style={{textAlign: 'center'}}>
              <img 
                src="/images/nutrition pic.jpg" 
                alt="Kapipa Ivan Junior" 
                style={{
                  width: '200px', 
                  height: '200px', 
                  borderRadius: '50%',
                  objectFit: 'cover',
                  margin: '0 auto 20px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                }} 
              />
              <h3 style={{fontSize: '1.5rem', fontWeight: '600', color: 'var(--primary-maroon)', marginBottom: '5px'}}>
                Kapipa Ivan Junior
              </h3>
              <p style={{fontSize: '1rem', color: 'var(--primary-blue)', fontWeight: '500'}}>
                Nutrition Consultant
              </p>
            </div>
            <div>
              <p style={{fontSize: '1rem', lineHeight: '1.7', color: '#374151', marginBottom: '20px'}}>
                Kapipa Ivan Junior is a Nutrition Consultant at QNC Solutions Ltd, with expertise in clinical and community-based nutrition, food systems, and livelihoods research. He designs and implements evidence-based nutrition interventions, integrating dietary assessments and best-practice guidelines to improve client outcomes.
              </p>
              <p style={{fontSize: '0.95rem', lineHeight: '1.6', color: '#4b5563', marginBottom: '15px'}}>
                He provides technical advisory support to ensure the safety, adequacy, and effectiveness of nutrition and health services. His skills in research, data analysis, and programme monitoring support evidence-informed decision-making and continuous quality improvement.
              </p>
              <p style={{fontSize: '0.95rem', lineHeight: '1.6', color: '#4b5563'}}>
                With experience across hospital, wellness, and community settings, Kapipa strengthens QNC's capacity to deliver sustainable, client-centered nutrition services.
              </p>
            </div>
          </div>
        </div>

        {/* Kyomuhendo Brian Gilbert */}
        <div className="card card-elevated" style={{padding: '40px'}}>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', alignItems: 'center'}}>
            <div>
              <p style={{fontSize: '1rem', lineHeight: '1.7', color: '#374151', marginBottom: '20px'}}>
                Kyomuhendo Brian Gilbert serves as the Administrator at QNC Solutions Ltd, where he supports the coordination and efficient management of the organization's operations and service delivery processes. He plays a key role in ensuring that administrative systems, workflows, and internal processes function effectively to support high-quality healthcare provision.
              </p>
              <p style={{fontSize: '0.95rem', lineHeight: '1.6', color: '#4b5563', marginBottom: '15px'}}>
                Brian brings strong expertise in operations support, systems strengthening, stakeholder coordination, and results-based management. His background in research and data analysis enables him to support performance monitoring, documentation, and evidence-informed planning.
              </p>
              <p style={{fontSize: '0.95rem', lineHeight: '1.6', color: '#4b5563'}}>
                Recognized for his analytical skills, organization, and attention to detail, Brian supports the translation of operational priorities into structured systems that strengthen service delivery and organizational performance.
              </p>
            </div>
            <div style={{textAlign: 'center'}}>
              <img 
                src="/images/Kyomuhendo brian pic.jpg" 
                alt="Kyomuhendo Brian Gilbert" 
                style={{
                  width: '200px', 
                  height: '200px', 
                  borderRadius: '50%',
                  objectFit: 'cover',
                  margin: '0 auto 20px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                }} 
              />
              <h3 style={{fontSize: '1.5rem', fontWeight: '600', color: 'var(--primary-maroon)', marginBottom: '5px'}}>
                Kyomuhendo Brian Gilbert
              </h3>
              <p style={{fontSize: '1rem', color: 'var(--primary-blue)', fontWeight: '500'}}>
                Administrator
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{backgroundColor: 'var(--primary-blue)', color: 'white', padding: '60px 0', textAlign: 'center'}}>
        <div className="container">
          <h2 style={{fontSize: '2.25rem', fontWeight: '700', marginBottom: '20px'}}>
            Ready to Experience Quality Healthcare?
          </h2>
          <p style={{fontSize: '1.2rem', marginBottom: '30px', opacity: '0.9'}}>
            Connect with our professional healthcare team today
          </p>
          <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Link to="/book" className="btn btn-primary" style={{backgroundColor: 'var(--primary-maroon)', border: 'none'}}>
              Book Our Services
            </Link>
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
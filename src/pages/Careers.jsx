import { Link } from 'react-router-dom'

function Careers() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero" style={{
        background: `linear-gradient(rgba(30, 64, 175, 0.8), rgba(124, 45, 18, 0.8)), url('/images/photo-1666887360680-9dc27a1d2753.avif')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '80px 0'
      }}>
        <div className="container">
          <div style={{textAlign: 'center', color: 'white'}}>
            <h1 style={{fontSize: '3rem', fontWeight: '700', marginBottom: '20px'}}>Join Our Team</h1>
            <p style={{fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto'}}>
              Make a difference in healthcare by joining our network of dedicated professionals
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="container" style={{padding: '60px 0'}}>
        <h2 style={{textAlign: 'center', fontSize: '2.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '50px'}}>
          Why Choose QNC Solutions?
        </h2>
        
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '60px'}}>
          <div className="card card-elevated" style={{padding: '30px', textAlign: 'center'}}>
            <span style={{fontSize: '3rem', marginBottom: '20px', display: 'block'}}>💼</span>
            <h3 style={{color: '#1f2937', marginBottom: '15px'}}>Flexible Work</h3>
            <p style={{color: '#6b7280'}}>
              Choose your schedule and work-life balance while making a meaningful impact in healthcare.
            </p>
          </div>
          
          <div className="card card-elevated" style={{padding: '30px', textAlign: 'center'}}>
            <span style={{fontSize: '3rem', marginBottom: '20px', display: 'block'}}>💰</span>
            <h3 style={{color: '#1f2937', marginBottom: '15px'}}>Competitive Pay</h3>
            <p style={{color: '#6b7280'}}>
              Earn competitive compensation with opportunities for growth and professional development.
            </p>
          </div>
          
          <div className="card card-elevated" style={{padding: '30px', textAlign: 'center'}}>
            <span style={{fontSize: '3rem', marginBottom: '20px', display: 'block'}}>🤝</span>
            <h3 style={{color: '#1f2937', marginBottom: '15px'}}>Supportive Team</h3>
            <p style={{color: '#6b7280'}}>
              Join a collaborative environment with ongoing support, training, and professional mentorship.
            </p>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section style={{backgroundColor: '#f8fafc', padding: '60px 0'}}>
        <div className="container">
          <h2 style={{textAlign: 'center', fontSize: '2.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '50px'}}>
            Career Opportunities
          </h2>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px'}}>
            
            {/* Registered Nurses */}
            <div className="card card-elevated" style={{padding: '40px'}}>
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{fontSize: '3rem', marginRight: '15px'}}>🏥</span>
                <h3 style={{color: '#1f2937', fontSize: '1.5rem'}}>Registered Nurses</h3>
              </div>
              <p style={{color: '#6b7280', marginBottom: '20px', lineHeight: '1.6'}}>
                Provide professional nursing care and support patients in their homes with your expertise and compassion.
              </p>
              <div style={{marginBottom: '25px'}}>
                <h4 style={{color: '#8b5cf6', fontSize: '1.1rem', marginBottom: '10px'}}>Requirements:</h4>
                <ul style={{color: '#6b7280', fontSize: '0.9rem', paddingLeft: '20px'}}>
                  <li>Valid nursing license</li>
                  <li>2+ years clinical experience</li>
                  <li>CPR certification</li>
                  <li>Excellent communication skills</li>
                </ul>
              </div>
              <div>
                <h4 style={{color: '#8b5cf6', fontSize: '1.1rem', marginBottom: '10px'}}>Benefits:</h4>
                <ul style={{color: '#6b7280', fontSize: '0.9rem', paddingLeft: '20px'}}>
                  <li>Flexible scheduling</li>
                  <li>Competitive compensation</li>
                  <li>Professional development</li>
                  <li>Health insurance support</li>
                </ul>
              </div>
            </div>

            {/* General Practitioners */}
            <div className="card card-elevated" style={{padding: '40px'}}>
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{fontSize: '3rem', marginRight: '15px'}}>👨‍⚕️</span>
                <h3 style={{color: '#1f2937', fontSize: '1.5rem'}}>General Practitioners</h3>
              </div>
              <p style={{color: '#6b7280', marginBottom: '20px', lineHeight: '1.6'}}>
                Offer medical consultations and health assessments in comfortable home settings for diverse patient populations.
              </p>
              <div style={{marginBottom: '25px'}}>
                <h4 style={{color: '#8b5cf6', fontSize: '1.1rem', marginBottom: '10px'}}>Requirements:</h4>
                <ul style={{color: '#6b7280', fontSize: '0.9rem', paddingLeft: '20px'}}>
                  <li>Medical degree and license</li>
                  <li>Board certification preferred</li>
                  <li>Home care experience a plus</li>
                  <li>Strong diagnostic skills</li>
                </ul>
              </div>
              <div>
                <h4 style={{color: '#8b5cf6', fontSize: '1.1rem', marginBottom: '10px'}}>Benefits:</h4>
                <ul style={{color: '#6b7280', fontSize: '0.9rem', paddingLeft: '20px'}}>
                  <li>Work-life balance</li>
                  <li>Modern technology support</li>
                  <li>Growing patient network</li>
                  <li>Continuing education support</li>
                </ul>
              </div>
            </div>

            {/* Professional Caregivers */}
            <div className="card card-elevated" style={{padding: '40px'}}>
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{fontSize: '3rem', marginRight: '15px'}}>🤝</span>
                <h3 style={{color: '#1f2937', fontSize: '1.5rem'}}>Professional Caregivers</h3>
              </div>
              <p style={{color: '#6b7280', marginBottom: '20px', lineHeight: '1.6'}}>
                Provide compassionate care and daily assistance to patients who need support with daily living activities.
              </p>
              <div style={{marginBottom: '25px'}}>
                <h4 style={{color: '#8b5cf6', fontSize: '1.1rem', marginBottom: '10px'}}>Requirements:</h4>
                <ul style={{color: '#6b7280', fontSize: '0.9rem', paddingLeft: '20px'}}>
                  <li>High school diploma or equivalent</li>
                  <li>Caregiving experience preferred</li>
                  <li>First aid certification</li>
                  <li>Compassionate and patient nature</li>
                </ul>
              </div>
              <div>
                <h4 style={{color: '#8b5cf6', fontSize: '1.1rem', marginBottom: '10px'}}>Benefits:</h4>
                <ul style={{color: '#6b7280', fontSize: '0.9rem', paddingLeft: '20px'}}>
                  <li>Meaningful work</li>
                  <li>Training provided</li>
                  <li>Supportive team environment</li>
                  <li>Flexible hours</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="container" style={{padding: '60px 0'}}>
        <h2 style={{textAlign: 'center', fontSize: '2.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '50px'}}>
          How to Apply
        </h2>
        
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginBottom: '50px'}}>
          <div style={{textAlign: 'center'}}>
            <div style={{
              width: '80px', 
              height: '80px', 
              backgroundColor: '#8b5cf6', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              margin: '0 auto 20px',
              color: 'white',
              fontSize: '2rem'
            }}>1</div>
            <h4 style={{color: '#1f2937', marginBottom: '10px'}}>Register</h4>
            <p style={{color: '#6b7280', fontSize: '0.9rem'}}>
              Create your provider account and complete your professional profile
            </p>
          </div>
          
          <div style={{textAlign: 'center'}}>
            <div style={{
              width: '80px', 
              height: '80px', 
              backgroundColor: '#8b5cf6', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              margin: '0 auto 20px',
              color: 'white',
              fontSize: '2rem'
            }}>2</div>
            <h4 style={{color: '#1f2937', marginBottom: '10px'}}>Verification</h4>
            <p style={{color: '#6b7280', fontSize: '0.9rem'}}>
              We verify your credentials, licenses, and professional background
            </p>
          </div>
          
          <div style={{textAlign: 'center'}}>
            <div style={{
              width: '80px', 
              height: '80px', 
              backgroundColor: '#8b5cf6', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              margin: '0 auto 20px',
              color: 'white',
              fontSize: '2rem'
            }}>3</div>
            <h4 style={{color: '#1f2937', marginBottom: '10px'}}>Onboarding</h4>
            <p style={{color: '#6b7280', fontSize: '0.9rem'}}>
              Complete orientation and training to join our healthcare network
            </p>
          </div>
          
          <div style={{textAlign: 'center'}}>
            <div style={{
              width: '80px', 
              height: '80px', 
              backgroundColor: '#8b5cf6', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              margin: '0 auto 20px',
              color: 'white',
              fontSize: '2rem'
            }}>4</div>
            <h4 style={{color: '#1f2937', marginBottom: '10px'}}>Start Working</h4>
            <p style={{color: '#6b7280', fontSize: '0.9rem'}}>
              Begin accepting assignments and making a difference in patients' lives
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{backgroundColor: '#8b5cf6', padding: '60px 0'}}>
        <div className="container" style={{textAlign: 'center'}}>
          <h2 style={{fontSize: '2.5rem', marginBottom: '20px', color: 'white'}}>Ready to Join Our Team?</h2>
          <p style={{fontSize: '1.2rem', marginBottom: '30px', color: 'white', maxWidth: '600px', margin: '0 auto 30px'}}>
            Start your journey with QNC Solutions and become part of a team that's transforming healthcare delivery.
          </p>
          <Link to="/register" className="btn btn-success btn-large" style={{backgroundColor: 'white', color: '#8b5cf6'}}>
            👩‍⚕️ Enlist as Provider
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Careers
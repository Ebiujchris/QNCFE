import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero" style={{
        background: `linear-gradient(rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8)), url('/images/horizontal homepage image put i n the background.avif')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="container">
          <div className="hero-content">
            <h1>QNC SOLUTIONS</h1>
            <p>Professional healthcare services delivered to your doorstep. Connect with qualified nurses, doctors, and caregivers in your community.</p>
            <div className="hero-buttons">
              <Link to="/book" className="btn btn-success btn-large">
                📅 Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container">
        <h2 style={{textAlign: 'center', margin: '50px 0 30px', fontSize: '2.25rem', fontWeight: '700', color: '#1f2937'}}>
          Our Healthcare Services
        </h2>
        <div className="services">
          <div className="card service-card card-elevated">
            <span className="service-icon">🏥</span>
            <h3>Professional Nursing Care</h3>
            <p>Certified nurses providing comprehensive home healthcare, medication management, and post-operative support.</p>
            <Link to="/book" className="btn btn-primary">Book Nursing Care</Link>
          </div>
          <div className="card service-card card-elevated">
            <span className="service-icon">👨‍⚕️</span>
            <h3>General Practice Consultation</h3>
            <p>Licensed general practitioners offering medical consultations and health assessments at your home.</p>
            <Link to="/book" className="btn btn-primary">Book Consultation</Link>
          </div>
          <div className="card service-card card-elevated">
            <span className="service-icon">🤝</span>
            <h3>Caregiver Support</h3>
            <p>Compassionate caregivers providing daily assistance, companionship, and personal care for all ages.</p>
            <Link to="/book" className="btn btn-primary">Book Caregiver</Link>
          </div>
        </div>
      </section>

      {/* Modern Image Showcase */}
      <section style={{backgroundColor: '#f8fafc', padding: '80px 0', overflow: 'hidden'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '60px'}}>
            <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '20px'}}>
              Healthcare Excellence in Action
            </h2>
            <p style={{fontSize: '1.2rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto'}}>
              See how we deliver compassionate, professional healthcare services directly to your home
            </p>
          </div>

          {/* Image Grid */}
          <div className="image-showcase" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px', marginBottom: '50px'}}>
            
            {/* Main Feature Image */}
            <div style={{gridColumn: 'span 2', position: 'relative', borderRadius: '20px', overflow: 'hidden', height: '400px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)'}}>
              <img 
                src="/images/home page image.avif" 
                alt="Professional Healthcare Services" 
                style={{
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover'
                }} 
              />
              <div className="image-overlay" style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                color: 'white',
                padding: '40px 30px 30px',
                textAlign: 'left'
              }}>
                <h3 style={{fontSize: '1.8rem', marginBottom: '10px', fontWeight: '600'}}>
                  Professional Care at Home
                </h3>
                <p style={{fontSize: '1rem', opacity: '0.9', margin: 0}}>
                  Experience quality healthcare in the comfort and safety of your own home
                </p>
              </div>
            </div>

            {/* Secondary Image */}
            <div style={{position: 'relative', borderRadius: '20px', overflow: 'hidden', height: '400px', boxShadow: '0 15px 30px rgba(0,0,0,0.1)'}}>
              <img 
                src="/images/home page image 2.avif" 
                alt="Compassionate Healthcare" 
                style={{
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover'
                }} 
              />
              <div className="image-overlay" style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                background: 'linear-gradient(transparent, rgba(102, 126, 234, 0.8))',
                color: 'white',
                padding: '30px 20px 20px',
                textAlign: 'left'
              }}>
                <h4 style={{fontSize: '1.3rem', marginBottom: '8px', fontWeight: '600'}}>
                  Compassionate Care
                </h4>
                <p style={{fontSize: '0.9rem', opacity: '0.9', margin: 0}}>
                  Dedicated professionals who truly care about your wellbeing
                </p>
              </div>
            </div>

            {/* Additional Feature Image */}
            <div style={{position: 'relative', borderRadius: '20px', overflow: 'hidden', height: '300px', boxShadow: '0 15px 30px rgba(0,0,0,0.1)'}}>
              <img 
                src="/images/photo-1666887360680-9dc27a1d2753.avif" 
                alt="Modern Healthcare Technology" 
                style={{
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover'
                }} 
              />
              <div className="image-overlay" style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                background: 'linear-gradient(transparent, rgba(16, 185, 129, 0.8))',
                color: 'white',
                padding: '25px 20px 15px',
                textAlign: 'left'
              }}>
                <h4 style={{fontSize: '1.2rem', marginBottom: '6px', fontWeight: '600'}}>
                  Modern Technology
                </h4>
                <p style={{fontSize: '0.85rem', opacity: '0.9', margin: 0}}>
                  Advanced tools for better health outcomes
                </p>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', textAlign: 'center'}}>
            <div className="stats-counter">
              <div style={{fontSize: '3rem', fontWeight: '700', color: '#667eea', marginBottom: '10px'}}>500+</div>
              <p style={{color: '#6b7280', fontSize: '1.1rem'}}>Patients Served</p>
            </div>
            <div className="stats-counter">
              <div style={{fontSize: '3rem', fontWeight: '700', color: '#10b981', marginBottom: '10px'}}>50+</div>
              <p style={{color: '#6b7280', fontSize: '1.1rem'}}>Healthcare Professionals</p>
            </div>
            <div className="stats-counter">
              <div style={{fontSize: '3rem', fontWeight: '700', color: '#f59e0b', marginBottom: '10px'}}>24/7</div>
              <p style={{color: '#6b7280', fontSize: '1.1rem'}}>Emergency Support</p>
            </div>
            <div className="stats-counter">
              <div style={{fontSize: '3rem', fontWeight: '700', color: '#ef4444', marginBottom: '10px'}}>98%</div>
              <p style={{color: '#6b7280', fontSize: '1.1rem'}}>Patient Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Simplified */}
      <section className="how-it-works">
        <div className="container">
          <h2 style={{textAlign: 'center', fontSize: '2.25rem', fontWeight: '700', color: '#1f2937', marginBottom: '15px'}}>
            How It Works
          </h2>
          <p style={{textAlign: 'center', fontSize: '1.125rem', color: '#6b7280', maxWidth: '500px', margin: '0 auto 30px'}}>
            Getting quality healthcare at home in 3 simple steps
          </p>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h4>Book Service</h4>
              <p>Choose your needed service and fill out our simple booking form with your requirements.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h4>Get Matched</h4>
              <p>Our team assigns the most qualified healthcare provider based on your specific needs.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h4>Receive Care</h4>
              <p>Meet your assigned professional and receive quality care in the comfort of your home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Simplified */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready for Quality Healthcare at Home?</h2>
            <p>Join QNC Solutions for professional, reliable, and convenient healthcare services.</p>
            <div className="cta-buttons">
              <Link to="/book" className="btn btn-success btn-large">
                📅 Book Healthcare Service
              </Link>
              <div className="dropdown-container" style={{position: 'relative', display: 'inline-block'}}>
                <button className="btn btn-primary btn-large dropdown-btn">
                  💼 Careers
                </button>
                <div className="dropdown-content" style={{
                  display: 'none',
                  position: 'absolute',
                  backgroundColor: 'white',
                  minWidth: '200px',
                  boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
                  zIndex: 1,
                  borderRadius: '8px',
                  top: '100%',
                  left: '0',
                  marginTop: '5px'
                }}>
                  <Link to="/register" style={{
                    color: '#374151',
                    padding: '12px 16px',
                    textDecoration: 'none',
                    display: 'block',
                    borderRadius: '8px'
                  }}>
                    👩‍⚕️ Enlist as Provider
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .dropdown-container:hover .dropdown-content {
          display: block !important;
        }
        .dropdown-content a:hover {
          background-color: #f3f4f6;
        }
      `}</style>
    </div>
  )
}

export default Home
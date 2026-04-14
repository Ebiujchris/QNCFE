import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>QNC SOLUTIONS</h1>
            <p>Professional healthcare services delivered to your doorstep. Connect with qualified nurses, doctors, and caregivers in your community.</p>
            <div className="hero-buttons">
              <Link to="/book" className="btn btn-success btn-large">
                📅 Book Now
              </Link>
              <Link to="/register" className="btn btn-outline btn-large" style={{color: 'white', borderColor: 'white'}}>
                👩‍⚕️ Enlist as Provider
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
              <Link to="/register" className="btn btn-primary btn-large">
                👩‍⚕️ Join as Provider
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
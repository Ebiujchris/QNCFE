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
        <h2 style={{textAlign: 'center', margin: '30px 0 20px', fontSize: '2.25rem', fontWeight: '700', color: '#1f2937'}}>
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
      <section style={{backgroundColor: '#f8fafc', padding: '50px 0', overflow: 'hidden'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '40px'}}>
            <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '15px'}}>
              Healthcare Excellence in Action
            </h2>
            <p style={{fontSize: '1.2rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto'}}>
              See how we deliver compassionate, professional healthcare services directly to your home
            </p>
          </div>

          {/* Image Grid */}
          <div className="image-showcase" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '35px'}}>
            
            {/* Main Feature Image */}
            <div style={{position: 'relative', borderRadius: '20px', overflow: 'hidden', height: '280px', boxShadow: '0 15px 30px rgba(0,0,0,0.1)'}}>
              <img 
                src="/images/homepage photo new.jpg" 
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
                padding: '25px 20px 20px',
                textAlign: 'left'
              }}>
                <h4 style={{fontSize: '1.4rem', marginBottom: '8px', fontWeight: '600'}}>
                  Professional Care
                </h4>
                <p style={{fontSize: '0.9rem', opacity: '0.9', margin: 0}}>
                  Quality healthcare delivered with expertise
                </p>
              </div>
            </div>

            {/* Home Care Image */}
            <div style={{position: 'relative', borderRadius: '20px', overflow: 'hidden', height: '280px', boxShadow: '0 15px 30px rgba(0,0,0,0.1)'}}>
              <img 
                src="/images/home page image.avif" 
                alt="Home Healthcare Services" 
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
                padding: '25px 20px 20px',
                textAlign: 'left'
              }}>
                <h4 style={{fontSize: '1.4rem', marginBottom: '8px', fontWeight: '600'}}>
                  Home Healthcare
                </h4>
                <p style={{fontSize: '0.9rem', opacity: '0.9', margin: 0}}>
                  Comfort and care in your own home
                </p>
              </div>
            </div>

            {/* Compassionate Care Image */}
            <div style={{position: 'relative', borderRadius: '20px', overflow: 'hidden', height: '280px', boxShadow: '0 15px 30px rgba(0,0,0,0.1)'}}>
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
                background: 'linear-gradient(transparent, rgba(16, 185, 129, 0.8))',
                color: 'white',
                padding: '25px 20px 20px',
                textAlign: 'left'
              }}>
                <h4 style={{fontSize: '1.4rem', marginBottom: '8px', fontWeight: '600'}}>
                  Compassionate Care
                </h4>
                <p style={{fontSize: '0.9rem', opacity: '0.9', margin: 0}}>
                  Dedicated professionals who care
                </p>
              </div>
            </div>

            {/* Background Photo 2 */}
            <div style={{position: 'relative', borderRadius: '20px', overflow: 'hidden', height: '280px', boxShadow: '0 15px 30px rgba(0,0,0,0.1)'}}>
              <img 
                src="/images/homepage backgorund photo 2.jpg" 
                alt="Healthcare Excellence" 
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
                background: 'linear-gradient(transparent, rgba(245, 158, 11, 0.8))',
                color: 'white',
                padding: '25px 20px 20px',
                textAlign: 'left'
              }}>
                <h4 style={{fontSize: '1.4rem', marginBottom: '8px', fontWeight: '600'}}>
                  Healthcare Excellence
                </h4>
                <p style={{fontSize: '0.9rem', opacity: '0.9', margin: 0}}>
                  Setting the standard for quality care
                </p>
              </div>
            </div>

            {/* Background Photo 3 */}
            <div style={{position: 'relative', borderRadius: '20px', overflow: 'hidden', height: '280px', boxShadow: '0 15px 30px rgba(0,0,0,0.1)'}}>
              <img 
                src="/images/homepage background photo 3.jpg" 
                alt="Community Healthcare" 
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
                background: 'linear-gradient(transparent, rgba(139, 69, 19, 0.8))',
                color: 'white',
                padding: '25px 20px 20px',
                textAlign: 'left'
              }}>
                <h4 style={{fontSize: '1.4rem', marginBottom: '8px', fontWeight: '600'}}>
                  Community Care
                </h4>
                <p style={{fontSize: '0.9rem', opacity: '0.9', margin: 0}}>
                  Serving our community with dedication
                </p>
              </div>
            </div>

            {/* Modern Technology Image */}
            <div style={{position: 'relative', borderRadius: '20px', overflow: 'hidden', height: '280px', boxShadow: '0 15px 30px rgba(0,0,0,0.1)'}}>
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
                background: 'linear-gradient(transparent, rgba(99, 102, 241, 0.8))',
                color: 'white',
                padding: '25px 20px 20px',
                textAlign: 'left'
              }}>
                <h4 style={{fontSize: '1.4rem', marginBottom: '8px', fontWeight: '600'}}>
                  Modern Technology
                </h4>
                <p style={{fontSize: '0.9rem', opacity: '0.9', margin: 0}}>
                  Advanced tools for better outcomes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Simplified */}
      <section className="how-it-works">
        <div className="container">
          <h2 style={{textAlign: 'center', fontSize: '2rem', fontWeight: '700', color: '#1f2937', marginBottom: '10px'}}>
            How It Works
          </h2>
          <p style={{textAlign: 'center', fontSize: '1rem', color: '#6b7280', maxWidth: '500px', margin: '0 auto 20px'}}>
            Getting quality healthcare at home in 3 simple steps
          </p>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h4>Book Service</h4>
              <p>Choose your needed service and fill out our simple booking form.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h4>Get Matched</h4>
              <p>Our team assigns the most qualified healthcare provider for you.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h4>Receive Care</h4>
              <p>Meet your assigned professional and receive quality care at home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section with Links and Map */}
      <section style={{backgroundColor: '#1f2937', color: 'white', padding: '40px 0'}}>
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px'}}>
            
            {/* Quick Links */}
            <div>
              <h4 style={{fontSize: '1.2rem', marginBottom: '15px', color: '#f3f4f6'}}>Quick Links</h4>
              <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                <li style={{marginBottom: '10px'}}>
                  <Link to="/about" style={{color: '#d1d5db', textDecoration: 'none', fontSize: '0.9rem'}}>About Us</Link>
                </li>
                <li style={{marginBottom: '10px'}}>
                  <Link to="/services" style={{color: '#d1d5db', textDecoration: 'none', fontSize: '0.9rem'}}>Our Services</Link>
                </li>
                <li style={{marginBottom: '10px'}}>
                  <Link to="/careers" style={{color: '#d1d5db', textDecoration: 'none', fontSize: '0.9rem'}}>Careers</Link>
                </li>
                <li style={{marginBottom: '10px'}}>
                  <Link to="/contact" style={{color: '#d1d5db', textDecoration: 'none', fontSize: '0.9rem'}}>Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 style={{fontSize: '1.2rem', marginBottom: '15px', color: '#f3f4f6'}}>Our Services</h4>
              <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                <li style={{marginBottom: '10px'}}>
                  <Link to="/book" style={{color: '#d1d5db', textDecoration: 'none', fontSize: '0.9rem'}}>Nursing Care</Link>
                </li>
                <li style={{marginBottom: '10px'}}>
                  <Link to="/book" style={{color: '#d1d5db', textDecoration: 'none', fontSize: '0.9rem'}}>Medical Consultation</Link>
                </li>
                <li style={{marginBottom: '10px'}}>
                  <Link to="/book" style={{color: '#d1d5db', textDecoration: 'none', fontSize: '0.9rem'}}>Caregiver Support</Link>
                </li>
                <li style={{marginBottom: '10px'}}>
                  <Link to="/book" style={{color: '#d1d5db', textDecoration: 'none', fontSize: '0.9rem'}}>Mobile Health</Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 style={{fontSize: '1.2rem', marginBottom: '15px', color: '#f3f4f6'}}>Contact Info</h4>
              <div style={{fontSize: '0.9rem', color: '#d1d5db', lineHeight: '1.6'}}>
                <p style={{marginBottom: '10px'}}>📍 Buziga Katuso<br />P.O. Box: 201036 Kampala GPO, Uganda</p>
                <p style={{marginBottom: '10px'}}>📞 <a href="tel:+256791785931" style={{color: '#d1d5db'}}>+256-791-785931</a></p>
                <p style={{marginBottom: '10px'}}>✉️ <a href="mailto:qncsolutions3@gmail.com" style={{color: '#d1d5db'}}>qncsolutions3@gmail.com</a></p>
              </div>
            </div>

            {/* Location Map */}
            <div>
              <h4 style={{fontSize: '1.2rem', marginBottom: '15px', color: '#f3f4f6'}}>Our Location</h4>
              <div style={{
                width: '100%',
                height: '180px',
                backgroundColor: '#374151',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid #4b5563'
              }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7520895823944!2d32.6078!3d0.2619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0f9c3b5555%3A0x1234567890abcdef!2sBuziga%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{border: 0, borderRadius: '8px'}}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="QNC Solutions Location"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div style={{
            borderTop: '1px solid #374151',
            marginTop: '30px',
            paddingTop: '15px',
            textAlign: 'center',
            fontSize: '0.85rem',
            color: '#9ca3af'
          }}>
            <p style={{margin: 0}}>
              © 2026 QNC Solutions. All rights reserved. | Professional Healthcare Services in Uganda
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
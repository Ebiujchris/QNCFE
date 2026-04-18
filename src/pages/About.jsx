function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero" style={{
        background: `linear-gradient(rgba(30, 64, 175, 0.8), rgba(124, 45, 18, 0.8)), url('/images/home page image 2.avif')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '80px 0'
      }}>
        <div className="container">
          <div style={{textAlign: 'center', color: 'white'}}>
            <h1 style={{fontSize: '3rem', fontWeight: '700', marginBottom: '20px'}}>About QNC Solutions</h1>
            <p style={{fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto'}}>
              Professional healthcare services delivered with compassion, expertise, and dedication to improving lives in our communities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container" style={{padding: '60px 0'}}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px', marginBottom: '60px'}}>
          <div className="card card-elevated" style={{padding: '40px', textAlign: 'center'}}>
            <h2 style={{color: '#667eea', marginBottom: '20px', fontSize: '2rem'}}>🎯 Our Mission</h2>
            <p style={{fontSize: '1.1rem', lineHeight: '1.6', color: '#374151'}}>
              To provide friendly, professional, and compassionate nursing care services that prioritize comfort, safety, and dignity, 
              ensuring accessible and high-quality care for individuals, families, and organizations.
            </p>
          </div>
          <div className="card card-elevated" style={{padding: '40px', textAlign: 'center'}}>
            <h2 style={{color: '#667eea', marginBottom: '20px', fontSize: '2rem'}}>🌟 Our Vision</h2>
            <p style={{fontSize: '1.1rem', lineHeight: '1.6', color: '#374151'}}>
              To become the world's foremost link between professionalism and customer accessibility, 
              making quality nursing care available to all.
            </p>
          </div>
        </div>

        {/* Company Values */}
        <div style={{textAlign: 'center', marginBottom: '60px'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '30px'}}>
            Our Core Values
          </h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px'}}>
            <div className="card card-elevated" style={{padding: '30px', textAlign: 'center'}}>
              <span style={{fontSize: '3rem', marginBottom: '15px', display: 'block'}}>💙</span>
              <h3 style={{color: '#1f2937', marginBottom: '10px'}}>Compassion</h3>
              <p style={{color: '#6b7280', fontSize: '0.95rem'}}>
                We care deeply about every patient and provide services with empathy and understanding.
              </p>
            </div>
            <div className="card card-elevated" style={{padding: '30px', textAlign: 'center'}}>
              <span style={{fontSize: '3rem', marginBottom: '15px', display: 'block'}}>⭐</span>
              <h3 style={{color: '#1f2937', marginBottom: '10px'}}>Excellence</h3>
              <p style={{color: '#6b7280', fontSize: '0.95rem'}}>
                We maintain the highest standards of professional healthcare delivery and continuous improvement.
              </p>
            </div>
            <div className="card card-elevated" style={{padding: '30px', textAlign: 'center'}}>
              <span style={{fontSize: '3rem', marginBottom: '15px', display: 'block'}}>🤝</span>
              <h3 style={{color: '#1f2937', marginBottom: '10px'}}>Integrity</h3>
              <p style={{color: '#6b7280', fontSize: '0.95rem'}}>
                We operate with honesty, transparency, and ethical practices in all our interactions.
              </p>
            </div>
            <div className="card card-elevated" style={{padding: '30px', textAlign: 'center'}}>
              <span style={{fontSize: '3rem', marginBottom: '15px', display: 'block'}}>🌍</span>
              <h3 style={{color: '#1f2937', marginBottom: '10px'}}>Accessibility</h3>
              <p style={{color: '#6b7280', fontSize: '0.95rem'}}>
                We make quality healthcare accessible to all, regardless of location or circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="container" style={{padding: '60px 0', textAlign: 'center'}}>
        <div className="card card-elevated" style={{padding: '50px', backgroundColor: '#667eea', color: 'white'}}>
          <h2 style={{fontSize: '2.5rem', marginBottom: '30px'}}>Our Promise</h2>
          <p style={{fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '900px', margin: '0 auto'}}>
            At QNC Solutions Ltd, we are dedicated to being the trusted bridge between professionalism and accessibility in healthcare. 
            We uphold the highest standards of nursing practice and deliver care with compassion, accountability, and respect. 
            Our promise is to consistently provide quality nursing care that safeguards health, supports recovery, and promotes wellbeing—whether 
            at home, in workplaces, on project sites, or during travel. QNC Solutions Ltd exists to ensure that quality nursing care is 
            available to all, wherever and whenever it is needed.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About
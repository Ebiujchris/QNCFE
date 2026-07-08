import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

function Home() {
  return (
    <div style={{background: '#ffffff', minHeight: '100vh'}}>
      <SEO 
        title="QNC Solutions - Quality Healthcare Services at Home"
        description="Professional healthcare services delivered to your home. Book qualified nurses, medical services, nutrition counseling, and postnatal care."
        keywords="home healthcare, nursing services, medical care, postnatal care, nutrition counseling, bedside nursing, healthcare Uganda"
        canonical="https://www.qncsolutions.com/"
      />

      {/* ── Hero ── */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Background */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: "url('/images/group photo.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 25%',
          zIndex: 0
        }} />
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(105deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.97) 28%, rgba(255,255,255,0.82) 48%, rgba(255,255,255,0.2) 68%, rgba(255,255,255,0) 80%)',
          zIndex: 1
        }} />

        <div className="container" style={{position: 'relative', zIndex: 2, padding: '80px 24px'}}>
          <div style={{maxWidth: '560px'}}>
            {/* Eyebrow */}
            <span style={{
              display: 'inline-block',
              background: 'rgba(30,64,175,0.08)',
              color: 'var(--primary-blue)',
              fontSize: '0.78rem',
              fontWeight: '700',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              padding: '6px 16px',
              borderRadius: '20px',
              marginBottom: '22px',
              border: '1px solid rgba(30,64,175,0.18)'
            }}>Professional Home Healthcare · Uganda</span>

            <h1 style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              fontWeight: '800',
              marginBottom: '22px',
              color: 'var(--primary-blue)',
              lineHeight: '1.18',
              letterSpacing: '-0.5px'
            }}>
              Quality Nursing Care<br/>
              Delivered with<br/>
              <span style={{
                color: 'var(--primary-maroon)',
                position: 'relative',
                display: 'inline-block'
              }}>Compassion &amp; Excellence</span>
            </h1>

            <p style={{
              fontSize: '1.05rem',
              marginBottom: '36px',
              lineHeight: '1.75',
              color: '#374151',
              maxWidth: '480px'
            }}>
              Professional home nursing, field medical support, nutrition counseling, and reliable medical services across Uganda and beyond.
            </p>

            <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap'}}>
              <Link to="/book" style={{
                background: 'var(--primary-maroon)',
                color: 'white',
                textDecoration: 'none',
                padding: '14px 32px',
                borderRadius: '6px',
                fontSize: '0.95rem',
                fontWeight: '700',
                letterSpacing: '0.3px',
                boxShadow: '0 4px 18px rgba(124,45,18,0.28)',
                transition: 'all 0.25s ease'
              }}>Book Appointment</Link>
              <Link to="/contact" style={{
                background: 'transparent',
                color: 'var(--primary-blue)',
                textDecoration: 'none',
                padding: '13px 30px',
                borderRadius: '6px',
                fontSize: '0.95rem',
                fontWeight: '700',
                border: '2px solid var(--primary-blue)',
                transition: 'all 0.25s ease'
              }}>Contact Us</Link>
            </div>

            {/* Trust bar */}
            <div style={{
              display: 'flex',
              gap: '28px',
              marginTop: '44px',
              flexWrap: 'wrap'
            }}>
              {[
                {num: '500+', label: 'Clients Served'},
                {num: '10+', label: 'Services Offered'},
                {num: '24/7', label: 'Support Available'}
              ].map(s => (
                <div key={s.label}>
                  <div style={{fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary-blue)'}}>{s.num}</div>
                  <div style={{fontSize: '0.78rem', color: '#6b7280', fontWeight: '500', marginTop: '2px'}}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Services Include ── */}
      <section style={{padding: '80px 0', background: '#f8fafd'}}>
        <div className="container">

          {/* Section header */}
          <div style={{textAlign: 'center', marginBottom: '52px'}}>
            <span style={{
              display: 'inline-block',
              background: 'var(--primary-blue)',
              color: 'white',
              fontWeight: '700',
              fontSize: '0.8rem',
              padding: '8px 24px',
              borderRadius: '30px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>Our Services Include</span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: '800',
              color: 'var(--primary-blue)',
              letterSpacing: '-0.3px',
              marginBottom: '12px'
            }}>Comprehensive Home-Based Care</h2>
            <p style={{color: '#6b7280', fontSize: '1rem', maxWidth: '520px', margin: '0 auto'}}>
              Professional care. Wherever you are. Whenever you need it.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px'
          }}>
            {[
              {
                title: 'Elderly Care and Support',
                desc: 'Personalized assistance to help older adults maintain comfort, independence, and quality of life.'
              },
              {
                title: 'Post-Surgery Recovery and Monitoring',
                desc: 'Professional follow-up care to support safe and effective recovery after hospitalization or surgical procedures.'
              },
              {
                title: 'Chronic Illness and Medication Management',
                desc: 'Ongoing support for individuals living with long-term health conditions, ensuring proper treatment adherence and improved health outcomes.'
              },
              {
                title: 'Chronic Disease Management and Palliative Care Support',
                desc: 'Compassionate care focused on symptom management, comfort, and enhancing quality of life for individuals with serious or life-limiting illnesses.'
              },
              {
                title: 'Nutrition Assessment and Counseling',
                desc: 'Professional nutritional screening, assessment, and personalized dietary guidance to support healthy living, disease prevention, recovery, and overall well-being.'
              },
              {
                title: 'Pre-Natal and Post-Natal Care',
                desc: 'Comprehensive maternal and newborn support, including health monitoring, education, breastfeeding support, and guidance to ensure the well-being of both mother and baby before and after delivery.'
              }
            ].map((svc, i) => (
              <div key={i} style={{
                background: 'white',
                borderRadius: '14px',
                padding: '30px',
                border: '1.5px solid var(--primary-blue)',
                borderTop: '4px solid var(--primary-blue)',
                transition: 'box-shadow 0.25s ease, transform 0.25s ease',
                cursor: 'default'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(30,64,175,0.12)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <h3 style={{
                  fontSize: '0.92rem',
                  fontWeight: '700',
                  color: 'var(--primary-maroon)',
                  marginBottom: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>{svc.title}</h3>
                <p style={{fontSize: '0.9rem', color: '#4b5563', lineHeight: '1.7', margin: 0}}>
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{textAlign: 'center', marginTop: '40px'}}>
            <Link to="/services" style={{
              display: 'inline-block',
              color: 'var(--primary-blue)',
              fontWeight: '700',
              fontSize: '0.9rem',
              textDecoration: 'none',
              borderBottom: '2px solid var(--primary-blue)',
              paddingBottom: '2px',
              letterSpacing: '0.3px'
            }}>View All Services →</Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose QNC ── */}
      <section style={{padding: '80px 0', background: 'white'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '52px'}}>
            <span style={{
              display: 'inline-block',
              background: 'rgba(124,45,18,0.08)',
              color: 'var(--primary-maroon)',
              fontWeight: '700',
              fontSize: '0.78rem',
              padding: '6px 18px',
              borderRadius: '20px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '14px',
              border: '1px solid rgba(124,45,18,0.15)'
            }}>Why Choose Us</span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: '800',
              color: 'var(--primary-blue)',
              letterSpacing: '-0.3px'
            }}>Why Families &amp; Organizations Choose QNC</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px'
          }}>
            {[
              {
                title: 'Qualified Professionals',
                desc: 'Registered, certified, and highly trained healthcare staff'
              },
              {
                title: 'Compassionate Responsiveness',
                desc: 'Empathetic service with quick response times'
              },
              {
                title: 'Proven & Trusted Experience',
                desc: 'Years of trusted care across diverse communities'
              },
              {
                title: 'Flexible & Affordable Pricing',
                desc: 'Transparent rates designed for accessibility'
              }
            ].map((item, i) => (
              <div key={i} style={{
                background: '#f8fafd',
                borderRadius: '14px',
                padding: '32px 24px',
                textAlign: 'center',
                border: '1px solid #e8edf5',
                borderTop: '4px solid var(--primary-blue)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--primary-blue)';
                e.currentTarget.querySelector('.why-title').style.color = 'white';
                e.currentTarget.querySelector('.why-desc').style.color = 'rgba(255,255,255,0.8)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#f8fafd';
                e.currentTarget.querySelector('.why-title').style.color = 'var(--primary-maroon)';
                e.currentTarget.querySelector('.why-desc').style.color = '#6b7280';
              }}>
                <div style={{
                  width: '44px', height: '44px',
                  borderRadius: '50%',
                  background: 'rgba(30,64,175,0.08)',
                  margin: '0 auto 16px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: '800',
                  fontSize: '1rem',
                  color: 'var(--primary-blue)'
                }}>{String.fromCharCode(65 + i)}</div>
                <h3 className="why-title" style={{
                  fontSize: '1rem',
                  fontWeight: '700',
                  color: 'var(--primary-maroon)',
                  marginBottom: '10px',
                  transition: 'color 0.25s ease'
                }}>{item.title}</h3>
                <p className="why-desc" style={{
                  fontSize: '0.88rem',
                  color: '#6b7280',
                  lineHeight: '1.6',
                  margin: 0,
                  transition: 'color 0.25s ease'
                }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{
        padding: '70px 0',
        background: 'linear-gradient(135deg, var(--primary-blue) 0%, #1e3a8a 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative circle */}
        <div style={{
          position: 'absolute', right: '-80px', top: '-80px',
          width: '320px', height: '320px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)'
        }} />
        <div style={{
          position: 'absolute', right: '60px', bottom: '-60px',
          width: '200px', height: '200px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.04)'
        }} />

        <div className="container" style={{position: 'relative', zIndex: 1}}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '30px'
          }}>
            <div style={{flex: '1', minWidth: '280px'}}>
              <p style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: '0.85rem',
                fontWeight: '600',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                marginBottom: '10px'
              }}>Get Started Today</p>
              <h2 style={{
                fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                fontWeight: '800',
                color: 'white',
                lineHeight: '1.3',
                margin: 0
              }}>
                Need healthcare support for your family, organization, or project?
              </h2>
            </div>
            <div>
              <Link to="/contact" style={{
                background: 'white',
                color: 'var(--primary-blue)',
                textDecoration: 'none',
                padding: '15px 36px',
                borderRadius: '6px',
                fontSize: '0.95rem',
                fontWeight: '800',
                display: 'inline-block',
                boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                letterSpacing: '0.3px'
              }}>Request a Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{backgroundColor: '#0f2057', color: 'white', padding: '56px 0 0'}}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '40px',
            paddingBottom: '48px'
          }}>

            <div>
              <div style={{
                fontSize: '1.1rem',
                fontWeight: '800',
                color: 'white',
                marginBottom: '6px',
                letterSpacing: '-0.3px'
              }}>QNC Solutions</div>
              <p style={{fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', marginBottom: '20px', lineHeight: '1.6'}}>
                Exceptional care for every journey. Health with Heart.
              </p>
              <div style={{width: '36px', height: '3px', background: 'var(--primary-maroon)', borderRadius: '2px'}} />
            </div>

            <div>
              <h4 style={{fontSize: '0.78rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '18px'}}>Quick Links</h4>
              <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                {[
                  {to: '/', label: 'Home'},
                  {to: '/about', label: 'About Us'},
                  {to: '/services', label: 'Services & Solutions'},
                  {to: '/careers', label: 'Careers'},
                  {to: '/contact', label: 'Contact Us'}
                ].map(l => (
                  <li key={l.to} style={{marginBottom: '10px'}}>
                    <Link to={l.to} style={{color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s'}}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{fontSize: '0.78rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '18px'}}>Contact Info</h4>
              <div style={{fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.9'}}>
                <p style={{marginBottom: '8px'}}>Buziga Katuso, Kampala GPO<br/>P.O. Box 201036, Uganda</p>
                <p style={{marginBottom: '8px'}}><a href="tel:+256791785931" style={{color: 'rgba(255,255,255,0.7)', textDecoration: 'none'}}>+256-791-785931</a></p>
                <p><a href="mailto:qncsolutions3@gmail.com" style={{color: 'rgba(255,255,255,0.7)', textDecoration: 'none'}}>qncsolutions3@gmail.com</a></p>
              </div>
            </div>

            <div>
              <h4 style={{fontSize: '0.78rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '18px'}}>Our Location</h4>
              <div style={{width: '100%', height: '160px', borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)'}}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7520895823944!2d32.6078!3d0.2619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0f9c3b5555%3A0x1234567890abcdef!2sBuziga%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%" height="100%"
                  style={{border: 0}} allowFullScreen="" loading="lazy" title="QNC Location"
                />
              </div>
            </div>
          </div>

          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            padding: '20px 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '10px'
          }}>
            <p style={{margin: 0, fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)'}}>
              © 2026 QNC Solutions. All rights reserved. | Professional Healthcare Services in Uganda
            </p>
            <p style={{margin: 0, fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic'}}>
              Made by <span style={{fontWeight: '700', color: 'rgba(255,255,255,0.7)'}}>INFINITI ANALYTICS</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home

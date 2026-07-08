import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const teamMembers = [
  {
    id: 1,
    name: 'Steicy Nankunda',
    position: 'CEO & Co-Founder',
    image: '/images/Steicy in uniform wear.jpeg',
    bio: 'Leading QNC with vision for accessible, professional, and compassionate healthcare across Uganda and beyond.'
  },
  {
    id: 2,
    name: 'Ayesiga Confidence',
    position: 'Co-founder and Director',
    image: '/images/Ayesiga uniform wear pic.jpeg',
    bio: 'Ensuring seamless coordination of our healthcare programs and service delivery excellence.'
  },
  {
    id: 3,
    name: 'Kyomuhendo Brian',
    position: 'Administrator',
    image: '/images/Kyomuhendo brian pic.jpg',
    bio: 'Managing stakeholder relationships and expanding our reach to serve more communities.'
  },
  {
    id: 4,
    name: 'Kapipa Ivan Junior',
    position: 'Nutritionist',
    image: '/images/ivans pic.jpeg',
    bio: 'Overseeing quality standards and ensuring consistent delivery of exceptional healthcare services.'
  }
]

function About() {
  return (
    <div style={{background: '#ffffff', minHeight: '100vh'}}>
      <SEO
        title="About QNC Solutions - Professional Healthcare Services"
        description="Learn about QNC Solutions, our mission to deliver professional, reliable, and compassionate nursing and medical support services across Uganda and beyond."
        keywords="about QNC, healthcare services Uganda, nursing care, medical support"
        canonical="https://www.qncsolutions.com/about"
      />

      {/* ── Hero ── */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '72vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: "url('/images/group photo.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 25%',
          zIndex: 0
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(105deg, rgba(15,32,87,0.88) 0%, rgba(15,32,87,0.7) 50%, rgba(15,32,87,0.3) 100%)',
          zIndex: 1
        }} />
        <div className="container" style={{position: 'relative', zIndex: 2, padding: '80px 24px'}}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(255,255,255,0.12)',
            color: 'rgba(255,255,255,0.9)',
            fontSize: '0.78rem',
            fontWeight: '700',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            padding: '6px 16px',
            borderRadius: '20px',
            marginBottom: '22px',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>Who We Are</span>
          <h1 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
            fontWeight: '800',
            color: 'white',
            lineHeight: '1.18',
            letterSpacing: '-0.5px',
            maxWidth: '640px',
            marginBottom: '20px'
          }}>About QNC Solutions Ltd</h1>
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.8)',
            lineHeight: '1.75',
            maxWidth: '520px',
            margin: 0
          }}>
            Dedicated to providing high-quality, reliable, and compassionate nursing and medical support services across Uganda and beyond.
          </p>
        </div>
      </section>

      {/* ── Mission / Vision / Values ── */}
      <section style={{padding: '80px 0', background: '#f8fafd'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '52px'}}>
            <span style={{
              display: 'inline-block',
              background: 'var(--primary-blue)',
              color: 'white',
              fontWeight: '700',
              fontSize: '0.78rem',
              padding: '6px 18px',
              borderRadius: '20px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '14px'
            }}>Our Foundation</span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: '800',
              color: 'var(--primary-blue)',
              letterSpacing: '-0.3px'
            }}>What Drives Us</h2>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px'}}>
            {[
              {
                label: 'Our Mission',
                color: 'var(--primary-maroon)',
                text: 'To provide high-quality, professional, and compassionate nursing care that supports the well-being of our clients.'
              },
              {
                label: 'Our Vision',
                color: 'var(--primary-blue)',
                text: 'To become the most trusted name in the balance between professionalism and accessible accountability.'
              },
              {
                label: 'Our Values',
                color: 'var(--primary-maroon)',
                isList: true,
                items: ['Compassion', 'Integrity', 'Excellence', 'Accountability']
              }
            ].map((card, i) => (
              <div key={i} style={{
                background: 'white',
                borderRadius: '14px',
                padding: '36px 28px',
                borderTop: `4px solid ${card.color}`,
                border: `1.5px solid #e8edf5`,
                borderTopWidth: '4px',
                borderTopColor: card.color,
                transition: 'box-shadow 0.25s ease, transform 0.25s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(30,64,175,0.1)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '800',
                  color: card.color,
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>{card.label}</h3>
                {card.isList ? (
                  <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                    {card.items.map(item => (
                      <li key={item} style={{
                        fontSize: '0.95rem',
                        color: '#374151',
                        padding: '8px 0',
                        borderBottom: '1px solid #f3f4f6',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                      }}>
                        <span style={{
                          width: '6px', height: '6px',
                          borderRadius: '50%',
                          background: card.color,
                          flexShrink: 0,
                          display: 'inline-block'
                        }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p style={{fontSize: '0.95rem', color: '#4b5563', lineHeight: '1.75', margin: 0}}>{card.text}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership Team ── */}
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
            }}>The Team</span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: '800',
              color: 'var(--primary-blue)',
              letterSpacing: '-0.3px'
            }}>Our Leadership Team</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '28px'
          }}>
            {teamMembers.map(member => (
              <div key={member.id} style={{
                textAlign: 'center',
                background: '#f8fafd',
                padding: '36px 24px',
                borderRadius: '14px',
                border: '1px solid #e8edf5',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(30,64,175,0.12)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: '130px',
                    height: '130px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    margin: '0 auto 18px',
                    display: 'block',
                    border: '4px solid var(--primary-blue)',
                    boxShadow: '0 4px 16px rgba(30,64,175,0.15)'
                  }}
                />
                <h3 style={{
                  fontSize: '1.05rem',
                  fontWeight: '700',
                  color: 'var(--primary-maroon)',
                  marginBottom: '4px'
                }}>{member.name}</h3>
                <p style={{
                  fontSize: '0.82rem',
                  color: 'var(--primary-blue)',
                  fontWeight: '600',
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>{member.position}</p>
                <p style={{
                  fontSize: '0.88rem',
                  color: '#6b7280',
                  lineHeight: '1.6',
                  margin: 0
                }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Commitment ── */}
      <section style={{padding: '80px 0', background: '#f8fafd'}}>
        <div className="container">
          <div style={{
            maxWidth: '760px',
            margin: '0 auto',
            background: 'white',
            borderRadius: '16px',
            padding: '52px 44px',
            boxShadow: '0 8px 32px rgba(30,64,175,0.08)',
            textAlign: 'center',
            border: '1px solid #e8edf5'
          }}>
            <span style={{
              display: 'inline-block',
              background: 'var(--primary-blue)',
              color: 'white',
              fontWeight: '700',
              fontSize: '0.78rem',
              padding: '6px 18px',
              borderRadius: '20px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '20px'
            }}>Our Promise</span>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: '800',
              color: 'var(--primary-blue)',
              marginBottom: '16px',
              letterSpacing: '-0.3px'
            }}>Our Commitment</h2>
            <p style={{
              fontSize: '1rem',
              color: '#4b5563',
              lineHeight: '1.8',
              marginBottom: '28px'
            }}>
              We provide quality nursing care with compassion and accountability — ensuring every client receives dignified, professional care they can rely on.
            </p>
            <div style={{
              background: 'linear-gradient(135deg, var(--primary-blue), #1e3a8a)',
              borderRadius: '10px',
              padding: '20px 28px'
            }}>
              <p style={{
                fontSize: '1.05rem',
                fontWeight: '700',
                color: 'white',
                margin: 0,
                letterSpacing: '0.2px'
              }}>
                Quality nursing care, accessible to all.
              </p>
            </div>
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
        <div style={{
          position: 'absolute', right: '-80px', top: '-80px',
          width: '320px', height: '320px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)'
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
                fontSize: '0.82rem',
                fontWeight: '700',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                marginBottom: '10px'
              }}>Get In Touch</p>
              <h2 style={{
                fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                fontWeight: '800',
                color: 'white',
                lineHeight: '1.3',
                margin: 0
              }}>Ready to Experience Quality Healthcare?</h2>
            </div>
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
              letterSpacing: '0.3px',
              flexShrink: 0
            }}>Contact Us</Link>
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
              <div style={{fontSize: '1.1rem', fontWeight: '800', color: 'white', marginBottom: '6px'}}>QNC Solutions</div>
              <p style={{fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', marginBottom: '20px', lineHeight: '1.6'}}>Exceptional care for every journey. Health with Heart.</p>
              <div style={{width: '36px', height: '3px', background: 'var(--primary-maroon)', borderRadius: '2px'}} />
            </div>
            <div>
              <h4 style={{fontSize: '0.78rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '18px'}}>Quick Links</h4>
              <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                {[{to:'/',label:'Home'},{to:'/about',label:'About Us'},{to:'/services',label:'Services'},{to:'/careers',label:'Careers'},{to:'/contact',label:'Contact Us'}].map(l => (
                  <li key={l.to} style={{marginBottom: '10px'}}>
                    <Link to={l.to} style={{color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem'}}>{l.label}</Link>
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
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7520895823944!2d32.6078!3d0.2619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0f9c3b5555%3A0x1234567890abcdef!2sBuziga%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" title="QNC Location" />
              </div>
            </div>
          </div>
          <div style={{borderTop: '1px solid rgba(255,255,255,0.08)', padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px'}}>
            <p style={{margin: 0, fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)'}}>© 2026 QNC Solutions. All rights reserved.</p>
            <p style={{margin: 0, fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic'}}>Made by <span style={{fontWeight: '700', color: 'rgba(255,255,255,0.7)'}}>INFINITI ANALYTICS</span></p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default About

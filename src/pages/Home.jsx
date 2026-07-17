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
              Exceptional Care<br/>
              for Every Journey<br/>
              <span style={{
                color: 'var(--primary-maroon)',
                position: 'relative',
                display: 'inline-block'
              }}>Health with Heart</span>
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

          </div>
        </div>
      </section>

      {/* ── Our Services ── */}
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
            }}>Our Services</span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: '800',
              color: 'var(--primary-blue)',
              letterSpacing: '-0.3px',
              marginBottom: '12px'
            }}>Professional Care. Wherever You Need It.</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px'
          }}>

            {/* Nursing & Home-Based Care */}
            <div style={{background: 'white', borderRadius: '14px', border: '1px solid #e8edf5', borderTop: '4px solid var(--primary-blue)', transition: 'box-shadow 0.25s ease, transform 0.25s ease'}}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 32px rgba(30,64,175,0.12)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <div style={{padding: '26px 22px'}}>
                <h3 style={{fontSize: '1rem', fontWeight: '800', color: 'var(--primary-blue)', marginBottom: '10px'}}>Nursing &amp; Home-Based Care</h3>
                <p style={{fontSize: '0.85rem', color: '#6b7280', lineHeight: '1.65', marginBottom: '16px'}}>
                  Professional and personalized home healthcare that supports recovery, long-term care, and improved quality of life in the comfort of your home.
                </p>
                <ul style={{listStyle: 'none', padding: 0, margin: '0 0 18px'}}>
                  {['Elderly Care', 'Post-Surgical Care', 'Postnatal Care'].map(item => (
                    <li key={item} style={{fontSize: '0.83rem', color: '#374151', padding: '4px 0', display: 'flex', alignItems: 'center', gap: '8px'}}>
                      <span style={{width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary-maroon)', flexShrink: 0, display: 'inline-block'}} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/services" style={{color: 'var(--primary-maroon)', fontWeight: '700', fontSize: '0.85rem', textDecoration: 'none', borderBottom: '1.5px solid var(--primary-maroon)', paddingBottom: '1px'}}>Explore More →</Link>
              </div>
            </div>

            {/* Field Medical Support */}
            <div style={{background: 'white', borderRadius: '14px', border: '1px solid #e8edf5', borderTop: '4px solid var(--primary-blue)', transition: 'box-shadow 0.25s ease, transform 0.25s ease'}}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 32px rgba(30,64,175,0.12)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <div style={{padding: '26px 22px'}}>
                <h3 style={{fontSize: '1rem', fontWeight: '800', color: 'var(--primary-blue)', marginBottom: '10px'}}>Field Medical Support</h3>
                <p style={{fontSize: '0.85rem', color: '#6b7280', lineHeight: '1.65', marginBottom: '16px'}}>
                  Reliable on-site medical services that strengthen workplace safety, emergency preparedness, and occupational health for organizations and field projects.
                </p>
                <ul style={{listStyle: 'none', padding: 0, margin: '0 0 18px'}}>
                  {['On-site Medical Teams', 'Emergency Response', 'Occupational Health'].map(item => (
                    <li key={item} style={{fontSize: '0.83rem', color: '#374151', padding: '4px 0', display: 'flex', alignItems: 'center', gap: '8px'}}>
                      <span style={{width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary-maroon)', flexShrink: 0, display: 'inline-block'}} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/services" style={{color: 'var(--primary-maroon)', fontWeight: '700', fontSize: '0.85rem', textDecoration: 'none', borderBottom: '1.5px solid var(--primary-maroon)', paddingBottom: '1px'}}>Read More →</Link>
              </div>
            </div>

            {/* Mobile Health Services */}
            <div style={{background: 'white', borderRadius: '14px', border: '1px solid #e8edf5', borderTop: '4px solid var(--primary-blue)', transition: 'box-shadow 0.25s ease, transform 0.25s ease'}}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 32px rgba(30,64,175,0.12)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <div style={{padding: '26px 22px'}}>
                <h3 style={{fontSize: '1rem', fontWeight: '800', color: 'var(--primary-blue)', marginBottom: '10px'}}>Mobile Health Services</h3>
                <p style={{fontSize: '0.85rem', color: '#6b7280', lineHeight: '1.65', marginBottom: '16px'}}>
                  Essential healthcare delivered directly to homes, workplaces, and underserved communities, improving access to preventive and follow-up care.
                </p>
                <ul style={{listStyle: 'none', padding: 0, margin: '0 0 18px'}}>
                  {['Patient Assessment', 'Medication Administration', 'Vital Signs Monitoring'].map(item => (
                    <li key={item} style={{fontSize: '0.83rem', color: '#374151', padding: '4px 0', display: 'flex', alignItems: 'center', gap: '8px'}}>
                      <span style={{width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary-maroon)', flexShrink: 0, display: 'inline-block'}} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/services" style={{color: 'var(--primary-maroon)', fontWeight: '700', fontSize: '0.85rem', textDecoration: 'none', borderBottom: '1.5px solid var(--primary-maroon)', paddingBottom: '1px'}}>Read More →</Link>
              </div>
            </div>

            {/* Nutrition Services */}
            <div style={{background: 'white', borderRadius: '14px', border: '1px solid #e8edf5', borderTop: '4px solid var(--primary-blue)', transition: 'box-shadow 0.25s ease, transform 0.25s ease'}}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 32px rgba(30,64,175,0.12)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <div style={{padding: '26px 22px'}}>
                <h3 style={{fontSize: '1rem', fontWeight: '800', color: 'var(--primary-blue)', marginBottom: '10px'}}>Nutrition Services</h3>
                <p style={{fontSize: '0.85rem', color: '#6b7280', lineHeight: '1.65', marginBottom: '16px'}}>
                  Evidence-based nutrition services designed to promote healthier lifestyles, better recovery, and long-term wellness for individuals and families.
                </p>
                <ul style={{listStyle: 'none', padding: 0, margin: '0 0 18px'}}>
                  {['Nutrition Assessment', 'Diet Planning', 'Maternal & Child Nutrition'].map(item => (
                    <li key={item} style={{fontSize: '0.83rem', color: '#374151', padding: '4px 0', display: 'flex', alignItems: 'center', gap: '8px'}}>
                      <span style={{width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary-maroon)', flexShrink: 0, display: 'inline-block'}} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/services" style={{color: 'var(--primary-maroon)', fontWeight: '700', fontSize: '0.85rem', textDecoration: 'none', borderBottom: '1.5px solid var(--primary-maroon)', paddingBottom: '1px'}}>Read More →</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── About QNC + Meet the Director ── */}
      <section style={{padding: '80px 0', background: 'white'}}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '60px',
            alignItems: 'center'
          }}>
            {/* About text */}
            <div>
              <span style={{
                display: 'inline-block',
                background: 'rgba(30,64,175,0.08)',
                color: 'var(--primary-blue)',
                fontWeight: '700',
                fontSize: '0.78rem',
                padding: '6px 16px',
                borderRadius: '20px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: '16px',
                border: '1px solid rgba(30,64,175,0.15)'
              }}>About Us</span>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                fontWeight: '800',
                color: 'var(--primary-blue)',
                marginBottom: '18px',
                letterSpacing: '-0.3px'
              }}>About QNC Solutions Ltd</h2>
              <p style={{fontSize: '0.93rem', color: '#4b5563', lineHeight: '1.8', marginBottom: '14px'}}>
                QNC Solutions Ltd is a Ugandan healthcare provider dedicated to delivering professional nursing, medical support, and nutrition services across Uganda. We bridge the gap between healthcare and accessibility by providing reliable, compassionate, and client-centered care in homes, workplaces, project sites, communities, and other remote environments.
              </p>
              <p style={{fontSize: '0.93rem', color: '#4b5563', lineHeight: '1.8', margin: 0}}>
                Our qualified healthcare professionals are committed to improving health outcomes through safe, responsive, and evidence-based care tailored to the needs of individuals, families, and organizations.
              </p>
            </div>

            {/* Meet the Director */}
            <div style={{
              background: '#f8fafd',
              borderRadius: '16px',
              padding: '40px 32px',
              border: '1px solid #e8edf5',
              display: 'flex',
              gap: '28px',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}>
              <div style={{flex: '1', minWidth: '180px'}}>
                <p style={{
                  fontSize: '0.78rem',
                  fontWeight: '700',
                  color: 'var(--primary-blue)',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginBottom: '10px'
                }}>Meet Our Director</p>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '800',
                  color: 'var(--primary-maroon)',
                  marginBottom: '0',
                  letterSpacing: '-0.3px'
                }}>Steisy Nankunda</h3>
              </div>
              <div style={{flexShrink: 0}}>
                <img
                  src="/images/Steicy in uniform wear.jpeg"
                  alt="Steisy Nankunda"
                  style={{
                    width: '130px',
                    height: '150px',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    borderRadius: '10px',
                    display: 'block',
                    border: '3px solid var(--primary-blue)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose QNC ── */}
      <section style={{padding: '80px 0', background: '#f8fafd'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '52px'}}>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: '800',
              color: 'var(--primary-blue)',
              letterSpacing: '-0.3px'
            }}>Why Choose QNC Solutions?</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '20px'
          }}>
            {[
              {title: 'Qualified Professionals', desc: 'Licensed and experienced healthcare professionals committed to quality care.'},
              {title: 'Personalized Care', desc: 'Healthcare solutions tailored to every client\'s unique needs.'},
              {title: 'Rapid Response', desc: 'Prompt healthcare support whenever and wherever you need it.'},
              {title: 'Affordable Services', desc: 'Reliable, cost-effective healthcare without compromising quality.'},
              {title: 'Professional Standards', desc: 'Evidence-based practice guided by ethics, safety, and clinical excellence.'},
              {title: 'Trusted Healthcare Partner', desc: 'Supporting individuals, families, organizations, and communities with compassionate care.'}
            ].map((item, i) => (
              <div key={i} style={{
                background: 'white',
                borderRadius: '12px',
                padding: '24px 20px',
                textAlign: 'center',
                border: '1px solid #e8edf5',
                transition: 'box-shadow 0.25s ease, transform 0.25s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(30,64,175,0.1)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div style={{
                  width: '40px', height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(30,64,175,0.08)',
                  margin: '0 auto 14px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '2px solid rgba(30,64,175,0.15)'
                }}>
                  <div style={{width: '12px', height: '12px', borderRadius: '50%', background: 'var(--primary-maroon)'}} />
                </div>
                <h3 style={{
                  fontSize: '0.88rem',
                  fontWeight: '700',
                  color: 'var(--primary-blue)',
                  marginBottom: '8px',
                  lineHeight: '1.3'
                }}>{item.title}</h3>
                <p style={{fontSize: '0.8rem', color: '#6b7280', lineHeight: '1.6', margin: 0}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{
        padding: '60px 0',
        background: 'var(--primary-blue)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{position: 'absolute', right: '-80px', top: '-80px', width: '320px', height: '320px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)'}} />
        <div className="container" style={{position: 'relative', zIndex: 1}}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px'
          }}>
            <div style={{flex: '1', minWidth: '280px'}}>
              <h2 style={{fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', fontWeight: '800', color: 'white', lineHeight: '1.4', margin: '0 0 8px'}}>
                Need Professional Healthcare Services?
              </h2>
              <p style={{fontSize: '0.88rem', color: 'rgba(255,255,255,0.75)', margin: 0}}>
                Whether you need home-based nursing, field medical support, mobile healthcare, or nutrition services, QNC Solutions is ready to provide professional care wherever you need it.
              </p>
            </div>
            <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap', flexShrink: 0}}>
              <Link to="/book" style={{
                background: 'var(--primary-maroon)',
                color: 'white',
                textDecoration: 'none',
                padding: '13px 26px',
                borderRadius: '6px',
                fontSize: '0.9rem',
                fontWeight: '700',
                display: 'inline-block',
                boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
              }}>Book a Service</Link>
              <a href="tel:+256791785931" style={{
                background: 'rgba(255,255,255,0.12)',
                color: 'white',
                textDecoration: 'none',
                padding: '13px 26px',
                borderRadius: '6px',
                fontSize: '0.9rem',
                fontWeight: '700',
                display: 'inline-block',
                border: '1.5px solid rgba(255,255,255,0.3)'
              }}>Call: +256 791 785931</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{backgroundColor: '#4a1208', color: 'white', padding: '16px 0'}}>
        <div className="container" style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'8px'}}>
          <p style={{margin:0, fontSize:'0.82rem', color:'rgba(255,255,255,0.6)'}}>
            © 2026 QNC Solutions. All rights reserved. | Professional Healthcare Services in Uganda
          </p>
          <p style={{margin:0, fontSize:'0.82rem', color:'rgba(255,255,255,0.5)', fontStyle:'italic'}}>
            Made by <span style={{fontWeight:'700', color:'white'}}>INFINITI ANALYTICS</span>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Home

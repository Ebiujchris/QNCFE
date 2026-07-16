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
            <div style={{background: 'white', borderRadius: '14px', overflow: 'hidden', border: '1px solid #e8edf5', transition: 'box-shadow 0.25s ease, transform 0.25s ease'}}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 32px rgba(30,64,175,0.12)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <div style={{position: 'relative', height: '200px', overflow: 'hidden'}}>
                <img src="/images/nursing and home based care image.jpeg" alt="Nursing and Home-Based Care" style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} />
                <div style={{position: 'absolute', bottom: '12px', left: '12px', width: '36px', height: '36px', background: 'var(--primary-maroon)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                </div>
              </div>
              <div style={{padding: '22px'}}>
                <h3 style={{fontSize: '1rem', fontWeight: '800', color: 'var(--primary-blue)', marginBottom: '10px'}}>Nursing &amp; Home-Based Care</h3>
                <p style={{fontSize: '0.85rem', color: '#6b7280', lineHeight: '1.65', marginBottom: '16px'}}>
                  Professional and personalized home healthcare that supports recovery, long-term care, and improved quality of life in the comfort of your home.
                </p>
                <ul style={{listStyle: 'none', padding: 0, margin: '0 0 18px'}}>
                  {['Elderly Care', 'Post-Surgical Care', 'Postnatal Care', 'Chronic Disease Management', 'Bedside Nursing', 'Physiotherapy'].map(item => (
                    <li key={item} style={{fontSize: '0.83rem', color: '#374151', padding: '4px 0', display: 'flex', alignItems: 'center', gap: '8px'}}>
                      <span style={{width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary-maroon)', flexShrink: 0, display: 'inline-block'}} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/services" style={{color: 'var(--primary-maroon)', fontWeight: '700', fontSize: '0.85rem', textDecoration: 'none', borderBottom: '1.5px solid var(--primary-maroon)', paddingBottom: '1px'}}>Explore Service →</Link>
              </div>
            </div>

            {/* Field Medical Support */}
            <div style={{background: 'white', borderRadius: '14px', overflow: 'hidden', border: '1px solid #e8edf5', transition: 'box-shadow 0.25s ease, transform 0.25s ease'}}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 32px rgba(30,64,175,0.12)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <div style={{position: 'relative', height: '200px', overflow: 'hidden'}}>
                <img src="/images/medical services pic.jpg" alt="Field Medical Support" style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} />
                <div style={{position: 'absolute', bottom: '12px', left: '12px', width: '36px', height: '36px', background: 'var(--primary-maroon)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 8v8M8 12h8"/></svg>
                </div>
              </div>
              <div style={{padding: '22px'}}>
                <h3 style={{fontSize: '1rem', fontWeight: '800', color: 'var(--primary-blue)', marginBottom: '10px'}}>Field Medical Support</h3>
                <p style={{fontSize: '0.85rem', color: '#6b7280', lineHeight: '1.65', marginBottom: '16px'}}>
                  Reliable on-site medical services that strengthen workplace safety, emergency preparedness, and occupational health for organizations and field projects.
                </p>
                <ul style={{listStyle: 'none', padding: 0, margin: '0 0 18px'}}>
                  {['On-site Medical Teams', 'Emergency Response', 'Occupational Health', 'First Aid Training', 'Medical Surveillance', 'MHPSS Support'].map(item => (
                    <li key={item} style={{fontSize: '0.83rem', color: '#374151', padding: '4px 0', display: 'flex', alignItems: 'center', gap: '8px'}}>
                      <span style={{width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary-maroon)', flexShrink: 0, display: 'inline-block'}} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/services" style={{color: 'var(--primary-maroon)', fontWeight: '700', fontSize: '0.85rem', textDecoration: 'none', borderBottom: '1.5px solid var(--primary-maroon)', paddingBottom: '1px'}}>Explore Service →</Link>
              </div>
            </div>

            {/* Mobile Health Services */}
            <div style={{background: 'white', borderRadius: '14px', overflow: 'hidden', border: '1px solid #e8edf5', transition: 'box-shadow 0.25s ease, transform 0.25s ease'}}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 32px rgba(30,64,175,0.12)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <div style={{position: 'relative', height: '200px', overflow: 'hidden'}}>
                <img src="/images/healthcare.avif" alt="Mobile Health Services" style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} />
                <div style={{position: 'absolute', bottom: '12px', left: '12px', width: '36px', height: '36px', background: 'var(--primary-maroon)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                </div>
              </div>
              <div style={{padding: '22px'}}>
                <h3 style={{fontSize: '1rem', fontWeight: '800', color: 'var(--primary-blue)', marginBottom: '10px'}}>Mobile Health Services</h3>
                <p style={{fontSize: '0.85rem', color: '#6b7280', lineHeight: '1.65', marginBottom: '16px'}}>
                  Essential healthcare delivered directly to homes, workplaces, and underserved communities, improving access to preventive and follow-up care.
                </p>
                <ul style={{listStyle: 'none', padding: 0, margin: '0 0 18px'}}>
                  {['Patient Assessment', 'Medication Administration', 'Vital Signs Monitoring', 'Follow-up Care', 'Health Education', 'Chronic Disease Support'].map(item => (
                    <li key={item} style={{fontSize: '0.83rem', color: '#374151', padding: '4px 0', display: 'flex', alignItems: 'center', gap: '8px'}}>
                      <span style={{width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary-maroon)', flexShrink: 0, display: 'inline-block'}} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/services" style={{color: 'var(--primary-maroon)', fontWeight: '700', fontSize: '0.85rem', textDecoration: 'none', borderBottom: '1.5px solid var(--primary-maroon)', paddingBottom: '1px'}}>Explore Service →</Link>
              </div>
            </div>

            {/* Nutrition Services */}
            <div style={{background: 'white', borderRadius: '14px', overflow: 'hidden', border: '1px solid #e8edf5', transition: 'box-shadow 0.25s ease, transform 0.25s ease'}}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 32px rgba(30,64,175,0.12)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <div style={{position: 'relative', height: '200px', overflow: 'hidden'}}>
                <img src="/images/nttrition pic.jfif" alt="Nutrition Services" style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} />
                <div style={{position: 'absolute', bottom: '12px', left: '12px', width: '36px', height: '36px', background: 'var(--primary-maroon)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M12 2a10 10 0 100 20A10 10 0 0012 2z"/><path d="M12 6v6l4 2"/></svg>
                </div>
              </div>
              <div style={{padding: '22px'}}>
                <h3 style={{fontSize: '1rem', fontWeight: '800', color: 'var(--primary-blue)', marginBottom: '10px'}}>Nutrition Services</h3>
                <p style={{fontSize: '0.85rem', color: '#6b7280', lineHeight: '1.65', marginBottom: '16px'}}>
                  Evidence-based nutrition services designed to promote healthier lifestyles, better recovery, and long-term wellness for individuals and families.
                </p>
                <ul style={{listStyle: 'none', padding: 0, margin: '0 0 18px'}}>
                  {['Nutrition Assessment', 'Diet Planning', 'Maternal & Child Nutrition', 'Clinical Nutrition', 'Lifestyle Nutrition', 'Nutrition Counseling'].map(item => (
                    <li key={item} style={{fontSize: '0.83rem', color: '#374151', padding: '4px 0', display: 'flex', alignItems: 'center', gap: '8px'}}>
                      <span style={{width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary-maroon)', flexShrink: 0, display: 'inline-block'}} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/services" style={{color: 'var(--primary-maroon)', fontWeight: '700', fontSize: '0.85rem', textDecoration: 'none', borderBottom: '1.5px solid var(--primary-maroon)', paddingBottom: '1px'}}>Explore Service →</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section style={{background: 'var(--primary-blue)', padding: '36px 0'}}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '0',
            textAlign: 'center'
          }}>
            {[
              {num: '500+', label: 'Clients Supported'},
              {num: '100+', label: 'Qualified Healthcare Professionals'},
              {num: '24/7', label: 'Emergency Response'},
              {num: 'Nationwide', label: 'Service Coverage'}
            ].map((stat, i, arr) => (
              <div key={i} style={{
                padding: '20px 16px',
                borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.15)' : 'none'
              }}>
                <div style={{fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: '800', color: 'white', lineHeight: '1.1', marginBottom: '6px'}}>{stat.num}</div>
                <div style={{fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)', fontWeight: '500', lineHeight: '1.4'}}>{stat.label}</div>
              </div>
            ))}
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
                  marginBottom: '6px',
                  letterSpacing: '-0.3px'
                }}>Steisy Nankunda</h3>
                <p style={{
                  fontSize: '0.88rem',
                  color: '#6b7280',
                  fontWeight: '500',
                  marginBottom: '16px'
                }}>Managing Director &amp; Co-Founder</p>
                <p style={{fontSize: '0.88rem', color: '#4b5563', lineHeight: '1.7', margin: 0}}>
                  Leading QNC with a vision for accessible, professional, and compassionate healthcare across Uganda and beyond.
                </p>
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

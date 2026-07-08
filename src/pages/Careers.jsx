import { Link } from 'react-router-dom'
import { useState } from 'react'
import SEO from '../components/SEO'

const jobListings = [
  {
    id: 1,
    title: 'Registered Nurse',
    type: 'Full-time / Part-time',
    location: 'Kampala, Uganda',
    description: 'We are looking for compassionate registered nurses to join our home care team.',
    requirements: [
      'Valid nursing license',
      'Minimum 2 years of clinical experience',
      'Excellent communication skills',
      'Ability to work independently'
    ]
  },
  {
    id: 2,
    title: 'Field Medical Officer',
    type: 'Full-time',
    location: 'Various locations',
    description: 'Join our mobile health team providing on-site medical support.',
    requirements: [
      'Medical degree or diploma',
      'Experience in field medicine',
      'Willingness to travel',
      'Strong problem-solving skills'
    ]
  },
  {
    id: 3,
    title: 'Healthcare Assistant',
    type: 'Part-time',
    location: 'Kampala, Uganda',
    description: 'Support our nursing team in delivering quality home-based care.',
    requirements: [
      'Certificate in healthcare',
      'Caring and patient personality',
      'Good physical stamina',
      'Basic medical knowledge'
    ]
  }
]

const steps = [
  { num: '01', title: 'Apply', desc: 'Submit your application through our contact page.' },
  { num: '02', title: 'Review', desc: 'Our team carefully reviews your profile and credentials.' },
  { num: '03', title: 'Interview', desc: 'Meet with our team for a professional interview.' },
  { num: '04', title: 'Join Us', desc: 'Welcome aboard — start making a difference.' }
]

function Careers() {
  const [expandedJob, setExpandedJob] = useState(null)

  return (
    <div style={{background: '#ffffff', minHeight: '100vh'}}>
      <SEO
        title="Careers - Join QNC Solutions Healthcare Team"
        description="Join our team of dedicated healthcare professionals. Explore career opportunities at QNC Solutions and make a difference in people's lives."
        keywords="healthcare jobs Uganda, nursing careers, medical jobs, QNC careers"
        canonical="https://www.qncsolutions.com/careers"
      />

      {/* ── Hero ── */}
      <section style={{
        display: 'flex',
        flexWrap: 'wrap',
        minHeight: '72vh',
        overflow: 'hidden'
      }}>
        {/* Text side */}
        <div style={{
          flex: '1.2 1 400px',
          background: '#f8fafd',
          padding: '80px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{maxWidth: '500px', position: 'relative', paddingLeft: '24px'}}>
            <div style={{
              position: 'absolute',
              left: 0, top: 0, bottom: 0,
              width: '4px',
              background: 'linear-gradient(180deg, var(--primary-maroon), var(--primary-blue))',
              borderRadius: '2px'
            }} />
            <span style={{
              display: 'inline-block',
              background: 'rgba(124,45,18,0.08)',
              color: 'var(--primary-maroon)',
              fontSize: '0.78rem',
              fontWeight: '700',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              padding: '6px 16px',
              borderRadius: '20px',
              marginBottom: '20px',
              border: '1px solid rgba(124,45,18,0.15)'
            }}>Careers at QNC</span>
            <h1 style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
              fontWeight: '800',
              lineHeight: '1.15',
              marginBottom: '20px',
              color: 'var(--primary-blue)',
              letterSpacing: '-0.5px'
            }}>
              Join Our <span style={{color: 'var(--primary-maroon)'}}>Team</span>
            </h1>
            <p style={{
              fontSize: '1.05rem',
              lineHeight: '1.75',
              color: '#4b5563',
              marginBottom: '32px'
            }}>
              Be part of a team that's making healthcare accessible and compassionate for everyone across Uganda.
            </p>
            <a href="#opportunities" style={{
              display: 'inline-block',
              color: 'white',
              background: 'var(--primary-maroon)',
              fontWeight: '700',
              fontSize: '0.9rem',
              textDecoration: 'none',
              padding: '13px 28px',
              borderRadius: '6px',
              boxShadow: '0 4px 16px rgba(124,45,18,0.28)',
              letterSpacing: '0.3px'
            }}>View Open Roles</a>
          </div>
        </div>

        {/* Image side */}
        <div style={{flex: '1 1 320px', position: 'relative', minHeight: '420px', overflow: 'hidden'}}>
          <img
            src="/images/registerred nurse.jfif"
            alt="QNC registered nurse"
            style={{
              width: '100%', height: '100%', minHeight: '420px',
              objectFit: 'cover', objectPosition: 'center top', display: 'block'
            }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, transparent 60%, rgba(15,32,87,0.4) 100%)'
          }} />
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            height: '4px',
            background: 'linear-gradient(to right, var(--primary-maroon), var(--primary-blue))'
          }} />
        </div>
      </section>

      {/* ── Job Openings ── */}
      <section id="opportunities" style={{padding: '80px 0', background: 'white'}}>
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
            }}>Open Roles</span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: '800',
              color: 'var(--primary-blue)',
              letterSpacing: '-0.3px'
            }}>Current Opportunities</h2>
          </div>

          <div style={{maxWidth: '860px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px'}}>
            {jobListings.map(job => (
              <div key={job.id} style={{
                background: '#f8fafd',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1.5px solid #e8edf5',
                transition: 'box-shadow 0.25s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 28px rgba(30,64,175,0.1)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>
                <div
                  onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                  style={{
                    padding: '24px 28px',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '20px'
                  }}
                >
                  <div>
                    <h3 style={{
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      color: 'var(--primary-maroon)',
                      marginBottom: '8px'
                    }}>{job.title}</h3>
                    <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', fontSize: '0.83rem', color: '#6b7280', fontWeight: '500'}}>
                      <span style={{
                        background: 'rgba(30,64,175,0.08)',
                        color: 'var(--primary-blue)',
                        padding: '3px 10px',
                        borderRadius: '12px',
                        fontWeight: '600'
                      }}>{job.type}</span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <div style={{
                    width: '32px', height: '32px',
                    borderRadius: '50%',
                    background: 'var(--primary-blue)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white',
                    fontSize: '0.8rem',
                    flexShrink: 0,
                    transition: 'transform 0.25s ease',
                    transform: expandedJob === job.id ? 'rotate(180deg)' : 'rotate(0)'
                  }}>▼</div>
                </div>

                {expandedJob === job.id && (
                  <div style={{padding: '0 28px 28px', background: 'white', borderTop: '1px solid #f3f4f6'}}>
                    <p style={{fontSize: '0.93rem', color: '#4b5563', lineHeight: '1.7', margin: '20px 0 18px'}}>{job.description}</p>
                    <h4 style={{
                      fontSize: '0.78rem',
                      fontWeight: '700',
                      color: 'var(--primary-blue)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '12px'
                    }}>Requirements</h4>
                    <ul style={{listStyle: 'none', padding: 0, margin: '0 0 22px'}}>
                      {job.requirements.map((req, i) => (
                        <li key={i} style={{
                          fontSize: '0.9rem',
                          color: '#374151',
                          padding: '7px 0',
                          borderBottom: '1px solid #f3f4f6',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px'
                        }}>
                          <span style={{
                            width: '6px', height: '6px',
                            borderRadius: '50%',
                            background: 'var(--primary-maroon)',
                            flexShrink: 0,
                            marginTop: '6px'
                          }} />
                          {req}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" style={{
                      background: 'var(--primary-maroon)',
                      color: 'white',
                      textDecoration: 'none',
                      padding: '11px 28px',
                      borderRadius: '6px',
                      fontSize: '0.88rem',
                      fontWeight: '700',
                      display: 'inline-block',
                      boxShadow: '0 4px 14px rgba(124,45,18,0.25)'
                    }}>Apply Now</Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hiring Process ── */}
      <section style={{padding: '80px 0', background: '#f8fafd'}}>
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
            }}>How It Works</span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: '800',
              color: 'var(--primary-blue)',
              letterSpacing: '-0.3px'
            }}>Our Hiring Process</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            maxWidth: '960px',
            margin: '0 auto'
          }}>
            {steps.map((step, i) => (
              <div key={i} style={{
                background: 'white',
                borderRadius: '14px',
                padding: '32px 24px',
                textAlign: 'center',
                border: '1.5px solid #e8edf5',
                borderTop: '4px solid var(--primary-maroon)',
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
                <div style={{
                  fontSize: '2rem',
                  fontWeight: '800',
                  color: 'var(--primary-blue)',
                  opacity: '0.15',
                  marginBottom: '10px',
                  letterSpacing: '-1px'
                }}>{step.num}</div>
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: '700',
                  color: 'var(--primary-maroon)',
                  marginBottom: '10px'
                }}>{step.title}</h3>
                <p style={{fontSize: '0.88rem', color: '#6b7280', lineHeight: '1.6', margin: 0}}>{step.desc}</p>
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
        <div style={{position: 'absolute', right: '-80px', top: '-80px', width: '320px', height: '320px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)'}} />
        <div className="container" style={{position: 'relative', zIndex: 1, textAlign: 'center'}}>
          <h2 style={{fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: '800', color: 'white', marginBottom: '12px'}}>
            Ready to Make a Difference?
          </h2>
          <p style={{fontSize: '0.95rem', color: 'rgba(255,255,255,0.75)', marginBottom: '28px', maxWidth: '480px', margin: '0 auto 28px'}}>
            Join our team and help us deliver quality healthcare to those who need it most.
          </p>
          <Link to="/contact" style={{
            background: 'white',
            color: 'var(--primary-blue)',
            textDecoration: 'none',
            padding: '14px 36px',
            borderRadius: '6px',
            fontSize: '0.95rem',
            fontWeight: '800',
            display: 'inline-block',
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
          }}>Get In Touch</Link>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{backgroundColor: '#0f2057', color: 'white', padding: '56px 0 0'}}>
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px', paddingBottom: '48px'}}>
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

export default Careers

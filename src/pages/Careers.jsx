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

export default Careers

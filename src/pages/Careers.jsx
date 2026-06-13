import { Link } from 'react-router-dom'
import { useState } from 'react'
import SEO from '../components/SEO'

function Careers() {
  const [expandedJob, setExpandedJob] = useState(null)

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

  const toggleJob = (id) => {
    setExpandedJob(expandedJob === id ? null : id)
  }

  return (
    <div style={{background: '#ffffff', minHeight: '100vh'}}>
      <SEO 
        title="Careers - Join QNC Solutions Healthcare Team"
        description="Join our team of dedicated healthcare professionals. Explore career opportunities at QNC Solutions and make a difference in people's lives."
        keywords="healthcare jobs Uganda, nursing careers, medical jobs, QNC careers"
        canonical="https://www.qncsolutions.com/careers"
      />

      {/* Hero Section */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        minHeight: '520px',
        background: '#ffffff',
        overflow: 'hidden'
      }}>
        <div style={{
          padding: '60px 48px',
          display: 'flex',
          alignItems: 'center',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            left: 0,
            top: '18%',
            bottom: '18%',
            width: '4px',
            background: 'var(--primary-maroon)',
            borderRadius: '2px'
          }} />
          <div style={{paddingLeft: '28px', maxWidth: '480px'}}>
            <span style={{
              display: 'inline-block',
              fontSize: '0.8rem',
              fontWeight: '600',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--primary-maroon)',
              marginBottom: '16px'
            }}>
              Careers at QNC
            </span>
            <h1 style={{
              fontSize: '2.8rem',
              fontWeight: '700',
              lineHeight: '1.15',
              marginBottom: '20px',
              color: 'var(--primary-blue)'
            }}>
              Join Our <span style={{color: 'var(--primary-maroon)'}}>Team</span>
            </h1>
            <p style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: '#4b5563',
              marginBottom: '28px'
            }}>
              Be part of a team that's making healthcare accessible and compassionate for everyone.
            </p>
            <a
              href="#opportunities"
              style={{
                display: 'inline-block',
                color: 'var(--primary-maroon)',
                fontWeight: '600',
                fontSize: '0.95rem',
                textDecoration: 'none',
                borderBottom: '2px solid var(--primary-maroon)',
                paddingBottom: '4px'
              }}
            >
              View Open Roles →
            </a>
          </div>
        </div>
        <div style={{
          position: 'relative',
          minHeight: '420px',
          overflow: 'hidden'
        }}>
          <img
            src="/images/registerred nurse.jfif"
            alt="QNC registered nurse in professional scrubs"
            style={{
              width: '100%',
              height: '100%',
              minHeight: '420px',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block'
            }}
          />
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '5px',
            background: 'linear-gradient(to right, var(--primary-maroon) 0%, var(--primary-blue) 100%)'
          }} />
        </div>
      </section>

      {/* Why Join Us */}
      <section style={{padding: '60px 0', background: '#f9fafb'}}>
        <div className="container">
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: 'var(--primary-blue)',
            textAlign: 'center',
            marginBottom: '50px'
          }}>Why Work With QNC?</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px'
          }}>
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: '#eff6ff',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '2.5rem'
              }}>💼</div>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                color: 'var(--primary-blue)',
                marginBottom: '15px'
              }}>Professional Growth</h3>
              <p style={{
                fontSize: '0.95rem',
                color: '#6b7280',
                lineHeight: '1.6'
              }}>
                Continuous learning opportunities and career advancement in a supportive environment.
              </p>
            </div>

            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: '#fef3c7',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '2.5rem'
              }}>🤝</div>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                color: 'var(--primary-blue)',
                marginBottom: '15px'
              }}>Supportive Team</h3>
              <p style={{
                fontSize: '0.95rem',
                color: '#6b7280',
                lineHeight: '1.6'
              }}>
                Work alongside passionate professionals who care about making a difference.
              </p>
            </div>

            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: '#fce7f3',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '2.5rem'
              }}>⚖️</div>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                color: 'var(--primary-blue)',
                marginBottom: '15px'
              }}>Work-Life Balance</h3>
              <p style={{
                fontSize: '0.95rem',
                color: '#6b7280',
                lineHeight: '1.6'
              }}>
                Flexible schedules and time off to maintain a healthy work-life balance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="opportunities" style={{padding: '60px 0', background: 'white'}}>
        <div className="container">
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: 'var(--primary-blue)',
            textAlign: 'center',
            marginBottom: '50px'
          }}>Current Opportunities</h2>

          <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            {jobListings.map((job) => (
              <div key={job.id} style={{
                background: '#f9fafb',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid #e5e7eb'
              }}>
                <div
                  onClick={() => toggleJob(job.id)}
                  style={{
                    padding: '25px',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'background 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  <div>
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontWeight: '600',
                      color: 'var(--primary-maroon)',
                      marginBottom: '8px'
                    }}>{job.title}</h3>
                    <div style={{
                      display: 'flex',
                      gap: '20px',
                      flexWrap: 'wrap',
                      fontSize: '0.9rem',
                      color: '#6b7280'
                    }}>
                      <span>📋 {job.type}</span>
                      <span>📍 {job.location}</span>
                    </div>
                  </div>
                  <div style={{
                    fontSize: '1.5rem',
                    color: 'var(--primary-blue)',
                    transition: 'transform 0.3s ease',
                    transform: expandedJob === job.id ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}>
                    ▼
                  </div>
                </div>

                {expandedJob === job.id && (
                  <div style={{
                    padding: '0 25px 25px 25px',
                    background: 'white'
                  }}>
                    <p style={{
                      fontSize: '1rem',
                      color: '#4b5563',
                      lineHeight: '1.6',
                      marginBottom: '20px'
                    }}>{job.description}</p>

                    <h4 style={{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      color: 'var(--primary-blue)',
                      marginBottom: '12px'
                    }}>Requirements:</h4>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      marginBottom: '20px'
                    }}>
                      {job.requirements.map((req, index) => (
                        <li key={index} style={{
                          fontSize: '0.95rem',
                          color: '#6b7280',
                          marginBottom: '8px',
                          paddingLeft: '20px',
                          position: 'relative'
                        }}>
                          <span style={{
                            position: 'absolute',
                            left: 0,
                            color: 'var(--primary-maroon)'
                          }}>✓</span>
                          {req}
                        </li>
                      ))}
                    </ul>

                    <Link to="/contact" style={{
                      background: 'var(--primary-maroon)',
                      color: 'white',
                      textDecoration: 'none',
                      padding: '10px 25px',
                      borderRadius: '4px',
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      display: 'inline-block'
                    }}>
                      Apply Now
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section style={{padding: '60px 0', background: '#f9fafb'}}>
        <div className="container">
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: 'var(--primary-blue)',
            textAlign: 'center',
            marginBottom: '50px'
          }}>Our Hiring Process</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <div style={{textAlign: 'center'}}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'var(--primary-blue)',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 15px',
                fontSize: '1.5rem',
                fontWeight: '700'
              }}>1</div>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: 'var(--primary-blue)',
                marginBottom: '10px'
              }}>Apply</h3>
              <p style={{
                fontSize: '0.9rem',
                color: '#6b7280'
              }}>Submit your application</p>
            </div>

            <div style={{textAlign: 'center'}}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'var(--primary-blue)',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 15px',
                fontSize: '1.5rem',
                fontWeight: '700'
              }}>2</div>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: 'var(--primary-blue)',
                marginBottom: '10px'
              }}>Review</h3>
              <p style={{
                fontSize: '0.9rem',
                color: '#6b7280'
              }}>We review your profile</p>
            </div>

            <div style={{textAlign: 'center'}}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'var(--primary-blue)',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 15px',
                fontSize: '1.5rem',
                fontWeight: '700'
              }}>3</div>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: 'var(--primary-blue)',
                marginBottom: '10px'
              }}>Interview</h3>
              <p style={{
                fontSize: '0.9rem',
                color: '#6b7280'
              }}>Meet with our team</p>
            </div>

            <div style={{textAlign: 'center'}}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'var(--primary-blue)',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 15px',
                fontSize: '1.5rem',
                fontWeight: '700'
              }}>4</div>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: 'var(--primary-blue)',
                marginBottom: '10px'
              }}>Join Us</h3>
              <p style={{
                fontSize: '0.9rem',
                color: '#6b7280'
              }}>Welcome to the team!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, var(--primary-blue), #1e40af)',
        color: 'white',
        padding: '60px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{fontSize: '1.8rem', fontWeight: '700', marginBottom: '15px'}}>
            Ready to Make a Difference?
          </h2>
          <p style={{fontSize: '1rem', marginBottom: '25px', opacity: '0.95'}}>
            Join our team and help us deliver quality healthcare to those who need it most.
          </p>
          <Link to="/contact" style={{
            background: 'white',
            color: 'var(--primary-blue)',
            textDecoration: 'none',
            padding: '12px 35px',
            borderRadius: '4px',
            fontSize: '1rem',
            fontWeight: '600',
            display: 'inline-block'
          }}>
            Get In Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <section style={{backgroundColor: 'var(--primary-blue)', color: 'white', padding: '40px 0'}}>
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px'}}>
            
            <div>
              <h4 style={{fontSize: '1.2rem', marginBottom: '15px'}}>Quick Links</h4>
              <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                <li style={{marginBottom: '10px'}}><Link to="/" style={{color: '#d1d5db', textDecoration: 'none'}}>Home</Link></li>
                <li style={{marginBottom: '10px'}}><Link to="/about" style={{color: '#d1d5db', textDecoration: 'none'}}>About Us</Link></li>
                <li style={{marginBottom: '10px'}}><Link to="/services" style={{color: '#d1d5db', textDecoration: 'none'}}>Services & Solutions</Link></li>
                <li style={{marginBottom: '10px'}}><Link to="/careers" style={{color: '#d1d5db', textDecoration: 'none'}}>Careers</Link></li>
                <li style={{marginBottom: '10px'}}><Link to="/contact" style={{color: '#d1d5db', textDecoration: 'none'}}>Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 style={{fontSize: '1.2rem', marginBottom: '15px'}}>Our Services</h4>
              <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                <li style={{marginBottom: '10px'}}><span style={{color: '#d1d5db'}}>Nursing Care</span></li>
                <li style={{marginBottom: '10px'}}><span style={{color: '#d1d5db'}}>Medical Consultation</span></li>
                <li style={{marginBottom: '10px'}}><span style={{color: '#d1d5db'}}>Caregiver Support</span></li>
                <li style={{marginBottom: '10px'}}><span style={{color: '#d1d5db'}}>Mobile Health</span></li>
              </ul>
            </div>

            <div>
              <h4 style={{fontSize: '1.2rem', marginBottom: '15px'}}>Contact Info</h4>
              <div style={{fontSize: '0.9rem', color: '#d1d5db', lineHeight: '1.8'}}>
                <p style={{marginBottom: '10px'}}>📍 Buziga Katuso<br />P.O. Box: 201036 Kampala GPO, Uganda</p>
                <p style={{marginBottom: '10px'}}>📞 <a href="tel:+256791785931" style={{color: '#d1d5db', textDecoration: 'none'}}>+256-791-785931</a></p>
                <p>✉️ <a href="mailto:qncsolutions3@gmail.com" style={{color: '#d1d5db', textDecoration: 'none'}}>qncsolutions3@gmail.com</a></p>
              </div>
            </div>

            <div>
              <h4 style={{fontSize: '1.2rem', marginBottom: '15px'}}>Our Location</h4>
              <div style={{
                width: '100%',
                height: '180px',
                backgroundColor: '#374151',
                borderRadius: '8px',
                overflow: 'hidden'
              }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7520895823944!2d32.6078!3d0.2619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0f9c3b5555%3A0x1234567890abcdef!2sBuziga%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{border: 0}}
                  allowFullScreen=""
                  loading="lazy"
                  title="QNC Location"
                ></iframe>
              </div>
            </div>
          </div>

          <div style={{
            borderTop: '1px solid #374151',
            marginTop: '30px',
            paddingTop: '20px',
            textAlign: 'center',
            fontSize: '0.85rem',
            color: '#9ca3af'
          }}>
            <p style={{margin: '0 0 8px 0'}}>
              © 2026 QNC Solutions. All rights reserved. | Join us in our mission to provide quality healthcare for all.
            </p>
            <p style={{margin: 0, fontStyle: 'italic'}}>
              Made by <span style={{fontWeight: '700', color: '#ffffff'}}>INFINITI ANALYTICS</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Careers

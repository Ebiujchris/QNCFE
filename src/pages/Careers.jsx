import { Link } from 'react-router-dom'
import { useState } from 'react'

function Careers() {
  const [expandedOpportunity, setExpandedOpportunity] = useState(null)

  const toggleOpportunity = (opportunityId) => {
    setExpandedOpportunity(expandedOpportunity === opportunityId ? null : opportunityId)
  }
  return (
    <div style={{background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', minHeight: '100vh'}}>
      {/* Hero Section */}
      <section className="hero" style={{
        background: `linear-gradient(135deg, rgba(30, 64, 175, 0.9), rgba(124, 45, 18, 0.8)), url('/images/photo-1666887360680-9dc27a1d2753.avif')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '50px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <div style={{textAlign: 'center', color: 'white'}}>
            <h1 style={{
              fontSize: '2.5rem', 
              fontWeight: '700', 
              marginBottom: '15px',
              background: 'linear-gradient(135deg, #ffffff, #e0e7ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)'
            }}>Join Our Team</h1>
            <p style={{
              fontSize: '1.1rem', 
              maxWidth: '600px', 
              margin: '0 auto',
              opacity: '0.95',
              textShadow: '0 1px 3px rgba(0,0,0,0.3)'
            }}>
              Make a difference in healthcare by joining our network of dedicated professionals
            </p>
          </div>
        </div>
        {/* Floating elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '80px',
          height: '80px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '15%',
          width: '60px',
          height: '60px',
          background: 'rgba(16, 185, 129, 0.2)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite reverse'
        }}></div>
      </section>

      {/* Why Join Us */}
      <section className="container" style={{padding: '40px 0'}}>
        <h2 style={{
          textAlign: 'center', 
          fontSize: '2rem', 
          fontWeight: '700', 
          color: 'var(--primary-blue)', 
          marginBottom: '30px',
          textShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          Why Choose QNC Solutions?
        </h2>
        
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '40px'}}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '16px',
            padding: '25px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
            textAlign: 'center',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
          }}>
            <span style={{
              fontSize: '2.5rem', 
              marginBottom: '15px', 
              display: 'block',
              background: 'linear-gradient(135deg, #10b981, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>💼</span>
            <h3 style={{color: '#1f2937', marginBottom: '12px', fontSize: '1.2rem', fontWeight: '600'}}>Flexible Work</h3>
            <p style={{color: '#6b7280', fontSize: '0.9rem', lineHeight: '1.4'}}>
              Choose your schedule and work-life balance while making a meaningful impact in healthcare.
            </p>
          </div>
          
          <div style={{
            background: 'rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '16px',
            padding: '25px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
            textAlign: 'center',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
          }}>
            <span style={{
              fontSize: '2.5rem', 
              marginBottom: '15px', 
              display: 'block',
              background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>💰</span>
            <h3 style={{color: '#1f2937', marginBottom: '12px', fontSize: '1.2rem', fontWeight: '600'}}>Competitive Pay</h3>
            <p style={{color: '#6b7280', fontSize: '0.9rem', lineHeight: '1.4'}}>
              Earn competitive compensation with opportunities for growth and professional development.
            </p>
          </div>
          
          <div style={{
            background: 'rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '16px',
            padding: '25px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
            textAlign: 'center',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
          }}>
            <span style={{
              fontSize: '2.5rem', 
              marginBottom: '15px', 
              display: 'block',
              background: 'linear-gradient(135deg, #ef4444, #f97316)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>🤝</span>
            <h3 style={{color: '#1f2937', marginBottom: '12px', fontSize: '1.2rem', fontWeight: '600'}}>Supportive Team</h3>
            <p style={{color: '#6b7280', fontSize: '0.9rem', lineHeight: '1.4'}}>
              Join a collaborative environment with ongoing support, training, and professional mentorship.
            </p>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        padding: '40px 0',
        position: 'relative'
      }}>
        <div className="container">
          <h2 style={{
            textAlign: 'center', 
            fontSize: '2rem', 
            fontWeight: '700', 
            color: 'var(--primary-blue)', 
            marginBottom: '30px',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            Career Opportunities
          </h2>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px'}}>
            
            {/* Registered Nurses */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.3)',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              borderRadius: '16px',
              padding: '25px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.12)';
            }}>
              {/* Background decoration */}
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '80px',
                height: '80px',
                background: 'rgba(16, 185, 129, 0.1)',
                borderRadius: '50%',
                backdropFilter: 'blur(10px)'
              }}></div>
              
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '15px', position: 'relative', zIndex: 2}}>
                <span style={{
                  fontSize: '2.5rem', 
                  marginRight: '12px',
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>🏥</span>
                <h3 style={{color: '#1f2937', fontSize: '1.3rem', fontWeight: '600'}}>Registered Nurses</h3>
              </div>
              <p style={{color: '#6b7280', marginBottom: '15px', lineHeight: '1.5', fontSize: '0.9rem', position: 'relative', zIndex: 2}}>
                Provide professional nursing care and support patients in their homes with your expertise and compassion.
              </p>
              
              {expandedOpportunity === 'nurses' && (
                <div style={{
                  background: 'rgba(255,255,255,0.2)',
                  borderRadius: '10px',
                  padding: '15px',
                  border: '1px solid rgba(255,255,255,0.3)',
                  marginBottom: '15px',
                  position: 'relative',
                  zIndex: 2
                }}>
                  <div style={{marginBottom: '15px'}}>
                    <h4 style={{color: 'var(--primary-blue)', fontSize: '1rem', marginBottom: '8px'}}>Requirements:</h4>
                    <ul style={{color: '#6b7280', fontSize: '0.85rem', paddingLeft: '18px'}}>
                      <li>Valid nursing license</li>
                      <li>2+ years clinical experience</li>
                      <li>CPR certification</li>
                      <li>Excellent communication skills</li>
                    </ul>
                  </div>
                  <div>
                    <h4 style={{color: 'var(--primary-blue)', fontSize: '1rem', marginBottom: '8px'}}>Benefits:</h4>
                    <ul style={{color: '#6b7280', fontSize: '0.85rem', paddingLeft: '18px'}}>
                      <li>Flexible scheduling</li>
                      <li>Competitive compensation</li>
                      <li>Professional development</li>
                      <li>Health insurance support</li>
                    </ul>
                  </div>
                </div>
              )}
              
              <button 
                onClick={() => toggleOpportunity('nurses')}
                style={{
                  background: 'rgba(30, 64, 175, 0.1)',
                  border: '1px solid rgba(30, 64, 175, 0.3)',
                  borderRadius: '15px',
                  color: 'var(--primary-blue)',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  padding: '6px 12px',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  zIndex: 2
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(30, 64, 175, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(30, 64, 175, 0.1)';
                }}
              >
                {expandedOpportunity === 'nurses' ? 'Read Less' : 'Read More'}
              </button>
            </div>

            {/* General Practitioners */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.3)',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              borderRadius: '16px',
              padding: '25px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.12)';
            }}>
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '80px',
                height: '80px',
                background: 'rgba(30, 64, 175, 0.1)',
                borderRadius: '50%',
                backdropFilter: 'blur(10px)'
              }}></div>
              
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '15px', position: 'relative', zIndex: 2}}>
                <span style={{
                  fontSize: '2.5rem', 
                  marginRight: '12px',
                  background: 'linear-gradient(135deg, #3b82f6, #1e40af)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>👨‍⚕️</span>
                <h3 style={{color: '#1f2937', fontSize: '1.3rem', fontWeight: '600'}}>General Practitioners</h3>
              </div>
              <p style={{color: '#6b7280', marginBottom: '15px', lineHeight: '1.5', fontSize: '0.9rem', position: 'relative', zIndex: 2}}>
                Offer medical consultations and health assessments in comfortable home settings for diverse patient populations.
              </p>
              
              {expandedOpportunity === 'doctors' && (
                <div style={{
                  background: 'rgba(255,255,255,0.2)',
                  borderRadius: '10px',
                  padding: '15px',
                  border: '1px solid rgba(255,255,255,0.3)',
                  marginBottom: '15px',
                  position: 'relative',
                  zIndex: 2
                }}>
                  <div style={{marginBottom: '15px'}}>
                    <h4 style={{color: 'var(--primary-blue)', fontSize: '1rem', marginBottom: '8px'}}>Requirements:</h4>
                    <ul style={{color: '#6b7280', fontSize: '0.85rem', paddingLeft: '18px'}}>
                      <li>Medical degree and license</li>
                      <li>Board certification preferred</li>
                      <li>Home care experience a plus</li>
                      <li>Strong diagnostic skills</li>
                    </ul>
                  </div>
                  <div>
                    <h4 style={{color: 'var(--primary-blue)', fontSize: '1rem', marginBottom: '8px'}}>Benefits:</h4>
                    <ul style={{color: '#6b7280', fontSize: '0.85rem', paddingLeft: '18px'}}>
                      <li>Work-life balance</li>
                      <li>Modern technology support</li>
                      <li>Growing patient network</li>
                      <li>Continuing education support</li>
                    </ul>
                  </div>
                </div>
              )}
              
              <button 
                onClick={() => toggleOpportunity('doctors')}
                style={{
                  background: 'rgba(30, 64, 175, 0.1)',
                  border: '1px solid rgba(30, 64, 175, 0.3)',
                  borderRadius: '15px',
                  color: 'var(--primary-blue)',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  padding: '6px 12px',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  zIndex: 2
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(30, 64, 175, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(30, 64, 175, 0.1)';
                }}
              >
                {expandedOpportunity === 'doctors' ? 'Read Less' : 'Read More'}
              </button>
            </div>

            {/* Professional Caregivers */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.3)',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              borderRadius: '16px',
              padding: '25px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.12)';
            }}>
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '80px',
                height: '80px',
                background: 'rgba(124, 45, 18, 0.1)',
                borderRadius: '50%',
                backdropFilter: 'blur(10px)'
              }}></div>
              
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '15px', position: 'relative', zIndex: 2}}>
                <span style={{
                  fontSize: '2.5rem', 
                  marginRight: '12px',
                  background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>🤝</span>
                <h3 style={{color: '#1f2937', fontSize: '1.3rem', fontWeight: '600'}}>Professional Caregivers</h3>
              </div>
              <p style={{color: '#6b7280', marginBottom: '15px', lineHeight: '1.5', fontSize: '0.9rem', position: 'relative', zIndex: 2}}>
                Provide compassionate care and daily assistance to patients who need support with daily living activities.
              </p>
              
              {expandedOpportunity === 'caregivers' && (
                <div style={{
                  background: 'rgba(255,255,255,0.2)',
                  borderRadius: '10px',
                  padding: '15px',
                  border: '1px solid rgba(255,255,255,0.3)',
                  marginBottom: '15px',
                  position: 'relative',
                  zIndex: 2
                }}>
                  <div style={{marginBottom: '15px'}}>
                    <h4 style={{color: 'var(--primary-blue)', fontSize: '1rem', marginBottom: '8px'}}>Requirements:</h4>
                    <ul style={{color: '#6b7280', fontSize: '0.85rem', paddingLeft: '18px'}}>
                      <li>High school diploma or equivalent</li>
                      <li>Caregiving experience preferred</li>
                      <li>First aid certification</li>
                      <li>Compassionate and patient nature</li>
                    </ul>
                  </div>
                  <div>
                    <h4 style={{color: 'var(--primary-blue)', fontSize: '1rem', marginBottom: '8px'}}>Benefits:</h4>
                    <ul style={{color: '#6b7280', fontSize: '0.85rem', paddingLeft: '18px'}}>
                      <li>Meaningful work</li>
                      <li>Training provided</li>
                      <li>Supportive team environment</li>
                      <li>Flexible hours</li>
                    </ul>
                  </div>
                </div>
              )}
              
              <button 
                onClick={() => toggleOpportunity('caregivers')}
                style={{
                  background: 'rgba(30, 64, 175, 0.1)',
                  border: '1px solid rgba(30, 64, 175, 0.3)',
                  borderRadius: '15px',
                  color: 'var(--primary-blue)',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  padding: '6px 12px',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  zIndex: 2
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(30, 64, 175, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(30, 64, 175, 0.1)';
                }}
              >
                {expandedOpportunity === 'caregivers' ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="container" style={{padding: '40px 0'}}>
        <h2 style={{
          textAlign: 'center', 
          fontSize: '2rem', 
          fontWeight: '700', 
          color: 'var(--primary-blue)', 
          marginBottom: '30px',
          textShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          How to Apply
        </h2>
        
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '30px'}}>
          <div style={{textAlign: 'center'}}>
            <div style={{
              width: '70px', 
              height: '70px', 
              background: 'linear-gradient(135deg, var(--primary-blue), #1e40af)', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              margin: '0 auto 15px',
              color: 'white',
              fontSize: '1.8rem',
              boxShadow: '0 8px 25px rgba(30, 64, 175, 0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.1)';
              e.target.style.boxShadow = '0 12px 30px rgba(30, 64, 175, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 8px 25px rgba(30, 64, 175, 0.3)';
            }}>1</div>
            <h4 style={{color: '#1f2937', marginBottom: '8px', fontSize: '1.1rem', fontWeight: '600'}}>Register</h4>
            <p style={{color: '#6b7280', fontSize: '0.85rem', lineHeight: '1.4'}}>
              Create your provider account and complete your professional profile
            </p>
          </div>
          
          <div style={{textAlign: 'center'}}>
            <div style={{
              width: '70px', 
              height: '70px', 
              background: 'linear-gradient(135deg, var(--primary-blue), #1e40af)', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              margin: '0 auto 15px',
              color: 'white',
              fontSize: '1.8rem',
              boxShadow: '0 8px 25px rgba(30, 64, 175, 0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.1)';
              e.target.style.boxShadow = '0 12px 30px rgba(30, 64, 175, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 8px 25px rgba(30, 64, 175, 0.3)';
            }}>2</div>
            <h4 style={{color: '#1f2937', marginBottom: '8px', fontSize: '1.1rem', fontWeight: '600'}}>Verification</h4>
            <p style={{color: '#6b7280', fontSize: '0.85rem', lineHeight: '1.4'}}>
              We verify your credentials, licenses, and professional background
            </p>
          </div>
          
          <div style={{textAlign: 'center'}}>
            <div style={{
              width: '70px', 
              height: '70px', 
              background: 'linear-gradient(135deg, var(--primary-blue), #1e40af)', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              margin: '0 auto 15px',
              color: 'white',
              fontSize: '1.8rem',
              boxShadow: '0 8px 25px rgba(30, 64, 175, 0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.1)';
              e.target.style.boxShadow = '0 12px 30px rgba(30, 64, 175, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 8px 25px rgba(30, 64, 175, 0.3)';
            }}>3</div>
            <h4 style={{color: '#1f2937', marginBottom: '8px', fontSize: '1.1rem', fontWeight: '600'}}>Onboarding</h4>
            <p style={{color: '#6b7280', fontSize: '0.85rem', lineHeight: '1.4'}}>
              Complete orientation and training to join our healthcare network
            </p>
          </div>
          
          <div style={{textAlign: 'center'}}>
            <div style={{
              width: '70px', 
              height: '70px', 
              background: 'linear-gradient(135deg, var(--primary-blue), #1e40af)', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              margin: '0 auto 15px',
              color: 'white',
              fontSize: '1.8rem',
              boxShadow: '0 8px 25px rgba(30, 64, 175, 0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.1)';
              e.target.style.boxShadow = '0 12px 30px rgba(30, 64, 175, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 8px 25px rgba(30, 64, 175, 0.3)';
            }}>4</div>
            <h4 style={{color: '#1f2937', marginBottom: '8px', fontSize: '1.1rem', fontWeight: '600'}}>Start Working</h4>
            <p style={{color: '#6b7280', fontSize: '0.85rem', lineHeight: '1.4'}}>
              Begin accepting assignments and making a difference in patients' lives
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, var(--primary-blue), #1e40af)',
        padding: '35px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{textAlign: 'center', position: 'relative', zIndex: 2}}>
          <h2 style={{
            fontSize: '2rem', 
            marginBottom: '15px', 
            color: 'white',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>Ready to Join Our Team?</h2>
          <p style={{
            fontSize: '1rem', 
            marginBottom: '20px', 
            color: 'white', 
            maxWidth: '500px', 
            margin: '0 auto 20px',
            opacity: '0.95'
          }}>
            Start your journey with QNC Solutions and become part of a team that's transforming healthcare delivery.
          </p>
          <Link to="/register" style={{
            background: 'linear-gradient(135deg, var(--primary-maroon), #991b1b)',
            color: 'white',
            textDecoration: 'none',
            padding: '12px 24px',
            borderRadius: '25px',
            fontWeight: '600',
            fontSize: '0.9rem',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(124, 45, 18, 0.3)',
            display: 'inline-block'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 20px rgba(124, 45, 18, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(124, 45, 18, 0.3)';
          }}>
            👩‍⚕️ Enlist as Provider
          </Link>
        </div>
        {/* Floating elements */}
        <div style={{
          position: 'absolute',
          top: '15%',
          left: '8%',
          width: '50px',
          height: '50px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '12%',
          width: '40px',
          height: '40px',
          background: 'rgba(124, 45, 18, 0.3)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite reverse'
        }}></div>
      </section>
    </div>
  )
}

export default Careers
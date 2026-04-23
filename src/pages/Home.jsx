import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Home() {
  const [isProfileExpanded, setIsProfileExpanded] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Array of background images
  const backgroundImages = [
    '/images/horizontal homepage image put i n the background.avif',
    '/images/home page image.avif',
    '/images/home page image 2.avif',
    '/images/homepage photo new.jpg',
    '/images/homepage backgorund photo 2.jpg',
    '/images/homepage background photo 3.jpg',
    '/images/healthcare.avif',
    '/images/new background image.avif'
  ]

  // Rotate background images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      )
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [backgroundImages.length])

  const toggleProfile = () => {
    setIsProfileExpanded(!isProfileExpanded)
  }
  return (
    <div style={{background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', minHeight: '100vh'}}>
      {/* Hero Section */}
      <section className="hero" style={{
        background: `linear-gradient(135deg, rgba(102, 126, 234, 0.9), rgba(118, 75, 162, 0.8)), url('${backgroundImages[currentImageIndex]}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background-image 1s ease-in-out'
      }}>
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <div className="hero-content" style={{
            textAlign: 'center',
            color: 'white',
            padding: '80px 0'
          }}>
            <h1 style={{
              fontSize: '3.5rem',
              fontWeight: '800',
              marginBottom: '20px',
              background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 4px 20px rgba(0,0,0,0.3)'
            }}>QNC SOLUTIONS</h1>
            <p style={{
              fontSize: '1.3rem',
              maxWidth: '700px',
              margin: '0 auto 30px',
              opacity: '0.95',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)',
              lineHeight: '1.6'
            }}>Professional healthcare services delivered to your doorstep. Connect with qualified nurses, doctors, and caregivers in your community.</p>
            <div className="hero-buttons">
              <Link to="/book" style={{
                background: 'linear-gradient(135deg, #7c2d12, #991b1b)',
                color: 'white',
                textDecoration: 'none',
                padding: '15px 30px',
                borderRadius: '30px',
                fontSize: '1.1rem',
                fontWeight: '600',
                display: 'inline-block',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 25px rgba(124, 45, 18, 0.4)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 12px 35px rgba(124, 45, 18, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 25px rgba(124, 45, 18, 0.4)';
              }}>
                📅 Make an Appointment
              </Link>
            </div>
          </div>
        </div>
        {/* Floating elements */}
        <div style={{
          position: 'absolute',
          top: '15%',
          left: '8%',
          width: '100px',
          height: '100px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '80px',
          height: '80px',
          background: 'rgba(16, 185, 129, 0.2)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite reverse'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '60%',
          left: '15%',
          width: '60px',
          height: '60px',
          background: 'rgba(118, 75, 162, 0.3)',
          borderRadius: '50%',
          animation: 'float 10s ease-in-out infinite'
        }}></div>

        {/* Image Rotation Indicators */}
        <div style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '10px',
          zIndex: 3
        }}>
          {backgroundImages.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: index === currentImageIndex 
                  ? 'rgba(255, 255, 255, 0.9)' 
                  : 'rgba(255, 255, 255, 0.4)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
              }}
              onMouseEnter={(e) => {
                if (index !== currentImageIndex) {
                  e.target.style.background = 'rgba(255, 255, 255, 0.7)';
                }
              }}
              onMouseLeave={(e) => {
                if (index !== currentImageIndex) {
                  e.target.style.background = 'rgba(255, 255, 255, 0.4)';
                }
              }}
            />
          ))}
        </div>
      </section>

      {/* Company Bio Section */}
      <section className="container" style={{padding: '40px 0'}}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.3)',
          backdropFilter: 'blur(15px)',
          border: '1px solid rgba(255, 255, 255, 0.4)',
          borderRadius: '24px',
          padding: '40px',
          boxShadow: '0 15px 50px rgba(0, 0, 0, 0.15)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Background decorations */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '150px',
            height: '150px',
            background: 'rgba(102, 126, 234, 0.1)',
            borderRadius: '50%',
            backdropFilter: 'blur(10px)'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '-30px',
            left: '-30px',
            width: '100px',
            height: '100px',
            background: 'rgba(16, 185, 129, 0.1)',
            borderRadius: '50%',
            backdropFilter: 'blur(10px)'
          }}></div>
          
          <div style={{
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '30px', 
            alignItems: 'center',
            position: 'relative',
            zIndex: 2
          }}>
            <div>
              <h2 style={{
                fontSize: '2.2rem', 
                fontWeight: '700', 
                background: 'linear-gradient(135deg, var(--primary-blue) 0%, #6366f1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '25px'
              }}>
                About QNC Solutions Ltd
              </h2>
              <p style={{fontSize: '1rem', lineHeight: '1.6', color: '#374151', marginBottom: '20px', fontWeight: '300'}}>
                QNC Solutions Ltd is a professional healthcare services provider committed to delivering high-quality, reliable, and compassionate nursing and medical support services across Uganda and beyond. Founded on the principle of Quality Nursing Care, QNC bridges the gap between professional healthcare delivery and accessibility.
              </p>
              
              {isProfileExpanded && (
                <div style={{
                  background: 'rgba(255,255,255,0.2)',
                  borderRadius: '12px',
                  padding: '20px',
                  border: '1px solid rgba(255,255,255,0.3)',
                  marginBottom: '20px'
                }}>
                  <p style={{fontSize: '1rem', lineHeight: '1.6', color: '#374151', margin: 0, fontWeight: '300'}}>
                    Recognizing that healthcare needs extend beyond traditional clinical settings, QNC provides integrated services across homes, workplaces, construction sites, communities, and remote environments. Our service delivery model promotes continuity of care, strengthens health and safety compliance, and improves overall health outcomes through responsive, client-centered solutions delivered by qualified and licensed healthcare professionals.
                  </p>
                </div>
              )}
              
              <div style={{marginTop: '20px'}}>
                <button 
                  onClick={toggleProfile}
                  style={{
                    background: 'rgba(102, 126, 234, 0.1)',
                    border: '1px solid rgba(102, 126, 234, 0.3)',
                    borderRadius: '20px',
                    color: 'var(--primary-blue)',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    padding: '8px 16px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(102, 126, 234, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(102, 126, 234, 0.1)';
                  }}
                >
                  {isProfileExpanded ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
            <div style={{textAlign: 'center'}}>
              <div style={{
                position: 'relative',
                display: 'inline-block',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                border: '2px solid rgba(255,255,255,0.3)'
              }}>
                <img 
                  src="/images/postnatal-care1.jpeg" 
                  alt="Professional Healthcare Services" 
                  style={{
                    width: '100%', 
                    maxWidth: '400px', 
                    height: '300px', 
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  color: 'white',
                  padding: '20px',
                  textAlign: 'left'
                }}>
                  <p style={{fontSize: '0.9rem', margin: 0, fontStyle: 'italic', opacity: '0.95'}}>
                    Professional healthcare services delivered with compassion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Image Showcase */}
      <section style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        padding: '40px 0',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <div style={{textAlign: 'center', marginBottom: '30px'}}>
            <h2 style={{
              fontSize: '2.2rem', 
              fontWeight: '700', 
              background: 'linear-gradient(135deg, var(--primary-blue) 0%, #6366f1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '12px',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              Healthcare Excellence in Action
            </h2>
            <p style={{fontSize: '1.1rem', color: '#6b7280', maxWidth: '500px', margin: '0 auto'}}>
              See how we deliver compassionate, professional healthcare services directly to your home
            </p>
          </div>

          {/* Image Grid */}
          <div className="image-showcase" style={{
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '20px', 
            marginBottom: '25px',
            width: '100%',
            overflow: 'hidden'
          }}>
            
            {/* Main Feature Image */}
            <div style={{
              position: 'relative', 
              borderRadius: '20px', 
              overflow: 'hidden', 
              height: '250px', 
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 20px 45px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
            }}>
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
                background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                color: 'white',
                padding: '20px 15px 15px',
                textAlign: 'left'
              }}>
                <h4 style={{fontSize: '1.2rem', marginBottom: '6px', fontWeight: '600'}}>
                  Field Medical Support Services
                </h4>
                <p style={{fontSize: '0.85rem', opacity: '0.9', margin: 0}}>
                  Professional medical support in field environments
                </p>
              </div>
            </div>

            {/* Home Care Image */}
            <div style={{
              position: 'relative', 
              borderRadius: '20px', 
              overflow: 'hidden', 
              height: '250px', 
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 20px 45px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
            }}>
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
                background: 'linear-gradient(transparent, rgba(102, 126, 234, 0.9))',
                color: 'white',
                padding: '20px 15px 15px',
                textAlign: 'left'
              }}>
                <h4 style={{fontSize: '1.2rem', marginBottom: '6px', fontWeight: '600'}}>
                  Professional Nursing & Home-Based Care Services
                </h4>
                <p style={{fontSize: '0.85rem', opacity: '0.9', margin: 0}}>
                  Comprehensive nursing care in the comfort of your home
                </p>
              </div>
            </div>

            {/* Compassionate Care Image */}
            <div style={{
              position: 'relative', 
              borderRadius: '20px', 
              overflow: 'hidden', 
              height: '250px', 
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 20px 45px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
            }}>
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
                background: 'linear-gradient(transparent, rgba(16, 185, 129, 0.9))',
                color: 'white',
                padding: '20px 15px 15px',
                textAlign: 'left'
              }}>
                <h4 style={{fontSize: '1.2rem', marginBottom: '6px', fontWeight: '600'}}>
                  Mobile Health Services
                </h4>
                <p style={{fontSize: '0.85rem', opacity: '0.9', margin: 0}}>
                  Healthcare services delivered wherever you are
                </p>
              </div>
            </div>

            {/* Healthcare Excellence */}
            <div style={{
              position: 'relative', 
              borderRadius: '20px', 
              overflow: 'hidden', 
              height: '250px', 
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 20px 45px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
            }}>
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
                background: 'linear-gradient(transparent, rgba(245, 158, 11, 0.9))',
                color: 'white',
                padding: '20px 15px 15px',
                textAlign: 'left'
              }}>
                <h4 style={{fontSize: '1.2rem', marginBottom: '6px', fontWeight: '600'}}>
                  Healthcare Excellence
                </h4>
                <p style={{fontSize: '0.85rem', opacity: '0.9', margin: 0}}>
                  Setting the standard for quality care
                </p>
              </div>
            </div>

            {/* Community Care */}
            <div style={{
              position: 'relative', 
              borderRadius: '20px', 
              overflow: 'hidden', 
              height: '250px', 
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 20px 45px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
            }}>
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
                background: 'linear-gradient(transparent, rgba(139, 69, 19, 0.9))',
                color: 'white',
                padding: '20px 15px 15px',
                textAlign: 'left'
              }}>
                <h4 style={{fontSize: '1.2rem', marginBottom: '6px', fontWeight: '600'}}>
                  Community Care
                </h4>
                <p style={{fontSize: '0.85rem', opacity: '0.9', margin: 0}}>
                  Serving our community with dedication
                </p>
              </div>
            </div>

            {/* Modern Technology Image */}
            <div style={{
              position: 'relative', 
              borderRadius: '20px', 
              overflow: 'hidden', 
              height: '250px', 
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 20px 45px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
            }}>
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
                background: 'linear-gradient(transparent, rgba(99, 102, 241, 0.9))',
                color: 'white',
                padding: '20px 15px 15px',
                textAlign: 'left'
              }}>
                <h4 style={{fontSize: '1.2rem', marginBottom: '6px', fontWeight: '600'}}>
                  Modern Technology
                </h4>
                <p style={{fontSize: '0.85rem', opacity: '0.9', margin: 0}}>
                  Advanced tools for better outcomes
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background floating elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '80px',
          height: '80px',
          background: 'rgba(102, 126, 234, 0.1)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '15%',
          right: '8%',
          width: '60px',
          height: '60px',
          background: 'rgba(16, 185, 129, 0.1)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite reverse'
        }}></div>
      </section>

      {/* How It Works - Modern */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '50px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background decorations */}
        <div style={{
          position: 'absolute',
          top: '-100px',
          left: '-100px',
          width: '200px',
          height: '200px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          animation: 'float 12s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-80px',
          right: '-80px',
          width: '160px',
          height: '160px',
          background: 'rgba(16, 185, 129, 0.2)',
          borderRadius: '50%',
          animation: 'float 10s ease-in-out infinite reverse'
        }}></div>
        
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <div style={{textAlign: 'center', marginBottom: '40px'}}>
            <h2 style={{
              fontSize: '2.5rem', 
              fontWeight: '800', 
              color: 'white',
              marginBottom: '15px',
              textShadow: '0 4px 20px rgba(0,0,0,0.3)'
            }}>
              How It Works
            </h2>
            <p style={{
              fontSize: '1.2rem', 
              color: 'rgba(255,255,255,0.9)', 
              maxWidth: '600px', 
              margin: '0 auto',
              textShadow: '0 2px 10px rgba(0,0,0,0.2)'
            }}>
              Getting quality healthcare at home in 3 simple steps
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {/* Step 1 */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '20px',
              padding: '30px 25px',
              textAlign: 'center',
              color: 'white',
              position: 'relative',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #10b981, #059669)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '1.5rem',
                fontWeight: '700',
                boxShadow: '0 8px 25px rgba(16, 185, 129, 0.4)'
              }}>
                1
              </div>
              <h4 style={{
                fontSize: '1.3rem',
                fontWeight: '600',
                marginBottom: '12px',
                textShadow: '0 2px 8px rgba(0,0,0,0.2)'
              }}>
                Schedule Service
              </h4>
              <p style={{
                fontSize: '0.95rem',
                opacity: '0.9',
                lineHeight: '1.5',
                margin: 0
              }}>
                Choose your needed service and fill out our simple appointment form.
              </p>
            </div>

            {/* Step 2 */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '20px',
              padding: '30px 25px',
              textAlign: 'center',
              color: 'white',
              position: 'relative',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '1.5rem',
                fontWeight: '700',
                boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)'
              }}>
                2
              </div>
              <h4 style={{
                fontSize: '1.3rem',
                fontWeight: '600',
                marginBottom: '12px',
                textShadow: '0 2px 8px rgba(0,0,0,0.2)'
              }}>
                Get Matched
              </h4>
              <p style={{
                fontSize: '0.95rem',
                opacity: '0.9',
                lineHeight: '1.5',
                margin: 0
              }}>
                Our team assigns the most qualified healthcare provider for you.
              </p>
            </div>

            {/* Step 3 */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '20px',
              padding: '30px 25px',
              textAlign: 'center',
              color: 'white',
              position: 'relative',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '1.5rem',
                fontWeight: '700',
                boxShadow: '0 8px 25px rgba(245, 158, 11, 0.4)'
              }}>
                3
              </div>
              <h4 style={{
                fontSize: '1.3rem',
                fontWeight: '600',
                marginBottom: '12px',
                textShadow: '0 2px 8px rgba(0,0,0,0.2)'
              }}>
                Receive Care
              </h4>
              <p style={{
                fontSize: '0.95rem',
                opacity: '0.9',
                lineHeight: '1.5',
                margin: 0
              }}>
                Meet your assigned professional and receive quality care at home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section with Links and Map */}
      <section style={{backgroundColor: 'var(--primary-blue)', color: 'white', padding: '40px 0'}}>
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
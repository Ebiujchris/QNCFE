import { Link } from 'react-router-dom'
import { useState } from 'react'
import SEO from '../components/SEO'

// SVG Icon components
const IconHospital = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
    <line x1="12" y1="7" x2="12" y2="10"/><line x1="10.5" y1="8.5" x2="13.5" y2="8.5"/>
  </svg>
)
const IconHome = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
)
const IconAmbulance = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5h-7V8z"/>
    <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
    <line x1="7" y1="9" x2="7" y2="13"/><line x1="5" y1="11" x2="9" y2="11"/>
  </svg>
)
const IconNutrition = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
    <line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
  </svg>
)

// SVG icons for "Why Choose QNC"
const IconDoctor = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
    <line x1="12" y1="14" x2="12" y2="18"/><line x1="10" y1="16" x2="14" y2="16"/>
  </svg>
)
const IconHeart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
)
const IconShield = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
)
const IconTruck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8z"/>
    <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
  </svg>
)
const IconAlert = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
)

const services = [
  {
    num: '01',
    Icon: IconHospital,
    title: 'Field Medical Support',
    desc: 'Comprehensive and integrated field medical support tailored to construction, industrial, infrastructure, and remote operations. We ensure compliance with occupational health and safety standards while strengthening on-site medical preparedness, risk management, and emergency response systems.',
    items: [
      'Deployment of qualified field medical teams (nurses and allied professionals)',
      'On-site first aid and emergency medical response',
      'Occupational health screening, monitoring, and medical surveillance',
      'Incident documentation, reporting, and referral coordination',
      'OHS advisory and support services',
      'First Aid and safety training for staff',
      'Mental Health and Psychosocial Support (MHPSS), including psychological first aid, stress management, and referral pathways',
      'Referral coordination with healthcare facilities',
      'Community-based health support and MHPSS referrals',
    ]
  },
  {
    num: '02',
    Icon: IconHome,
    title: 'Nursing & Home-Based Care',
    desc: "Holistic, patient-centered nursing and home-based care services that extend quality healthcare beyond health facilities. We support recovery, long-term care, and improved quality of life through personalized care delivered in the comfort and dignity of patients' homes.",
    items: [
      'Elderly care support',
      'Post-surgical care and recovery monitoring',
      'Pre and post-delivery care',
      'Palliative care support',
      'Physiotherapy and rehabilitation services',
      'Mental Health and Psychosocial Support for patients and caregivers',
    ]
  },
  {
    num: '03',
    Icon: IconAmbulance,
    title: 'Mobile Health Services',
    desc: "Mobile Health Services expand access to essential healthcare by delivering services directly to communities, workplaces, and underserved or hard-to-reach areas. This model strengthens preventive care, early detection, and continuity of treatment.",
    items: [
      'Patient assessment, monitoring, and follow-up care',
      'Administration of prescribed medications',
      'Vital signs monitoring (blood pressure, temperature, pulse, respiration, oxygen saturation)',
      'Chronic disease management and treatment adherence support',
      'Health education, counseling, and psychosocial support',
    ]
  },
  {
    num: '04',
    Icon: IconNutrition,
    title: 'Nutrition Care',
    desc: 'Integrated nutrition support services as part of holistic patient care and recovery, contributing to improved health outcomes and wellbeing across life stages.',
    items: [
      'Nutrition assessment and individualized counseling',
      'Dietary guidance and meal planning',
      'Nutrition support for post-surgical and recovering patients',
      'Maternal and child nutrition counseling',
      'Monitoring and evaluation of nutritional status as part of ongoing care',
    ]
  }
]

function ServiceCard({ svc }) {
  const [open, setOpen] = useState(true)

  return (
    <div style={{
      background: 'white',
      borderRadius: '14px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(30,64,175,0.07)',
      border: '1px solid #e8edf5',
      marginBottom: '24px',
      transition: 'box-shadow 0.25s ease'
    }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, var(--primary-blue) 0%, #1e3a8a 100%)',
        padding: '22px 28px',
        display: 'flex',
        alignItems: 'center',
        gap: '18px',
        cursor: 'pointer'
      }} onClick={() => setOpen(o => !o)}>
        {/* Number */}
        <span style={{
          fontSize: '2rem',
          fontWeight: '900',
          color: 'rgba(255,255,255,0.2)',
          fontFamily: 'monospace',
          lineHeight: 1,
          minWidth: '52px',
          userSelect: 'none'
        }}>{svc.num}</span>

        {/* Icon */}
        <div style={{
          width: '52px', height: '52px',
          background: 'rgba(255,255,255,0.15)',
          borderRadius: '50%',
          border: '2px solid rgba(255,255,255,0.25)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'white',
          flexShrink: 0
        }}><svc.Icon /></div>

        {/* Title */}
        <h2 style={{
          flex: 1,
          fontSize: '1.15rem',
          fontWeight: '700',
          color: 'white',
          margin: 0,
          letterSpacing: '0.2px'
        }}>{svc.title}</h2>

        {/* Toggle arrow */}
        <div style={{
          color: 'rgba(255,255,255,0.7)',
          fontSize: '1.1rem',
          transition: 'transform 0.3s ease',
          transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          flexShrink: 0
        }}>▾</div>
      </div>

      {/* Body */}
      {open && (
        <div style={{padding: '28px'}}>
          {/* Description */}
          <p style={{
            fontSize: '0.93rem',
            color: '#4b5563',
            lineHeight: '1.8',
            marginBottom: '22px',
            paddingLeft: '14px',
            borderLeft: '3px solid var(--primary-maroon)'
          }}>{svc.desc}</p>

          {/* Services Include label */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(30,64,175,0.07)',
            border: '1px solid rgba(30,64,175,0.15)',
            borderRadius: '6px',
            padding: '5px 14px',
            marginBottom: '18px'
          }}>
            <div style={{width: '7px', height: '7px', borderRadius: '50%', background: 'var(--primary-blue)'}} />
            <span style={{
              fontSize: '0.72rem',
              fontWeight: '700',
              color: 'var(--primary-blue)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase'
            }}>Services Include</span>
          </div>

          {/* Checklist */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '8px 30px'
          }}>
            {svc.items.map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                padding: '8px 0',
                borderBottom: '1px solid #f8fafc'
              }}>
                <div style={{
                  width: '20px', height: '20px',
                  borderRadius: '50%',
                  background: 'rgba(30,64,175,0.08)',
                  border: '1px solid rgba(30,64,175,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, marginTop: '2px'
                }}>
                  <span style={{color: 'var(--primary-blue)', fontSize: '0.65rem', fontWeight: '800'}}>✓</span>
                </div>
                <span style={{fontSize: '0.875rem', color: '#374151', lineHeight: '1.6'}}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function Services() {
  return (
    <div style={{background: '#ffffff', minHeight: '100vh'}}>
      <SEO
        title="Our Services - QNC Solutions Healthcare"
        description="Comprehensive healthcare services: Field Medical Support, Nursing & Home-Based Care, Mobile Health Services, and Nutrition Care across Uganda."
        keywords="nursing services, home care, field medical support, mobile health, nutrition care, healthcare Uganda"
        canonical="https://www.qncsolutions.com/services"
      />

      {/* ── Hero ── */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '52vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: "url('/images/medical services pic.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(105deg, rgba(15,32,87,0.92) 0%, rgba(15,32,87,0.75) 55%, rgba(15,32,87,0.35) 100%)',
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
          }}>What We Offer</span>
          <h1 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
            fontWeight: '800',
            color: 'white',
            marginBottom: '18px',
            lineHeight: '1.15',
            letterSpacing: '-0.5px',
            maxWidth: '600px'
          }}>Our Services</h1>
          <p style={{
            fontSize: '1.05rem',
            color: 'rgba(255,255,255,0.8)',
            maxWidth: '500px',
            lineHeight: '1.75'
          }}>
            Compassionate care. Professional service.<br />
            Better health for individuals, communities, and workplaces.
          </p>
        </div>
      </section>

      {/* ── Services List ── */}
      <section style={{padding: '60px 0', background: '#f8fafd'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '44px'}}>
            <span style={{
              display: 'inline-block',
              background: 'rgba(30,64,175,0.08)',
              color: 'var(--primary-blue)',
              fontSize: '0.78rem',
              fontWeight: '700',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              padding: '6px 18px',
              borderRadius: '20px',
              marginBottom: '14px',
              border: '1px solid rgba(30,64,175,0.15)'
            }}>Core Services</span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: '800',
              color: 'var(--primary-blue)',
              letterSpacing: '-0.3px',
              margin: 0
            }}>Professional Healthcare Solutions</h2>
          </div>

          {services.map((svc, i) => (
            <ServiceCard key={svc.num} svc={svc} index={i} />
          ))}
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
            }}>Our Strengths</span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: '800',
              color: 'var(--primary-blue)',
              letterSpacing: '-0.3px'
            }}>Why Choose QNC Solutions?</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px'
          }}>
            {[
              { Icon: IconDoctor, title: 'Qualified Professionals', desc: 'Licensed and experienced healthcare professionals committed to excellence.' },
              { Icon: IconHeart, title: 'Patient-Centered Care', desc: 'Every client treated with dignity, respect, compassion, and integrity.' },
              { Icon: IconShield, title: 'Quality & Safety', desc: 'Best practices ensuring high standards and patient safety always.' },
              { Icon: IconTruck, title: 'Flexible Delivery', desc: 'At home, at work, in the community — wherever care is needed.' },
              { Icon: IconAlert, title: 'Emergency Response', desc: 'Prompt and professional response when it matters most.' },
            ].map((item, i) => (
              <div key={i} style={{
                background: '#f8fafd',
                borderRadius: '14px',
                padding: '32px 20px',
                textAlign: 'center',
                border: '1px solid #e8edf5',
                borderTop: '4px solid var(--primary-blue)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--primary-blue)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(30,64,175,0.18)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.querySelector('.wi-title').style.color = 'white';
                e.currentTarget.querySelector('.wi-desc').style.color = 'rgba(255,255,255,0.78)';
                e.currentTarget.querySelector('.wi-icon').style.background = 'rgba(255,255,255,0.18)';
                e.currentTarget.querySelector('.wi-icon').style.color = 'white';
                e.currentTarget.querySelector('.wi-icon').style.borderColor = 'rgba(255,255,255,0.3)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#f8fafd';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.querySelector('.wi-title').style.color = 'var(--primary-maroon)';
                e.currentTarget.querySelector('.wi-desc').style.color = '#6b7280';
                e.currentTarget.querySelector('.wi-icon').style.background = 'rgba(30,64,175,0.1)';
                e.currentTarget.querySelector('.wi-icon').style.color = 'var(--primary-blue)';
                e.currentTarget.querySelector('.wi-icon').style.borderColor = 'rgba(30,64,175,0.18)';
              }}>
                <div className="wi-icon" style={{
                  width: '52px', height: '52px',
                  borderRadius: '50%',
                  background: 'rgba(30,64,175,0.1)',
                  border: '1.5px solid rgba(30,64,175,0.18)',
                  margin: '0 auto 16px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--primary-blue)',
                  transition: 'background 0.25s ease, color 0.25s ease, border-color 0.25s ease'
                }}><item.Icon /></div>
                <h3 className="wi-title" style={{
                  fontSize: '0.95rem', fontWeight: '700',
                  color: 'var(--primary-maroon)',
                  marginBottom: '10px',
                  transition: 'color 0.25s ease'
                }}>{item.title}</h3>
                <p className="wi-desc" style={{
                  fontSize: '0.85rem', color: '#6b7280',
                  lineHeight: '1.6', margin: 0,
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
        <div style={{position:'absolute',right:'-80px',top:'-80px',width:'320px',height:'320px',borderRadius:'50%',background:'rgba(255,255,255,0.05)'}} />
        <div style={{position:'absolute',right:'60px',bottom:'-60px',width:'200px',height:'200px',borderRadius:'50%',background:'rgba(255,255,255,0.04)'}} />
        <div className="container" style={{position: 'relative', zIndex: 1}}>
          <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'30px'}}>
            <div style={{flex:'1', minWidth:'280px'}}>
              <p style={{color:'rgba(255,255,255,0.7)', fontSize:'0.82rem', fontWeight:'700', letterSpacing:'1.5px', textTransform:'uppercase', marginBottom:'10px'}}>
                Get Started Today
              </p>
              <h2 style={{fontSize:'clamp(1.4rem, 3vw, 2rem)', fontWeight:'800', color:'white', lineHeight:'1.3', margin:0}}>
                Need Professional Healthcare Support?
              </h2>
            </div>
            <div style={{display:'flex', gap:'14px', flexWrap:'wrap'}}>
              <Link to="/contact" style={{
                background: 'white',
                color: 'var(--primary-blue)',
                textDecoration: 'none',
                padding: '14px 32px',
                borderRadius: '6px',
                fontSize: '0.95rem',
                fontWeight: '800',
                boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                whiteSpace: 'nowrap'
              }}>Contact Us</Link>
              <Link to="/book" style={{
                background: 'var(--primary-maroon)',
                color: 'white',
                textDecoration: 'none',
                padding: '14px 32px',
                borderRadius: '6px',
                fontSize: '0.95rem',
                fontWeight: '800',
                whiteSpace: 'nowrap'
              }}>Request a Service</Link>
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

export default Services

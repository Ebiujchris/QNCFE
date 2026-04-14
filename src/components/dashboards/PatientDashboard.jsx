import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useToast } from '../../contexts/ToastContext'
import LoadingSpinner from '../LoadingSpinner'
import axios from 'axios'

function PatientDashboard({ user }) {
  const [bookings, setBookings] = useState([])
  const [notifications, setNotifications] = useState([])
  const [loading, setLoading] = useState(true)
  const [paymentLoading, setPaymentLoading] = useState({})
  const { showSuccess, showError } = useToast()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token')
      const headers = { Authorization: `Bearer ${token}` }

      const [bookingsRes, notificationsRes] = await Promise.all([
        axios.get('/api/bookings/my-bookings', { headers }),
        axios.get('/api/notifications', { headers })
      ])

      setBookings(bookingsRes.data)
      setNotifications(notificationsRes.data)
    } catch (error) {
      showError('Failed to load dashboard data')
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const markAsPaid = async (bookingId) => {
    setPaymentLoading(prev => ({ ...prev, [bookingId]: true }))
    try {
      const token = localStorage.getItem('token')
      await axios.post(`/api/payments/${bookingId}/mark-paid`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      })
      
      showSuccess('Payment marked successfully! Your provider has been notified.')
      fetchData() // Refresh data
    } catch (error) {
      showError('Failed to process payment. Please try again.')
      console.error('Payment error:', error)
    } finally {
      setPaymentLoading(prev => ({ ...prev, [bookingId]: false }))
    }
  }

  const getStatusBadge = (status) => {
    const statusClasses = {
      'pending': 'status-badge status-pending',
      'assigned': 'status-badge status-assigned',
      'paid': 'status-badge status-paid',
      'completed': 'status-badge status-completed'
    }
    return statusClasses[status] || 'status-badge'
  }

  const getServiceIcon = (serviceType) => {
    const icons = {
      'nursing': '🏥',
      'doctor': '👨‍⚕️',
      'caregiver': '🤝'
    }
    return icons[serviceType] || '🏥'
  }

  if (loading) {
    return <LoadingSpinner size="large" text="Loading your bookings..." />
  }

  return (
    <div>
      {/* Dashboard Header */}
      <div className="dashboard-header">
        <div style={{textAlign: 'center'}}>
          <h1 style={{fontSize: '2.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '8px'}}>
            Welcome back, {user.name}! 👋
          </h1>
          <p style={{color: '#6b7280', fontSize: '1.125rem'}}>
            Manage your healthcare bookings and track your services
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-number">{bookings.length}</span>
          <span className="stat-label">Total Bookings</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{bookings.filter(b => b.status === 'pending').length}</span>
          <span className="stat-label">Pending</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{bookings.filter(b => b.status === 'completed').length}</span>
          <span className="stat-label">Completed</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{notifications.filter(n => !n.read).length}</span>
          <span className="stat-label">New Notifications</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card card-elevated" style={{marginBottom: '32px'}}>
        <h3 style={{marginBottom: '20px', color: '#1f2937'}}>Quick Actions</h3>
        <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
          <Link to="/book" className="btn btn-success btn-large">
            📅 Book New Service
          </Link>
          <button className="btn btn-outline" onClick={fetchData}>
            🔄 Refresh Data
          </button>
        </div>
      </div>

      {/* Recent Notifications */}
      {notifications.length > 0 && (
        <div className="card" style={{marginBottom: '32px'}}>
          <h3 style={{marginBottom: '20px', color: '#1f2937'}}>Recent Notifications</h3>
          {notifications.slice(0, 3).map(notification => (
            <div key={notification.id} className="notification info" style={{marginBottom: '12px'}}>
              {notification.message}
              <small style={{display: 'block', marginTop: '4px', opacity: 0.7}}>
                {new Date(notification.created_at).toLocaleDateString()}
              </small>
            </div>
          ))}
        </div>
      )}

      {/* My Bookings */}
      <div className="card">
        <h3 style={{marginBottom: '24px', color: '#1f2937', fontSize: '1.5rem'}}>My Healthcare Bookings</h3>
        {bookings.length === 0 ? (
          <div style={{textAlign: 'center', padding: '60px 20px'}}>
            <span style={{fontSize: '4rem', display: 'block', marginBottom: '16px'}}>🏥</span>
            <h4 style={{color: '#1f2937', marginBottom: '8px'}}>No bookings yet</h4>
            <p style={{color: '#6b7280', marginBottom: '24px'}}>Ready to book your first healthcare service?</p>
            <Link to="/book" className="btn btn-success">Book Your First Service</Link>
          </div>
        ) : (
          <div>
            {bookings.map(booking => (
              <div key={booking.id} className="card" style={{marginBottom: '20px', border: '1px solid #e5e7eb'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px'}}>
                  <div style={{flex: '1', minWidth: '300px'}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px'}}>
                      <span style={{fontSize: '1.5rem'}}>
                        {getServiceIcon(booking.service_type)}
                      </span>
                      <h4 style={{color: '#1f2937', fontSize: '1.25rem', fontWeight: '600'}}>
                        {booking.service_type.charAt(0).toUpperCase() + booking.service_type.slice(1)} Service
                      </h4>
                    </div>
                    
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '16px'}}>
                      <div>
                        <strong style={{color: '#374151'}}>Date:</strong>
                        <p style={{color: '#6b7280', margin: '4px 0'}}>{new Date(booking.preferred_date).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <strong style={{color: '#374151'}}>Location:</strong>
                        <p style={{color: '#6b7280', margin: '4px 0'}}>{booking.location}</p>
                      </div>
                    </div>
                    
                    <div style={{marginBottom: '16px'}}>
                      <strong style={{color: '#374151'}}>Description:</strong>
                      <p style={{color: '#6b7280', margin: '4px 0', lineHeight: '1.5'}}>{booking.description}</p>
                    </div>
                    
                    {booking.assignedProvider && (
                      <div style={{
                        marginTop: '16px', 
                        padding: '16px', 
                        backgroundColor: '#f0f9ff', 
                        borderRadius: '8px',
                        border: '1px solid #e0f2fe'
                      }}>
                        <h5 style={{color: '#0369a1', marginBottom: '8px', fontSize: '1rem'}}>
                          👩‍⚕️ Assigned Healthcare Provider
                        </h5>
                        <p><strong>Name:</strong> {booking.assignedProvider.name}</p>
                        <p><strong>Specialization:</strong> {booking.assignedProvider.providerType}</p>
                        <p><strong>Contact:</strong> {booking.assignedProvider.email}</p>
                      </div>
                    )}
                  </div>
                  
                  <div style={{textAlign: 'right', minWidth: '150px'}}>
                    <span className={getStatusBadge(booking.status)}>
                      {booking.status}
                    </span>
                    
                    {booking.status === 'assigned' && (
                      <div style={{marginTop: '16px'}}>
                        <button 
                          onClick={() => markAsPaid(booking.id)}
                          className="btn btn-success"
                          style={{fontSize: '0.9rem'}}
                          disabled={paymentLoading[booking.id]}
                        >
                          {paymentLoading[booking.id] ? '⏳ Processing...' : '💳 Mark as Paid'}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default PatientDashboard
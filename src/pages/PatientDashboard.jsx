import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function PatientDashboard({ user }) {
  const [bookings, setBookings] = useState([])
  const [notifications, setNotifications] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user) {
      fetchBookings()
      fetchNotifications()
    }
  }, [user])

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.get('/api/bookings/my-bookings', {
        headers: { Authorization: `Bearer ${token}` }
      })
      setBookings(response.data)
    } catch (error) {
      console.error('Error fetching bookings:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchNotifications = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.get('/api/notifications', {
        headers: { Authorization: `Bearer ${token}` }
      })
      setNotifications(response.data)
    } catch (error) {
      console.error('Error fetching notifications:', error)
    }
  }

  const markAsPaid = async (bookingId) => {
    try {
      const token = localStorage.getItem('token')
      await axios.post(`/api/payments/${bookingId}/mark-paid`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      })
      fetchBookings() // Refresh bookings
    } catch (error) {
      console.error('Error marking as paid:', error)
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

  if (!user || user.role !== 'patient') {
    return (
      <div className="container">
        <div className="card">
          <h2>Access Denied</h2>
          <p>This page is only for patients.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
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

      {/* Quick Actions */}
      <div className="card card-elevated" style={{marginBottom: '32px'}}>
        <h3 style={{marginBottom: '20px', color: '#1f2937'}}>Quick Actions</h3>
        <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
          <Link to="/book" className="btn btn-success btn-large">
            📅 Book New Service
          </Link>
          <button className="btn btn-outline" onClick={fetchNotifications}>
            🔔 Refresh Notifications
          </button>
        </div>
      </div>

      {/* Notifications */}
      {notifications.length > 0 && (
        <div className="card" style={{marginBottom: '32px'}}>
          <h3 style={{marginBottom: '20px', color: '#1f2937'}}>Recent Notifications</h3>
          {notifications.slice(0, 3).map(notification => (
            <div key={notification.id} className="notification info" style={{marginBottom: '12px'}}>
              {notification.message}
            </div>
          ))}
        </div>
      )}

      {/* My Bookings */}
      <div className="card">
        <h3 style={{marginBottom: '24px', color: '#1f2937', fontSize: '1.5rem'}}>My Healthcare Bookings</h3>
        {loading ? (
          <div style={{textAlign: 'center', padding: '40px'}}>
            <p style={{color: '#6b7280'}}>Loading your bookings...</p>
          </div>
        ) : bookings.length === 0 ? (
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
                        {booking.service_type === 'nursing' ? '🏥' : 
                         booking.service_type === 'doctor' ? '👨‍⚕️' : '🤝'}
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
                        >
                          💳 Mark as Paid
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
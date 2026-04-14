import { useState, useEffect } from 'react'
import { useToast } from '../../contexts/ToastContext'
import LoadingSpinner from '../LoadingSpinner'
import axios from 'axios'

function ProviderDashboard({ user }) {
  const [assignments, setAssignments] = useState([])
  const [notifications, setNotifications] = useState([])
  const [loading, setLoading] = useState(true)
  const [completionLoading, setCompletionLoading] = useState({})
  const { showSuccess, showError } = useToast()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token')
      const headers = { Authorization: `Bearer ${token}` }

      const [assignmentsRes, notificationsRes] = await Promise.all([
        axios.get('/api/bookings/my-assignments', { headers }),
        axios.get('/api/notifications', { headers })
      ])

      setAssignments(assignmentsRes.data)
      setNotifications(notificationsRes.data)
    } catch (error) {
      showError('Failed to load dashboard data')
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const completeService = async (bookingId) => {
    setCompletionLoading(prev => ({ ...prev, [bookingId]: true }))
    try {
      const token = localStorage.getItem('token')
      await axios.post(`/api/bookings/${bookingId}/complete`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      })
      
      showSuccess('Service marked as completed! Patient has been notified.')
      fetchData() // Refresh data
    } catch (error) {
      showError('Failed to complete service. Please try again.')
      console.error('Completion error:', error)
    } finally {
      setCompletionLoading(prev => ({ ...prev, [bookingId]: false }))
    }
  }

  const getStatusBadge = (status) => {
    const statusClasses = {
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
    return <LoadingSpinner size="large" text="Loading your assignments..." />
  }

  const completedServices = assignments.filter(a => a.status === 'completed').length
  const pendingServices = assignments.filter(a => a.status === 'paid').length
  const totalEarnings = completedServices * 100 // $100 per service

  return (
    <div>
      {/* Dashboard Header */}
      <div className="dashboard-header">
        <div style={{textAlign: 'center'}}>
          <h1 style={{fontSize: '2.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '8px'}}>
            Welcome back, {user.name}! 👩‍⚕️
          </h1>
          <p style={{color: '#6b7280', fontSize: '1.125rem'}}>
            Manage your patient assignments and track your services
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-number">{assignments.length}</span>
          <span className="stat-label">Total Assignments</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{pendingServices}</span>
          <span className="stat-label">Pending Services</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{completedServices}</span>
          <span className="stat-label">Completed Services</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">${totalEarnings}</span>
          <span className="stat-label">Total Earnings</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card card-elevated" style={{marginBottom: '32px'}}>
        <h3 style={{marginBottom: '20px', color: '#1f2937'}}>Quick Actions</h3>
        <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
          <button className="btn btn-primary" onClick={fetchData}>
            🔄 Refresh Assignments
          </button>
          <button className="btn btn-outline">
            📊 View Earnings Report
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

      {/* My Assignments */}
      <div className="card">
        <h3 style={{marginBottom: '24px', color: '#1f2937', fontSize: '1.5rem'}}>My Patient Assignments</h3>
        {assignments.length === 0 ? (
          <div style={{textAlign: 'center', padding: '60px 20px'}}>
            <span style={{fontSize: '4rem', display: 'block', marginBottom: '16px'}}>👩‍⚕️</span>
            <h4 style={{color: '#1f2937', marginBottom: '8px'}}>No assignments yet</h4>
            <p style={{color: '#6b7280', marginBottom: '24px'}}>You'll be notified when new assignments are available.</p>
          </div>
        ) : (
          <div>
            {assignments.map(assignment => (
              <div key={assignment.id} className="card" style={{marginBottom: '20px', border: '1px solid #e5e7eb'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px'}}>
                  <div style={{flex: '1', minWidth: '300px'}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px'}}>
                      <span style={{fontSize: '1.5rem'}}>
                        {getServiceIcon(assignment.service_type)}
                      </span>
                      <h4 style={{color: '#1f2937', fontSize: '1.25rem', fontWeight: '600'}}>
                        {assignment.service_type.charAt(0).toUpperCase() + assignment.service_type.slice(1)} Service
                      </h4>
                    </div>
                    
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '16px'}}>
                      <div>
                        <strong style={{color: '#374151'}}>Patient:</strong>
                        <p style={{color: '#6b7280', margin: '4px 0'}}>{assignment.patient_name}</p>
                      </div>
                      <div>
                        <strong style={{color: '#374151'}}>Contact:</strong>
                        <p style={{color: '#6b7280', margin: '4px 0'}}>{assignment.patient_email}</p>
                      </div>
                      <div>
                        <strong style={{color: '#374151'}}>Date:</strong>
                        <p style={{color: '#6b7280', margin: '4px 0'}}>{new Date(assignment.preferred_date).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <strong style={{color: '#374151'}}>Urgency:</strong>
                        <p style={{color: '#6b7280', margin: '4px 0'}}>{assignment.urgency}</p>
                      </div>
                    </div>
                    
                    <div style={{marginBottom: '16px'}}>
                      <strong style={{color: '#374151'}}>Location:</strong>
                      <p style={{color: '#6b7280', margin: '4px 0'}}>{assignment.location}</p>
                    </div>
                    
                    <div style={{marginBottom: '16px'}}>
                      <strong style={{color: '#374151'}}>Service Description:</strong>
                      <p style={{color: '#6b7280', margin: '4px 0', lineHeight: '1.5'}}>{assignment.description}</p>
                    </div>
                  </div>
                  
                  <div style={{textAlign: 'right', minWidth: '150px'}}>
                    <span className={getStatusBadge(assignment.status)}>
                      {assignment.status}
                    </span>
                    
                    {assignment.status === 'paid' && (
                      <div style={{marginTop: '16px'}}>
                        <button 
                          onClick={() => completeService(assignment.id)}
                          className="btn btn-success"
                          style={{fontSize: '0.9rem'}}
                          disabled={completionLoading[assignment.id]}
                        >
                          {completionLoading[assignment.id] ? '⏳ Processing...' : '✅ Mark as Completed'}
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

export default ProviderDashboard
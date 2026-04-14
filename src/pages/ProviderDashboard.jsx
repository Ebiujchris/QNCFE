import { useState, useEffect } from 'react'
import axios from 'axios'

function ProviderDashboard({ user }) {
  const [assignments, setAssignments] = useState([])
  const [notifications, setNotifications] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user) {
      fetchAssignments()
      fetchNotifications()
    }
  }, [user])

  const fetchAssignments = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.get('/api/bookings/my-assignments', {
        headers: { Authorization: `Bearer ${token}` }
      })
      setAssignments(response.data)
    } catch (error) {
      console.error('Error fetching assignments:', error)
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

  const completeService = async (bookingId) => {
    try {
      const token = localStorage.getItem('token')
      await axios.post(`/api/bookings/${bookingId}/complete`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      })
      fetchAssignments() // Refresh assignments
    } catch (error) {
      console.error('Error completing service:', error)
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'assigned': return '#17a2b8'
      case 'paid': return '#28a745'
      case 'completed': return '#6c757d'
      default: return '#007bff'
    }
  }

  if (!user || user.role !== 'provider') {
    return (
      <div className="container">
        <div className="card">
          <h2>Access Denied</h2>
          <p>This page is only for healthcare providers.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <h1>Provider Dashboard</h1>
      <p>Welcome back, {user.name}!</p>

      {/* Notifications */}
      {notifications.length > 0 && (
        <div className="card">
          <h3>Recent Notifications</h3>
          {notifications.slice(0, 3).map(notification => (
            <div key={notification.id} className="notification info">
              {notification.message}
            </div>
          ))}
        </div>
      )}

      {/* My Assignments */}
      <div className="card">
        <h3>My Assignments</h3>
        {loading ? (
          <p>Loading assignments...</p>
        ) : assignments.length === 0 ? (
          <p>No assignments yet. You'll be notified when new assignments are available.</p>
        ) : (
          <div>
            {assignments.map(assignment => (
              <div key={assignment.id} className="card" style={{marginBottom: '15px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                  <div>
                    <h4>{assignment.service_type.charAt(0).toUpperCase() + assignment.service_type.slice(1)} Service</h4>
                    <p><strong>Patient:</strong> {assignment.patient_name}</p>
                    <p><strong>Email:</strong> {assignment.patient_email}</p>
                    <p><strong>Date:</strong> {new Date(assignment.preferred_date).toLocaleDateString()}</p>
                    <p><strong>Location:</strong> {assignment.location}</p>
                    <p><strong>Description:</strong> {assignment.description}</p>
                    <p><strong>Urgency:</strong> {assignment.urgency}</p>
                  </div>
                  
                  <div style={{textAlign: 'right'}}>
                    <span 
                      style={{
                        padding: '5px 10px',
                        borderRadius: '15px',
                        color: 'white',
                        backgroundColor: getStatusColor(assignment.status),
                        fontSize: '0.9rem'
                      }}
                    >
                      {assignment.status.toUpperCase()}
                    </span>
                    
                    {assignment.status === 'paid' && (
                      <div style={{marginTop: '10px'}}>
                        <button 
                          onClick={() => completeService(assignment.id)}
                          className="btn btn-success"
                          style={{fontSize: '0.9rem'}}
                        >
                          Mark as Completed
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

      {/* Earnings Summary */}
      <div className="card">
        <h3>Earnings Summary</h3>
        <p>Completed Services: {assignments.filter(a => a.status === 'completed').length}</p>
        <p>Pending Services: {assignments.filter(a => a.status === 'paid').length}</p>
        <p>Total Earnings: ${assignments.filter(a => a.status === 'completed').length * 100}</p>
      </div>
    </div>
  )
}

export default ProviderDashboard
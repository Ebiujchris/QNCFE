import { useState, useEffect } from 'react'
import axios from 'axios'

function AdminDashboard({ user }) {
  const [pendingBookings, setPendingBookings] = useState([])
  const [allBookings, setAllBookings] = useState([])
  const [providers, setProviders] = useState([])
  const [stats, setStats] = useState({})
  const [loading, setLoading] = useState(true)
  const [selectedBooking, setSelectedBooking] = useState(null)
  const [selectedProvider, setSelectedProvider] = useState('')

  useEffect(() => {
    if (user) {
      fetchData()
    }
  }, [user])

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token')
      const headers = { Authorization: `Bearer ${token}` }

      const [pendingRes, allRes, providersRes, statsRes] = await Promise.all([
        axios.get('/api/admin/bookings/pending', { headers }),
        axios.get('/api/admin/bookings', { headers }),
        axios.get('/api/admin/providers', { headers }),
        axios.get('/api/admin/stats', { headers })
      ])

      setPendingBookings(pendingRes.data)
      setAllBookings(allRes.data)
      setProviders(providersRes.data)
      setStats(statsRes.data)
    } catch (error) {
      console.error('Error fetching admin data:', error)
    } finally {
      setLoading(false)
    }
  }

  const assignProvider = async () => {
    if (!selectedBooking || !selectedProvider) return

    try {
      const token = localStorage.getItem('token')
      await axios.post(`/api/admin/bookings/${selectedBooking.id}/assign`, 
        { providerId: selectedProvider },
        { headers: { Authorization: `Bearer ${token}` } }
      )

      setSelectedBooking(null)
      setSelectedProvider('')
      fetchData() // Refresh data
    } catch (error) {
      console.error('Error assigning provider:', error)
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return '#ffc107'
      case 'assigned': return '#17a2b8'
      case 'paid': return '#28a745'
      case 'completed': return '#6c757d'
      default: return '#007bff'
    }
  }

  if (!user || user.role !== 'admin') {
    return (
      <div className="container">
        <div className="card">
          <h2>Access Denied</h2>
          <p>This page is only for administrators.</p>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="container">
        <div className="card">
          <p>Loading admin dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <h1>Admin Dashboard</h1>
      <p>Welcome back, {user.name}!</p>

      {/* System Statistics */}
      <div className="services">
        <div className="card" style={{textAlign: 'center'}}>
          <h3>{stats.totalBookings || 0}</h3>
          <p>Total Bookings</p>
        </div>
        <div className="card" style={{textAlign: 'center'}}>
          <h3>{stats.usersByRole?.patient || 0}</h3>
          <p>Patients</p>
        </div>
        <div className="card" style={{textAlign: 'center'}}>
          <h3>{stats.usersByRole?.provider || 0}</h3>
          <p>Providers</p>
        </div>
        <div className="card" style={{textAlign: 'center'}}>
          <h3>${stats.totalRevenue || 0}</h3>
          <p>Total Revenue</p>
        </div>
      </div>

      {/* Pending Bookings */}
      <div className="card">
        <h3>Pending Bookings ({pendingBookings.length})</h3>
        {pendingBookings.length === 0 ? (
          <p>No pending bookings.</p>
        ) : (
          <div>
            {pendingBookings.map(booking => (
              <div key={booking.id} className="card" style={{marginBottom: '15px', backgroundColor: '#fff3cd'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                  <div>
                    <h4>{booking.service_type.charAt(0).toUpperCase() + booking.service_type.slice(1)} Service</h4>
                    <p><strong>Patient:</strong> {booking.patient_name} ({booking.patient_email})</p>
                    <p><strong>Date:</strong> {new Date(booking.preferred_date).toLocaleDateString()}</p>
                    <p><strong>Location:</strong> {booking.location}</p>
                    <p><strong>Description:</strong> {booking.description}</p>
                    <p><strong>Urgency:</strong> {booking.urgency}</p>
                  </div>
                  
                  <div>
                    <button 
                      onClick={() => setSelectedBooking(booking)}
                      className="btn btn-primary"
                    >
                      Assign Provider
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* All Bookings */}
      <div className="card">
        <h3>All Bookings</h3>
        <div style={{maxHeight: '400px', overflowY: 'auto'}}>
          {allBookings.map(booking => (
            <div key={booking.id} className="card" style={{marginBottom: '10px'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div>
                  <strong>{booking.service_type}</strong> - {booking.patient_name}
                  {booking.provider_name && (
                    <span> → {booking.provider_name} ({booking.provider_type})</span>
                  )}
                </div>
                <span 
                  style={{
                    padding: '3px 8px',
                    borderRadius: '10px',
                    color: 'white',
                    backgroundColor: getStatusColor(booking.status),
                    fontSize: '0.8rem'
                  }}
                >
                  {booking.status.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Assignment Modal */}
      {selectedBooking && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div className="card" style={{width: '500px', maxWidth: '90vw'}}>
            <h3>Assign Provider</h3>
            <p><strong>Service:</strong> {selectedBooking.service_type}</p>
            <p><strong>Patient:</strong> {selectedBooking.patient_name}</p>
            
            <div className="form-group">
              <label>Select Provider</label>
              <select
                value={selectedProvider}
                onChange={(e) => setSelectedProvider(e.target.value)}
                className="form-control"
              >
                <option value="">Choose a provider...</option>
                {providers
                  .filter(provider => {
                    const serviceToProviderMap = {
                      'nursing': 'nurse',
                      'doctor': 'doctor',
                      'caregiver': 'caregiver'
                    }
                    return provider.provider_type === serviceToProviderMap[selectedBooking.service_type]
                  })
                  .map(provider => (
                    <option key={provider.id} value={provider.id}>
                      {provider.name} ({provider.provider_type})
                    </option>
                  ))}
              </select>
            </div>

            <div style={{display: 'flex', gap: '10px', marginTop: '20px'}}>
              <button 
                onClick={assignProvider}
                className="btn btn-success"
                disabled={!selectedProvider}
              >
                Assign Provider
              </button>
              <button 
                onClick={() => {
                  setSelectedBooking(null)
                  setSelectedProvider('')
                }}
                className="btn btn-primary"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminDashboard
import { useState, useEffect } from 'react'
import { useToast } from '../../contexts/ToastContext'
import LoadingSpinner from '../LoadingSpinner'
import api from '../../config/api'

function AdminDashboard({ user }) {
  const [pendingBookings, setPendingBookings] = useState([])
  const [allBookings, setAllBookings] = useState([])
  const [providers, setProviders] = useState([])
  const [earnings, setEarnings] = useState([])
  const [stats, setStats] = useState({})
  const [loading, setLoading] = useState(true)
  const [selectedBooking, setSelectedBooking] = useState(null)
  const [selectedProvider, setSelectedProvider] = useState('')
  const [servicePrice, setServicePrice] = useState('')
  const [assignmentLoading, setAssignmentLoading] = useState(false)
  const { showSuccess, showError } = useToast()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [pendingRes, allRes, providersRes, statsRes, earningsRes] = await Promise.all([
        api.get('/admin/bookings/pending'),
        api.get('/admin/bookings'),
        api.get('/admin/providers'),
        api.get('/admin/stats'),
        api.get('/admin/earnings')
      ])

      setPendingBookings(pendingRes.data)
      setAllBookings(allRes.data)
      setProviders(providersRes.data)
      setStats(statsRes.data)
      setEarnings(earningsRes.data)
    } catch (error) {
      showError('Failed to load admin data')
      console.error('Error fetching admin data:', error)
    } finally {
      setLoading(false)
    }
  }

  const assignProvider = async () => {
    if (!selectedBooking || !selectedProvider) {
      showError('Please select a provider')
      return
    }

    if (!servicePrice || isNaN(servicePrice) || parseFloat(servicePrice) <= 0) {
      showError('Please enter a valid price in UGX')
      return
    }

    setAssignmentLoading(true)
    try {
      const token = localStorage.getItem('token')
      await api.post(`/admin/bookings/${selectedBooking.id}/assign`, 
        { 
          providerId: selectedProvider,
          price: parseFloat(servicePrice)
        }
      )

      showSuccess(`Provider assigned successfully with price UGX ${parseFloat(servicePrice).toLocaleString()}! Patient and provider have been notified.`)
      setSelectedBooking(null)
      setSelectedProvider('')
      setServicePrice('')
      fetchData() // Refresh data
    } catch (error) {
      showError('Failed to assign provider. Please try again.')
      console.error('Assignment error:', error)
    } finally {
      setAssignmentLoading(false)
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

  const getFilteredProviders = () => {
    if (!selectedBooking) return providers

    const serviceToProviderMap = {
      'nursing': 'nurse',
      'doctor': 'doctor',
      'caregiver': 'caregiver'
    }

    const requiredType = serviceToProviderMap[selectedBooking.service_type]
    return providers.filter(provider => provider.provider_type === requiredType)
  }

  if (loading) {
    return <LoadingSpinner size="large" text="Loading admin dashboard..." />
  }

  return (
    <div>
      {/* Dashboard Header */}
      <div className="dashboard-header">
        <div style={{textAlign: 'center'}}>
          <h1 style={{fontSize: '2.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '8px'}}>
            🛡️ Admin Dashboard
          </h1>
          <p style={{color: '#6b7280', fontSize: '1.125rem'}}>
            Welcome back, {user.name}! Manage QNC Solutions system operations
          </p>
        </div>
      </div>

      {/* System Statistics */}
      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-number">{stats.totalBookings || 0}</span>
          <span className="stat-label">Total Bookings</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{stats.usersByRole?.patient || 0}</span>
          <span className="stat-label">Patients</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{stats.usersByRole?.provider || 0}</span>
          <span className="stat-label">Providers</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">UGX {(stats.totalRevenue || 0).toLocaleString()}</span>
          <span className="stat-label">Total Revenue</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">UGX {(stats.monthlyRevenue || 0).toLocaleString()}</span>
          <span className="stat-label">This Month</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card card-elevated" style={{marginBottom: '32px'}}>
        <h3 style={{marginBottom: '20px', color: '#1f2937'}}>Admin Actions</h3>
        <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
          <button className="btn btn-primary" onClick={fetchData}>
            🔄 Refresh Data
          </button>
          <button className="btn btn-outline">
            📊 Generate Report
          </button>
          <button className="btn btn-outline">
            👥 Manage Users
          </button>
        </div>
      </div>

      {/* Earnings Overview */}
      <div className="card" style={{marginBottom: '32px'}}>
        <h3 style={{color: '#1f2937', marginBottom: '20px'}}>
          💰 Earnings Overview ({earnings.length} transactions)
        </h3>
        {earnings.length === 0 ? (
          <div style={{textAlign: 'center', padding: '40px 20px'}}>
            <span style={{fontSize: '3rem', display: 'block', marginBottom: '16px'}}>💸</span>
            <h4 style={{color: '#1f2937', marginBottom: '8px'}}>No earnings yet</h4>
            <p style={{color: '#6b7280'}}>Earnings will appear here when bookings are completed and paid.</p>
          </div>
        ) : (
          <div>
            <div style={{
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '16px', 
              marginBottom: '24px',
              padding: '16px',
              backgroundColor: '#f8fafc',
              borderRadius: '8px'
            }}>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '1.5rem', fontWeight: '700', color: '#059669'}}>
                  UGX {earnings.reduce((sum, earning) => sum + parseFloat(earning.amount || 0), 0).toLocaleString()}
                </div>
                <div style={{fontSize: '0.875rem', color: '#6b7280', fontWeight: '500'}}>TOTAL EARNINGS</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '1.5rem', fontWeight: '700', color: '#3b82f6'}}>
                  {earnings.filter(e => new Date(e.payment_date).getMonth() === new Date().getMonth()).length}
                </div>
                <div style={{fontSize: '0.875rem', color: '#6b7280', fontWeight: '500'}}>THIS MONTH</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '1.5rem', fontWeight: '700', color: '#8b5cf6'}}>
                  UGX {earnings
                    .filter(e => new Date(e.payment_date).getMonth() === new Date().getMonth())
                    .reduce((sum, earning) => sum + parseFloat(earning.amount || 0), 0)
                    .toLocaleString()}
                </div>
                <div style={{fontSize: '0.875rem', color: '#6b7280', fontWeight: '500'}}>MONTHLY REVENUE</div>
              </div>
            </div>
            
            <div style={{maxHeight: '400px', overflowY: 'auto'}}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 150px 150px 120px 100px',
                gap: '12px',
                padding: '12px 16px',
                backgroundColor: '#f1f5f9',
                borderRadius: '8px',
                marginBottom: '8px',
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#374151'
              }}>
                <div>Service Details</div>
                <div>Patient</div>
                <div>Provider</div>
                <div>Amount</div>
                <div>Date</div>
              </div>
              
              {earnings.map(earning => (
                <div key={earning.id} style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 150px 150px 120px 100px',
                  gap: '12px',
                  padding: '12px 16px',
                  borderBottom: '1px solid #e5e7eb',
                  fontSize: '0.875rem',
                  alignItems: 'center'
                }}>
                  <div>
                    <div style={{fontWeight: '500', color: '#1f2937', marginBottom: '2px'}}>
                      {earning.service_type?.charAt(0).toUpperCase() + earning.service_type?.slice(1)} Service
                    </div>
                    <div style={{color: '#6b7280', fontSize: '0.8rem'}}>
                      ID: {earning.booking_id}
                    </div>
                  </div>
                  <div style={{color: '#374151'}}>
                    {earning.patient_name}
                  </div>
                  <div style={{color: '#374151'}}>
                    {earning.provider_name}
                  </div>
                  <div style={{fontWeight: '600', color: '#059669'}}>
                    UGX {parseFloat(earning.amount || 0).toLocaleString()}
                  </div>
                  <div style={{color: '#6b7280'}}>
                    {new Date(earning.payment_date).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Pending Bookings - Priority Section */}
      <div className="card" style={{marginBottom: '32px'}}>
        <h3 style={{color: '#1f2937', marginBottom: '20px'}}>
          🚨 Pending Bookings ({pendingBookings.length})
        </h3>
        {pendingBookings.length === 0 ? (
          <div style={{textAlign: 'center', padding: '40px 20px'}}>
            <span style={{fontSize: '3rem', display: 'block', marginBottom: '16px'}}>✅</span>
            <h4 style={{color: '#1f2937', marginBottom: '8px'}}>All caught up!</h4>
            <p style={{color: '#6b7280'}}>No pending bookings require attention.</p>
          </div>
        ) : (
          <div>
            {pendingBookings.map(booking => (
              <div key={booking.id} className="card" style={{
                marginBottom: '16px', 
                backgroundColor: '#fef3c7', 
                border: '2px solid #fbbf24'
              }}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px'}}>
                  <div style={{flex: '1', minWidth: '300px'}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px'}}>
                      <span style={{fontSize: '1.5rem'}}>
                        {getServiceIcon(booking.service_type)}
                      </span>
                      <h4 style={{color: '#1f2937', fontSize: '1.25rem', fontWeight: '600'}}>
                        {booking.service_type.charAt(0).toUpperCase() + booking.service_type.slice(1)} Service
                      </h4>
                      {booking.urgency === 'urgent' && (
                        <span style={{
                          backgroundColor: '#ef4444',
                          color: 'white',
                          padding: '2px 8px',
                          borderRadius: '12px',
                          fontSize: '0.75rem',
                          fontWeight: '600'
                        }}>
                          URGENT
                        </span>
                      )}
                    </div>
                    
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '16px'}}>
                      <div>
                        <strong style={{color: '#374151'}}>Patient:</strong>
                        <p style={{color: '#6b7280', margin: '4px 0'}}>{booking.patient_name}</p>
                        <p style={{color: '#6b7280', margin: '4px 0', fontSize: '0.875rem'}}>{booking.patient_email}</p>
                      </div>
                      <div>
                        <strong style={{color: '#374151'}}>Phone:</strong>
                        <p style={{color: '#6b7280', margin: '4px 0'}}>{booking.phone_number}</p>
                      </div>
                      <div>
                        <strong style={{color: '#374151'}}>Date:</strong>
                        <p style={{color: '#6b7280', margin: '4px 0'}}>{new Date(booking.preferred_date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    
                    <div style={{marginBottom: '16px'}}>
                      <strong style={{color: '#374151'}}>Location:</strong>
                      <p style={{color: '#6b7280', margin: '4px 0'}}>{booking.location}</p>
                    </div>
                    
                    <div style={{marginBottom: '16px'}}>
                      <strong style={{color: '#374151'}}>Description:</strong>
                      <p style={{color: '#6b7280', margin: '4px 0', lineHeight: '1.5'}}>{booking.description}</p>
                    </div>
                  </div>
                  
                  <div style={{textAlign: 'right', minWidth: '150px'}}>
                    <button 
                      onClick={() => setSelectedBooking(booking)}
                      className="btn btn-success"
                      style={{fontSize: '0.9rem'}}
                    >
                      👩‍⚕️ Assign Provider
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* All Bookings Overview */}
      <div className="card">
        <h3 style={{marginBottom: '24px', color: '#1f2937'}}>All Bookings Overview</h3>
        <div style={{maxHeight: '500px', overflowY: 'auto'}}>
          {allBookings.length === 0 ? (
            <p style={{textAlign: 'center', color: '#6b7280', padding: '40px'}}>No bookings in the system yet.</p>
          ) : (
            allBookings.map(booking => (
              <div key={booking.id} className="card" style={{marginBottom: '12px', padding: '16px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px'}}>
                  <div style={{flex: '1', minWidth: '200px'}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px'}}>
                      <span>{getServiceIcon(booking.service_type)}</span>
                      <strong style={{color: '#1f2937'}}>{booking.service_type}</strong>
                      <span style={{color: '#6b7280'}}>- {booking.patient_name}</span>
                    </div>
                    {booking.provider_name && (
                      <div>
                        <p style={{color: '#6b7280', fontSize: '0.875rem', margin: '2px 0'}}>
                          Provider: {booking.provider_name} ({booking.provider_type})
                        </p>
                        {booking.price && (
                          <p style={{color: '#065f46', fontSize: '0.875rem', margin: '2px 0', fontWeight: '500'}}>
                            Price: UGX {parseFloat(booking.price).toLocaleString()}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                    <span style={{color: '#6b7280', fontSize: '0.875rem'}}>
                      {new Date(booking.created_at).toLocaleDateString()}
                    </span>
                    <span className={getStatusBadge(booking.status)}>
                      {booking.status}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
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
          zIndex: 1000,
          padding: '20px'
        }}>
          <div className="card card-elevated" style={{width: '600px', maxWidth: '100%', maxHeight: '90vh', overflowY: 'auto'}}>
            <h3 style={{marginBottom: '20px', color: '#1f2937'}}>👩‍⚕️ Assign Healthcare Provider</h3>
            
            <div style={{marginBottom: '20px', padding: '16px', backgroundColor: '#f8fafc', borderRadius: '8px'}}>
              <h4 style={{color: '#1f2937', marginBottom: '8px'}}>Booking Details:</h4>
              <p><strong>Service:</strong> {selectedBooking.service_type}</p>
              <p><strong>Patient:</strong> {selectedBooking.patient_name}</p>
              <p><strong>Phone:</strong> {selectedBooking.phone_number}</p>
              <p><strong>Date:</strong> {new Date(selectedBooking.preferred_date).toLocaleDateString()}</p>
              <p><strong>Location:</strong> {selectedBooking.location}</p>
            </div>
            
            <div className="form-group">
              <label>Select Qualified Provider</label>
              <select
                value={selectedProvider}
                onChange={(e) => setSelectedProvider(e.target.value)}
                disabled={assignmentLoading}
              >
                <option value="">Choose a provider...</option>
                {getFilteredProviders().map(provider => (
                  <option key={provider.id} value={provider.id}>
                    {provider.name} - {provider.provider_type} ({provider.email})
                  </option>
                ))}
              </select>
              {getFilteredProviders().length === 0 && (
                <small style={{color: '#ef4444', display: 'block', marginTop: '4px'}}>
                  No qualified providers available for this service type.
                </small>
              )}
            </div>

            <div className="form-group">
              <label>Service Price (UGX)</label>
              <div style={{position: 'relative'}}>
                <input
                  type="number"
                  value={servicePrice}
                  onChange={(e) => setServicePrice(e.target.value)}
                  placeholder="Enter price in Uganda Shillings"
                  disabled={assignmentLoading}
                  min="0"
                  step="1000"
                  style={{paddingLeft: '50px'}}
                />
                <span style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#6b7280',
                  fontWeight: '500'
                }}>
                  UGX
                </span>
              </div>
              <small style={{color: '#6b7280', display: 'block', marginTop: '4px'}}>
                Set the service price that the patient will pay
              </small>
            </div>

            <div style={{display: 'flex', gap: '12px', marginTop: '24px'}}>
              <button 
                onClick={assignProvider}
                className="btn btn-success"
                disabled={!selectedProvider || !servicePrice || assignmentLoading}
                style={{flex: 1}}
              >
                {assignmentLoading ? <LoadingSpinner size="small" text="Assigning..." /> : '✅ Assign Provider'}
              </button>
              <button 
                onClick={() => {
                  setSelectedBooking(null)
                  setSelectedProvider('')
                  setServicePrice('')
                }}
                className="btn btn-outline"
                disabled={assignmentLoading}
                style={{flex: 1}}
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
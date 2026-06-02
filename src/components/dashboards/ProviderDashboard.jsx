import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useToast } from '../../contexts/ToastContext'
import LoadingSpinner from '../LoadingSpinner'
import Sidebar from '../Sidebar'
import api from '../../config/api'

function ProviderDashboard({ user, logout }) {
  const [activeTab, setActiveTab] = useState('assignments')
  const [assignments, setAssignments] = useState([])
  const [earnings, setEarnings] = useState([])
  const [notifications, setNotifications] = useState([])
  const [loading, setLoading] = useState(true)
  const [completionLoading, setCompletionLoading] = useState({})
  const [editMode, setEditMode] = useState(false)
  const [editLoading, setEditLoading] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState(false)
  const [deleteConfirmModal, setDeleteConfirmModal] = useState(false)
  const [deletePassword, setDeletePassword] = useState('')
  const [formData, setFormData] = useState({ name: '', phone: '' })
  const { showSuccess, showError } = useToast()
  const navigate = useNavigate()

  useEffect(() => {
    fetchData()
    if (user) {
      setFormData({ name: user.name || '', phone: user.phone || '' })
    }
  }, [user])

  const fetchData = async () => {
    try {
      const [assignmentsRes, earningsRes, notificationsRes] = await Promise.all([
        api.get('/bookings/my-assignments'),
        api.get('/bookings/provider/earnings'),
        api.get('/notifications')
      ])
      setAssignments(assignmentsRes.data)
      setEarnings(earningsRes.data)
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
      await api.post(`/bookings/${bookingId}/complete`)
      showSuccess('Service marked as completed! Patient has been notified.')
      fetchData()
    } catch (error) {
      showError('Failed to complete service. Please try again.')
    } finally {
      setCompletionLoading(prev => ({ ...prev, [bookingId]: false }))
    }
  }

  const getStatusBadge = (status) => {
    const map = {
      'assigned': 'status-badge status-assigned',
      'paid': 'status-badge status-paid',
      'completed': 'status-badge status-completed'
    }
    return map[status] || 'status-badge'
  }

  const handleProfileChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const updateProfile = async () => {
    if (!formData.name.trim()) {
      showError('Name is required')
      return
    }
    
    setEditLoading(true)
    try {
      await api.put('/auth/profile', {
        name: formData.name,
        phone: formData.phone
      })
      showSuccess('Profile updated successfully!')
      setEditMode(false)
      window.location.reload()
    } catch (error) {
      showError(error.response?.data?.message || 'Failed to update profile')
    } finally {
      setEditLoading(false)
    }
  }

  const deleteAccount = () => {
    setDeleteConfirmModal(true)
    setDeletePassword('')
  }

  const confirmDeleteAccount = async () => {
    if (!deletePassword) {
      showError('Password is required')
      return
    }

    setDeleteLoading(true)
    try {
      await api.delete('/auth/account', { data: { password: deletePassword } })
      showSuccess('Account deleted successfully')
      setDeleteConfirmModal(false)
      setDeletePassword('')
      logout()
      navigate('/')
    } catch (error) {
      showError(error.response?.data?.message || 'Failed to delete account')
    } finally {
      setDeleteLoading(false)
    }
  }

  const tabs = [
    { id: 'assignments', label: 'My Assignments', icon: '', count: 0 },
    { id: 'earnings', label: 'Earnings', icon: '', count: 0 },
    { id: 'notifications', label: 'Notifications', icon: '', count: notifications.filter(n => !n.read).length },
    { id: 'profile', label: 'Profile & Settings', icon: '', count: 0 }
  ]

  const markAllRead = async () => {
    try {
      await api.put('/notifications/mark-all-read')
      setNotifications(prev => prev.map(n => ({ ...n, read: true })))
    } catch (e) {
      // silent
    }
  }

  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
    if (tabId === 'notifications') markAllRead()
  }

  if (loading) return <LoadingSpinner size="large" text="Loading your assignments..." />

  const completedServices = assignments.filter(a => a.status === 'completed').length
  const pendingServices = assignments.filter(a => a.status === 'paid').length
  const totalEarnings = earnings.reduce((sum, e) => sum + parseFloat(e.amount || 0), 0)
  const monthlyEarnings = earnings
    .filter(e => new Date(e.payment_date).getMonth() === new Date().getMonth())
    .reduce((sum, e) => sum + parseFloat(e.amount || 0), 0)

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar user={user} activeTab={activeTab} setActiveTab={handleTabChange} tabs={tabs} logout={logout} />

      <div className="dashboard-main-content" style={{
        marginLeft: '280px', flex: 1, padding: '32px 40px',
        backgroundColor: '#f8fafc', minHeight: '100vh',
        transition: 'margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}>

        {/* ASSIGNMENTS TAB */}
        {activeTab === 'assignments' && (
          <div>
            <div className="dashboard-header">
              <div style={{ textAlign: 'center' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '8px' }}>
                  Welcome back, {user.name}!
                </h1>
                <p style={{ color: '#6b7280', fontSize: '1.125rem' }}>
                  Manage your patient assignments and track your services
                </p>
              </div>
            </div>

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
                <span className="stat-number">UGX {totalEarnings.toLocaleString()}</span>
                <span className="stat-label">Total Earnings</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">UGX {monthlyEarnings.toLocaleString()}</span>
                <span className="stat-label">This Month</span>
              </div>
            </div>

            <div className="card card-elevated" style={{ marginBottom: '32px' }}>
              <h3 style={{ marginBottom: '20px', color: '#1f2937' }}>Quick Actions</h3>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button className="btn btn-primary" onClick={fetchData}>Refresh Assignments</button>
              </div>
            </div>

            {notifications.length > 0 && (
              <div className="card" style={{ marginBottom: '32px' }}>
                <h3 style={{ marginBottom: '20px', color: '#1f2937' }}>Recent Notifications</h3>
                {notifications.slice(0, 3).map(n => (
                  <div key={n.id} className="notification info" style={{ marginBottom: '12px' }}>
                    {n.message}
                    <small style={{ display: 'block', marginTop: '4px', opacity: 0.7 }}>
                      {new Date(n.created_at).toLocaleDateString()}
                    </small>
                  </div>
                ))}
              </div>
            )}

            <div className="card">
              <h3 style={{ marginBottom: '24px', color: '#1f2937', fontSize: '1.5rem' }}>My Patient Assignments</h3>
              {assignments.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                  <span style={{ fontSize: '4rem', display: 'block', marginBottom: '16px' }}>👩‍⚕️</span>
                  <h4 style={{ color: '#1f2937', marginBottom: '8px' }}>No assignments yet</h4>
                  <p style={{ color: '#6b7280' }}>You'll be notified when new assignments are available.</p>
                </div>
              ) : (
                assignments.map(a => (
                  <div key={a.id} className="card" style={{ marginBottom: '20px', border: '1px solid #e5e7eb' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
                      <div style={{ flex: '1', minWidth: '300px' }}>
                        <div style={{ marginBottom: '16px' }}>
                          <h4 style={{ color: '#1f2937', fontSize: '1.25rem', fontWeight: '600' }}>
                            {a.service_type.charAt(0).toUpperCase() + a.service_type.slice(1)} Service
                          </h4>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '16px' }}>
                          <div><strong style={{ color: '#374151' }}>Patient:</strong><p style={{ color: '#6b7280', margin: '4px 0' }}>{a.patient_name}</p></div>
                          <div><strong style={{ color: '#374151' }}>Email:</strong><p style={{ color: '#6b7280', margin: '4px 0' }}>{a.patient_email}</p></div>
                          {a.patient_phone && <div><strong style={{ color: '#374151' }}>Phone:</strong><p style={{ color: '#6b7280', margin: '4px 0' }}>{a.patient_phone}</p></div>}
                          <div><strong style={{ color: '#374151' }}>Date:</strong><p style={{ color: '#6b7280', margin: '4px 0' }}>{new Date(a.preferred_date).toLocaleDateString()}</p></div>
                          <div><strong style={{ color: '#374151' }}>Urgency:</strong><p style={{ color: '#6b7280', margin: '4px 0' }}>{a.urgency}</p></div>
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                          <strong style={{ color: '#374151' }}>Location:</strong>
                          <p style={{ color: '#6b7280', margin: '4px 0' }}>{a.location}</p>
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                          <strong style={{ color: '#374151' }}>Description:</strong>
                          <p style={{ color: '#6b7280', margin: '4px 0', lineHeight: '1.5' }}>{a.description}</p>
                        </div>
                        {a.price && (
                          <div style={{ marginTop: '16px', padding: '12px', backgroundColor: '#ecfdf5', borderRadius: '6px', border: '1px solid #d1fae5' }}>
                            {a.rate_per_day && a.days && (
                              <p style={{ color: '#6b7280', fontSize: '0.85rem', margin: '0 0 4px' }}>
                                UGX {parseFloat(a.rate_per_day).toLocaleString()}/day × {a.days} day(s)
                              </p>
                            )}
                            <p style={{ color: '#065f46', fontWeight: '600', fontSize: '1rem', margin: 0 }}>
                              💰 Total: UGX {parseFloat(a.price).toLocaleString()}
                            </p>
                          </div>
                        )}
                      </div>
                      <div style={{ textAlign: 'right', minWidth: '150px' }}>
                        <span className={getStatusBadge(a.status)}>{a.status}</span>
                        {a.status === 'paid' && (
                          <div style={{ marginTop: '16px' }}>
                            <button
                              onClick={() => completeService(a.id)}
                              className="btn btn-success"
                              style={{ fontSize: '0.9rem' }}
                              disabled={completionLoading[a.id]}
                            >
                              {completionLoading[a.id] ? 'Processing...' : 'Mark as Completed'}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* EARNINGS TAB */}
        {activeTab === 'earnings' && (
          <div>
            <div className="dashboard-header">
              <div style={{ textAlign: 'center' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '8px' }}>
                  My Earnings
                </h1>
                <p style={{ color: '#6b7280', fontSize: '1.125rem' }}>Track your completed services and payments</p>
              </div>
            </div>

            <div className="card">
              <h3 style={{ color: '#1f2937', marginBottom: '20px' }}>
                My Earnings ({earnings.length} completed services)
              </h3>
              {earnings.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <h4 style={{ color: '#1f2937', marginBottom: '8px' }}>No earnings yet</h4>
                  <p style={{ color: '#6b7280' }}>Complete your first service to start earning!</p>
                </div>
              ) : (
                <div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '24px', padding: '16px', backgroundColor: '#f0f9ff', borderRadius: '8px' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#059669' }}>UGX {totalEarnings.toLocaleString()}</div>
                      <div style={{ fontSize: '0.875rem', color: '#6b7280', fontWeight: '500' }}>TOTAL EARNED</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#3b82f6' }}>UGX {monthlyEarnings.toLocaleString()}</div>
                      <div style={{ fontSize: '0.875rem', color: '#6b7280', fontWeight: '500' }}>THIS MONTH</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#8b5cf6' }}>{earnings.length}</div>
                      <div style={{ fontSize: '0.875rem', color: '#6b7280', fontWeight: '500' }}>SERVICES</div>
                    </div>
                  </div>
                  <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 150px 120px 100px', gap: '12px', padding: '12px 16px', backgroundColor: '#f1f5f9', borderRadius: '8px', marginBottom: '8px', fontSize: '0.875rem', fontWeight: '600', color: '#374151' }}>
                      <div>Service & Patient</div><div>Amount</div><div>Date</div><div>Status</div>
                    </div>
                    {earnings.map(e => (
                      <div key={e.id} style={{ display: 'grid', gridTemplateColumns: '1fr 150px 120px 100px', gap: '12px', padding: '12px 16px', borderBottom: '1px solid #e5e7eb', fontSize: '0.875rem', alignItems: 'center' }}>
                        <div>
                          <div style={{ fontWeight: '500', color: '#1f2937', marginBottom: '2px' }}>
                            {e.service_type?.charAt(0).toUpperCase() + e.service_type?.slice(1)} Service
                          </div>
                          <div style={{ color: '#6b7280', fontSize: '0.8rem' }}>Patient: {e.patient_name}</div>
                        </div>
                        <div style={{ fontWeight: '600', color: '#059669' }}>UGX {parseFloat(e.amount || 0).toLocaleString()}</div>
                        <div style={{ color: '#6b7280' }}>{new Date(e.payment_date).toLocaleDateString()}</div>
                        <div><span className="status-badge status-completed">Paid</span></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* NOTIFICATIONS TAB */}
        {activeTab === 'notifications' && (
          <div>
            <div className="dashboard-header">
              <div style={{ textAlign: 'center' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '8px' }}>
                  Notifications
                </h1>
                <p style={{ color: '#6b7280', fontSize: '1.125rem' }}>Stay updated with your assignments and services</p>
              </div>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '24px', color: '#1f2937' }}>All Notifications</h3>
              {notifications.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                  <span style={{ fontSize: '4rem', display: 'block', marginBottom: '16px' }}>🔔</span>
                  <h4 style={{ color: '#1f2937', marginBottom: '8px' }}>No notifications yet</h4>
                  <p style={{ color: '#6b7280' }}>You'll be notified about new assignments and updates here</p>
                </div>
              ) : (
                notifications.map(n => (
                  <div key={n.id} className="notification info" style={{ marginBottom: '12px' }}>
                    {n.message}
                    <small style={{ display: 'block', marginTop: '4px', opacity: 0.7 }}>
                      {new Date(n.created_at).toLocaleDateString()}
                    </small>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* PROFILE & SETTINGS TAB */}
        {activeTab === 'profile' && (
          <div>
            <div style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#1f2937', marginBottom: '4px' }}>Profile & Settings ⚙️</h2>
              <p style={{ color: '#6b7280' }}>Manage your account information</p>
            </div>

            {/* Edit Profile Section */}
            <div className="card" style={{ marginBottom: '32px', border: '1px solid #e5e7eb' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h3 style={{ color: '#1f2937', fontSize: '1.25rem', fontWeight: '600', margin: 0 }}>Edit Profile</h3>
                {!editMode && <button className="btn btn-primary btn-sm" onClick={() => setEditMode(true)}>Edit</button>}
              </div>

              {editMode ? (
                <div>
                  <div className="form-group" style={{ marginBottom: '16px' }}>
                    <label style={{ fontWeight: '600', color: '#374151', marginBottom: '8px', display: 'block' }}>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleProfileChange}
                      placeholder="Enter your full name"
                      style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #d1d5db' }}
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: '20px' }}>
                    <label style={{ fontWeight: '600', color: '#374151', marginBottom: '8px', display: 'block' }}>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleProfileChange}
                      placeholder="Enter your phone number"
                      style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #d1d5db' }}
                    />
                  </div>

                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button 
                      className="btn btn-success"
                      onClick={updateProfile}
                      disabled={editLoading}
                    >
                      {editLoading ? 'Saving...' : 'Save Changes'}
                    </button>
                    <button 
                      className="btn"
                      onClick={() => {
                        setEditMode(false)
                        setFormData({ name: user.name || '', phone: user.phone || '' })
                      }}
                      style={{ backgroundColor: '#e5e7eb', color: '#374151' }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div style={{ marginBottom: '12px' }}>
                    <strong style={{ color: '#374151' }}>Name:</strong>
                    <p style={{ color: '#6b7280', margin: '4px 0' }}>{user.name}</p>
                  </div>
                  <div style={{ marginBottom: '12px' }}>
                    <strong style={{ color: '#374151' }}>Email:</strong>
                    <p style={{ color: '#6b7280', margin: '4px 0' }}>{user.email}</p>
                  </div>
                  <div>
                    <strong style={{ color: '#374151' }}>Phone:</strong>
                    <p style={{ color: '#6b7280', margin: '4px 0' }}>{user.phone || 'Not set'}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Delete Account Section */}
            <div className="card" style={{ border: '1px solid #fee2e2', backgroundColor: '#fef2f2' }}>
              <h3 style={{ color: '#991b1b', fontSize: '1.25rem', fontWeight: '600', marginBottom: '12px' }}>Danger Zone</h3>
              <p style={{ color: '#7f1d1d', marginBottom: '16px' }}>Once you delete your account, there is no going back. Please be certain.</p>
              <button 
                className="btn"
                onClick={deleteAccount}
                disabled={deleteLoading}
                style={{ backgroundColor: '#dc2626', color: 'white', padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: deleteLoading ? 'not-allowed' : 'pointer' }}
              >
                {deleteLoading ? 'Deleting...' : '🗑️ Delete My Account'}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default ProviderDashboard

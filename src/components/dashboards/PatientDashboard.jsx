import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useToast } from '../../contexts/ToastContext'
import LoadingSpinner from '../LoadingSpinner'
import Sidebar from '../Sidebar'
import api from '../../config/api'

function PatientDashboard({ user, logout }) {
  const [activeTab, setActiveTab] = useState('overview')
  const [bookings, setBookings] = useState([])
  const [notifications, setNotifications] = useState([])
  const [loading, setLoading] = useState(true)
  const [paymentLoading, setPaymentLoading] = useState({})
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
      const [bookingsRes, notificationsRes] = await Promise.all([
        api.get('/bookings/my-bookings'),
        api.get('/notifications')
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

  const markAllRead = async () => {
    try {
      await api.put('/notifications/mark-all-read')
      setNotifications(prev => prev.map(n => ({ ...n, read: true })))
    } catch (e) {
      // silent
    }
  }

  const markAsPaid = async (bookingId) => {
    setPaymentLoading(prev => ({ ...prev, [bookingId]: true }))
    try {
      await api.post(`/payments/${bookingId}/mark-paid`)
      showSuccess('Payment marked successfully! Your provider has been notified.')
      fetchData()
    } catch (error) {
      showError('Failed to process payment. Please try again.')
    } finally {
      setPaymentLoading(prev => ({ ...prev, [bookingId]: false }))
    }
  }

  const getStatusBadge = (status) => {
    const map = {
      'pending': 'status-badge status-pending',
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
    { id: 'overview', label: 'Overview', icon: '', count: 0 },
    { id: 'bookings', label: 'My Bookings', icon: '', count: bookings.length },
    { id: 'notifications', label: 'Notifications', icon: '', count: notifications.filter(n => !n.read).length },
    { id: 'book', label: 'Book Service', icon: '', count: 0 },
    { id: 'profile', label: 'Profile & Settings', icon: '', count: 0 }
  ]

  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
    if (tabId === 'notifications') markAllRead()
  }

  if (loading) return <LoadingSpinner size="large" text="Loading your dashboard..." />

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar user={user} activeTab={activeTab} setActiveTab={handleTabChange} tabs={tabs} logout={logout} />

      <div className="dashboard-main-content" style={{
        marginLeft: '280px', flex: 1, padding: '32px 40px',
        backgroundColor: '#f8fafc', minHeight: '100vh',
        transition: 'margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}>

        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div>
            {/* Welcome Header */}
            <div style={{
              background: 'linear-gradient(135deg, #1e40af 0%, #7c2d12 100%)',
              borderRadius: '20px',
              padding: '40px',
              marginBottom: '32px',
              color: 'white',
              textAlign: 'center'
            }}>
              <h1 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '8px' }}>
                Welcome back, {user.name}!
              </h1>
              <p style={{ opacity: 0.9, fontSize: '1.05rem' }}>
                Here's a summary of your healthcare activity
              </p>
            </div>

            {/* Stats — centered, no gaps */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
              marginBottom: '32px'
            }}>
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
                <span className="stat-label">Notifications</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card" style={{ marginBottom: '24px' }}>
              <h3 style={{ marginBottom: '16px', color: '#1f2937', fontSize: '1.1rem', fontWeight: '600' }}>Quick Actions</h3>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link to="/book" className="btn btn-success">Book New Service</Link>
                <button className="btn btn-outline" onClick={fetchData}>Refresh</button>
                <button className="btn btn-outline" onClick={() => setActiveTab('bookings')}>View My Bookings</button>
              </div>
            </div>

            {/* Recent Notifications */}
            {notifications.length > 0 && (
              <div className="card">
                <h3 style={{ marginBottom: '16px', color: '#1f2937', fontSize: '1.1rem', fontWeight: '600' }}>Recent Notifications</h3>
                {notifications.slice(0, 3).map(n => (
                  <div key={n.id} className="notification info" style={{ marginBottom: '10px' }}>
                    {n.message}
                    <small style={{ display: 'block', marginTop: '4px', opacity: 0.7 }}>
                      {new Date(n.created_at).toLocaleDateString()}
                    </small>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* MY BOOKINGS TAB */}
        {activeTab === 'bookings' && (
          <div>
            <div style={{ marginBottom: '24px' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#1f2937', marginBottom: '4px' }}>My Bookings 📋</h2>
              <p style={{ color: '#6b7280' }}>All your healthcare service bookings</p>
            </div>

            {bookings.length === 0 ? (
              <div className="card" style={{ textAlign: 'center', padding: '60px 20px' }}>
                <span style={{ fontSize: '4rem', display: 'block', marginBottom: '16px' }}>🏥</span>
                <h4 style={{ color: '#1f2937', marginBottom: '8px' }}>No bookings yet</h4>
                <p style={{ color: '#6b7280', marginBottom: '24px' }}>Ready to schedule your first healthcare service?</p>
                <Link to="/book" className="btn btn-success">Schedule Your First Service</Link>
              </div>
            ) : (
              bookings.map(booking => (
                <div key={booking.id} className="card" style={{ marginBottom: '16px', border: '1px solid #e5e7eb' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
                    <div style={{ flex: '1', minWidth: '280px' }}>
                      <div style={{ marginBottom: '12px' }}>
                        <h4 style={{ color: '#1f2937', fontSize: '1.1rem', fontWeight: '600' }}>
                          {booking.service_type.charAt(0).toUpperCase() + booking.service_type.slice(1)} Service
                        </h4>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px', marginBottom: '12px' }}>
                        <div>
                          <strong style={{ color: '#374151', fontSize: '0.85rem' }}>Date</strong>
                          <p style={{ color: '#6b7280', margin: '2px 0', fontSize: '0.9rem' }}>{new Date(booking.preferred_date).toLocaleDateString()}</p>
                        </div>
                        <div>
                          <strong style={{ color: '#374151', fontSize: '0.85rem' }}>Location</strong>
                          <p style={{ color: '#6b7280', margin: '2px 0', fontSize: '0.9rem' }}>{booking.location}</p>
                        </div>
                      </div>

                      <div style={{ marginBottom: '12px' }}>
                        <strong style={{ color: '#374151', fontSize: '0.85rem' }}>Description</strong>
                        <p style={{ color: '#6b7280', margin: '2px 0', lineHeight: '1.5', fontSize: '0.9rem' }}>{booking.description}</p>
                      </div>

                      {booking.assignedProvider && (
                        <div style={{ padding: '14px', backgroundColor: '#f0f9ff', borderRadius: '8px', border: '1px solid #e0f2fe' }}>
                          <h5 style={{ color: '#0369a1', marginBottom: '10px', fontSize: '0.95rem' }}>Assigned Provider</h5>
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '6px', marginBottom: '10px' }}>
                            <p style={{ margin: '2px 0', fontSize: '0.9rem' }}><strong>Name:</strong> {booking.assignedProvider.name}</p>
                            <p style={{ margin: '2px 0', fontSize: '0.9rem' }}><strong>Type:</strong> {booking.assignedProvider.providerType}</p>
                            <p style={{ margin: '2px 0', fontSize: '0.9rem' }}><strong>Email:</strong> {booking.assignedProvider.email}</p>
                            {booking.assignedProvider.phone && (
                              <p style={{ margin: '2px 0', fontSize: '0.9rem' }}><strong>Phone:</strong> {booking.assignedProvider.phone}</p>
                            )}
                          </div>
                          {booking.price && (
                              <div style={{ padding: '10px', backgroundColor: '#ecfdf5', borderRadius: '6px', border: '1px solid #d1fae5' }}>
                                {booking.rate_per_day && booking.days && (
                                  <p style={{ color: '#6b7280', fontSize: '0.85rem', margin: '0 0 4px' }}>
                                    UGX {parseFloat(booking.rate_per_day).toLocaleString()}/day × {booking.days} day(s)
                                  </p>
                                )}
                                <p style={{ color: '#065f46', fontWeight: '600', fontSize: '1rem', margin: 0 }}>
                                  Total: UGX {parseFloat(booking.price).toLocaleString()}
                                </p>
                              </div>
                            )}
                        </div>
                      )}
                    </div>

                    <div style={{ textAlign: 'right', minWidth: '140px' }}>
                      <span className={getStatusBadge(booking.status)}>{booking.status}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* NOTIFICATIONS TAB */}
        {activeTab === 'notifications' && (
          <div>
            <div style={{ marginBottom: '24px' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#1f2937', marginBottom: '4px' }}>Notifications</h2>
              <p style={{ color: '#6b7280' }}>Stay updated with your healthcare activities</p>
            </div>
            <div className="card">
              {notifications.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                  <h4 style={{ color: '#1f2937', marginBottom: '8px' }}>No notifications yet</h4>
                  <p style={{ color: '#6b7280' }}>You'll be notified about your bookings and services here</p>
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

        {/* BOOK SERVICE TAB */}
        {activeTab === 'book' && (
          <div>
            <div style={{ marginBottom: '24px' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#1f2937', marginBottom: '4px' }}>Book a Service 📅</h2>
              <p style={{ color: '#6b7280' }}>Schedule your healthcare appointment</p>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '60px 20px' }}>
              <span style={{ fontSize: '4rem', display: 'block', marginBottom: '16px' }}>📅</span>
              <h3 style={{ color: '#1f2937', marginBottom: '12px' }}>Ready to book a service?</h3>
              <p style={{ color: '#6b7280', marginBottom: '24px' }}>Click below to schedule your healthcare appointment</p>
              <Link to="/book" className="btn btn-success btn-large">Schedule New Service</Link>
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

        {/* Delete Account Confirmation Modal */}
        {deleteConfirmModal && (
          <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
            <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '32px', maxWidth: '500px', width: '90%', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}>
              <h3 style={{ marginBottom: '20px', color: '#dc2626', fontSize: '1.5rem' }}>⚠️ Delete Account</h3>
              
              <div style={{ marginBottom: '20px', padding: '16px', backgroundColor: '#fee2e2', borderRadius: '8px', border: '2px solid #dc2626' }}>
                <p style={{ color: '#991b1b', fontWeight: '600', marginBottom: '8px' }}>WARNING: This action cannot be undone!</p>
                <p style={{ color: '#7f1d1d', fontSize: '0.875rem', marginBottom: '12px' }}>You are about to permanently delete your account. This will:</p>
                <ul style={{ color: '#7f1d1d', fontSize: '0.875rem', marginLeft: '20px', marginBottom: '0' }}>
                  <li>Delete all your personal information</li>
                  <li>Cancel all active bookings</li>
                  <li>Remove your access to the platform</li>
                </ul>
              </div>

              <div className="form-group" style={{ marginBottom: '20px' }}>
                <label style={{ fontWeight: '600', color: '#374151', marginBottom: '8px', display: 'block' }}>Enter your password to confirm</label>
                <input
                  type="password"
                  value={deletePassword}
                  onChange={(e) => setDeletePassword(e.target.value)}
                  placeholder="Enter your password"
                  disabled={deleteLoading}
                  style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '1rem' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                <button 
                  onClick={confirmDeleteAccount}
                  disabled={deleteLoading || !deletePassword}
                  style={{ flex: 1, backgroundColor: '#dc2626', color: 'white', padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: deleteLoading || !deletePassword ? 'not-allowed' : 'pointer', opacity: deleteLoading || !deletePassword ? 0.6 : 1 }}
                >
                  {deleteLoading ? 'Deleting Account...' : 'Delete My Account Permanently'}
                </button>
                <button 
                  onClick={() => {
                    setDeleteConfirmModal(false)
                    setDeletePassword('')
                  }}
                  disabled={deleteLoading}
                  style={{ flex: 1, backgroundColor: '#e5e7eb', color: '#374151', padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: deleteLoading ? 'not-allowed' : 'pointer' }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default PatientDashboard

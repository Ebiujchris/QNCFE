import { useState, useEffect } from 'react'
import LoadingSpinner from '../components/LoadingSpinner'
import PatientDashboard from '../components/dashboards/PatientDashboard'
import ProviderDashboard from '../components/dashboards/ProviderDashboard'
import AdminDashboard from '../components/dashboards/AdminDashboard'

function Dashboard({ user, logout }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Since we're now protected by the route guard, user should always exist here
    if (user) {
      setLoading(false)
    }
  }, [user])

  if (loading) {
    return (
      <div className="container" style={{marginTop: '100px'}}>
        <LoadingSpinner size="large" text="Loading your dashboard..." />
      </div>
    )
  }

  const renderDashboard = () => {
    switch (user.role) {
      case 'patient':
        return <PatientDashboard user={user} logout={logout} />
      case 'provider':
        return <ProviderDashboard user={user} logout={logout} />
      case 'admin':
        return <AdminDashboard user={user} logout={logout} />
      default:
        return (
          <div className="card">
            <h2>Unknown User Role</h2>
            <p>Your account role is not recognized. Please contact support.</p>
          </div>
        )
    }
  }

  return (
    <div style={{ minHeight: '100vh' }}>
      {renderDashboard()}
    </div>
  )
}

export default Dashboard
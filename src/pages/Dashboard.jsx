import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useToast } from '../contexts/ToastContext'
import LoadingSpinner from '../components/LoadingSpinner'
import PatientDashboard from '../components/dashboards/PatientDashboard'
import ProviderDashboard from '../components/dashboards/ProviderDashboard'
import AdminDashboard from '../components/dashboards/AdminDashboard'

function Dashboard({ user }) {
  const [loading, setLoading] = useState(true)
  const { showError } = useToast()

  useEffect(() => {
    if (!user) {
      showError('Please login to access your dashboard')
      return
    }
    setLoading(false)
  }, [user, showError])

  if (loading) {
    return (
      <div className="container" style={{marginTop: '100px'}}>
        <LoadingSpinner size="large" text="Loading your dashboard..." />
      </div>
    )
  }

  if (!user) {
    return (
      <div className="container">
        <div className="card" style={{textAlign: 'center', marginTop: '100px'}}>
          <h2>Access Denied</h2>
          <p>Please login to access your dashboard.</p>
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        </div>
      </div>
    )
  }

  const renderDashboard = () => {
    switch (user.role) {
      case 'patient':
        return <PatientDashboard user={user} />
      case 'provider':
        return <ProviderDashboard user={user} />
      case 'admin':
        return <AdminDashboard user={user} />
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
    <div className="container">
      {renderDashboard()}
    </div>
  )
}

export default Dashboard
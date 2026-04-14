import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ToastProvider } from './contexts/ToastContext'
import Navbar from './components/Navbar'
import LoadingSpinner from './components/LoadingSpinner'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import BookService from './pages/BookService'
import AdminLogin from './pages/admin/AdminLogin'
import AdminRegister from './pages/admin/AdminRegister'
import AdminDashboard from './pages/admin/AdminDashboard'

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for existing user session
    const savedUser = localStorage.getItem('user')
    const token = localStorage.getItem('token')
    
    if (savedUser && token) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (error) {
        console.error('Error parsing saved user:', error)
        localStorage.removeItem('user')
        localStorage.removeItem('token')
      }
    }
    setLoading(false)
  }, [])

  const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    setUser(null)
  }

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#ffffff'
      }}>
        <LoadingSpinner size="large" text="Loading QNC Solutions..." />
      </div>
    )
  }

  return (
    <ToastProvider>
      <Router>
        <div className="App">
          <Navbar user={user} logout={logout} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/book" element={<BookService user={user} />} />
            <Route path="/dashboard" element={<Dashboard user={user} />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin setUser={setUser} />} />
            <Route path="/admin/register" element={<AdminRegister />} />
            <Route path="/admin/dashboard" element={<AdminDashboard user={user} />} />
            
            {/* Legacy Routes - Redirect to unified dashboard */}
            <Route path="/patient-dashboard" element={<Dashboard user={user} />} />
            <Route path="/provider-dashboard" element={<Dashboard user={user} />} />
            <Route path="/admin-dashboard" element={<Dashboard user={user} />} />
          </Routes>
        </div>
      </Router>
    </ToastProvider>
  )
}

export default App
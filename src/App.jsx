import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastProvider } from './contexts/ToastContext'
import ErrorBoundary from './components/ErrorBoundary'
import Navbar from './components/Navbar'
import LoadingSpinner from './components/LoadingSpinner'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import BookService from './pages/BookService'
import ProviderRegister from './pages/ProviderRegister'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'

// Custom hook for logout with navigation
function useLogout(setUser) {
  const navigate = useNavigate()
  
  return () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    setUser(null)
    navigate('/login')
  }
}

function AppContent() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const logout = useLogout(setUser)

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

  const isDashboardRoute = ['/dashboard', '/patient-dashboard', '/provider-dashboard', '/admin-dashboard'].some(
    path => window.location.pathname.startsWith(path)
  )

  return (
    <div className="App">
      {!isDashboardRoute && <Navbar user={user} logout={logout} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/provider-register" element={<ProviderRegister />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/book" element={<BookService user={user} />} />
        <Route path="/dashboard" element={
          user ? <Dashboard user={user} logout={logout} /> : <Login setUser={setUser} />
        } />
        
        {/* Legacy Routes - Redirect to unified dashboard */}
        <Route path="/patient-dashboard" element={<Dashboard user={user} logout={logout} />} />
        <Route path="/provider-dashboard" element={<Dashboard user={user} logout={logout} />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <ToastProvider>
      <ErrorBoundary>
        <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <AppContent />
        </Router>
      </ErrorBoundary>
    </ToastProvider>
  )
}

export default App
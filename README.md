# QNC Booking Frontend

React frontend for the QNC Community Care booking system.

## 🚀 Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Visit: http://localhost:3000

### 3. Build for Production
```bash
npm run build
npm run preview
```

## 📱 Pages & Features

### Public Pages
- **Home** (`/`) - Landing page with service overview
- **Login** (`/login`) - User authentication
- **Register** (`/register`) - New user registration

### Patient Pages
- **Book Service** (`/book`) - Create new booking request
- **Patient Dashboard** (`/patient-dashboard`) - View bookings and status

### Provider Pages  
- **Provider Dashboard** (`/provider-dashboard`) - View assignments and earnings

### Admin Pages
- **Admin Dashboard** (`/admin-dashboard`) - Manage bookings and assignments

## 🎨 Components

### Core Components
- `Navbar` - Navigation with role-based links
- `App` - Main router and user state management

### Pages
- `Home` - Landing page with service cards
- `Login/Register` - Authentication forms
- `BookService` - Service booking form
- `PatientDashboard` - Patient booking management
- `ProviderDashboard` - Provider assignment management  
- `AdminDashboard` - Admin system management

## 🔧 Configuration

### API Proxy
Vite proxy configuration in `vite.config.js`:
```js
proxy: {
  '/api': {
    target: 'http://localhost:5000',
    changeOrigin: true
  }
}
```

### Authentication
- JWT tokens stored in localStorage
- Automatic role-based routing
- Protected routes with user role checks

## 🎨 Styling

Simple CSS with:
- Responsive grid layouts
- Card-based components
- Status color coding
- Mobile-friendly design

## 📱 User Flows

### Patient Flow
1. Register/Login
2. Book service via form
3. View assigned provider
4. Mark payment as paid
5. Track completion status

### Provider Flow
1. Register with provider type
2. View assigned patients
3. Complete services
4. Track earnings

### Admin Flow
1. Login with admin account
2. View pending bookings
3. Assign providers
4. Monitor system stats

## 🔄 State Management

- User state in App component
- Local component state for forms
- API calls with axios
- Real-time updates via polling

## 🚀 Deployment

```bash
npm run build
# Deploy dist/ folder to your hosting service
```
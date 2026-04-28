const axios = require('axios')

async function checkBackend() {
  try {
    console.log('🔄 Checking backend server...')
    
    const response = await axios.get('http://localhost:5000/api/health')
    console.log('✅ Backend is running!')
    console.log('Response:', response.data)
    
  } catch (error) {
    console.error('❌ Backend is not running or not accessible')
    console.error('Error:', error.message)
    
    if (error.code === 'ECONNREFUSED') {
      console.log('\n💡 Solutions:')
      console.log('1. Start the backend server: cd QNCBE && npm start')
      console.log('2. Check if port 5000 is available')
      console.log('3. Verify the backend server.js file exists')
    }
  }
}

checkBackend()
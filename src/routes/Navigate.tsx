import { createBrowserRouter } from 'react-router-dom'
import { Dashboard, Login } from '../pages'
import App from '../App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/login',
    element:  <Login />
  }
])

export default router
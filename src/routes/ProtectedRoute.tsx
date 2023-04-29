import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

interface Props {
    styles?: string,
    children?: React.ReactElement | React.ReactElement[]
}
export const ProtectedRoute = ({ children }: Props) => {
  const auth = useSelector((state) => state.auth.user)
  return auth ? children : <Navigate to="/login" />
}
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface Props {
  children?: React.ReactElement | React.ReactElement[];
}

export const SpecialRoute = ({ children }: Props) => {
  const auth = useSelector((state) => state.auth.user)
  return !auth ? children : <Navigate to="/dashboard" />;
};

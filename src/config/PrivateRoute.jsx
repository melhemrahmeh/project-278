import { useAuth } from "../services/auth";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return !isAuthenticated ? <Navigate to="/" /> : children;
};

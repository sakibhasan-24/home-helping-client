import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import Spinner from "../components/Spinner/Spinner";
import { Navigate, useLocation } from "react-router-dom";

export default function Protected({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) return <Spinner />;
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname} replace />;
}

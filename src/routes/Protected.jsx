import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import Spinner from "../components/Spinner/Spinner";

export default function Protected({ children }) {
  const { user, loading } = useContext(AuthContext);
  if (loading) return <Spinner />;
  if (user) {
    return children;
  }
  return <Navigate to="/login" replace />;
}

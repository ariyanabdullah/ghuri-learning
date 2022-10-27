import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Mycontext } from "../Authcontext/Authcontext";
import "./load.css";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(Mycontext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="text-center loader">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;

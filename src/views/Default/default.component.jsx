import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";

export default function DefaultLayout() {
  //   const { user, token, setUser, setToken } = useStateContext();
  const token = null;
  if (!token) {
    return <Navigate to="/login" />;
  }

  const onLogout = (e) => {
    e.preventDefault();
  };

  return (
    <div id="defaultLayout">
      
    </div>
  );
}

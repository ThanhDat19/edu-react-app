import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function GuestLayout() {
//   const { token } = useStateContext();

//   if (token) {
//     return <Navigate to="/users" />;
//   }
  return (
    <div>
      <div>
        {/* GuestLayout */}
        <Outlet />
      </div>
    </div>
  );
}

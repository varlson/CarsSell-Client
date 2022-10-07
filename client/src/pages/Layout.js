import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="bg-teal-200">
      <div className="w-10/12 m-auto p-3">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;

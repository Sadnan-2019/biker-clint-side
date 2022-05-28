import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content ">
                <h3 className="text-2xl font-bold"> Your Dashboard</h3>
                <Outlet></Outlet>
       
      </div>
      <div class="drawer-side">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <Link to="/dashboard">My Order</Link>
          </li>
          <li>
            <Link to="/dashboard/add-review">Add Review</Link>
          </li>
          <li>
            <Link to="/dashboard/all-users">All Users</Link>
          </li>
          <li>
            <Link to="/dashboard/profile">My Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

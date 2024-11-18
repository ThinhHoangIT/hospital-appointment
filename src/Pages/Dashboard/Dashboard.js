import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-48 bg-base-100 text-base-content">
        <ul className="menu p-4 overflow-y-auto">
          <li>
            <Link to="/dashboard/profile">Thông tin cá nhân</Link>
          </li>
          <li>
            <Link to="/dashboard">Lịch sử đặt hẹn</Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-4">
        <h2 className="text-2xl font-bold text-purple-500">Chào mừng</h2>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

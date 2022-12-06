import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import {
  FaUsers,
  FaUserMd,
  FaHospitalUser,
  FaRegCalendarAlt,
} from "react-icons/fa";

import Navbar from "../Pages/Shared/Navbar/Navbar";
import { RiMenuUnfoldLine } from "react-icons/ri";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

  return (
    <div>
      <Navbar></Navbar>
      <label
        tabIndex={0}
        className="btn btn-ghost lg:hidden"
        htmlFor="dashboard-drawyer"
      >
        <RiMenuUnfoldLine className="text-2xl" />
      </label>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawyer"
          type="checkbox"
          className="drawer-toggle"
        />

        <div className="drawer-content border bg-sky-100">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawyer" className="drawer-overlay"></label>

          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li className="mb-2 font-semibold border-b-2">
              <Link to="/dashboard">
                <FaRegCalendarAlt className="text-2xl" />
                {isAdmin ? "All" : "My"} Appointment
              </Link>
            </li>
            {isAdmin && (
              <>
                <li className="font-semibold border-b-2">
                  <Link to="/dashboard/allusers">
                    <FaUsers className="text-2xl" />
                    All Users
                  </Link>
                </li>
                <li className="font-semibold border-b-2">
                  <Link to="/dashboard/adddoctor">
                    {" "}
                    <FaUserMd className="text-2xl" />
                    Add Doctor
                  </Link>
                </li>
                <li className="font-semibold border-b-2">
                  <Link to="/dashboard/managedoctors">
                    <FaHospitalUser className="text-2xl" />
                    Manage Doctor
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

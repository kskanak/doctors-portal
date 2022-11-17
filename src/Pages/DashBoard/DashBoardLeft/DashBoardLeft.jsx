import React from "react";
import { Link } from "react-router-dom";

const DashBoardLeft = () => {
  return (
    <div className="border border-red-400 h-screen w-1/4">
      <ul>
        <li>
          <Link to="/dashboard/myAppointment">My Appointment</Link>
        </li>

        <li>two</li>
        <li>three</li>
        <li>four</li>
      </ul>
    </div>
  );
};

export default DashBoardLeft;

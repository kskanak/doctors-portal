import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import DashBoardLeft from "./DashBoardLeft/DashBoardLeft";

const DashBoard = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="dashboard-layout flex container">
        <DashBoardLeft></DashBoardLeft>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;

import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Main from "../../Layouts/Main";
import About from "../../Pages/About/About";
import Appointment from "../../Pages/Appointment/Appointment";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import AddDoctor from "../../Pages/DashBoard/AddDoctor/AddDoctor";
import AllUsers from "../../Pages/DashBoard/AllUsers/AllUsers";
import DashBoard from "../../Pages/DashBoard/DashBoard";
import ManageDoctors from "../../Pages/DashBoard/ManageDoctors/ManageDoctors";
import MyAppointMent from "../../Pages/DashBoard/MyAppointment/MyAppointMent";
import Payment from "../../Pages/DashBoard/Payment/Payment";
import DisplayError from "../../Pages/DisplayError/DisplayError";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";
import Reviews from "../../Pages/Reviews/Reviews";
import AdminRoutes from "./AdminRoutes";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      {
        path: "/appointment",
        element: (
          <PrivateRoutes>
            <Appointment></Appointment>
          </PrivateRoutes>
        ),
      },
      { path: "/about", element: <About></About> },
      { path: "/reviews", element: <Reviews></Reviews> },
      { path: "/contactUs", element: <ContactUs></ContactUs> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <DisplayError></DisplayError>,
    element: (
      <PrivateRoutes>
        <DashboardLayout></DashboardLayout>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyAppointMent></MyAppointMent>,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoutes>
            <AllUsers></AllUsers>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/adddoctor",
        element: (
          <AdminRoutes>
            <AddDoctor></AddDoctor>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/managedoctors",
        element: (
          <AdminRoutes>
            <ManageDoctors></ManageDoctors>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        loader: async ({ params }) => {
          return fetch(
            `https://doctors-portal-server-indol-ten.vercel.app/bookings/${params.id}`
          );
        },
        element: (
          <AdminRoutes>
            <Payment></Payment>
          </AdminRoutes>
        ),
      },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import About from "../../Pages/About/About";
import Appointment from "../../Pages/Appointment/Appointment";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import DashBoard from "../../Pages/DashBoard/DashBoard";
import MyAppointMent from "../../Pages/DashBoard/DashBoardLeft/MyAppointment/MyAppointMent";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";
import Reviews from "../../Pages/Reviews/Reviews";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: "/dashboard/myAppointment",
        element: <MyAppointMent></MyAppointMent>,
      },
    ],
  },
]);

export default router;

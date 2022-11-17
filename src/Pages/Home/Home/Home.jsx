import React from "react";

import Appointment from "../Appoinment/Appointment";
import Banner from "../Banner/Banner";
import ContactInfo from "../ContactInfo/ContactInfo";
import DentalCare from "../DentalCare/DentalCare";
import HomeRegister from "../HomeRegister/HomeRegister";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ContactInfo></ContactInfo>
      <Services></Services>
      <DentalCare></DentalCare>
      <Appointment></Appointment>
      <Testimonials></Testimonials>
      <HomeRegister></HomeRegister>
    </div>
  );
};

export default Home;

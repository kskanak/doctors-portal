import React from "react";
import appoinmentImg from "../../../assets/images/appointment.png";
import doctorPng from "../../../assets/images/doctor.png";
import doctor from "../../../assets/images/doctor-small.png";
import PrimaryButton from "../../../Components/PrimaryButton";

const Appointment = () => {
  return (
    <div
      className="hero  text-white h-[533px]"
      style={{ background: `url(${appoinmentImg})` }}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            className=" rounded-lg shadow-2xl h-[613px] w-[606] -mt-24 hidden lg:block"
            alt=""
          />
          <div className="mx-5 md:mx-0">
            <h1 className="text-5xl font-bold text-secondary-accent">
              Appointment
            </h1>
            <h1 className="text-4xl font-bold mt-4">
              Make an appointment Today
            </h1>
            <p className="my-8 sm:mb-12">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web pagele English. Many desktop
              publishing packages and web page
            </p>
            <div className="">
              <PrimaryButton>Get Appoinment</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;

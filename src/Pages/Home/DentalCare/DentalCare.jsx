import React from "react";
import treatment from "../../../assets/images/treatment.png";
import PrimaryButton from "../../../Components/PrimaryButton";

const DentalCare = () => {
  return (
    <div className="mx-5 lg:mx-36 mb-44">
      <div className="hero">
        <div className="md:hero-content flex-col lg:flex-row text-custom-slate">
          <img
            src={treatment}
            className="max-w-sm  rounded-lg shadow-2xl mx-auto"
            alt=""
          />
          <div className="text-left rounded-sm w-full lg:h-[347px] lg:w-[497px] mt-16 lg:mt-0 lg:ml-28">
            <h1 className="text-5xl font-bold">
              Exceptional Dental <br /> Care, on Your Terms
            </h1>
            <p className="my-8 sm:mb-12">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <div className="">
              <PrimaryButton>Get Started</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;

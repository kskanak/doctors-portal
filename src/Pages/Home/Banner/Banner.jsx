import React from "react";
import bannerImg from "../../../assets/images/chair.png";
import bannerBgimg from "../../../assets/images/bg.png";
import PrimaryButton from "../../../Components/PrimaryButton";

const Banner = () => {
  return (
    <div className="mb-20 mx-5 md:mx-12">
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div
          className="banner-container relative flex  justify-center items-center flex-col-reverse md:p-6 mx-auto sm:pt-12 lg:pt-24 lg:flex-row lg:justify-between
          "
        >
          <img
            src={bannerBgimg}
            alt=""
            className="absolute h-[608px] w-[1240px] hidden md:block -z-40 opacity-50"
          />
          <div className="flex flex-col justify-center text-left rounded-sm md:h-[266px] md:w-[655px] mt-16 md:mt-0">
            <h1 className="text-5xl font-bold leading-none">
              Your New Smile Starts Here
            </h1>
            <p className="my-8 sm:mb-12">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <div className="">
              <PrimaryButton>Get Started</PrimaryButton>
            </div>
          </div>
          <div className="flex items-center justify-center md:p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={bannerImg}
              alt=""
              className="object-contain w-[594px] h-[355px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;

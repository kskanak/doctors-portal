import React from "react";
import bannerBgimg from "../../../assets/images/bg.png";
import bannerImg from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({
  setSelectedDate,
  selectedDate,
  setSelectedDate2,
  selectedDate2,
}) => {
  return (
    <div className="mx-5 md:mx-32">
      <section className="">
        <div
          className="banner-container relative flex  justify-center items-center flex-col-reverse md:p-6 sm:pt-12 lg:pt-24 lg:flex-row lg:justify-between
          "
        >
          <img
            src={bannerBgimg}
            alt=""
            className="absolute h-[608px] w-[1240px] hidden md:block -z-40 opacity-50"
          />

          <div className=" mt-16 md:mt-0 md:ml-24">
            <div className="card  p-3 shadow-xl">
              <DayPicker
                mode="single"
                selected={selectedDate}
                required
                onSelect={setSelectedDate}
              />
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

export default AppointmentBanner;

import React from "react";

const AvailableOptionsCard = ({ option, setTreatment }) => {
  const { name, slots } = option;
  return (
    <div className="w-[425px] mx-auto">
      <div className="card  shadow-lg border border-gray-100 text-custom-slate">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-semibold text-secondary-accent">
            {name}
          </h2>
          <p className="text-xs">
            {slots.length > 0 ? slots[0] : "Try Next Appoinment Day"}
          </p>
          <p className="text-xs">
            {slots.length > 0 ? slots.length : "No"}{" "}
            {slots.length > 1 ? "Spaces" : "Space"} Available..
          </p>
          <div className="card-actions justify-end">
            {/* <button className="p-4 rounded-lg font-bold text-white bg-gradient-to-r from-secondary-accent to-primary-sky">
              Book Appointment
            </button> */}
            <label
              htmlFor="Booking-modal"
              disabled={slots.length === 0}
              onClick={() => setTreatment(option)}
              className="btn border-none  p-3 rounded-lg font-bold text-white bg-gradient-to-r from-secondary-accent to-primary-sky cursor-pointer"
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableOptionsCard;

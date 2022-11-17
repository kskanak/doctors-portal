import React from "react";

const ServiceCard = ({ service }) => {
  const { name, info, icon } = service;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl  text-custom-slate border border-gray-100">
        <figure>
          <img src={icon} alt={name} className="h-28 w-28 mt-11" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>{info}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

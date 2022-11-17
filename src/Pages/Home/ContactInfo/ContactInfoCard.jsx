import React from "react";

const ContactInfoCard = ({ dataInfo }) => {
  const { name, icon, bgClass, info } = dataInfo;
  return (
    <div>
      <div
        className={` shadow-xl h-56  md:flex items-center justify-center md:justify-start px-6 rounded-lg mb-6 md:mb-0 ${bgClass}`}
      >
        <div className="card-icon flex justify-center py-6">
          {/* <AiOutlineClockCircle className="text-7xl text-white" /> */}
          <img src={icon} alt="" />
        </div>
        <div className="pl-6 text-white">
          <h2 className="card-title">{name}</h2>
          <p>{info}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCard;

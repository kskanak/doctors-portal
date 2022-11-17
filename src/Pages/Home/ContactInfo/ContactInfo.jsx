import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import ContactInfoCard from "./ContactInfoCard";

const contactInfoData = [
  {
    id: 1,
    name: "Opening Hours",
    info: "Open 9.00 am  to 5.00 pm",
    icon: clock,
    bgClass: "bg-gradient-to-r from-primary-sky to-secondary-accent",
  },
  {
    id: 2,
    name: "Visit our location",
    info: "Brooklyn, NY 10036, United States",
    icon: marker,
    bgClass: "bg-custom-slate",
  },
  {
    id: 3,
    name: "Contact us now",
    info: "+000 123 456789",
    icon: phone,
    bgClass: "bg-gradient-to-r from-secondary-accent to-primary-sky",
  },
];

const ContactInfo = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mx-5">
      {contactInfoData.map((dataInfo) => (
        <ContactInfoCard
          key={dataInfo.id}
          dataInfo={dataInfo}
        ></ContactInfoCard>
      ))}
    </div>
  );
};

export default ContactInfo;

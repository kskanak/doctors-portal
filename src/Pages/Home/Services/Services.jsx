import React from "react";
import Fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Fluoride Treatment",
      info: "Dentists provide professional fluoride treatments in the form of a highly concentrated rinse, foam, gel, or varnish.",
      icon: Fluoride,
    },
    {
      id: 2,
      name: "Cavity Filling",
      info: " A dental filling treats tooth decay. Having a filling can prevent further damage, reduce the risks of pain and infection.",
      icon: cavity,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      info: "Teeth whitening involves bleaching your teeth to make them lighter. It can't make your teeth brilliant white.",
      icon: whitening,
    },
  ];
  return (
    <div className="my-36 mx-5">
      <div className="service-intro text-center mb-16">
        <h2 className="text-xl font-bold text-secondary-accent">
          OUR SERVICES
        </h2>
        <p className="text-4xl text-custom-slate">Services We Provide</p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;

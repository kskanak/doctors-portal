import React from "react";
import quote from "../../../assets/icons/quote.svg";
import img1 from "../../../assets/images/people1.png";
import img2 from "../../../assets/images/people2.png";
import img3 from "../../../assets/images/people3.png";
import TestimonialsCard from "./TestimonialsCard";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Winston Harry",
      info: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: img1,
      address: " Calofornia",
    },
    {
      id: 2,
      name: "Andrew Flemio",
      info: " It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: img2,
      address: "NewYork ",
    },
    {
      id: 3,
      name: "Eeonxi Morgan",
      info: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: img3,
      address: "San-Francisco ",
    },
  ];

  return (
    <div className="mx-5 md:mx-20   my-24">
      <div className="testimonials-intro flex justify-between">
        <div className="titles">
          <h1 className="text-xl font-bold text-secondary-accent">
            Testimonial
          </h1>
          <h1 className="text-4xl">What Our Patients Says</h1>
        </div>
        <img src={quote} alt="" className="w-24 h-20 md:h-40 md:w-48" />
      </div>
      <div className="testimonials grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
        {testimonialsData.map((data) => (
          <TestimonialsCard key={data.id} data={data}></TestimonialsCard>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

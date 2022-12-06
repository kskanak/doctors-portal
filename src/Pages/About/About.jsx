import React from "react";

const About = () => {
  return (
    <div className="px-16 md:px-32">
      <h1 className="text-4xl font-bold text-center text-secondary-accent">
        About Us
      </h1>
      <div className="our-mission my-6">
        <h2 className="text-2xl font-semibold">Our Mission:</h2>
        <p>
          The Health Center's mission is to ensure access, and to provide high
          quality prevention-focused health care for the communities we serve.
        </p>
      </div>
      <div className="our-visiion">
        <h2 className="text-2xl font-semibold">Our vision:</h2>
        <p>
          It is the vision of the Health Center to foster a healthy community
          where all individuals reach their highest potential for health and
          well-being.
        </p>
      </div>
      <div className="our-values my-6">
        <h2 className="text-2xl font-semibold">Our Values:</h2>
        <ul className="list-disc">
          <li className="ml-12 my-1">We strive for Excellence in all we do.</li>
          <li className="ml-12">We are Dependable.</li>
          <li className="ml-12">
            We are Dependable. We are committed to Collaboration.
          </li>
          <li className="ml-12">We boldly Innovate.</li>
          <li className="ml-12">We view our world with Optimism.</li>
          <li className="ml-12">We develop Trust with everyone.</li>
        </ul>
      </div>
      <div className="inovation">
        <h2 className="text-2xl font-semibold my-2">Innovation</h2>
        <p>
          PHC is widely recognized for our innovation and has been on the
          leading edge of team based care since 2007, emphasizing overall
          wellness and the value of the patient provider relationship. Our new
          endeavors include:
        </p>
        <ul className="list-disc">
          <li className="ml-12 my-1">We strive for Excellence in all we do.</li>
          <li className="ml-12">We are Dependable.</li>
          <li className="ml-12">
            We are Dependable. We are committed to Collaboration.
          </li>
          <li className="ml-12">
            Digital Health Programs for diabetes prevention
          </li>
          <li className="ml-12">
            A Nurse Practitioner and Physician’s Assistant Residency Program
          </li>
          <li className="ml-12">
            A Behavioral and Mental Health Post Doctorate Fellowship Program to
            expand our services and more..
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;

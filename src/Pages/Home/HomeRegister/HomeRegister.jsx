import React from "react";
import banner from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../Components/PrimaryButton";

const HomeRegister = () => {
  return (
    <section
      className="text-center text-white h-[533px] flex flex-col justify-center items-center"
      style={{ background: `url(${banner})` }}
    >
      <div className="titles">
        <h1 className="text-xl font-bold text-secondary-accent">Testimonial</h1>
        <h1 className="text-4xl mb-10">What Our Patients Says</h1>
      </div>
      <form action="" className="flex flex-col">
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered input-accent  w-[450px]"
        />
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered input-accent my-5 w-[450px]"
        />
        <div className="msg-area">
          <textarea
            className="textarea textarea-accent w-[450px] text-slate-900"
            placeholder="Message"
          ></textarea>
        </div>
        <div className="submitBtn mt-9">
          {" "}
          <PrimaryButton> Submit</PrimaryButton>
        </div>
      </form>
    </section>
  );
};

export default HomeRegister;

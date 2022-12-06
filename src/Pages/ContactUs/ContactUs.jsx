import React from "react";

const ContactUs = () => {
  return (
    <div className="px-16 md:px-32">
      <h2 className="text-3xl font-bold text-secondary-accent text-center">
        Contact Info
      </h2>
      <div className="opening-time">
        <h2 className="text-2xl font-semibold  my-3">Opening Time</h2>
        <ul className="list-disc ml-12">
          <li>9am-8pm Monday to Wednesday</li>
          <li>9am-5pm Thursday</li>
          <li>9am-6pm Friday</li>
          <li> 8am to 3pm Saturday</li>
        </ul>
        <h2 className="text-2xl font-semibold  my-3">Call: 01708 933261</h2>
      </div>
      <div className="emargency-contact">
        <h2 className="text-2xl font-semibold  my-3">EMERGENCY DENTIST</h2>
        <p>
          We are open late evenings and on Saturdays. We offer same day
          emergency appointments for New and Existing patients. <br /> Please
          call the office immediately on 01708 933261.
        </p>
      </div>
      <div className="emargency-contact">
        <h2 className="text-2xl font-semibold  my-3">OUT OF HOURS EMERGENCY</h2>
        <p>
          If we are closed or are unable to answer your call in the surgery,
          please call the dentist directly on 01708 361995.
        </p>
      </div>
      <div className="emargency-contact">
        <h2 className="text-2xl font-semibold  my-3">
          DENTIST OPEN ON A SATURDAY AND SUNDAY
        </h2>
        <p>
          On Saturdays from 8am till 3pm and on Sunday by appointment only. We
          offer out of hours emergency and same day emergency on both Saturday
          and Sunday.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;

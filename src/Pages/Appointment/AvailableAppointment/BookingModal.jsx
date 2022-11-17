import { format } from "date-fns";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../contexts/AuthProvider";

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
  const { user } = useContext(AuthContext);
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const patientName = form.name.value;
    const phone = form.phoneNumber.value;
    const email = form.email.value;
    const timeSlot = form.slot.value;
    const treatmentName = name;
    const booking = {
      patientName,
      phone,
      email,
      timeSlot,
      appointment: date,
      treatmentName,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Booking Confirmed");
          form.reset();
          refetch();
          setTreatment(null);
        } else {
          toast.error(data.message);
        }
      })
      .catch((error) => console.log(error.message));
    console.log(booking);
  };
  return (
    <>
      <input type="checkbox" id="Booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <h2 className="font-semibold text-2xl">{name}</h2>
          <label
            htmlFor="Booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          {/* booking form */}

          <div className="hero mt-11">
            <form onSubmit={handleBookingSubmit}>
              <input
                type="text"
                placeholder={date}
                readOnly
                className="input input-bordered w-full mb-6 bg-gray-300 text-gray-900 placeholder-custom-slate text-lg font-semibold"
              />
              <select
                name="slot"
                required
                className="select select-bordered w-full mb-6"
              >
                <option selected>Select Time</option>
                {/* <option>Han Solo</option>
                <option>Greedo</option> */}
                {slots.map((slot, index) => (
                  <option value={slot} key={index}>
                    {slot}
                  </option>
                ))}
              </select>
              <input
                type="text"
                readOnly
                name="name"
                defaultValue={user?.displayName}
                placeholder="Full Name"
                className="input input-bordered  w-full mb-6 text-gray-900 font-semibold "
              />
              <input
                type="text"
                placeholder="Phone Number"
                name="phoneNumber"
                required
                className="input input-bordered  w-full mb-6 text-gray-900 font-semibold"
              />
              <input
                type="email"
                name="email"
                readOnly
                placeholder="Email"
                defaultValue={user?.email}
                className="input input-bordered  w-full mb-6 text-gray-900 font-semibold"
              />

              <button className="w-full ">
                <label htmlFor="Booking-modal" className="btn w-full">
                  Submit
                </label>
              </button>
            </form>
          </div>

          {/* booking form */}
        </div>
      </div>
    </>
  );
};

export default BookingModal;

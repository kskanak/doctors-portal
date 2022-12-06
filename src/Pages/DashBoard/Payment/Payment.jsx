import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_stripe_key);
const Payment = () => {
  const booking = useLoaderData();
  const { appointment, email, patientName, treatmentName, price } = booking;

  return (
    <div className="mt-28 px-14">
      <h2 className="text-2xl">payment for {treatmentName}</h2>
      <h2 className="text-2xl">
        Please pay Fee <strong>{price}</strong> for the appoinment for Date :{" "}
        {appointment}
      </h2>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ booking }) => {
  const { price, patientName, email, _id } = booking;
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transectionId, setTransectionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    fetch(
      "https://doctors-portal-server-indol-ten.vercel.app/create-payment-intent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("AppointmentToken")}`,
        },

        body: JSON.stringify({ price }),
      }
    )
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardError(error);
    } else {
      setCardError("");
    }
    setSuccess("");
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: email,
          },
        },
      });
    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    console.log(paymentIntent);
    if (paymentIntent.status === "succeeded") {
      setSuccess("Congrates payment completed");
      setTransectionId(paymentIntent.id);
      setProcessing(false);
      const payment = {
        price: paymentIntent.amount,
        email,
        transectionId: paymentIntent.id,
        bookingId: _id,
      };
      // store payment to db
      fetch("https://doctors-portal-server-indol-ten.vercel.app/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("AppointmentToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => console.log(error));
    }
  };
  console.log(success, transectionId);
  return (
    <form
      onSubmit={handleSubmit}
      className="my-10 border p-5 rounded-lg shadow-lg"
    >
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "20px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-sm btn-accent my-4"
        type="submit"
        disabled={!stripe || !elements || processing}
      >
        Pay
      </button>
      {cardError && (
        <p className="font-semi text-red-400">{cardError.message}</p>
      )}
      {success && (
        <>
          <p className="text-lime-600">{success}</p>
          <p className="text-lime-600">Your Transection Id : {transectionId}</p>
        </>
      )}
    </form>
  );
};

export default CheckoutForm;

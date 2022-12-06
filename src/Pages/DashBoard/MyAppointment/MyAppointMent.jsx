import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../contexts/AuthProvider";
import { FcCancel } from "react-icons/fc";

const MyAppointMent = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;

  const {
    data: userBookings = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bookings", "email"],
    queryFn: async () => {
      const res = await fetch(
        `https://doctors-portal-server-indol-ten.vercel.app/bookings/?email=${email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("AppointmentToken")}`,
          },
        }
      );
      const data = await res.json();

      return data;
    },
  });
  console.log(userBookings);
  // cancel appointme4nt
  const handleCancleAppointment = (_id) => {
    Swal.fire({
      title: `You sure wanna cancle appointment?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://doctors-portal-server-indol-ten.vercel.app/bookings/${_id}`,
          {
            method: "DELETE",
            headers: {
              authorization: `Bearer ${localStorage.getItem(
                "AppointmentToken"
              )}`,
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Canceled!",
                "Your appointment has been cancel.",
                "success"
              );
              refetch();
            }
          })
          .catch((error) => console.log(error));
      }
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
      </div>
    );
  }
  return (
    <div className="mt-28 px-14">
      <h2 className="text-2xl">My Appointment</h2>

      <div className="overflow-x-auto  rounded-lg mt-6">
        <table className="table w-full table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatement</th>
              <th>Date</th>
              <th>Time</th>
              <th>Cancel</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {userBookings?.length &&
              userBookings?.map((booking, index) => {
                return (
                  <tr className="hover" key={index}>
                    <th>{index + 1}</th>
                    <td>{booking.patientName}</td>
                    <td>{booking.treatmentName}</td>
                    <td>{booking.appointment}</td>
                    <td>{booking.timeSlot}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-warning"
                        onClick={() => handleCancleAppointment(booking._id)}
                      >
                        <FcCancel className="text-2xl" /> Cancel
                      </button>
                    </td>
                    <td>
                      {booking?.price && !booking.paid && (
                        <Link to={`/dashboard/payment/${booking._id}`}>
                          <button className="btn btn-sm btn-accent">Pay</button>
                        </Link>
                      )}
                      {booking?.price && booking?.paid && <span>Paid</span>}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointMent;

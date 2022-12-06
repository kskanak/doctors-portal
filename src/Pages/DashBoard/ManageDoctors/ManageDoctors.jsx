import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageDoctors = () => {
  const {
    data: doctors = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `https://doctors-portal-server-indol-ten.vercel.app/doctors`,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem(
                "AppointmentToken"
              )}`,
            },
          }
        );
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error.message);
      }
    },
  });

  const handleDeleteDoctor = (doctor) => {
    Swal.fire({
      title: `You sure wanna delete ${doctor.name}?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://doctors-portal-server-indol-ten.vercel.app/doctors/${doctor?._id}`,
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
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
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
    <div className="mt-8 px-14">
      <h2 className="text-2xl">Manage Doctors</h2>
      <div className="overflow-x-auto  rounded-lg mt-6">
        <table className="table w-full table-zebra">
          <thead>
            <tr>
              <th>Serial</th>
              <th>User Id</th>
              <th>User</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors?.length &&
              doctors?.map((doctor, index) => {
                return (
                  <tr className="hover" key={index}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="avatar">
                        <div className="w-8 rounded-full">
                          <img src={doctor.image} alt="" />
                        </div>
                      </div>
                    </td>
                    <td>{doctor.name}</td>
                    <td>{doctor.speciality}</td>
                    <td>
                      <FaRegTrashAlt
                        className="text-2xl text-red-600 cursor-pointer"
                        onClick={() => handleDeleteDoctor(doctor)}
                      />{" "}
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

export default ManageDoctors;

import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://doctors-portal-server-indol-ten.vercel.app/users"
      );
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdmion = (id) => {
    fetch(
      `https://doctors-portal-server-indol-ten.vercel.app/users/admin/${id}`,
      {
        method: "PUT",
        headers: {
          authorization: `Bearer ${localStorage.getItem("AppointmentToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.info("Admin role given");
          refetch();
        }
      })
      .catch((error) => console.log(error.message));
  };

  const handleDeleteUsers = (user) => {
    Swal.fire({
      title: `You sure wanna delete ${user.user}?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://doctors-portal-server-indol-ten.vercel.app/users/${user?._id}`,
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
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              refetch();
            }
          })
          .catch((error) => console.log(error));
      }
    });
  };

  return (
    <div className="mt-8 px-14">
      <h2 className="text-2xl">All Users</h2>
      <div className="overflow-x-auto  rounded-lg mt-6">
        <table className="table w-full table-zebra">
          <thead>
            <tr>
              <th>Serial</th>
              <th>User Id</th>
              <th>User</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users?.length &&
              users?.map((user, index) => {
                return (
                  <tr className="hover" key={index}>
                    <th>{index + 1}</th>
                    <td>{user._id}</td>
                    <td>{user.user}</td>
                    <td>{user.email}</td>
                    <td>
                      {user?.role === "admin" ? (
                        <button className="btn btn-sm btn-primary">
                          Admin
                        </button>
                      ) : (
                        <button
                          className="btn btn-sm btn-accent"
                          onClick={() => handleMakeAdmion(user?._id)}
                        >
                          pending
                        </button>
                      )}
                    </td>
                    <td>
                      <FaRegTrashAlt
                        className="text-2xl text-red-600 cursor-pointer"
                        onClick={() => handleDeleteUsers(user)}
                      />
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

export default AllUsers;

import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddDoctor = () => {
  const imgbbKey = process.env.REACT_APP_imgbb_key;
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleAddDoctor = (data) => {
    const image = data.photo[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgbbKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          const doctor = {
            name: data.name,
            speciality: data.speciality,
            email: data.email,
            image: imageData.data.image.url,
          };
          // save doctor information to db
          fetch("https://doctors-portal-server-indol-ten.vercel.app/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem(
                "AppointmentToken"
              )}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
              toast.success(`${data.name} added successfully`);

              navigate("/dashboard/managedoctors");
            })
            .catch((error) => error.message);
        }
      })
      .catch((error) => console.log(error.message));
  };

  const { data: doctorspecialties = [], isLoading } = useQuery({
    queryKey: ["doctorspeciality"],
    queryFn: async () => {
      const res = await fetch(
        "https://doctors-portal-server-indol-ten.vercel.app/doctorspeciality"
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
      </div>
    );
  }

  return (
    <div className="mt-8 px-14">
      <h2 className="text-2xl">All Users</h2>
      <form
        onSubmit={handleSubmit(handleAddDoctor)}
        className="w-[540px] rounded-lg bg-white p-12 mt-8"
      >
        {/* name input  */}
        <div className="space-y-1 text-sm mb-4">
          <label
            htmlFor="name"
            className="block dark:text-gray-400 font-medium"
          >
            Name
          </label>

          <input
            type="text"
            className="w-full px-4 py-3 rounded-md input input-bordered "
            {...register("name", { required: "User name is required" })}
          />
          {errors.name && (
            <div className="flex items-center text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-red-400 flex-shrink-0 w-6 h-6 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>{errors.name?.message}</span>
            </div>
          )}
        </div>

        {/*email input  */}

        <div className="space-y-1 text-sm mb-4">
          <label
            htmlFor="email"
            className="block dark:text-gray-400 font-medium"
          >
            Email
          </label>

          <input
            type="email"
            className="w-full px-4 py-3 rounded-md input input-bordered "
            {...register("email", {
              required: "Must provide a Email Address",
            })}
          />
          {errors.email && (
            <div className="flex items-center text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-red-400 flex-shrink-0 w-6 h-6 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>{errors.email?.message}</span>
            </div>
          )}
        </div>

        {/* spciality  */}
        <div className="space-y-1 text-sm mb-4">
          <label
            htmlFor="specialtiy"
            className="block dark:text-gray-400 font-medium"
          >
            Speciality
          </label>
          <select
            name="slot"
            required
            {...register("speciality", { required: "Add Speciality" })}
            className="select select-bordered w-full mb-3 mt-2"
          >
            <option selected disabled>
              Select Speciality
            </option>
            {doctorspecialties.map((speciality) => (
              <option key={speciality?._id} value={speciality?.name}>
                {speciality?.name}
              </option>
            ))}
          </select>
        </div>

        {/* image input  */}
        <div className="space-y-1 text-sm mb-4">
          <label
            htmlFor="name"
            className="block dark:text-gray-400 font-medium"
          >
            Image
          </label>

          <input
            type="file"
            className="w-full px-4 py-3 rounded-md input input-bordered "
            {...register("photo", { required: "Photo is required" })}
          />
          {errors.name && (
            <div className="flex items-center text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-red-400 flex-shrink-0 w-6 h-6 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>{errors.photo?.message}</span>
            </div>
          )}
        </div>

        <input type="submit" className="w-full btn " value="ADD" />
      </form>
    </div>
  );
};

export default AddDoctor;

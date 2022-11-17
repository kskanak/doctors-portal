import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AvailableOptionsCard from "./AvailableOptionsCard";
import BookingModal from "./BookingModal";

const AvailableAppointment = ({ selectedDate }) => {
  const date = format(selectedDate, "PP");

  // const [availableOptions, setAvailableOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const {
    data: availableOptions = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["appoinmentOptions", date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/appoinmentOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    <div className="flex items-center justify-center h-96">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    </div>;
  }
  return (
    <div className="mx-5 my-32">
      <p className="text-2xl text-secondary-accent text-center font-medium">
        Available Appointments on {format(selectedDate, "PP")}
      </p>
      <div className="available-options grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-24">
        {availableOptions.map((option) => (
          <AvailableOptionsCard
            key={option._id}
            option={option}
            setTreatment={setTreatment}
          ></AvailableOptionsCard>
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          selectedDate={selectedDate}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;

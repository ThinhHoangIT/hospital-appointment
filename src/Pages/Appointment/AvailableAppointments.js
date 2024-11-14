import { format } from "date-fns";
import React, { useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointments = ({ departments, date }) => {
  const [bookDepartment, setBookDepartment] = useState(null);

  return (
    <div className="my-10">
      <h4 className="text-xl text-secondary text-center my-12">
        Available Appointments on {format(date, "PP")}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {departments &&
          departments?.map((department) => (
            <Service
              key={department.id}
              department={department}
              setDepartment={setBookDepartment}
            ></Service>
          ))}
      </div>
      {bookDepartment && (
        <BookingModal date={date} department={bookDepartment}></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;

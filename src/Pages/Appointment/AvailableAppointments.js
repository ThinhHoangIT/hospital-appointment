import { format, isAfter, isSameDay } from "date-fns";
import React, { useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointments = ({ departments, date, appointments }) => {
  const [bookDepartment, setBookDepartment] = useState(null);

  const isDepartmentBookable = (departmentId) => {
    const appointmentsForDepartment = appointments.filter((appointment) => {
      const appointmentDate = new Date(appointment.date);
      return (
        appointment.departmentId === departmentId &&
        (isAfter(appointmentDate, new Date()) ||
          isSameDay(appointmentDate, new Date()))
      );
    });

    const appointmentsForToday = appointmentsForDepartment.filter(
      (appointment) => isSameDay(new Date(appointment.date), date)
    );

    return (
      appointmentsForToday.length < 10 &&
      !appointmentsForDepartment.some(
        (appointment) => appointment.status === "pending"
      )
    );
  };

  return (
    <div className="my-10">
      <h4 className="text-xl text-secondary text-center my-12">
        Đặt hẹn ngày {format(date, "dd/MM/yyyy")}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {departments &&
          departments?.map((department) => (
            <Service
              key={department.id}
              department={department}
              setDepartment={
                isDepartmentBookable(department.id) ? setBookDepartment : null
              }
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

import React from "react";

const Service = ({ department, setDepartment }) => {
  return (
    <div className="card lg:max-w-lg w-full bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-xl font-bold text-secondary">{department.name}</h2>
        <div className="card-actions justify-center">
          <label
            htmlFor="booking-modal"
            onClick={() => setDepartment(department)}
            className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;

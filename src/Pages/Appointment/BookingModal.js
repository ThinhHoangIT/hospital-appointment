import React, { useState } from "react";
import { format } from "date-fns";
import { toast } from "react-toastify";
import storage from "../../storage";
import api from "../../services/api";

const BookingModal = ({ date, department }) => {
  const user = storage.getUser();
  const [shift, setShift] = useState("morning");

  const handleBooking = (event) => {
    event.preventDefault();
    const booking = {
      userId: user._id,
      departmentId: department.id,
      date: date.valueOf(),
      shift,
    };
    api
      .createAppointment(booking)
      .then((response) => {
        toast.success("Booking success");
        document.getElementById("booking-modal").checked = false;
      })
      .catch((error) => {
        console.log("Booking error", error);
        toast.error("Booking failed");
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">
            Đặt hẹn: {department.name}
          </h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 justify-items-center mt-2"
          >
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="name"
              disabled
              value={user?.name || ""}
              className="input input-bordered w-full max-w-xs"
            />
            <select
              value={shift}
              onChange={(e) => setShift(e.target.value)}
              className="select select-bordered w-full max-w-xs"
            >
              <option value="morning">Ca sáng</option>
              <option value="evening">Ca tối</option>
            </select>
            <input
              type="submit"
              value="Submit"
              className="btn btn-secondary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;

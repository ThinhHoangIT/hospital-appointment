import React, { useEffect, useState } from "react";
import api from "../../services/api";
import storage from "../../storage";
import { formatFullDate } from "../../commons/utils";
import AppointmentDetail from "./AppointmentDetail";

export const getDepartmentName = (id) => {
  switch (id) {
    case "ent":
      return "Tai Mũi Họng";
    case "dental":
      return "Nha Khoa";
    case "dermatology":
      return "Da Liễu";
    case "heart":
      return "Tim Mạch";
    case "pediatrics":
      return "Nhi Khoa";
  }
};

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const user = storage.getUser();

  useEffect(() => {
    api
      .getAppointmentsByUserId(user._id)
      .then((res) => {
        setAppointments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleRowClick = (appointment) => {
    setSelectedAppointment(appointment);
  };

  const handleBackClick = () => {
    setSelectedAppointment(null);
  };

  return (
    <div>
      {selectedAppointment ? (
        <div>
          <button
            onClick={handleBackClick}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Quay lại
          </button>
          <AppointmentDetail appointment={selectedAppointment} />
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold mb-4">
            My Appointments: {appointments?.length}
          </h2>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Date</th>
                  <th>Treatment</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {appointments?.map((a, index) => (
                  <tr
                    key={a._id}
                    onClick={() => handleRowClick(a)}
                    className="hover:bg-gray-100 cursor-pointer"
                  >
                    <th>{index + 1}</th>
                    <td>{formatFullDate(a.date)}</td>
                    <td>{getDepartmentName(a.departmentId)}</td>
                    <td>
                      {a.status === "pending" && (
                        <span className="badge badge-warning">Đang chờ</span>
                      )}
                      {a.status === "approved" && (
                        <span className="badge badge-success">Đã khám</span>
                      )}
                      {a.status === "rejected" && (
                        <span className="badge badge-error">Đã hủy</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAppointments;

import React, { useEffect, useState } from "react";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointments from "./AvailableAppointments";
import api from "../../services/api";
import { toast } from "react-toastify";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(false);

  const getDepartments = (query) => {
    if (loading) {
      return;
    }
    setLoading(true);
    api
      .getDepartments(query)
      .then((response) => {
        const hospitalDepartments = response.data.filter(
          (department) => department.type === "hospital"
        );
        setDepartments(hospitalDepartments);
      })
      .catch((error) => {
        console.log("Get departments error", error);
        toast.error("Tải danh sách thất bại");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getDepartments();
  }, []);

  return (
    <div>
      <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
      <AvailableAppointments
        date={date}
        departments={departments}
      ></AvailableAppointments>
    </div>
  );
};

export default Appointment;

import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { formatFullDate, formatFullDateTime } from "../../commons/utils";
import { getDepartmentName } from "./MyAppointments";

const AppointmentDetail = ({ appointment }) => {
  const [invoice, setInvoice] = useState({});

  useEffect(() => {
    api
      .getInvoiceByAppointmentId(appointment._id)
      .then((res) => {
        setInvoice(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [appointment]);

  console.log(appointment);

  return (
    <div className="appointment-detail bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Chi tiết lịch hẹn</h2>
      <div className="mb-2">
        <strong>Ngày hẹn:</strong> {formatFullDate(appointment.date)}
      </div>
      <div className="mb-2">
        <strong>Giờ khám:</strong> {formatFullDateTime(invoice?.createdAt)}
      </div>
      <div className="mb-2">
        <strong>Chuyên khoa:</strong>{" "}
        {getDepartmentName(invoice?.appointment?.departmentId)}
      </div>
      <div className="mb-2">
        <strong>Đơn thuốc:</strong>
        <ul className="medication-list">
          {invoice?.medication?.map((med, index) => (
            <li key={index} className="medication-item">
              {med}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-2">
        <strong>Tổng tiền:</strong> {invoice?.amount || 0} VNĐ
      </div>
      <div className="mb-2">
        <strong>Bệnh án:</strong> {invoice?.desc || "Không có ghi chú"}
      </div>
      <div className="mb-2">
        <strong>Trạng thái: </strong>
        {appointment.status === "pending" && (
          <span className="badge badge-warning">Đang chờ</span>
        )}
        {appointment.status === "approved" && (
          <span className="badge badge-success">Đã khám</span>
        )}
        {appointment.status === "rejected" && (
          <span className="badge badge-error">Đã hủy</span>
        )}
      </div>
    </div>
  );
};

export default AppointmentDetail;

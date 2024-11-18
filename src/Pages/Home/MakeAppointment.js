import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="flex justify-center items-center"
    >
      <div className="flex-1 hidden lg:block">
        <img
          className="mt-[-100px]"
          src={doctor}
          alt=""
          data-aos="fade-right"
          data-aos-duration="3000"
        />
      </div>
      <div className="flex-1 px-5" data-aos="zoom-in" data-aos-duration="3000">
        <h3 className="text-xl text-primary font-bold">Đặt hẹn</h3>
        <h2 className="text-3xl text-white py-5">Đặt hẹn ngay hôm nay</h2>
        <p className="text-white pb-5">
          Đặt hẹn ngay hôm nay để nhận được dịch vụ tốt nhất từ chúng tôi
        </p>
        <PrimaryButton>Bắt đầu</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;

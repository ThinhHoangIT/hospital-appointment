import React from "react";
import hospital from "../../assets/images/hospital.jpg";
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
  return (
    <div className="hero min-h-screen relative">
      {/* Ảnh nền */}
      <img
        src={hospital}
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        data-aos="zoom-in"
        data-aos-duration="2000"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white" />

      <div className="relative flex flex-col lg:flex-row-reverse items-start lg:items-center mx-auto px-6 text-[#274d52]">
        <div>
          <h1
            className="text-5xl font-bold"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Chăm sóc sức khỏe của bạn
          </h1>
          <p
            className="py-6 text-justify"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="1000"
          >
            Có gì cũng được trừ có bệnh, không có gì cũng được trừ không có
            tiền, thiếu gì cũng được trừ thiếu sức khỏe. Sức khỏe không phải là
            tất cả nhưng không có sức khỏe sẽ chẳng có thứ gì!
          </p>
          <PrimaryButton>Appointment</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;

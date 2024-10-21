import React from "react";
import chair from "../../assets/images/chair.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
  return (
    <div className="hero min-h-screen">
      <div className=" flex flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="w-full lg:max-w-sm rounded-lg shadow-2xl"
          data-aos="zoom-in"
          data-aos-duration="4000"
        />
        <div>
          <h1
            className="text-5xl font-bold"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            Chăm sóc sức khỏe của bạn
          </h1>
          <p
            className="py-6"
            data-aos="fade-right"
            data-aos-duration="3000"
            data-aos-delay="2000"
          >
            Bảo vệ sức khỏe của bạn và gia đình với dịch vụ chăm sóc sức khỏe
          </p>
          <PrimaryButton>Đặt hẹn ngay</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;

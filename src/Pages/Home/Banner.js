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
            Take care of your health
          </h1>
          <p
            className="py-6 text-justify"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="1000"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor. Nullam euismod, elit nec lacinia
            ultrices, urna ex ultricies libero, nec facilisis risus nunc ac
            libero.
          </p>
          <PrimaryButton>Appointment</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;

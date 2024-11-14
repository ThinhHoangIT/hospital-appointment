import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Infos = [
  {
    _id: 1,
    img: clock,
    cardTitle: "Working Hours",
    desc: "Thứ 2 - Thứ 6",
    bgClass: "bg-gradient-to-r from-secondary to-primary",
  },
  {
    _id: 2,
    img: marker,
    cardTitle: "Address",
    desc: "1234 Quang Trung, P.10, Gò Vấp, TP.HCM",
    bgClass: "bg-neutral",
  },
  {
    _id: 3,
    img: phone,
    cardTitle: "Contact Us",
    desc: "0123 456 789",
    bgClass: "bg-gradient-to-r from-secondary to-primary",
  },
];

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {Infos.map((info) => (
        <InfoCard
          id={info._id}
          img={info.img}
          cardTitle={info.cardTitle}
          desc={info.desc}
          bgClass={info.bgClass}
        ></InfoCard>
      ))}
    </div>
  );
};

export default Info;

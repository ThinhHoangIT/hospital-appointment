import React from "react";

const InfoCard = ({ id, img, desc, cardTitle, bgClass }) => {
  console.log(id);

  return (
    <div
      className={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <figure className="pl-5 pt-5">
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{cardTitle}</h2>
        <span>{desc}</span>
        {id === 1 && (
          <div>
            <p>7:30 - 17:30</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoCard;

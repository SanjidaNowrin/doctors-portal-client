import React from "react";

const InfoCard = ({ img, cardTitle, bgClass }) => {
  return (
    <div className={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
      <figure className="pt-5 pl-5">
        <img src={img} />
      </figure>
      <div className="text-white card-body">
        <h2 className="card-title">{cardTitle}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCard;

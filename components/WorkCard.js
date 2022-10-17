import React from "react";
import Tag from "./Tag";

function WorkCard() {
  return (
    <div className="workCard">
      <h3 style={{ fontWeight: "bolder" }}>Mediaid</h3>
      <h4>
        Telemedicine Application for booking and consulting health providers
      </h4>
      <div className="">
        <Tag tag="UI Design" />
        <Tag tag="UX Design" />
        <Tag tag="Development" />
      </div>
    </div>
  );
}

export default WorkCard;

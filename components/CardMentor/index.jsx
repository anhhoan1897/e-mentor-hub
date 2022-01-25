import React from "react";
import Image from "next/image";
import ourMentor from "../../assets/images/our-mentor-2.png";

export default function CardMentor() {
  return (
    <div className="item">
      <div className="inner bg-white">
        <div className="top m-bottom-50">
          <h6 className="title cl-black fz-20 fw-600 m-bottom-15">
            Software Engineer and Client Management
          </h6>
          <div className="content m-bottom-10">
            Being project leads to many global clients in the past decade has
            granted him an impressive career path.
          </div>
        </div>
        <div className="bottom d-flex">
          <div className="img">
            <Image
              src={ourMentor}
              className="attachment-full size-full"
              alt=""
            />
          </div>
          <div className="person">
            <div className="name cl-black fw-600">Long Nguyen</div>
            <div className="position">Technology Lead & Software Engineer</div>
          </div>
        </div>
      </div>
    </div>
  );
}

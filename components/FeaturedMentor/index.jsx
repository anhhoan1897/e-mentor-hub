import React from "react";
import { Carousel } from '@trendyol-js/react-carousel';
import CardMentor from "../CardMentor";

export default function FeaturedMentor() {
  return (
    <section className="featured-mentor p-top-40 p-bottom-80 bg-blue">
      <div className="container">
        <div className="group_title text-center">
          <h2 className="cl-black fz-30 fw-600 m-bottom-30">
            Featured Mentors
          </h2>
        </div>
        <div className="featured-mentor_sliders">
        <Carousel show={3.5} slide={3} swiping={true}>
          <CardMentor/>
          <CardMentor/>
          <CardMentor/>
          <CardMentor/>
          <CardMentor/>
        </Carousel>
        </div>
      </div>
    </section>
  );
}

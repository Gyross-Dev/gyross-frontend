import React from "react";
import { Link } from "react-router-dom";
import CustomCarousel from "../utils/carousel/Carousel";
import MapWrapper from "../maps/MapContainer.component";
import Companies from "./companies/Companies";
import OurService from "./our-service/OurService";
import "./BodyContainer.scss";
import Image from "../assets/vendor/shah_halal_comp.jpg";
const BodyContainer = () => {
  const imageArr = [
    {
      title: "Shah Halal",
      src: Image,
      description: "Heart of Ozone Park Halal food vendor",
    },
    {
      title: "Foodcart",
      src:
        "https://images.unsplash.com/photo-1530649325239-1c2ebf1e3f07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
      description: "Bmcc Manhattan",
    },
    {
      title: "Foodcart",
      src:
        "https://images.unsplash.com/photo-1547620917-786ebcbc55af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
      description: "Late night best Gyross",
    },
    {
      title: "Foodcart",
      src:
        "https://images.unsplash.com/photo-1471110338536-858caa3dbe45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
      description: "Can't be better",
    },
  ];
  return (
    <div className="body-container">
      <div className="top-first">
        <div className="carousel-container">
          <CustomCarousel arr={imageArr} />
        </div>
        <div className="paragraph">
          <p>
            Are you the only one who goes to the ATM to get cash just to eat a
            Halal cart? No you are not, so order in "Gyyro" and stop thinking
            about cash.
          </p>
          <div className="learn-more">
            <Link to="/learnmore">Learn more</Link>
          </div>
        </div>
      </div>
      <div className="top-first">
        <h1 className="title-cart_near_me">Food Cart Near Me....</h1>
        <MapWrapper />
      </div>

      <div className="top-first">
        <Companies />
      </div>
      <div className="top-first">
        <OurService />
      </div>
    </div>
  );
};

export default BodyContainer;

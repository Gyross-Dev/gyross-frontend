import React, { useState } from "react";

import Carousel from "react-bootstrap/Carousel";
import "./Carousel.style.scss";

const CustomCarousel = ({ arr }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel
      className="carousel-wrapper"
      activeIndex={index}
      onSelect={handleSelect}
    >
      {arr.map((item, key) => {
        return (
          <Carousel.Item key={key}>
            <img className="image-block" src={item.src} alt="First slide" />
            <Carousel.Caption className="caption">
              <h1 className="title"> {item.title} </h1>
              <p className="description">{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default CustomCarousel;

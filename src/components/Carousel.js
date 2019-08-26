import React from "react";
import Slider from "react-slick";
import GatsbyImage from "gatsby-image";
import ArrowImage from "../img/slider-nav.png";

const PrevArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ ...style, zIndex: 1000, left: "25px", backgroundColor: "green" }}
    >
      1
    </div>
  );
};

const NextArrow = props => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
        style={{ ...style, zIndex: 1000, right: "25px", backgroundColor: "green" }}
      >
        1
      </div>
    );
  };

const Carousel = props => {
  const { data } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
    
  };

  const images = data.images.map((image, index) => {
    return (
      <GatsbyImage key={index} fixed={image.image.childImageSharp.fixed} />
    );
  });

  return <Slider {...settings}>{images}</Slider>;
};

export default Carousel;

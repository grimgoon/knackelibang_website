import React from "react";
import Slider from "react-slick";
import GatsbyImage from "gatsby-image";

const Carousel = props => {
  const { data } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const images = data.images.map((image, index) => {
    console.log(image.image.childImageSharp.fixed);
    return <GatsbyImage key={index} fixed={image.image.childImageSharp.fixed} />;
  });

  console.log(images);

  return <Slider {...settings}>{images}</Slider>;
};

export default Carousel;

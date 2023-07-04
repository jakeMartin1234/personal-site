import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css';

const photos = [
  'fijiFish.jpg',
  'giantSequoia.jpeg',
  'hawaii.jpg',
  'bayAreaCrab.jpg',
  'elephant.jpg',
  'sunset.jpg',
];

const JakeCarousel = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 2,
    variableWidth: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {photos.map((photo) => (
          <div>
            <img
              src={`/images/carousel/${photo}`}
              alt={photo}
              style={{
                width: 'auto',
                height: '550px',
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="custom-button prev-button" onClick={onClick} type="button">
      Previous
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="custom-button next-button" onClick={onClick} type="button">
      Next
    </button>
  );
};

CustomPrevArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

CustomNextArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default JakeCarousel;

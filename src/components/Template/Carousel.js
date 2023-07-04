import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const photos = [
  'fijiFish.jpg',
  'goldenGatePark.jpg',
  'hawaii.jpg',
  'bayAreaCrab.jpG',
];

const JakeCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
  };
  return (
    <Slider {...settings}>
      {photos.map((photo) => (
        <div>
          <img
            src={`/images/carousel/${photo}`}
            alt="Jake Martin"
            style={{
              width: 'auto',
              height: '500px',
            }}
          />
        </div>
      ))}
    </Slider>
  );
};

export default JakeCarousel;

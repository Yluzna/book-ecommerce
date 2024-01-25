import React, { useState } from 'react';
import './carousel.css';
import gameOfThrones from '../../assets/img/Juego-De-Tronos.webp';
import feast from '../../assets/img/festin.svg';
import dance from '../../assets/img/danza.svg';
import storm from '../../assets/img/tormenta.svg';

const Carousel = () => {
  const images = [gameOfThrones, feast, dance, storm];
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <button className="left-button" onClick={goToPreviousImage}>
        &lt;
      </button>
      <img className="current-image" src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      <button className="right-button" onClick={goToNextImage}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;

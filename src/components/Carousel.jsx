import React, { useState, useEffect } from "react";
import "./carousel.css";

export const CarouselImage = ({ src }) => {
  return <img src={src} style={{ width: "100%" }} />;
};

export const CarouselItem = ({ src, children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {React.cloneElement(children, { src: src })}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let carouselInterval = setInterval(() => {
      if (currentIndex < 0) setCurrentIndex(React.Children.count(children) - 1);
      else if (currentIndex >= React.Children.count(children) - 1)
        setCurrentIndex(0);
      else setCurrentIndex((currentIndex) => currentIndex + 1);
    }, 3000);

    return () => clearInterval(carouselInterval);
  }, [currentIndex]);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) newIndex = React.Children.count(children) - 1;
    else if (newIndex > React.Children.count(children) - 1) newIndex = 0;

    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {
            width: "100%",
            src: child.props.src,
          });
        })}
      </div>
      {/* navigation */}
      <div className="indicators">
        <button
          className="nav-btn prev"
          onClick={() => updateIndex(currentIndex - 1)}
        >
          Prev
        </button>
        <button
          className="nav-btn next"
          onClick={() => updateIndex(currentIndex + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;

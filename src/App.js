import React, { useState } from "react";
import "./app.css";
import Carousel, { CarouselItem, CarouselImage } from "./components/Carousel";

function App() {
  const [images] = useState([
    "https://www.planetware.com/wpimages/2020/09/austria-best-lakes-achensee-lake.jpg",
    "http://cdn.cnn.com/cnnnext/dam/assets/200805163718-01-best-lakes-california.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/20190725_Oeschinensee-Panorama%2C_Kandersteg_%2806540-42_stitch%29.jpg/1200px-20190725_Oeschinensee-Panorama%2C_Kandersteg_%2806540-42_stitch%29.jpg",
    "https://cdn.hswstatic.com/gif/Flipboard-pic-replacement---pink-lake-1600x900.jpg",
  ]);
  return (
    <div className="app">
      <Carousel>
        <CarouselItem src={images[0]}>
          <CarouselImage></CarouselImage>
        </CarouselItem>
        <CarouselItem src={images[1]}>
          <CarouselImage></CarouselImage>
        </CarouselItem>
        <CarouselItem src={images[2]}>
          <CarouselImage></CarouselImage>
        </CarouselItem>
      </Carousel>
    </div>
  );
}

export default App;

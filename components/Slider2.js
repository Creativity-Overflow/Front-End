import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Slider2() {
  return (
    <div style={{ width: "600px", height: "100px" }}>
    <Carousel infiniteLoop autoPlay showThumbs={false}>
      <div>
        <img src="/images/artist-stories-hammer.jpg" alt="First slide" style={{ width: "300px", height: "250px" }}/>
        <p className="legend">First slide caption</p>
      </div>
      <div>
        <img src="/images/images.jfif" alt="Second slide" style={{ width: "300px", height: "400px" }}/>
        <p className="legend">Second slide caption</p>
      </div>
      <div>
        <img src="/path/to/third-image.jpg" alt="Third slide" style={{ width: "300px", height: "400px" }}/>
        <p className="legend">Third slide caption</p>
      </div>
    </Carousel>
    </div>
  );
}

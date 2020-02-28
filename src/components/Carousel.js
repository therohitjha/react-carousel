import React from "react";
import { settings, data } from "./carouselData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

export default function Carousel() {
  return (
    <Slider {...settings}>
          {data.map((item, index) => {
            return (
              <div key={index} style={item.style}>
                <div className="col card carouselCardContainer"> 
                  <img
                    src={item.imgSrc}
                    alt={item.imgAlt}
                    height={item.style.height}
                    className='carouselCardImg'
                  />
                  <div className="card-body">
                    <p className="card-text" style={item.spanStyle}>
                      {item.name}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
  );
}

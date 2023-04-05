import React, { useState } from "react";
import Carousel from "./carousel/Carousel";
import "./maincarousel.scss";
const MainCarousel = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const moveDot = (index) => {
    setSlideIndex(index);
  };
  return (
    <div className="main__carousel">
      <div className="carousel__container">
        <div
          style={{
            marginLeft: "auto",
            marginRight: "auto",
          }}>
          <Carousel show={4} infiniteLoop>
            <div>
              <div style={{ padding: 8 }}>
                <img
                  src="https://via.placeholder.com/300x300"
                  alt="placeholder"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div>
              <div style={{ padding: 8 }}>
                <img
                  src="https://via.placeholder.com/300x300"
                  alt="placeholder"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div>
              <div style={{ padding: 8 }}>
                <img
                  src="https://via.placeholder.com/300x300"
                  alt="placeholder"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div>
              <div style={{ padding: 8 }}>
                <img
                  src="https://via.placeholder.com/300x300"
                  alt="placeholder"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div>
              <div style={{ padding: 8 }}>
                <img
                  src="https://via.placeholder.com/300x300"
                  alt="placeholder"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div>
              <div style={{ padding: 8 }}>
                <img
                  src="https://via.placeholder.com/300x300"
                  alt="placeholder"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div>
              <div style={{ padding: 8 }}>
                <img
                  src="https://via.placeholder.com/300x300"
                  alt="placeholder"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div>
              <div style={{ padding: 8 }}>
                <img
                  src="https://via.placeholder.com/300x300"
                  alt="placeholder"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
      <div className="container-dots">
        {Array.from({ length: 3 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}></div>
        ))}
      </div>
    </div>
  );
};

export default MainCarousel;

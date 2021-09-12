import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Bcarousel() {
  return (
    <div className="container-sm" style={{ backgroundColor: "#3A3B3C" }}>
      <br />
      <Carousel>
        <Carousel.Item>
          <img
            className="w-30 h-20"
            src="../images/home-img-1.png"
            alt="First slide"
          />
          <Carousel.Caption style={{ color: "green" }}>
            <h4>First slide label</h4>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-30 h-20"
            src="../images/home-img-2.png"
            alt="Second slide"
          />

          <Carousel.Caption style={{ color: "green" }}>
            <h4>Second slide label</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-30 h-20"
            src="../images/home-img-3.png"
            alt="Third slide"
          />
          <Carousel.Caption style={{ color: "green" }}>
            <h4>Third slide label</h4>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Bcarousel;

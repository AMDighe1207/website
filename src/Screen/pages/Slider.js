import React from "react";
import img1 from "../../assets/img10.jpg";
import img2 from "../../assets/img14.jpg";
// import img3 from "../../assets/img12.jpg";
import img4 from "../../assets/img17.jpg";
import { Carousel } from "react-bootstrap";

function Slider() {
  return (
    <div className="image-slider">
      <Carousel className="Cerousel col-md-6">
        <Carousel.Item interval={1500} className="overflow ">
          <img
            className="d-block w-100 img-fluid "
            src={img1}
            alt="First slide"
            style={{ height: "14rem" }}
          />
          {/* <Carousel.Caption>
            <h3 className="text-dark">First slide label</h3>
            <p className="text-dark">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={1500} className="overflow ">
          <img
            className="d-block w-100 img-fluid "
            src={img2}
            style={{ height: "14rem" }}
            alt="Second slide"
          />
          {/* <Carousel.Caption>
            <h3 className="text-dark">Second slide label</h3>
            <p className="text-dark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={1500} className="overflow ">
          <img
            className="d-block w-100 img-fluid "
            src={img4}
            style={{ height: "14rem" }}
            alt="Third slide"
          />
          {/* <Carousel.Caption>
            <h3 className="text-dark">Third slide label</h3>
            <p className="text-dark">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;

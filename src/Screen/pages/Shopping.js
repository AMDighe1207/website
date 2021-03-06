import React from "react";
import "./Shopping.css";
import Cards from "./Cards";
import { Link } from "react-router-dom";
// import { Carousel } from "react-bootstrap";
import Slider from "./Slider";
import Images from "./Images";
// import img1 from "../../assets/GB-wp1.jpg";
// import img2 from "../../assets/GB-wp2.jpg";
// import img3 from "../../assets/GB-wp3.jpg";

function Shopping() {
  return (
    <div className="shopping">
      <div
        className="Text"
        style={{ boxShadow: "10px 6px 20px rgba(56, 125, 255, 0.17)" }}
      >
        <h2
          style={{
            paddingTop: "2rem",
            paddingLeft: "2rem",
            paddingBottom: "2rem",
          }}
        >
          <i>Few Images</i>
        </h2>
      </div>
      <Slider
        style={{
          paddingTop: "2rem",
        }}
      />
      <div className="shadow">
        <h2
          style={{
            paddingTop: "4rem",
            paddingLeft: "2rem",
            paddingBottom: "11px",
          }}
        >
          <i>Electronics</i>
        </h2>
      </div>
      <Cards />{" "}
      <Link style={{ textDecoration: "none" }}>
        {" "}
        <h5
          href="#"
          style={{
            // color: "rgb(35, 115, 200)",
            color: "#007bff",
            textAlign: "center",
            paddingTop: "2rem",
          }}
        >
          Explore more
        </h5>
      </Link>
      <br />
      <div
        className="Text"
        style={{ boxShadow: "10px 6px 20px rgba(56, 125, 255, 0.17)" }}
      >
        <h2
          style={{
            paddingTop: "2rem",
            paddingLeft: "2rem",
            paddingBottom: "2rem",
          }}
        >
          <i>Great Deals on Electronics | Explore</i>
        </h2>
      </div>
      <Images />
      <Link to="#" style={{ textDecoration: "none" }}>
        <h5
          style={{
            // color: "rgb(35, 115, 200)",
            color: "#007bff",
            textAlign: "center",
            paddingTop: "2rem",
          }}
        >
          Explore more
        </h5>
      </Link>
      <div
        className="Text"
        style={{ boxShadow: "10px 6px 20px rgba(56, 125, 255, 0.17)" }}
      >
        <h2
          style={{
            paddingTop: "2rem",
            paddingLeft: "2rem",
            paddingBottom: "2rem",
          }}
        >
          <i>Great Deals on Electronics | Explore</i>
        </h2>
      </div>
    </div>
  );
}

export default Shopping;

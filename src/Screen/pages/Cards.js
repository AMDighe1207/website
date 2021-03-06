import React, { Component } from "react";
import Card from "./CardUI";
import img1 from "../../assets/img10.jpg";
import img2 from "../../assets/img11.jpg";
import img3 from "../../assets/img17.jpg";
import img4 from "../../assets/img13.jpg";
import img5 from "../../assets/img14.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Link to="/products" style={{ textDecoration: "none" }}>
              {" "}
              <Card
                imgsrc={img1}
                title="OnePlus Nord"
                buy="$ 15.000"
                // tit2="PRETTY MUCH EVERYTHING YOU COULD ASK FOR"
                hed="QUADCAMERA | SNAPDRAGON
            765G 5G & UPTO 12GB RAM"
              />
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/products" style={{ textDecoration: "none" }}>
              <Card imgsrc={img2} title="Vivo Y15" buy="$ 27.000" />
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/products" style={{ textDecoration: "none" }}>
              <Card imgsrc={img3} title="Hp Windows10" buy="$ 32.000" />
            </Link>
          </div>
          <div className="col-md-4" style={{ paddingTop: "2rem" }}>
            <Link to="/products" style={{ textDecoration: "none" }}>
              {" "}
              <Card imgsrc={img4} title="Hp Windows10" buy="$ 50.000" />
            </Link>
          </div>
          <div className="col-md-4" style={{ paddingTop: "2rem" }}>
            <Link to="/products" style={{ textDecoration: "none" }}>
              {" "}
              <Card imgsrc={img5} title="Hp Windows10" buy="$ 33.000" />
            </Link>
          </div>
          <div className="col-md-4" style={{ paddingTop: "2rem" }}>
            <Link to="/products" style={{ textDecoration: "none" }}>
              {" "}
              <Card imgsrc={img3} title="Hp Windows10" buy="$ 61.000" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;

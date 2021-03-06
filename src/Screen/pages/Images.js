import React from "react";
import "./Images.css";
import img1 from "../../assets/img10.jpg";
// import img2 from "../../assets/img11.jpg";
// import img3 from "../../assets/img12.jpg";
import img4 from "../../assets/img13.jpg";
// import img5 from "../../assets/img15.jpg";
import img6 from "../../assets/img17.jpg";
import img7 from "../../assets/img18.jpg";
import { Card } from "react-bootstrap";

function Images() {
  return (
    <>
      <div className="row" style={{ paddingTop: "3rem" }}>
        <div
          className="cardC"
          style={{
            paddingLeft: "10rem",
          }}
        >
          <Card style={{ height: "9rem" }}>
            <img
              src={img1}
              alt="img1"
              className="img-fluid"
              style={{
                height: "9rem",
                boxShadow: "5px 10px 20px 1px rgba(0, 0, 0, 0.253)",
              }}
            />
          </Card>
          <h4 className="laptop">
            <i>Laptop</i>
          </h4>
        </div>
        <div className="cardC2" style={{ paddingLeft: "13rem" }}>
          <Card style={{ height: "9rem" }}>
            <img
              src={img4}
              alt="img1"
              className="img-fluid"
              style={{
                height: "9rem",
                boxShadow: "5px 10px 20px 1px rgba(0, 0, 0, 0.253)",
              }}
            />
          </Card>
          <h4 className="laptop">
            <i>Laptop</i>
          </h4>
        </div>
      </div>
      <br />
      <div className="row">
        <div style={{ paddingLeft: "10rem" }} className="cardC">
          <Card style={{ height: "9rem" }}>
            <img
              src={img6}
              alt="img1"
              className="img-fluid"
              style={{
                height: "9rem",
                boxShadow: "5px 10px 20px 1px rgba(0, 0, 0, 0.253)",
              }}
            />
          </Card>
          <h4 className="laptop">
            <i>Laptop</i>
          </h4>
        </div>
        <div style={{ paddingLeft: "13rem" }} className="cardC4">
          <Card style={{ height: "9rem" }}>
            <img
              src={img7}
              alt="img1"
              className="img-fluid"
              style={{
                height: "9rem",
                boxShadow: "5px 10px 20px 1px rgba(0, 0, 0, 0.253)",
              }}
            />
          </Card>
          <h4 className="laptop">
            <i>Laptop</i>
          </h4>
        </div>
      </div>
    </>
  );
}

export default Images;

/* <div className="col-md-3">
        {" "}
        <img className="c-img" src={img1} alt="First slide" />
        <h5 className="laptop">
          <i>LAPTOP</i>
        </h5>
      </div>
      <div className="col-md-3">
        {" "}
        <img className="c-img" src={img2} alt="First slide" />
        <h5 className="laptop">
          <i>CMAERA</i>
        </h5>
      </div>
      <div className="col-md-3">
        {" "}
        <img className="c-img" src={img3} alt="First slide" />
        <h5 className="laptop">
          <i>PRINTERS</i>
        </h5>
      </div>
      <div className="col-md-3">
        {" "}
        <img className="c-img" src={img4} alt="First slide" />
        <h5 className="laptop">
          <i>HARD DRIVES</i>
        </h5>
      </div> */

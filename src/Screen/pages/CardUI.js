import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Card = (props) => {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="Img 1" className="card-img-top" />{" "}
        {props.tit2}
        <p className="card-text text-secondary">{props.hed}</p>
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        {/* <p className="card-text text-secondary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          eligendi qui eum quas ipsa ipsam sequi aut veniam deserunt aliquid?
        </p> */}
        {/* <Button className="btn btn-outline-success" style={{ color: "#fff" }}> */}
        <Link to="/products">
          <Button style={{ color: "#fff" }}>{props.buy}</Button>
        </Link>
      </div>
    </div>
  );
};

export default Card;

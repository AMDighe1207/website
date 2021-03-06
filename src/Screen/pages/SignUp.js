import React, { useState } from "react";
import "./Images.css";
import { Link } from "react-router-dom";

function SignUp() {
  const [visible, setVisible] = useState(false);

  const handleClick = () => setVisible(!visible);

  const input = {
    paddingBottom: "20px",
    paddingTop: "3rem",
    width: "18rem",
  };
  const input2 = {
    paddingBottom: "3rem",
    width: "18rem",
  };
  const input4 = {
    paddingBottom: "2rem",
    paddingTop: "3rem",
    width: "18rem",
  };
  const input3 = {
    width: "18rem",
  };
  const Div = {
    background: "#fff",
    width: "20rem",
    height: "18rem",
    borderRadius: "6px",
  };
  const Div2 = {
    background: "#fff",
    width: "20rem",
    height: "22rem",
    paddingTop: "2rem",
    borderRadius: "6px",
  };

  return (
    <>
      <h2
        style={{
          paddingBottom: "3rem",
          textAlign: "center",
          paddingTop: "2rem",
        }}
      >
        <i>Login</i>
      </h2>
      {visible ? (
        <div style={Div2} className="container shadow">
          <h2>OTP Verifiction</h2>

          <div style={input4}>
            {" "}
            <input
              style={{ borderBottom: "2px solid lightblue" }}
              placeholder="Enter Otp"
              className="form-control"
              type="text"
            />
            <Link style={{ textDecoration: "none" }}>
              <h6
                style={{
                  fontSize: "11px",
                  color: "#007bff",
                  textAlign: "end",
                  paddingTop: "4px",
                }}
              >
                Resent Otp?
              </h6>
            </Link>
          </div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <div>
              <input className="form-control" type="submit" value="Verify" />
            </div>
          </Link>
        </div>
      ) : (
          <>
            {" "}
            <div style={Div} className="container shadow">
              <div style={input}>
                {" "}
                <input
                  style={{ borderBottom: "2px solid lightblue" }}
                  placeholder="Mobile No."
                  className="form-control"
                  type="Number"
                />
              </div>
              <div style={input2}>
                <input
                  style={{ borderBottom: "2px solid lightblue" }}
                  placeholder="Password"
                  className="form-control"
                  type="Password"
                />
              </div>
              <div>
                <input
                  style={input3}
                  className="form-control"
                  type="submit"
                  onClick={handleClick}
                />
              </div>
            </div>{" "}
          </>
        )}
    </>
  );
}

export default SignUp;

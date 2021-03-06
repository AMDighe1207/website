import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Screen/Navbar";
import "./App.css";
import Home from "./Screen/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./Screen/pages/Services";
import Products from "./Screen/pages/Products";
import Shopping from "./Screen/pages/Shopping";
import SignUp from "./Screen/pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/shopping" component={Shopping} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

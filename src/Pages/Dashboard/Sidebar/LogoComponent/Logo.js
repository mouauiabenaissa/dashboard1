import React from "react";
import { Row } from "simple-flexbox";
import classes from "./Logo.module.css"
import logo from "../../../../Assets/logo.png"

function LogoComponent() {
  return (
    <Row horizontal="center" vertical="center">
      <img src={logo} className={classes.img} alt="logo" />
    </Row>
  );
}

export default LogoComponent;

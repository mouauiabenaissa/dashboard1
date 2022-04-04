import React from "react";
import { Row } from "simple-flexbox";
import classes from "./Logo.module.css"

function LogoComponent() {
  return (
    <Row horizontal="center" vertical="center">
      <img src="https://familov.com/uploads/products/12858_product.png" className={classes.img} alt="logo" />
    </Row>
  );
}

export default LogoComponent;

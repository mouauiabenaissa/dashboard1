import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./SignUpForm.module.css"
import { Container, Row, Col } from "reactstrap";

import { useNavigate } from "react-router-dom"

const navigate = useNavigate()

navigate('/bdfdj')


function SignUpForm() {
  return (
    <Container fluid className={classes.mainContainer}>
      <Row>
        <Col className={classes.test}>
          <img src="https://familov.com/uploads/products/12858_product.png" className={classes.img} alt="logo" />
        </Col>
      </Row>
      <Row className={classes.helo}>
        <Col xs='4' className={classes.loginform}>
          <Row>
            <Col>
              <h2 className={classes.headerTitle}>Sign Up</h2>
            </Col>
          </Row>
          <Row>
            <Col className={classes.row}>
              <label className={classes.label}>username</label>
              <input className={classes.input} type="text" placeholder="Enter your userName " />
            </Col>
          </Row>
          <Row>
            <Col className={classes.row}>
              <label className={classes.label}>email</label>
              <input className={classes.input} type="email" placeholder="Enter your email" />
            </Col>
          </Row>
          <Row>
            <Col className={classes.row}>
              <label className={classes.label}>Password</label>
              <input type="Password" placeholder="Enter your password" />
            </Col>
          </Row>
          <Row className={classes.row}>
            <button className={classes.button}>Sign Up</button>
          </Row>
          <Row className={[classes.row, "text-center"].join(' ')}>
            <p style={{ color: "rgb(130,130,130)", marginBottom: "25px" }}>
              Already have an acount ?{"     "}
              <NavLink to="/" style={{ textDecoration: "none" }}>
                Login
              </NavLink>
            </p>
          </Row>

        </Col>

      </Row>
    </Container>

  )
}

export default SignUpForm
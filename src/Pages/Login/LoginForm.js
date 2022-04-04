import axios from 'axios';
import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import classes from './LoginForm.module.css'

function LoginForm() {
  const [email, setemail] = React.useState('')
  const [password, setpassword] = React.useState('')
  const navigate = useNavigate()
  const User_Data = {
    email: email,
    password: password
  }
  const handleLogin = () => {
    axios.post("url win makhdoum login traitement", User_Data)
  }
  return (
    <Container fluid className={classes.mainContainer} >
      <Row>
        <Col className={classes.test}>
          <img src="https://familov.com/uploads/products/12858_product.png" className={classes.img} alt="logo" />
        </Col>
      </Row>
      <Row className={classes.helo}>
        <Col xs='4' className={classes.loginform}>
          <Row>
            <Col>
              <h2 className={classes.headerTitle}> Login</h2>
            </Col>
          </Row>
          <Row >
            <Col className={classes.row}>
              <label className={classes.label}>email</label>
              <input className={classes.input} type="email" placeholder="Enter your email" onChange={e => setemail(e.target.value)} />
            </Col>
          </Row>
          <Row >
            <Col className={classes.row}>
              <label className={classes.label}>Password</label>
              <input type="Password" placeholder="Enter your password" onChange={e => setpassword(e.target.value)} />
            </Col>
          </Row>
          <Row className={classes.row}>
            <button className={classes.button} onClick={() => handleLogin()}> Login</button>
          </Row>
          <Row className={[classes.row, "text-center"].join(' ')}>
            <p style={{ color: "rgb(130,130,130)", marginBottom: "25px" }}>
              Don't have an acount? {"     "}
              <NavLink to="/signup" style={{ textDecoration: "none" }}>
                Sign Up
              </NavLink>
            </p>
          </Row>

        </Col>
      </Row>
    </Container>


  )
}

export default LoginForm

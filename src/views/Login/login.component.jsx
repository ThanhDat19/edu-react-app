import React, { Fragment, useRef, useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";
import "./login.style.scss";
import { Col, Container, Row } from "react-bootstrap";

const defaultFormFields = {
  email: "",
  password: "",
};

export default function Login() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const [errors, setErrors] = useState(null);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <Fragment>
      <Container>
        <Row className="center-col">
          <Col lg={6} md={6} sm={12} className="sign-in-container">
            <h3>Already have an account?</h3>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
              <FormInput
                label="Email"
                type="email"
                required
                onChange={handleChange}
                name="email"
                value={email}
              />

              <FormInput
                label="Password"
                type="password"
                required
                onChange={handleChange}
                name="password"
                value={password}
              />
              <div className="buttons-container">
                <Button type="submit">Sign In</Button>
                <Button buttonType="google" type="button">
                  Sign In With Google
                </Button>
              </div>
              <p className="message">
                Not Registered? <Link to="/signup">Create an account</Link>
              </p>
            </form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

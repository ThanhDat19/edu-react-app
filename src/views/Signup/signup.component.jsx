import { Fragment, useState } from "react";

import "./signup.style.scss";
import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";
import { Col, Container, Row } from "react-bootstrap";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <Fragment>
      <Container>
        <Row className="center-col">
          <Col lg={6} md={6} sm={12} className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
              <FormInput
                label="Display Name"
                type="text"
                required
                onChange={handleChange}
                name="displayName"
                value={displayName}
              />

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

              <FormInput
                label="Confirm Password"
                type="password"
                required
                onChange={handleChange}
                name="confirmPassword"
                value={confirmPassword}
              />
              <Button type="submit">Sign Up</Button>
            </form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default SignUp;

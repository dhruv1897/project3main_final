import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./SigninElements";

export const SignIn = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formSubmissionStatus, setFormSubmissionStatus] = useState("");

  const handleSubmit = async (e) => {
    console.log("inside the submit function");
    e.preventDefault(); // Prevent default form submission

    // Log the email and password for the developer to check
    console.log("Email:", email);
    console.log("Password:", password);

    try {
      const response = await fetch("/api/signin", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Response data:", data);
      setFormSubmissionStatus("Form submitted successfully!");

      // Redirect to Order Confirmation Page
      history.push("/order-confirmation");
    } catch (error) {
      console.error("Error during form submission:", error.message);
      setFormSubmissionStatus(
        "Form submission failed. Please try again later."
      );
    }
  };

  return (
    <Container>
      <FormWrap>
        <Icon to="/">Loginm </Icon>
        <FormContent>
          <Form onSubmit={handleSubmit}>
            <FormH1>Sign in to your accounts</FormH1>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FormButton type="submit">Continue</FormButton>
            <Text>Forgot Password</Text>
            {formSubmissionStatus && <p>{formSubmissionStatus}</p>}
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default SignIn;

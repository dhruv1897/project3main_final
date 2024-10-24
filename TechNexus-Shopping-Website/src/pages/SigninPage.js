import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import ScrollToTop from "../components/ScrollToTop";
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
} from "../components/Signin/SigninElements";

const SigninPage = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formSubmissionStatus, setFormSubmissionStatus] = useState("");
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);

  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "YOUR_FACEBOOK_APP_ID", // Replace with your Facebook app ID
        cookie: true,
        xfbml: true,
        version: "v12.0",
      });
    };
  }, []);

  const handleFacebookLogin = () => {
    window.FB.login(
      (response) => {
        if (response.authResponse) {
          const { accessToken } = response.authResponse;
          Cookies.set("fbToken", accessToken, { expires: 1 });
          history.push("/order-confirmation");
        } else {
          console.error("User cancelled login or did not fully authorize.");
        }
      },
      { scope: "public_profile,email" }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isCreatingAccount
      ? "http://localhost:8080/api/signin"
      : "http://localhost:8080/api/signin/verify";

    try {
      const response = await fetch(endpoint, {
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

      // Redirect if signing in
      if (!isCreatingAccount) {
        history.push("/order-confirmation");
      }
    } catch (error) {
      console.error("Error during form submission:", error.message);
      setFormSubmissionStatus(
        "Form submission failed. Please try again later."
      );
    }
  };

  return (
    <>
      <ScrollToTop />
      <Container>
        <FormWrap>
          <Icon to="/">Login for Confirm Order</Icon>
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <FormH1>
                {isCreatingAccount
                  ? "Create an Account"
                  : "Sign in to your account"}
              </FormH1>
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
              <FormButton type="submit">
                {isCreatingAccount ? "Create Account" : "Continue"}
              </FormButton>

              {/* New buttons for switching between sign in and create account */}
              <div style={{ marginTop: "10px" }}>
                {isCreatingAccount ? (
                  <Text onClick={() => setIsCreatingAccount(false)}>
                    Already have an account? Sign In
                  </Text>
                ) : (
                  <Text onClick={() => setIsCreatingAccount(true)}>
                    Don't have an account? Create Account
                  </Text>
                )}
              </div>

              {formSubmissionStatus && <p>{formSubmissionStatus}</p>}
            </Form>
            <div>
              <h1>Or</h1>
              <button onClick={handleFacebookLogin}>
                Continue with Facebook
              </button>
            </div>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SigninPage;

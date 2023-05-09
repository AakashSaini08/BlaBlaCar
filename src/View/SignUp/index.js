import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Atoms/Header";

function SignUp() {
  return (
    <div className="section-content">
      <Header heading={"sign up"}></Header>
      <div className="email-div">
        <Link className="email-login" to="/email">
          Continue with email{" "}
        </Link>
      </div>

      <div className="loginRedirectDiv">
        <p className="loginRedirect">
          {" "}
          Already a member?{" "}
          <Link className="loginLink" to={"/login"}>
            Log in
          </Link>{" "}
        </p>
        <p className="signin-footer">
          By signing up, you accept our ToS and Privacy Policy.
        </p>
        <p className="signin-footer">
          This information is collected by COMUTO SA for the purposes of
          creating your account, managing your booking, use and improve our
          services and ensuring the security of our platform.
        </p>
        <p className="signin-footer">
          You have rights on your personal data and can exercise them by
          contacting BlaBlaCar through our contact form. You can learn more
          about your rights and how we handle your personal data in our Privacy
          Policy.
        </p>
      </div>
    </div>
  );
}

export default SignUp;

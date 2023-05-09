import React from "react";
import Header from "../../Components/Atoms/Header";
import "./style.css";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="section-content">
      <Header heading={"log in"}></Header>
      <div className="email-div">
        <Link className="email-login" to="/login">
          Continue with email{" "}
        </Link>
      </div>

      <div className="loginRedirectDiv">
        <p className="loginRedirect">
          {" "}
          Not a member yet?{" "}
          <Link className="loginLink" to={"/register"}>
            Sign up
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}

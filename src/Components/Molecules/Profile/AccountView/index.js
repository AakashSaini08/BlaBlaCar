import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import CustomLinkListCreator from "../../../Atoms/CustomLinkListCreator";
import PathTo from "../../../Atoms/PathTo";

export default function AccountDetailsUpdate() {
  const profileViewList = ["Ratings given", "Password", "Postal Address"];
  return (
    <div>
      {/* {profileViewList.map(val=><CustomLinkListCreator linkText={val}/>)} */}
      <div className="psw-div">
        <Link className="psw-link" to="/changePassword">Password</Link>
      </div>
      <PathTo linkText="Logout" picNeeded={false} />
      <PathTo linkText="CloseMyAccount" picNeeded={false} />
    </div>
  );
}
// dispatch(logout.logout("", successLogin));
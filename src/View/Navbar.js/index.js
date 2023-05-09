import React, { useState } from "react";
import "./styles.css";
import { Images } from "../../Shared/Images";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DropDownListViewer from "../../Components/Atoms/DropDownListViewer";
import NavContent from "./DropDownButton";

// import Linkto from "../../Components/Atoms/LinkTo";
export default function Navbar() {
  const navigate = useNavigate();
  const currentPath = useLocation();
  const token = localStorage.getItem("token");
  const [dropDownIconPosition, setDropDownIconPosition] =
    useState("dropDownIconDown");
  const [dropDownListShow, setDropDownListShow] = useState(false);
  const dropDownListDataForGuest = [
    { linkText: "Log in ", route: "/login" },
    { linkText: "Sign up", route: "/signup" },
  ];
  const dropDownListDataForUser = [
    { linkText: "Your Rides", route: "/rides" },
    { linkText: "Inbox", route: "/messages/list" },
    { linkText: "Profile", route: "/dashboard/profile/menu" },
    { linkText: "Logout", route: "/" },
  ];
  const handleDropDownIconPosition = () => {
    if (dropDownIconPosition === "dropDownIconDown") {
      setDropDownIconPosition("dropDownIconUp");
      setDropDownListShow(true);
    } else {
      setDropDownIconPosition("dropDownIconDown");
      setDropDownListShow(false);
    }
  };
  return (
    <div className="header">
      <div className="header-content">
        <div className="headerData">
          <span className="Logo">
            <img
              src={Images.blablacarLogo}
              alt="BlaBlaCar"
              onClick={() => {
                navigate("/");
              }}
            ></img>
          </span>
        </div>
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="kirk-icon sc-3dofso-0 brCSle search-icon"
          aria-hidden="true"
          width="23"
          height="23"
          fill="#000"
        >
          <g
            style={{
              fill: "none",
              stroke: "#00AFF5",
              strokeWidth: "1",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
            }}
          >
            <line x1="22" y1="22" x2="16.4" y2="16.4"></line>
            <circle cx="10" cy="10" r="9"></circle>
          </g>
        </svg>
        <Link className="search-btn" to="/search">Search</Link>
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="kirk-icon sc-3dofso-0 brCSle publish-icon"
          aria-hidden="true"
          width="23"
          height="23"
          fill="#000"
        >
          <path
            style={{
              strokeWidth: "0",
              fill: "#00AFF5",
              fillRule: "evenodd",
            }}
            d="M1.14 11.5a10.36 10.36 0 1120.72 0 10.36 10.36 0 01-20.72 0zM11.5 0a11.5 11.5 0 100 23 11.5 11.5 0 000-23zm.57 6.53a.57.57 0 00-1.14 0v4.4h-4.4a.57.57 0 100 1.14h4.4v4.4a.57.57 0 101.14 0v-4.4h4.4a.57.57 0 000-1.14h-4.4z"
          ></path>
        </svg>
        <Link className="publish-btn" to="/publish">Publish a ride</Link>

        {!currentPath?.pathname?.includes("register") && (
          <NavContent
            handleDropDownIconPosition={handleDropDownIconPosition}
            dropDownIconPosition={dropDownIconPosition}
          />
        )}
        {dropDownListShow && (
          <DropDownListViewer
            dropDownListData={
              !token ? dropDownListDataForGuest : dropDownListDataForUser
            }
            setDropDownListShow={setDropDownListShow}
            setDropDownIconPosition={setDropDownIconPosition}
          />
        )}
      </div>
    </div>
  );
}

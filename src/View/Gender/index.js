import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Gender() {
  return (
    <div className="gender-outer">
      <h2>How would you like to be addressed?</h2>
      <Link className="gender" to="/password">
        Miss / Madam
      </Link>
      <Link className="gender" to="/password">
        Sir
      </Link>
      <Link className="gender" to="/password">
        I'd rather not say
      </Link>
    </div>
  );
}

export default Gender;

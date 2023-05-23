import React, { useEffect, useState } from "react";
import Header from "../../../Atoms/Header";
import { useDispatch } from "react-redux";
import { getPublishRides } from "../../../../Redux/Actions";
import ValidationText from "../../../Atoms/ValidationText";
import "./styles.css";
import CustomListRides from "./CustomListRides";
import { STRINGS } from "../../../../Shared/Constants";
export default function YourRides() {
  const [ride, setRide] = useState([]);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const successGetRides = (res) => {
    setRide(res);
    console.log(res);
  };
  const failedGetRides = (res) => {
    setError(res);
  };
  useEffect(() => {
    dispatch(getPublishRides(successGetRides, failedGetRides));
  }, [dispatch]);
  return (
    <div>
      <Header heading={STRINGS.RIDES} />
      <div className="section-content">
        {/* {ride?.map((val, i) => {
          return (
            <div key={i}>
              <CustomListRides val={val} />
            </div>
          );
        })} */}
      </div>

      <ValidationText message={error} />
    </div>
  );
}

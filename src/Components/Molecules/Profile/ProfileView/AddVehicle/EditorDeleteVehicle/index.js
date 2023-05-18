import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getVehicleData } from "../../../../../../Redux/Actions";

export default function EditOrDeleteVehicle() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVehicleData({}));
  }, [dispatch]);
  const { id } = useParams();
  const vehicleData = useSelector((state) => state?.vehicleDataReducer?.data);
  // console.log(vehicleData, ">>>><<<<<<");
  const vehicle =
    Object.values(vehicleData).length &&
    Object.values(vehicleData)?.find((val) => val?.id == id);

  console.log(vehicle, "{{{{{{}}}}}");
  return (
    <div className="section-content">
      <h2 className="vehicle-heading">{vehicle?.vehicle_name}</h2>
      <div className="FillingMessageDiv">
        <span className="FillingMessage">
          Color :{vehicle?.vehicle_color.toUpperCase()}
        </span>
      </div>
      <div className="vehicle-link-div">
        <Link className="delete-vehicle-link" to={`/updateVehicle/${id}`}>
          Edit info
        </Link>
      </div>
      <div className="vehicle-link-div">
        <Link className="delete-vehicle-link" to={`/deleteVehicle/${id}`}>
          Delete vehicle
        </Link>
      </div>
    </div>
  );
}
// `/vehicle/${val?.id}`

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVehicleData } from "../../../../Redux/Actions";
import { needMiddleSeatEmpty } from "../../../../Redux/Actions/PublishRideAction";
import { STRINGS } from "../../../../Shared/Constants";
import CustomLinkListCreator from "../../../Atoms/CustomLinkListCreator";
import Header from "../../../Atoms/Header";
import CustomChoiceSelector from "../../../Cells/CustomChoiceSelector";
import './style.css'
function Car() {
  const dispatch = useDispatch();
  const vehicleData = useSelector((state) => state?.vehicleDataReducer?.data);

  useEffect(() => {
    dispatch(getVehicleData());
  }, [dispatch]);

  return (
    <>
      <div >
      <Header heading={STRINGS.SELECT_CAR} />

        {vehicleData?.map((val, i) => (
          <div className="vehicle-div" key={i}>
            <CustomLinkListCreator
              linkText={val?.vehicle_name}
              route={`/offer-seats/comfort/${val?.id}`}
            />
          </div>
        ))}

      </div>
    </>
  );
}

export default Car;

import React, { useEffect } from "react";
import CustomLinkListCreator from "../../../Atoms/CustomLinkListCreator";
import Linkto from "../../../Atoms/LinkTo";
import "./style.css";
// import EditPersonalDetails from "./EditPersonalDetails";
import { useDispatch, useSelector } from "react-redux";
import {
  //   getVehicleData,
  gettingProfilePic,
  getVehicleData,
  //   addingBio,
} from "../../../../Redux/Actions";
import { BASE_URL } from "../../../../Services/Api/Constants";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Images } from "../../../../Shared/Images";

export default function NameAndProfilePicView() {
  const userData = JSON.parse(localStorage.getItem("CurrentUser"));
  const email = JSON.parse(localStorage.getItem("email"));
  const storeData = useSelector((state)=>state)

  const picStatus = useSelector((state) => state?.profilePicReducer?.profile);
  const emailStatus = useSelector(
    (state) => state?.profilePicReducer?.details?.is_verified
  );
  const add_bio = useSelector((state) => state?.profilePicReducer?.add_bio);
  const phone = useSelector(
    (state) => state?.profilePicReducer?.phonedetails?.phone_no
  );
  const phoneStatus = useSelector(
    (state) => state?.profilePicReducer?.phonedetails?.is_verified
  );
  const pancard = useSelector(
    (state) => state?.profilePicReducer?.pancarddeatils?.pancard_no
  );
  const pancardStatus = useSelector(
    (state) => state?.profilePicReducer?.pancarddeatils?.is_verified
  );

  console.log(storeData,"{{{{{{}}}}}")
  const vehicleData = useSelector((state) => state?.vehicleDataReducer?.data);
  // console.log(vehicleData, "<<<<<<<<<<>>>>>>>>>>");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gettingProfilePic());
    dispatch(getVehicleData({}));
  }, [dispatch]);
  const navigate = useNavigate();
  const handleSelect = () => {
    navigate("/currentUser")
  };
  return (
    <div className="profile">
      <div className="profileMain">
        <CustomLinkListCreator
          pic={true}
          profileViewLink={true}
          linkText={userData?.first_name}
          handleSelect={handleSelect}
          profilePic={picStatus ? BASE_URL + picStatus : Images.profile}
        />
        <Linkto linkText="Add profile picture" route="/picture" />
        <Link className="personal-detail-link" to="/editPersonalDetails">
          Edit Personal Details
        </Link>
      </div>
      <div className="profileMain">
        <h1 className="headingData">Verify Your Profile</h1>
        {pancardStatus === "False" ? (
          <Linkto linkText="Verify your Govt. ID" route="/govtid" />
        ) : (
          <p className="confirm">Pancard : {pancard}</p>
        )}
        {emailStatus === "False" ? (
          <Link className="personal-detail-link " to="/emailVerification">
            Confirm email {email}
          </Link>
        ) : (
          <p className="confirm"> Email : {email}</p>
        )}
        {phoneStatus === "False" ? (
          <Linkto linkText="Confirm Phone number" route="/phonenumber" />
        ) : (
          <p className="confirm">Phone no : {phone}</p>
        )}
      </div>
      <div className="profileMain">
        <h1 className="headingData">About You</h1>
        <p className="confirm">{add_bio}</p>
        {/* <PathTo linkText="Add a mini bio" setShow={setShowMiniBio} /> */}
        <Linkto linkText="Add a mini bio" route="/addingMiniBio" />
      </div>
      <div className="profileMain">
        <h1 className="headingData">Vehicles</h1>

        {vehicleData?.map((val, i) => (
          <div key={i}>
            {/* {console.log(val, "((((((((((())))))))))0")} */}
            <CustomLinkListCreator
              linkText={`VehicleName : ${val?.vehicle_name}  
                        VehicleColor :${val?.vehicle_color}`}
              route={`/vehicle/${val?.id}`}
            />
          </div>
        ))}

        <Linkto linkText="Add vehicle" route="/vehicle" />
      </div>
    </div>
  );
}

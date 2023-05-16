import React, { useEffect } from "react";
import CustomLinkListCreator from "../../../Atoms/CustomLinkListCreator";
import Linkto from "../../../Atoms/LinkTo";
import "./style.css";
// import EditPersonalDetails from "./EditPersonalDetails";
import { useDispatch, useSelector } from "react-redux";
import {
  //   getVehicleData,
  gettingProfilePic, getVehicleData,
  //   addingBio,
} from "../../../../Redux/Actions";
import { BASE_URL } from "../../../../Services/Api/Constants";
import { Link } from "react-router-dom";

export default function NameAndProfilePicView({
  setShowEditPersonalDetails = () => {},
  setShowMiniBio = () => {},
  setShowEmailVerificationModal,
}) {
  const userData = JSON.parse(localStorage.getItem("CurrentUser"));
  const email = JSON.parse(localStorage.getItem("email"));
  const StoreData = useSelector((state) => state);
  const emailStatus = useSelector((state) => state?.profilePicReducer?.details?.is_verified);
  const add_bio = useSelector((state) => state?.profilePicReducer?.add_bio);
  const phone = useSelector((state)=>state?.profilePicReducer?.phonedetails?.phone_no);
  const phoneStatus = useSelector((state)=>state?.profilePicReducer?.phonedetails?.is_verified);
  const pancard = useSelector((state)=>state?.profilePicReducer?.pancarddeatils?.pancard_no);
  const pancardStatus = useSelector((state)=>state?.profilePicReducer?.pancarddeatils?.is_verified);

  // console.log(pancard,pancardStatus,"{{{{{{}}}}}")
  const vehicleData = useSelector((state)=>state?.vehicleDataReducer?.data)
  console.log(vehicleData,"<<<<<<<<<<>>>>>>>>>>")
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gettingProfilePic());
    dispatch(getVehicleData({}))
  }, [dispatch]);

  const handleSelect = () => {};
  return (
    <div className="profile">
      <div className="profileMain">
        <CustomLinkListCreator
          pic={true}
          profileViewLink={true}
          linkText={userData?.first_name}
          handleSelect={handleSelect}
          profilePic={BASE_URL + StoreData?.profilePicReducer?.profile}
        />
        <Linkto linkText="Add profile picture" route="/picture" />
        <Link className="personal-detail-link" to="/editPersonalDetails">
          Edit Personal Details
        </Link>
      </div>
      <div className="profileMain">
        <h1 className="headingData">Verify Your Profile</h1>
        {!pancardStatus ? 
        <Linkto linkText="Verify your Govt. ID" route="/govtid"/>
        :<p className="confirm">Pancard : {pancard}</p>
        }
        {emailStatus === "False" ? (
          <Link className="personal-detail-link " to="/emailVerification">
            Confirm email {email}
          </Link>
        ) : (
          <p className="confirm" > Email : {email}</p>
        )}
        {!phoneStatus?
        <Linkto linkText="Confirm Phone number" route="/phonenumber"/>
        :<p className="confirm">Phone no : {phone}</p>}
        
      </div>
      <div className="profileMain">
        <h1 className="headingData">About You</h1>
        <p className="confirm">{add_bio}</p>
        {/* <PathTo linkText="Add a mini bio" setShow={setShowMiniBio} /> */}
        <Linkto linkText="Add a mini bio" route="/addingMiniBio" />
      </div>
      <div className="profileMain">
        <h1 className="headingData">Vehicles</h1>

        {(vehicleData)?.map((val) => (

          <div>
          {console.log(val,"((((((((((())))))))))0")}
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

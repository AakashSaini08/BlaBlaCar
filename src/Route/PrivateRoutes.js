import AddOrEditProfilePic from "../Components/Cells/AddOrEditProfilePic";
import Profile from "../Components/Molecules/Profile";
import AddingMiniBio from "../Components/Molecules/Profile/ProfileView/AddingMiniBio";
import AddVehicleDetails from "../Components/Molecules/Profile/ProfileView/AddVehicle";
import EditPersonalDetails from "../Components/Molecules/Profile/ProfileView/EditPersonalDetails";
import EmailVerificationLinkModal from "../Components/Molecules/Profile/ProfileView/EmailVerificationLinkModal";
import ChangePassword from "../View/ChangePassword";
import GovtId from "../View/GovtId.js";
import EmailOtp from "../View/OTP";
import Phone from "../View/Phone";
import PhoneOtp from "../View/PhoneOtp";



export const PRIVATE_ROUTES = [
  {
    path: "profile",
    component:<Profile/>,    
  },
  {
    path: "/picture",
    component:<AddOrEditProfilePic/>,    
  },
  {
    path: "/emailotp",
    component:<EmailOtp/>,    
  },
  {
    path: "/addingMiniBio",
    component:<AddingMiniBio/>,    
  },
  {
    path: "/editPersonalDetails",
    component:<EditPersonalDetails/>,    
  },
  {
    path: "/changePassword",
    component:<ChangePassword/>,    
  },
  {
    path: "/emailVerification",
    component:<EmailVerificationLinkModal/>,    
  },
  {
    path: "/phonenumber",
    component:<Phone/>,    
  },
  {
    path: "/phoneotp",
    component:<PhoneOtp/>,    
  },
  {
    path: "/govtid",
    component:<GovtId/>,    
  },
  {
    path: "/vehicle",
    component:<AddVehicleDetails/>,    
  },
];
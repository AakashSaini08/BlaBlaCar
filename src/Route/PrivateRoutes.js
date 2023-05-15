import AddOrEditProfilePic from "../Components/Cells/AddOrEditProfilePic";
// import PasswordInput from "../Components/Cells/PasswordInput";
import Profile from "../Components/Molecules/Profile";
import AddingMiniBio from "../Components/Molecules/Profile/ProfileView/AddingMiniBio";
import EditPersonalDetails from "../Components/Molecules/Profile/ProfileView/EditPersonalDetails";
import EmailVerificationLinkModal from "../Components/Molecules/Profile/ProfileView/EmailVerificationLinkModal";
import ChangePassword from "../View/ChangePassword";
import Otp from "../View/OTP";


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
    path: "/otp",
    component:<Otp/>,    
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
  
];
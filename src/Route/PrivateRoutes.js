import AddOrEditProfilePic from "../Components/Cells/AddOrEditProfilePic";
import Profile from "../Components/Molecules/Profile";
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

];
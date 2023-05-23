import AddOrEditProfilePic from "../Components/Cells/AddOrEditProfilePic";
import AddStop from "../Components/Cells/AddStop.js";
import Profile from "../Components/Molecules/Profile";
import BankDetails from "../Components/Molecules/Profile/AccountView/BankDetails";
import AddingMiniBio from "../Components/Molecules/Profile/ProfileView/AddingMiniBio";
import AddVehicleDetails from "../Components/Molecules/Profile/ProfileView/AddVehicle";
import EditOrDeleteVehicle from "../Components/Molecules/Profile/ProfileView/AddVehicle/EditorDeleteVehicle";
import DeleteVehicle from "../Components/Molecules/Profile/ProfileView/AddVehicle/EditorDeleteVehicle/DeleteVehicle";
import UpdateVehicles from "../Components/Molecules/Profile/ProfileView/AddVehicle/EditorDeleteVehicle/UpdateVehicle";
import DetailsOfCurrentUsers from "../Components/Molecules/Profile/ProfileView/DetailsOfCurrentUsers";
import EditPersonalDetails from "../Components/Molecules/Profile/ProfileView/EditPersonalDetails";
import EmailVerificationLinkModal from "../Components/Molecules/Profile/ProfileView/EmailVerificationLinkModal";
import AboutRide from "../Components/Molecules/PublishRide/AboutRide";
import Car from "../Components/Molecules/PublishRide/Car";
import DateOfRide from "../Components/Molecules/PublishRide/DateOfRide";
import DropOf from "../Components/Molecules/PublishRide/DropOf";
import NoOfPassangers from "../Components/Molecules/PublishRide/NoOfPassangers";
import OfferSeatComfortChoice from "../Components/Molecules/PublishRide/OfferSeatComfortChoice";
import PassangersCanBookInstantly from "../Components/Molecules/PublishRide/PassangersCanBookInstantly";
import Pickup from "../Components/Molecules/PublishRide/Pickup";
import RideTime from "../Components/Molecules/PublishRide/RideTime";
import SelectRoute from "../Components/Molecules/PublishRide/SelectRoute/SelectRoute";
import SetPrice from "../Components/Molecules/PublishRide/SetPrice";
import YourRides from "../Components/Molecules/PublishRide/YourRides";
import PickupFromMap from "../Components/Molecules/SelectLocationFromMap";
import ChangePassword from "../View/ChangePassword";
import GovtId from "../View/GovtId.js";
import EmailOtp from "../View/OTP";
import Phone from "../View/Phone";
import PhoneOtp from "../View/PhoneOtp";
import PublishRideSuccess from "../View/PublishRideSuccess";
import Success from "../View/PublishRideSuccess";



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
  {
    path: "/bankdetails",
    component:<BankDetails/>,    
  },
  {
    path: "/currentUser",
    component:<DetailsOfCurrentUsers/>,    
  },
  {
    path: "/vehicle/:id",
    component: <EditOrDeleteVehicle />,
  },
  {
    path: "/deleteVehicle/:id",
    component: <DeleteVehicle />,
  },
  {
    path: "/updateVehicle/:id",
    component: <UpdateVehicles />,
  },
  {
    path: "/publishRideSuccess",
    component: <PublishRideSuccess/>,
  },

  //////////////////////////////////////////////////////////////////

  {
    path: "/offer-seats/departure",
    component: <Pickup />,
  },
  {
    path: "/offer-seats/departure/precise/:coordinates/:type",
    component: <PickupFromMap />,
  },
  {
    path: "/offer-seats/arrival",
    component: <DropOf />,
  },
  {
    path: "/offer-seats/choose-your-route",
    component: <SelectRoute />,
  },
  {
    path: "/offer-seats/declared-stopovers",
    component: <AddStop />,
  },
  {
    path: "/offer-seats/departure-date",
    component: <DateOfRide />,
  },
  {
    path: "/offer-seats/departure-date/time",
    component: <RideTime />,
  },
  {
    path: "/offer-seats/car",
    component: <Car />,
  },
  {
    path: "/offer-seats/comfort/:id",
    component: <OfferSeatComfortChoice />,
  },
  {
    path: "/offer-seats/seats",
    component: <NoOfPassangers />,
  },
  
  {
    path: "/offer-seats/request_approval",
    component: <PassangersCanBookInstantly />,
  },
  {
    path: "/offer-seats/price-recommendation",
    component: <SetPrice />,
  },
  // {
  //   path: "/dashboard/profile/close",
  //   component: <DeleteAccount />,
  // },
  {
    path: "/offer-seats/comment",
    component: <AboutRide />,
  },
  {
    path: "/rides",
    component: <YourRides/>,
  },
  {
    path: "/publishRideSuccess",
    component: <PublishRideSuccess/>,
  },

  // {
  //   path: "/rides/offer/:id",
  //   component: <RideDetails/>,
  // },
  
  // {
  //   path: "/user/show",
  //   component: <DetailsOfCurrentUsers/>,
  // }


];




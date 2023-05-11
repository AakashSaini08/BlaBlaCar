import Login from "../View/Login";
import SignUp from "../View/SignUp";
import DOB from "../View/DOB";
import Email from "../View/Email";
import EmailPsw from "../View/EmailPsw";
import Gender from "../View/Gender";
import Password from "../View/Password";
import Username from "../View/Username";
import LoginForgetPassword from "../Components/Cells/EmailResetPasswordInput";
import ResetPassword from "../Components/Cells/ResetPassword";

export const AUTH_ROUTES = [
  {
    path: "/login",
    component: <Login/>,
  },
  {
    path: "/signup",
    component: <SignUp/>,
  },
  {
    path:"/email",
    component: <Email/>,
  },
  {
    path:"/username",
    component: <Username/>,
  },
  {
    path:"/dob",
    component: <DOB/>,
  },
  {
    path:"/gender",
    component: <Gender/>,
  },
  {
    path:"/password",
    component: <Password/>,
  },
  {
    path:"/emailpsw",
    component: <EmailPsw/>,
  },
  {
    path:"/forgot",
    component: <LoginForgetPassword/>,
  },
  {
    path:"/resetPassword",
    component: <ResetPassword/>,
  }, 
];
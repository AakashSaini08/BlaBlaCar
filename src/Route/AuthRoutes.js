import Login from "../View/Login";
import SignUp from "../View/SignUp";


export const AUTH_ROUTES = [
  {
    path: "/login",
    component: <Login/>,
  },
  {
    path: "/signup",
    component: <SignUp/>,
  },
];
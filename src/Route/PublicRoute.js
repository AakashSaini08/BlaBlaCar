import DOB from "../View/DOB";
import Email from "../View/Email";
import EmailPsw from "../View/EmailPsw";
import Gender from "../View/Gender";
import Home from "../View/Home";
import Password from "../View/Password";
import Search from "../View/Search";
import Username from "../View/Username";

export const PUBLIC_ROUTES = [
   {
    path: "/",
    component: <Home/>,
   
  },
  {
    path: "*",
    component: <Home/>,
   
  },
  {
    path:"/search",
    component: <Search/>,
  },
  {
    path:"/publish",
    component: <Search/>,
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
];
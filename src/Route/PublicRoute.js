
import Home from "../View/Home";

export const PUBLIC_ROUTES = [
   {
    path: "/",
    component: <Home/>,
   
  },
  {
    path: "*",
    component: <Home/>,
   
  },
];
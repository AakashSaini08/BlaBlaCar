import PublishRide from "../Components/Molecules/PublishRide";
import Home from "../View/Home";
import Search from "../View/Search";

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
    path:"/offer-seats",
    component: <PublishRide/>,
  },
];
import { Route } from "react-router-dom";
import Home from "../View/Home";

const RenderRoutes = ({
  routes = [  {
      path: "/",
      component: () => <Home/>,
    },
  ],
}) => (
  <>
    {routes.map((route,i) => (
      <Route key={i} path={route.path}  element={route.component}  />
    ))}
  </>
);
export default RenderRoutes;
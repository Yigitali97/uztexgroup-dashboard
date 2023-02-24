import routeNames from "../constants/routeNames";
import Admins from "../pages/Admins";
import Home from "../pages/Home";

export const PrivateRoutes = [
  {
    path: routeNames.HOME,
    element: <Home />,
  },
  {
    path: routeNames.ADMINS,
    element: <Admins />,
  },
];

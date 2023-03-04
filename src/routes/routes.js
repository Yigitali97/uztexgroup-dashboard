import routeNames from "../constants/routeNames";
import Admins from "../pages/SuperAdmin";
import Home from "../pages/Admin";

export const PrivateRoutes = [
  {
    path: routeNames.COMPANIES,
    element: <Home />,
  },
  {
    path: routeNames.ADMINS,
    element: <Admins />,
  },
];

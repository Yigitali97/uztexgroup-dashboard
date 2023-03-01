import * as React from "react";
import PeopleIcon from "@mui/icons-material/People";
import routeNames from "./routeNames";

export const superAdminListItems = [
  {
    title: "Adminlar",
    icon: <PeopleIcon />,
    path: routeNames.ADMINS,
  },
];

export const adminListItems = [
  {
    title: "Kompaniyalar",
    icon: <PeopleIcon />,
    path: routeNames.COMPANIES,
  },
];

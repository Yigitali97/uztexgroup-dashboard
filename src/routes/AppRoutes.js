import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import SignIn from "../pages/SignIn";
import { dispatch } from "../redux";
import { PrivateRoutes } from "./routes";

const AppRoutes = () => {
  const { isLogged } = useSelector((store) => store.auth);

  // useEffect(() => {
  //   dispatch.auth.logoutAsync();
  // }, []);

  return (
    <div>
      {isLogged ? (
        <Layout>
          <Routes>
            {PrivateRoutes?.map((route, idx) => (
              <Route
                key={route.path + idx}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </Layout>
      ) : (
        <SignIn />
      )}
    </div>
  );
};

export default AppRoutes;

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import { dispatch } from "../redux";

const AppRoutes = () => {
  const { isLogged } = useSelector((store) => store.auth);

  useEffect(() => {
    dispatch.auth.logoutAsync();
  }, []);

  return (
    <div>
      {isLogged ? (
        <Layout>
          <Home />
        </Layout>
      ) : (
        <SignIn />
      )}
    </div>
  );
};

export default AppRoutes;

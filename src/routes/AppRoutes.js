import React from "react";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";

const AppRoutes = () => {
  const isLogged = true;

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

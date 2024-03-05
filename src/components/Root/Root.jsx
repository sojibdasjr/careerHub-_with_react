import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SmallHeader from "../SmallHeader/SmallHeader";

const Root = () => {
  return (
    <div>
      <SmallHeader />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;

import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Banner from "../components/Banner";

export default function HomeComponents() {
  return (
    <div>
      {/* <Header />
      <Outlet />
      <Footer /> */}
      <Banner />
    </div>
  );
}

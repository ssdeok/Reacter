import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./component/header";

export default function RouteLayout() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <footer>footer</footer>
    </>
  );
}

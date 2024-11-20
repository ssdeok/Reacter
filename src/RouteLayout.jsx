import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./component/Header";

export default function RouteLayout() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <footer>footer</footer>
    </>
  );
}

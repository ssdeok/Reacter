import React from "react";
import { Outlet } from "react-router-dom";
import RootHeader from "./components/RootHeader";

export default function RootLayout() {
  return (
    <>
      <RootHeader></RootHeader>
      <Outlet></Outlet>
    </>
  );
}

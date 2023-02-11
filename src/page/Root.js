import React from "react";
import MainNavigator from "../component/MainNavigator";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <React.Fragment>
      <MainNavigator></MainNavigator>
      <Outlet></Outlet>
    </React.Fragment>
  );
}

export default Root;

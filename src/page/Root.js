import React, { useState } from "react";
import MainNavigator from "../component/MainNavigator";
import { Outlet } from "react-router-dom";
import SidebarContext from "../store/sidebar-context";

function Root() {
 const [value,setValue]= useState(false);
  
  return (
    <React.Fragment>
      <SidebarContext.Provider value={{
      value,
      setValue
    }}>
      <MainNavigator  ></MainNavigator>
      <Outlet ></Outlet>
      </SidebarContext.Provider>
    </React.Fragment>
  );
}

export default Root;

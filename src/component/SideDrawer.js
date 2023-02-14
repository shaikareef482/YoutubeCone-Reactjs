import React from "react";


import classes from "./SideDrawer.module.css";

import { CSSTransition } from "react-transition-group";

const animationTiming = {
  enter: 400,
  exit: 1000,
};

const SideDrawer = (props) => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={animationTiming}
      classNames={{
        enter: "",
        enterActive: classes.sideOpen,
        exit: "",
        exitActive: classes.sideClose,
      }}
      mountOnEnter
      unmountOnExit
    >
      <aside> {props.children}</aside>
    </CSSTransition>
  );

  return <div>{content}</div>
};

export default SideDrawer;

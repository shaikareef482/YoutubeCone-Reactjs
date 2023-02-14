import React from "react";

import ReactDOM from 'react-dom';

import classes from './backdrop.module.css';


const Backdrop = (props)=>{
    return ReactDOM.createPortal(<div className={classes.backdrop}></div>,
    document.getElementById('backdrop-hook')
    );

}

export default Backdrop;
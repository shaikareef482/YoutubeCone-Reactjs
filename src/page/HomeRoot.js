import React from 'react';
import SideBar from '../component/sidebar';
// import SideDrawer from '../component/SideDrawer';
import classes from './Home.module.css';
import RecommendedVideos from '../component/RecommendedVideos';

function HomeRoot(){
    return(< >
    {/* <SideDrawer></SideDrawer> */}
    <div className={classes.app_page}>
    <SideBar></SideBar>
    <RecommendedVideos></RecommendedVideos>
    </div>
    </>)
    
}
export default HomeRoot;
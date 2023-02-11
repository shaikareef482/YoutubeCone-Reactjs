import React from 'react';
import SideBarRow from './sidebarRow';
import classes from './sidebar.module.css';

//icons for side bar

import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import FeedbackIcon from '@mui/icons-material/Feedback';



function SideBar()
{
   return(
    <div className={classes.sidebar}>
        <SideBarRow selected Icon={HomeIcon} title={"Home"}></SideBarRow>
        <SideBarRow Icon={WhatshotIcon} title={"Trending"}></SideBarRow>
        <SideBarRow Icon={SubscriptionsIcon} title={"Subscription"}></SideBarRow>
        <hr/>

        <SideBarRow Icon={VideoLibraryIcon} title={"Library"}></SideBarRow>
        <SideBarRow Icon={HistoryIcon} title={"History"}></SideBarRow>
        <SideBarRow Icon={OndemandVideoIcon} title={"Your Videos"}></SideBarRow>
        <SideBarRow Icon={WatchLaterIcon} title={"Watch Later"}></SideBarRow>
        <SideBarRow Icon={ThumbUpIcon} title={"Liked Videos"}></SideBarRow>
        <SideBarRow Icon={KeyboardArrowDownIcon} title={"Show More"}></SideBarRow>
        <hr/>
        <SideBarRow Icon={SettingsIcon} title={"Settings"}></SideBarRow>
        <SideBarRow Icon={FlagIcon } title={"Report History"}></SideBarRow>
        <SideBarRow Icon={HelpOutlineIcon} title={"Help"}></SideBarRow>
        <SideBarRow Icon={FeedbackIcon } title={"Send Feedback"}></SideBarRow>
        <hr/>
        
        

    </div>
   )
}
export default SideBar;
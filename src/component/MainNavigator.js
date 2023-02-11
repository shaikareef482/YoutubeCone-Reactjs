import React from "react";
import classes from './MainNavigator.module.css';
import { Link } from "react-router-dom";
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import SearchIcon from '@mui/icons-material/Search';
import VideocamIcon from '@mui/icons-material/Videocam';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from "@mui/material";

function MainNavigator()
{
    return(<header className={classes.header}>
        
            <div  className={classes.header_right}>
                <FormatAlignJustifyIcon style={{fontSize:28}}></FormatAlignJustifyIcon>
                    <Link to={'/'}>
                        <img src="./logo.jpg" alt="it is logo" className={classes.logo}></img>
                    </Link>
            </div>

            <div className={classes.header_middle}>
                <input type={'text'} placeholder="Search"/>
                <SearchIcon className={classes.search_icon}></SearchIcon>
            </div>
            <div className={classes.header_left}>
                <VideocamIcon style={{fontSize:32}} className={classes.header_icon}></VideocamIcon>
                <NotificationsIcon style={{fontSize:32}} className={classes.header_icon}></NotificationsIcon>
                <Avatar className={classes.avater_icon}></Avatar>


            </div>
        
    </header>)
}

export default MainNavigator;
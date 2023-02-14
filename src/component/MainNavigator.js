import React from "react";
import classes from './MainNavigator.module.css';
import { Link } from "react-router-dom";
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import SearchIcon from '@mui/icons-material/Search';
import VideocamIcon from '@mui/icons-material/Videocam';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from "@mui/material";
import SidebarContext from "../store/sidebar-context";
import { useContext } from "react";


function MainNavigator(props)
{

    const {value,setValue}= useContext(SidebarContext);

    const openDrawerHandler=()=>{
        setValue(!value);
    }
    
    return(
       
    <header className={classes.header}>
        
            <div  className={classes.header_right}>
                
                <FormatAlignJustifyIcon onClick={openDrawerHandler} className={classes.header_burger} style={{fontSize:28}}></FormatAlignJustifyIcon>
                
            
                    <Link to={'/'}>
    
                        <img src='./logo1.jpg' alt="youtubelogo" className={classes.header_logo} ></img>
                    
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
        
    </header>
   
    )
    
}

export default MainNavigator;
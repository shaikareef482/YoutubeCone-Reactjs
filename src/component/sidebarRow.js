import React from 'react';
import classes from './sidebarRow.module.css'

function SideBarRow({selected,Icon,title})
{
        return(<div className={classes.sidebarRow} >
            <Icon className={classes.sidebar_icon}  />
            <h2  className={classes.title}>{title}</h2>
        </div>)
}

export default SideBarRow;
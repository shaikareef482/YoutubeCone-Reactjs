import React from 'react';
import classes from './Cover.module.css'

function Cover()
{
     return(<div className={classes.cover}>
        <img src='./youtube.jpg' alt='youtubeCover' className={classes.cover_image}></img>
     </div>)
}

export default Cover;
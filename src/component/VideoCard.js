import { Avatar } from '@mui/material';
import React from 'react';
import classes from './VideoCard.module.css';


function VideoCard({image,title,channel,views,timestamp,channelImage}){
    return(<div className={classes.videoCard}>
        <img src={image} className={classes.VideoCard_image} alt=''></img>
        <div className={classes.VideoCard_info}>
            <Avatar className={classes.VideoCard_avatar}
            alt={channel}
            src={channelImage}
            ></Avatar>

            <div className={classes.video_text}>
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>
                    {views}.{timestamp}
                </p>
            </div>
        </div>

    </div>)

};

export default VideoCard;
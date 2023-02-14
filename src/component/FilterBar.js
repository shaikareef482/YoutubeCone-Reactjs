import React from 'react';
import classes from './FilterBar.module.css';

function FilterBar(){

    return (<div className={classes.Filterbar}>
        <ul>
            <li className={classes.main}>All</li>
            <li>Cricket</li>
            <li>Comedy</li>
            <li>Naruto</li>
            <li>JavaScript</li>
            <li>Thrillers</li>
            <li>Trailer</li>
            <li>Netflix</li>
            <li>Game of Thrones</li>
            <li>Football</li>
            <li>HotStar</li>
            <li>Recently Uploaded</li>
            <li>Live</li>

        </ul>
    </div>)

}

export default FilterBar;
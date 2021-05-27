import React from 'react'
import axios from "axios";


function DisplayTop(props) {

    const list = props.topList;
    const display = list.map((list) =>

        <div className="anime_containter">
            <div>{list.title}</div>
            <img src={list.image_url} alt="not found"></img>
            <div>Rank: {list.rank}</div>
            <div>{list.synopsis}</div>
            <div>mal_Id: {list.mal_id}</div>
            <a href={list.url}>myanimelist</a>
            
        </div>
    );

    return (
        <div>
            {display}
        </div>
    )
}

export default DisplayTop

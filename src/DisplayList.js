import React from 'react'

function DisplayList(props) {

    const list = props.list;
    const display = list.map((list) =>

        <div className="anime_containter">
            <div>{list.title}</div>
            <img src={list.image_url} alt="not found"></img>
            <div>Score: {list.score} /10</div>
            <div>{list.synopsis}</div>
            <a href={list.url}>myanimelist</a>
        </div>
    );

    return (
        <div>
            {display}
        </div>
    )
}

export default DisplayList

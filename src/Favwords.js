import React from 'react'

function Favwords(props) {
    const list = props.wordList;
    const display = list.map((list) =>

        <div className="anime_containter">
            <div>Word: {list.word}</div>
            <div>Translation: {list.translated}</div>
        </div>
    );

    return (
        <div>
            {display}
        </div>
    )
}

export default Favwords

import React from 'react';

function shuffle(array) {
    let tmp, current, top = array.length;
    if(top) while(--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
    }
    return array;
}

export default function Graph(props) {
    
    let array = [];
    
    for (let i = 1; i <= props.size; i++){
        array[i]=i;
    }
    array = shuffle(array);

    return (
        <div className="graph">
            {array.map((value, key) => {
                return(<span key={key}>{value}</span>)
            })}
        </div>
    )
}

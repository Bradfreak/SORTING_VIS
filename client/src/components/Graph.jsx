import React from 'react';

function shuffle(array) {
    let tmp, current, top = array.length;
    if (top) while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
    }
    return array;
}

export default function Graph(props) {

    let array = [];

    for (let i = 1; i <= props.size; i++) {
        array[i - 1] = i;
    }
    array = shuffle(array);
    console.log(props.size);

    return (
        <div className="graph">
            {array.map((value, key) => {
                return (
                    <span id={value} key={key}>
                        <Bar
                            height={value / props.size}
                            width={1 / props.size}
                        />

                        {props.size <= 40 && <div className="value">{value}</div>}

                    </span>
                )
            })}
        </div>
    )
}

function Bar(props) {
    return (
        <div
            className="bar"
            style={{
                flex: props.height,
                // width: props.width
            }}

        >


        </div>
    )
}
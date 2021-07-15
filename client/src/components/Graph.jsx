import React from 'react';


export default function Graph(props) {
    return (
        <div className="graph">
            {props.array.map((value, key) => {
                return (
                    <span id={value} key={key}>
                        <Bar
                            height={value / props.size}
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
                flex: props.height
            }}
        ></div>
    )
}
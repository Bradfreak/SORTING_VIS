import React from 'react';

export default function Graph(props) {
    var windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    return (
        <div className="graph">
            {props.array.map((value, key) => {
                return (
                    <span id={value} key={key}>
                        <Bar
                            highlight={props.highlight[key]}
                            height={value / props.size}
                        />

                        {
                            windowWidth > 500
                                ? props.size <= 40 && <div className="value">{value}</div>
                                : props.size <= 15 && <div className="value">{value}</div>
                        }
                    </span>
                )
            })}
        </div>
    )
}

function Bar(props) {
    return (
        <div
            className={`bar ${props.highlight}`}
            style={{
                flex: props.height
            }}
        ></div>
    )
}
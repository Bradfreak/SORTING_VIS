import React from 'react'

export default function Graph(props) {
    return (
        <div className="graph">
            <p>{props.size}</p>
            <p>{props.sort}</p>
        </div>
    )
}

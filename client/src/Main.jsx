import React, {useState} from 'react'
import Options from './components/Options';
import Graph from './components/Graph';

export default function Main() {
    const [size, changeSize] = useState();
    const [sort, changeSort] = useState();

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        if (name === "sort") { changeSort(value); }
        else { changeSize(value); }
    }

    return (
        <div className="main">
            <Options 
             handleChange={handleChange}
            />
            <Graph 
             size={size}
             sort={sort}
            />
        </div>
    )
}

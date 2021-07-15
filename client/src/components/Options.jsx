import React, {useState}from 'react'


export default function Options() {
    const [size, changeSize] = useState();
    const [sort, changeSort] = useState();

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        if(name === "sort"){changeSort(value);}
        else{changeSize(value);}
    }

    return (
        <div>
            <form>
                <input type="button" value="Generate Random" />
                <input type="radio" name="sort" id="" onChange={handleChange} value="0"/>
                <input type="radio" name="sort" id="" onChange={handleChange} value="1"/>
                <input type="radio" name="sort" id="" onChange={handleChange} value="2"/>
                <input type="radio" name="sort" id="" onChange={handleChange} value="3"/>
                <input type="radio" name="sort" id="" onChange={handleChange} value="4"/>
                <input type="range" name="size" id="" min="5" max="1000" onChange={handleChange} />
                <input type="button" value="Sort" />
                <p>{size}</p>
                <p>{sort}</p>
            </form>
        </div>
    )
}

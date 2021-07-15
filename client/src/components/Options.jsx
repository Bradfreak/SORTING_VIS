import React, { useState } from 'react'


export default function Options() {
    const [size, changeSize] = useState();
    const [sort, changeSort] = useState();

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        if (name === "sort") { changeSort(value); }
        else { changeSize(value); }
    }

    return (
        <div className="options">
            <form>
                <div className="form-section"> <h2>Generate random array</h2>
                    <input type="button" value="Generate" />
                </div>

                <div className="form-section"> <h2>Select sorting algorithm</h2>
                    <label htmlFor="0">
                        <input type="radio" name="sort" id="0" onChange={handleChange} value="0" />
                        Bubble Sort
                    </label>
                    <label htmlFor="1">
                        <input type="radio" name="sort" id="1" onChange={handleChange} value="1" />
                        Insertion Sort
                    </label>
                    <label htmlFor="2">
                        <input type="radio" name="sort" id="2" onChange={handleChange} value="2" />
                        Selection Sort
                    </label>
                    <label htmlFor="3">
                        <input type="radio" name="sort" id="3" onChange={handleChange} value="3" />
                        Merge Sort
                    </label>
                    <label htmlFor="4">
                        <input type="radio" name="sort" id="4" onChange={handleChange} value="4" />
                        Quick Sort
                    </label>
                    <label htmlFor="5">
                        <input type="radio" name="sort" id="5" onChange={handleChange} value="5" />
                        Heap Sort
                    </label>
                </div>

                <div className="form-section"> <h2>Select Range of values</h2>
                    <input type="range" name="size" id="" min="5" max="1000" onChange={handleChange} />
                </div>

                <div className="form-section">
                    <input type="button" value="Sort" />
                </div>
            </form>
            <p>{size}</p>
            <p>{sort}</p>
        </div>
    )
}

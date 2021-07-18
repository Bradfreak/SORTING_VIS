import React, { useState } from 'react'


export default function Options(props) {
    const [disable, toggleDisable] = useState(false);

    return (
        <div className="options">

            <h1>Sorting Visualizer</h1>
            <form>
                {/* <div className="form-section"> <h2>Generate random array</h2>
                    <input type="button" value="Generate" />
                </div> */}

                <div className="form-section"> <h2>Select sorting algorithm</h2>
                    <label className={disable ? "disabled" : ""} htmlFor="0">
                        <input type="radio" name="sort" id="0" onChange={props.handleChange} value="0" disabled={disable} />
                        Bubble Sort
                    </label>
                    <label className={disable ? "disabled" : ""} htmlFor="1">
                        <input type="radio" name="sort" id="1" onChange={props.handleChange} value="1" disabled={disable} />
                        Insertion Sort
                    </label>
                    <label className={disable ? "disabled" : ""} htmlFor="2">
                        <input type="radio" name="sort" id="2" onChange={props.handleChange} value="2" disabled={disable} />
                        Selection Sort
                    </label>
                    <label className={disable ? "disabled" : ""} htmlFor="3">
                        <input type="radio" name="sort" id="3" onChange={props.handleChange} value="3" disabled={disable} />
                        Merge Sort
                    </label>
                    <label className={disable ? "disabled" : ""} htmlFor="4">
                        <input type="radio" name="sort" id="4" onChange={props.handleChange} value="4" disabled={disable} />
                        Quick Sort
                    </label>
                    <label className={disable ? "disabled" : ""} htmlFor="5">
                        <input type="radio" name="sort" id="5" onChange={props.handleChange} value="5" disabled={disable} />
                        Heap Sort
                    </label>
                </div>

                <div className="form-section"> <h2>Select Range of values</h2>
                    <input type="range" name="size" id="" min="5" max="150" onChange={props.handleChange} disabled={disable} />
                </div>

                <div className="form-section">
                    <input
                        type="button"
                        value="Sort"
                        onClick={async () => {
                            toggleDisable(true);
                            await props.submit();
                            toggleDisable(false);
                        }}
                        disabled={disable}
                    />
                </div>
            </form>
        </div>
    )
}

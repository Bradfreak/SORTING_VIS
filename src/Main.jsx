import React, { useState } from "react";
import Options from "./components/Options";
import Graph from "./components/Graph";

import { createArray, createColor } from "./utilities/helper"
import { bubbleSort, insertionSort, selectionSort, mergeSort, quickSort, heapSort } from "./utilities/sortingAlgorithms"

export default function Main() {
    const [size, changeSize] = useState(10);
    const [sort, changeSort] = useState();
    const [array, changeArray] = useState(createArray(10));
    const [highlight, changeHighlight] = useState(createColor(10));

    async function submit() {
        if (sort === "0") {
            await bubbleSort(array, highlight, changeArray, changeHighlight);
        } else if (sort === "1") {
            await insertionSort(array, highlight, changeArray, changeHighlight);
        } else if (sort === "2") {
            await selectionSort(array, highlight, changeArray, changeHighlight);
        } else if (sort === "3") {
            await mergeSort(array, 0, array.length, highlight, changeArray, changeHighlight);
        } else if (sort === "4") {
            await quickSort(array, 0, array.length - 1, highlight, changeArray, changeHighlight);
        } else if (sort === "5") {
            await heapSort(array, highlight, changeArray, changeHighlight);
        }
    }

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        if (name === "sort") {
            changeSort(value);
        } else {
            changeSize(value);
            changeArray(createArray(value));
            changeHighlight(createColor(value));
        }
    }
    return (
        <div className="main">
            <Options
                handleChange={handleChange}
                submit={submit}
            />
            <Graph
                size={size}
                sort={sort}
                array={array}
                highlight={highlight} />
        </div>
    );
}

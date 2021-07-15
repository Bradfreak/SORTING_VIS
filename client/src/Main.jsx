import React, { useState } from 'react'
import Options from './components/Options';
import Graph from './components/Graph';


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

function createArray(size) {
    let array = [];
    for (let i = 1; i <= size; i++) {
        array[i - 1] = i;
    }
    array = shuffle(array);
    return array;
}

function createColor(size) {
    let color = [];
    for (let i = 1; i <= size; i++) {
        color[i - 1] = 'blue'
    }
    return color;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms * 2000));
}

async function bubbleSort(ar, col, changeArray, changeHighlight) {
    let i, j;
    for (i = 0; i < ar.length; i++) {
        let flag = false;
        for (j = 0; j < ar.length - 1 - i; j++) {

            // check stage
            col[j] = 'green';
            col[j + 1] = 'green';
            changeHighlight([...col]);
            await sleep(1 / ar.length);

            if (ar[j] > ar[j + 1]) {

                // swap stage
                col[j] = 'red';
                col[j + 1] = 'red';
                changeHighlight([...col]);
                await sleep(1 / ar.length);

                let temp = ar[j + 1];
                ar[j + 1] = ar[j];
                ar[j] = temp;

                changeArray([...ar]);
                // swap done stage
                col[j] = 'green';
                col[j + 1] = 'green';
                changeHighlight([...col]);
                await sleep(1 / ar.length);

                flag = true;
            }

            col[j] = 'blue';
            col[j + 1] = 'blue';
            changeHighlight([...col]);
            await sleep(1 / ar.length);
        }
        if (!flag) { break; }
    }
    changeArray([...ar]);
}

export default function Main() {
    const [size, changeSize] = useState(10);
    const [sort, changeSort] = useState();
    const [array, changeArray] = useState(createArray(10));
    const [highlight, changeHighlight] = useState(createColor(10));

    function submit() {
        //disable everything
        // and put a cancel button
        if (sort === "0") {
            bubbleSort(array, highlight, changeArray, changeHighlight);
        }
    }

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        if (name === "sort") {
            changeSort(value);
        }
        else {
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
                highlight={highlight}
            />
        </div>
    )
}

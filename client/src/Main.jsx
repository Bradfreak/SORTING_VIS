import React, { useState } from "react";
import Options from "./components/Options";
import Graph from "./components/Graph";

function shuffle(array) {
    let tmp,
        current,
        top = array.length;
    if (top)
        while (--top) {
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
        color[i - 1] = "blue";
    }
    return color;
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms * 2000));
}

async function bubbleSort(ar, col, changeArray, changeHighlight) {
    let i, j;
    for (i = 0; i < ar.length; i++) {
        let flag = false;
        for (j = 0; j < ar.length - 1 - i; j++) {
            // check stage
            col[j] = "green";
            col[j + 1] = "green";
            changeHighlight([...col]);
            await sleep(1 / ar.length);

            if (ar[j] > ar[j + 1]) {
                // swap stage
                col[j] = "red";
                col[j + 1] = "red";
                changeHighlight([...col]);
                await sleep(1 / ar.length);

                let temp = ar[j + 1];
                ar[j + 1] = ar[j];
                ar[j] = temp;

                changeArray([...ar]);
                // swap done stage
                col[j] = "green";
                col[j + 1] = "green";
                changeHighlight([...col]);
                await sleep(1 / ar.length);

                flag = true;
            }

            col[j] = "blue";
            col[j + 1] = "blue";
            changeHighlight([...col]);
            await sleep(1 / ar.length);
        }
        if (!flag) {
            break;
        }
    }
    changeArray([...ar]);
}

async function selectionSort(ar, col, changeArray, changeHighlight) {
    let i, j;
    for (i = ar.length - 1; i > 0; i--) {
        let maxi = 0;
        col[maxi] = "green";
        changeHighlight([...col]);
        await sleep(1 / ar.length);
        for (j = 0; j <= i; j++) {
            if (ar[maxi] < ar[j]) {
                col[maxi] = "blue";
                maxi = j;
                col[maxi] = "green";
                changeHighlight([...col]);
                await sleep(1 / ar.length);
            }
        }
        if (maxi !== i) {
            // swap stage
            col[maxi] = "red";
            col[i] = "red";
            changeHighlight([...col]);
            await sleep(1 / ar.length);

            let temp = ar[maxi];
            ar[maxi] = ar[i];
            ar[i] = temp;

            changeArray([...ar]);
            // swap done stage
            col[maxi] = "green";
            col[i] = "green";
            changeHighlight([...col]);
            await sleep(1 / ar.length);
        }
        col[maxi] = "blue";
        col[i] = "blue";
        changeHighlight([...col]);
        await sleep(1 / ar.length);
    }
    changeArray([...ar]);
}

async function insertionSort(ar, col, changeArray, changeHighlight) {
    let i, j;
    for (i = 1; i < ar.length; i++) {
        let ip = i;

        col[ip] = "green";
        changeHighlight([...col]);
        await sleep(1 / ar.length);

        for (j = 0; j < i; j++) {
            if (ar[j] > ar[i]) {
                ip = j;

                col[ip] = "red";
                changeHighlight([...col]);
                await sleep(1 / ar.length);

                break;
            }
        }
        if (ip !== i) {
            for (let j = i; j > ip; j--) {

                col[j] = "red";
                col[j - 1] = "red";
                changeHighlight([...col]);
                await sleep(1 / ar.length);

                let temp = ar[j];
                ar[j] = ar[j - 1];
                ar[j - 1] = temp;

                changeArray([...ar]);
                col[j] = "green";
                col[j - 1] = "green";
                changeHighlight([...col]);
                await sleep(1 / ar.length);

                col[j] = "blue";
                col[j - 1] = "blue";
                changeHighlight([...col]);
                await sleep(1 / ar.length);
            }
        }
        else {
            col[ip] = "blue";
            changeHighlight([...col]);
            await sleep(1 / ar.length);
        }
    }
    changeArray([...ar]);
}

export default function Main() {
    const [size, changeSize] = useState(10);
    const [sort, changeSort] = useState();
    const [array, changeArray] = useState(createArray(10));
    const [highlight, changeHighlight] = useState(createColor(10));

    async function submit() {
        // and put a cancel button
        if (sort === "0") {
            await bubbleSort(array, highlight, changeArray, changeHighlight);
        } else if (sort === "1") {
            await insertionSort(array, highlight, changeArray, changeHighlight);
        } else if (sort === "2") {
            await selectionSort(array, highlight, changeArray, changeHighlight);
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

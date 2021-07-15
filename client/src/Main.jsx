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

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function createArray(size){
    let array = [];
    for (let i = 1; i <= size; i++) {
        array[i - 1] = i;
    }
    array = shuffle(array);
    return array;
}

async function bubbleSort(ar, changeArray){
    let i, j;
    for(i = 0; i < ar.length; i++){
        let flag = false;
        for(j = 0; j < ar.length-1-i; j++){
            if(ar[j] > ar[j+1]){
                let temp = ar[j+1];
                ar[j+1] = ar[j];
                ar[j] = temp;
                changeArray([...ar]);
                await sleep(300);
                flag = true;
            }
        }
        if(!flag){break;}
    }
    changeArray([...ar]);
}

export default function Main() {
    const [size, changeSize] = useState(10);
    const [sort, changeSort] = useState();
    const [array, changeArray] = useState(createArray(10));


    function submit(){
        //disable everything
        // and put a cancel button
        if(sort === "0"){bubbleSort(array, changeArray);}
    }

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        if (name === "sort") { changeSort(value); }
        else { 
            changeSize(value);
            changeArray(createArray(value));
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
            />
        </div>
    )
}

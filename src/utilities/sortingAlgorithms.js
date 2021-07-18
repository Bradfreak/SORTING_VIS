import { sleep } from "./helper"

//Bubble Sort
export async function bubbleSort(ar, col, changeArray, changeHighlight) {
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

//Selection Sort
export async function selectionSort(ar, col, changeArray, changeHighlight) {
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

//Insertion Sort
export async function insertionSort(ar, col, changeArray, changeHighlight) {
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

// MERGE SORT
async function join(ar, l, m, r, col, changeArray, changeHighlight) {
    let i, j;
    for (i = m + 1; i <= r; i++) {
        let ip = i;

        for (j = l; j <= i; j++) {

            if (ar[j] > ar[i]) {
                col[i] = "red";
                col[j] = "red";
                changeHighlight([...col]);
                await sleep(2 / ar.length);

                ip = j;

                col[i] = "green";
                col[j] = "green";
                changeHighlight([...col]);
                await sleep(2 / ar.length);

                col[i] = "blue";
                col[j] = "blue";
                changeHighlight([...col]);

                break;
            }
        }
        if (ip !== i) {
            for (let j = i; j > ip; j--) {
                // shifting 
                let temp = ar[j];
                ar[j] = ar[j - 1];
                ar[j - 1] = temp;

            }
            changeArray([...ar]);
        } else {
            break;
        }

    }
}

export async function mergeSort(a, l, r, col, changeArray, changeHighlight) {
    if (l < r) {
        let m = Math.floor((l + r - 1) / 2);

        await mergeSort(a, l, m, col, changeArray, changeHighlight);
        await mergeSort(a, m + 1, r, col, changeArray, changeHighlight);

        await join(a, l, m, r, col, changeArray, changeHighlight);
    }
}

//Quick Sort
async function partition(ar, low, high, col, changeArray, changeHighlight) {
    let pivot = ar[high];
    col[high] = "yellow";
    changeHighlight([...col]);
    await sleep(1 / ar.length);
    let i = low - 1, j;
    for (j = low; j < high; j++) {
        if (pivot > ar[j]) {
            i++;
            if (i !== j) {

                col[j] = "red";
                col[i] = "red";
                changeHighlight([...col]);
                await sleep(1 / ar.length);

                let temp = ar[j];
                ar[j] = ar[i];
                ar[i] = temp;

                changeArray([...ar]);
                // swap done stage
                col[j] = "green";
                col[i] = "green";
                changeHighlight([...col]);
                await sleep(1 / ar.length);

                col[j] = "blue";
                col[i] = "blue";
                changeHighlight([...col]);
                await sleep(1 / ar.length);
            }
        }
    }

    col[i + 1] = "yellow";
    col[high] = "yellow";
    changeHighlight([...col]);
    await sleep(1 / ar.length);

    ar[high] = ar[i + 1];
    ar[i + 1] = pivot;

    changeArray([...ar]);

    col[i + 1] = "blue";
    col[high] = "blue";
    changeHighlight([...col]);
    await sleep(1 / ar.length);

    return i + 1;
}

export async function quickSort(ar, low, high, col, changeArray, changeHighlight) {
    if (low < high) {
        let part = await partition(ar, low, high, col, changeArray, changeHighlight);
        await quickSort(ar, low, part - 1, col, changeArray, changeHighlight);
        await quickSort(ar, part + 1, high, col, changeArray, changeHighlight);
    }
}

//Heap Sort
async function heapify(ar, n, i, col, changeArray, changeHighlight) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && ar[left] > ar[largest]) {
        largest = left;
    }
    if (right < n && ar[right] > ar[largest]) {
        largest = right;
    }

    if (largest !== i) {

        col[largest] = "red";
        col[i] = "red";
        changeHighlight([...col]);
        await sleep(1 / ar.length);

        let temp = ar[largest];
        ar[largest] = ar[i];
        ar[i] = temp;
        changeArray([...ar]);

        col[largest] = "green";
        col[i] = "green";
        changeHighlight([...col]);
        await sleep(1 / ar.length);

        col[largest] = "blue";
        col[i] = "blue";
        changeHighlight([...col]);

        await heapify(ar, n, largest, col, changeArray, changeHighlight);
    }
}

export async function heapSort(ar, col, changeArray, changeHighlight) {
    let n = ar.length;
    let i;
    for (i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await heapify(ar, n, i, col, changeArray, changeHighlight);
    }

    for (i = n - 1; i > 0; i--) {

        col[0] = "yellow";
        col[i] = "yellow";
        changeHighlight([...col]);
        await sleep(1 / ar.length);

        let temp = ar[i];
        ar[i] = ar[0];
        ar[0] = temp;
        changeArray([...ar]);

        col[0] = "green";
        col[i] = "green";
        changeHighlight([...col]);
        await sleep(1 / ar.length);

        col[0] = "blue";
        col[i] = "blue";
        changeHighlight([...col]);

        await heapify(ar, i, 0, col, changeArray, changeHighlight);
    }
}

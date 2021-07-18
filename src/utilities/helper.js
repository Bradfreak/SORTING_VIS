// shuffle array
export function shuffle(array) {
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

// initialize array
export function createArray(size) {
    let array = [];
    for (let i = 1; i <= size; i++) {
        array[i - 1] = i;
    }
    array = shuffle(array);
    return array;
}

// initialize color array
export function createColor(size) {
    let color = [];
    for (let i = 1; i <= size; i++) {
        color[i - 1] = "blue";
    }
    return color;
}

// sleep export function
export function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms * 2000));
}

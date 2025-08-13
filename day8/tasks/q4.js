

let array = [1, 2, 3];
array.forEach((value, index, arr) => {
    arr[index] = value + 1;
});
console.log(array); 
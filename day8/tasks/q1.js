/*
"forEach" Method in JavaScript: Practical Questions:
1. Find the length of each string in an array:
Input:
["apple", "banana", "grape"];   
Output:
[5, 6, 5]
*/

let array = ["apple","banana","grape"];
let length =[];
array.forEach(element => {
    length.push(element.length);
});
console.log(length);

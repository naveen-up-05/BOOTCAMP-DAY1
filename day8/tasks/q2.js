
let arr = [1, -2, 3, -4, 5];
let result = [];
arr.forEach(num => {
    if (num >= 0) {
        result.push(num);
    }
});
console.log(result); 
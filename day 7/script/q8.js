/** Q8
	 * This program calculates the sum of the first n odd integers 
	 (Example: 1 + 3 + 5 + ... + (2n - 1)).
	 
	 Problem Flow:
	Input n from user
	Loop from 1 to (2n−1) in steps of 2
	Accumulate the sum
	Print the result
	
	Input / Output Example:
	Input:
	Enter how many odd numbers to sum: 5
	Output:
	Sum of first 5 odd numbers is 25
	(1 + 3 + 5 + 7 + 9 = 25)
	 */


    let n = (prompt("Enter how many odd numbers to sum:"));
    let sum = 0;
    let oddNumbers = [];
    for (let i = 0, odd = 1; i < n; i++, odd += 2) {
        sum += odd;
        oddNumbers.push(odd);
    }
    console.log(`Sum of first ${n} odd numbers is ${sum}`);
    console.log(`(${oddNumbers.join(" + ")} = ${sum})`);

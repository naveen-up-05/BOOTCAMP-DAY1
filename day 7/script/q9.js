/** Q9
	 * This program finds the sum of even numbers between 2 and 30 (inclusive).
	 	
	 Problem Flow:
	Start loop from 2 to 30
	Check if number is even (i % 2 == 0)
	Add to sum
	Print final sum
	
	 Input / Output Example:
	Output:
	Sum of even numbers from 2 to 30 = 240
	(Even numbers: 2 + 4 + 6 + ... + 30 = 240)
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

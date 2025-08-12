/** Q4
	 * This program converts temperature from Fahrenheit to Celsius using the formula:
		C = (5/9) × (F - 32)
		
	Problem Flow:
	Input temperature in Fahrenheit
	Apply formula: C = (5 / 9.0) × (F - 32)
	Display result in Celsius
	
	Input / Output Example:
	Sample Inputs to Test (from question):
	68, 150, 212, 0, -22
	Sample Output (for 68°F):
	68.000000 deg F is 20.000000 deg C
	
	 */
function fahrenheitToCelsius(f) {
    let c = (5 / 9.0) * (f - 32);
    
    return `${f.toFixed(6)} deg F is ${c.toFixed(6)} deg C`;
}


const testInputs = [68, 150, 212, 0, -22];
testInputs.forEach(f => {
    console.log(fahrenheitToCelsius(f));
});
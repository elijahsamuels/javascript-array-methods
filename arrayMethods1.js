/*

.includes()
// Determines whether the array contains a value, returning true or false as appropriate.

.every()
// Returns true if every element in this array satisfies the testing function.

.some()
// Returns true if at least one element in this array satisfies the provided testing function.

.concat()
// Returns a new array that is this array joined with other array(s) and/or value(s).

.join()
// Joins all elements of an array into a string.

.reverse()
// Reverses the order of the elements of an array in place. (First becomes the last, last becomes first.)

*/

let testArray1 = [1, 2, 3, 4, 5];
let testArray2 = ["six", "seven", "eight", "nine", "ten"];

// INCLUDES

testArray1.includes(1) // true
testArray1.includes(0) // false
testArray1.includes("1") // false
testArray1.includes(1+1) // true
testArray1.includes(5-2) // true
testArray1.includes(parseInt("1")) // true
testArray1.includes(parseInt("1+1")) // true
testArray1.includes(+"1") // true

testArray2.includes("six") // true
testArray2.includes("Six") // false
testArray2.includes(String.fromCharCode(115, 105, 120)) // true

// EVERY

testArray1.every(element => {return element > 0}) // true
testArray1.every(element => {return element > 1}) // false
testArray1.every(element => {return element >= 1}) // true
testArray1.every(element => {return typeof element === 'number' }) // true

testArray2.every(element => {return typeof element === 'number' }) // false
testArray2.every(element => {return typeof element === 'string' }) // true

let testArray3 = testArray1.concat(testArray2) // [ 1, 2, 3, 4, 5, 'six', 'seven', 'eight', 'nine', 'ten' ]
let testArray4 = [...testArray1, ...testArray2] // [ 1, 2, 3, 4, 5, 'six', 'seven', 'eight', 'nine', 'ten' ]

testArray3.every(element => {return typeof element === 'string' }) // false
testArray3.every(element => {return typeof element === 'number' }) // false
testArray3.every(element => {return typeof element === 'string' || 'number' }) // true


// SOME

testArray1.some(element => {return element > 0}) // true
testArray1.some(element => {return element > 1}) // true
testArray1.some(element => {return element >= 1}) // true
testArray1.some(element => {return typeof element === 'number' }) // true

testArray2.some(element => {return typeof element === 'number' }) // false
testArray2.some(element => {return typeof element === 'string' }) // true

console.log(testArray1)
console.log(testArray2)
console.log(testArray3)
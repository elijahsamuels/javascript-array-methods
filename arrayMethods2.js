/*

.concat()
// Returns a new array that is this array joined with other array(s) and/or value(s).

.join()
// Joins all elements of an array into a string.

.reverse()
// Reverses the order of the elements of an array in place. (First becomes the last, last becomes first.)

*/

const testArray1 = [1, 2, 3, 4, 5, 6];
const testArray2 = ["six", "seven", "eight", "nine", "ten", "a", "b", "c", "d"];

let testArray3 = testArray1.concat(testArray2) 
// [ 1, 2, 3, 4, 5, 6, 'six', 'seven', 'eight', 'nine', 'ten', 'a', 'b', 'c', 'd' ]

console.log(testArray1) 
// [ 1, 2, 3, 4, 5, 6 ]

console.log(testArray2) 
// [ 'six', 'seven', 'eight', 'nine', 'ten', 'a', 'b', 'c', 'd' ]

console.log(testArray3) 
// [ 1, 2, 3, 4, 5, 6, 'six', 'seven', 'eight', 'nine', 'ten', 'a', 'b', 'c', 'd' ]

testArray3 = []
console.log(testArray3) // []


console.log([1,2,3].join('a')) // "1a2a3"

testString3 = testArray1.join(" abc ")
console.log(testString3) // "1 abc 2 abc 3 abc 4 abc 5 abc 6"
console.log(typeof testString3) // string


// .reverse()
// Reverses the order of the elements of an array in place. (First becomes the last, last becomes first.)

testArray1 // [ 1, 2, 3, 4, 5, 6 ]
testArray1.reverse() // [ 6, 5, 4, 3, 2, 1 ]
testArray2.reverse() // [ 'd', 'c', 'b', 'a', 'ten', 'nine', 'eight', 'seven', 'six' ]
testArray1 // [ 6, 5, 4, 3, 2, 1 ]



// .find()
// The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

let item3 = testArray1.find(element => element === 3)
console.log(item3)

let foundItem = testArray1.find(element => {return (element < 3 && element !== 2)})
console.log(foundItem)
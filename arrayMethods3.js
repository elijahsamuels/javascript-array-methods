/*

.forEach()
// The forEach() method executes a provided function once for each array element.

// Arrow function
forEach((element) => { ... } )
forEach((element, index) => { ... } )
forEach((element, index, array) => { ... } )


.map()
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// Arrow function
map((element) => { ... } )
map((element, index) => { ... } )
map((element, index, array) => { ... } )


.filter()
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

// Arrow function
filter((element) => { ... } )
filter((element, index) => { ... } )
filter((element, index, array) => { ... } )


.sort()

// The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.

// Functionless
sort()

// Arrow function
sort((firstEl, secondEl) => { ... } )

*/

const testArray1 = [1, 2, 3, 4, 5, 6];
const testArray2 = ["six", "seven", "eight", "nine", "ten", "a", "b", "c", "d"];
// let testArray3 = [];

// .forEach()

// testArray1.forEach(itemInArray => {
// 	testArray3.push(itemInArray + 3)
// })

// console.log(testArray3) // [ 4, 5, 6, 7, 8 ]

// .map()

// let testArray3 = testArray1.map(itemInArray => {
// 	return itemInArray + 10
// })

// console.log(testArray1) // [ 1, 2, 3, 4, 5 ]
// console.log(testArray3) // [ 11, 12, 13, 14, 15 ]

// let testArray3 = testArray1.map( itemInArray => itemInArray + 10 )

// .filter()

// let testArray3 = testArray1.filter(itemInArray => {
// 	return (itemInArray % 3)
// })

// console.log(testArray1) // [ 1, 2, 3, 4, 5, 6 ]
// console.log(testArray3) // [ 1, 2, 4, 5 ]

// .sort()

// testArray4.sort(); // [ 1, 2, 21, 34, 5, 58, 6, 7, 72, 9 ]

// let ascendValues = testArray4.sort((a, b) => a - b); 
// console.log(ascendValues); // [ 1, 2, 5, 6, 7, 9, 21, 34, 58, 72 ]

let testArray4 = [21, 6, 2, 72, 9, 34, 1, 58, 7, 5];
// let ascendValues1 = testArray4.sort((a, b) => (a < b ? -1 : 1)); 
// console.log(ascendValues1); // [ 1, 2, 5, 6, 7, 9, 21, 34, 58, 72 ]

let descendValues = testArray2.sort((a, b) => (a > b ? -1 : 1)); 
console.log(descendValues); // [ 'ten', 'six', 'seven', 'nine', 'eight', 'd', 'c', 'b', 'a' ]


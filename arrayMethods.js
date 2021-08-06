/* 

I wanted to write about arrays because I find them fun and a great entry point for developers to "play" with data. We'll cover some background, get through the basics and then begin diving deeper.



BACKGROUND

Array
The JavaScript Array class is a global object that is used in the construction of arrays; which are high-level, list-like objects.

## Description
Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations. Neither the length of a JavaScript array nor the types of its elements are fixed. Since an array's length can change at any time, and data can be stored at non-contiguous locations in the array, JavaScript arrays are not guaranteed to be dense; this depends on how the programmer chooses to use them. In general, these are convenient characteristics; but if these features are not desirable for your particular use, you might consider using typed arrays.

*/

// First, a couple ways to make an empty array. Good news is: they all return the same empty array. And to clarify, not the same object/instance of that array!

let testArray = Array();
console.log(testArray); // []

let testArray2 = new Array();
console.log(testArray2); // []

let testArray3 = [];
console.log(testArray3); // []

let testArray4 = Array.from([]);
console.log(testArray4); // []

// Check to see if the object is an array. Returns boolean (true/false)
// We have to take the Array class, chain the .isArray() method and pass in the object we want to check in this method.

Array.isArray(testArray); // true
Array.isArray(testArray2); // true
Array.isArray(testArray3); // true
Array.isArray(testArray4); // true
Array.isArray(12); // false

// BASICS

// Let's begin playing with our array. We'll throw some numbers in there, but this could be just about anything.

// .push()
// Adds one or more elements to the end of an array, and returns the new length of the array.

testArray.push(1, 2, 3, 5);
console.log(testArray.push()); // [4]
console.log(testArray); // [1, 2, 3, 5]

// So note that when you call the .push() method, the return is the length as a number. We can check this by comparing it with the triple equals operator and chaining ".length"

testArray.push() === testArray.length; // true

// .unshift()
// Adds one or more elements to the front of an array, and returns the new length of the array.

testArray.unshift(0, 4, 6);
console.log(testArray.unshift()); // [5]
console.log(testArray); // [0, 4, 6, 1, 2, 3, 5]

testArray.unshift() === testArray.length; // true

// Just like above, when you call the .unshift() method, the return is the length as a number. We can check this by comparing it with the triple equals operator and chaining ".length"

// .splice(start, deleteCount)
// Adds and/or removes elements from an array.

testArray.splice();
console.log(testArray.splice()); // []
console.log(testArray); // [0, 4, 6, 1, 2, 3, 5]

// .splice(start) The index at which to start changing the array. If you enter a number without a second parameter, it will delete everything in the array, but it does not mutate the orginal array.

// .splice(start, deleteCount) This will return the deleted values and mutate the array.

testArray.splice(1, 2); // [4, 6]
console.log(testArray); // [0, 1, 2, 3, 5]

// .pop()
// Removes the last element from an array and returns that element. This will mutate the array as well.
testArray.pop(); // 5
console.log(testArray); // [0, 1, 2, 3]

// .slice(start, end)
// Extracts a section of the calling array and returns a shallow copy of the array.

testArray.slice(1, 3); // [1, 2]
console.log(testArray); // [0, 1, 2, 3]


// Accessing values
// Arrays are built starting at the zeroth item, meaning the first item in the array has an index value of 0

testArray2.unshift('zero', 'one', 'two', 'three', 'four');
testArray2; // ['zero', 'one', 'two', 'three', 'four']
testArray2.length // 5
testArray2[1] // 'one'
testArray2[testArray2.length] // undefined
testArray2[testArray2.length - 1] // 'four'

testArray2[testArray2.length - 1] === testArray2[4] // true


let numbersList = [1,2, ...testArray2]
numbersList
// let numbersList = [...testArray2]




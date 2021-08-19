# Array
The JavaScript Array class is a global object that is used in the construction of arrays; which are high-level, list-like objects.

## Description
Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations. Neither the length of a JavaScript array nor the types of its elements are fixed. Since an array's length can change at any time, and data can be stored at non-contiguous locations in the array, JavaScript arrays are not guaranteed to be dense; this depends on how the programmer chooses to use them. In general, these are convenient characteristics; but if these features are not desirable for your particular use, you might consider using typed arrays.

Loop over an Array

array.forEach()

### Constructor

Creates a new Array object.

```javascript
let myArray = Array()
console.log(myArray) // []

```
https://www.freecodecamp.org/news/the-javascript-array-handbook/




``` js



// ### BLOG 0

.push()
// Adds one or more elements to the end of an array, and returns the new length of the array.

.unshift()
// Adds one or more elements to the front of an array, and returns the new length of the array.

.splice(start, deleteCount)
// Adds and/or removes elements from an array.

.pop()
// Removes the last element from an array and returns that element. This will mutate the array as well.

.slice(start, end)
// Extracts a section of the calling array and returns a shallow copy of the array.



// ### BLOG 1

.includes()
// Determines whether the array contains a value, returning true or false as appropriate.

.every()
// Returns true if every element in this array satisfies the testing function.

.some()
// Returns true if at least one element in this array satisfies the provided testing function.



// ### BLOG 2

.concat()
// Returns a new array that is this array joined with other array(s) and/or value(s).

.join()
// Joins all elements of an array into a string.

.reverse()
// Reverses the order of the elements of an array in place. (First becomes the last, last becomes first.)



// ### BLOG 3

.forEach()
// The forEach() method executes a provided function once for each array element.

.map()
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

.filter()
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

.sort()

// The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

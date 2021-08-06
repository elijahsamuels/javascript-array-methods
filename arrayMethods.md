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
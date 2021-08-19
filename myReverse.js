let testArray = [1,2,3,4,5,6]

function myReverse(value) {
	// let obj = ToObject(this.value); // ???  new Object(value)
	let obj = new Object(value)

	// let len = LengthOfArrayLike(O); // ??? value.length
	let len = value.length
	let middle = Math.floor(len / 2)
	let lower = 0

	while(lower != middle) {
		let upper = len - lower - 1;
		// let upperP = ToString(Function(upper)); // ??? new String(upper)
		let upperP = new String(upper)

		// let lowerP = ToString(Function(lower)); // ??? new String(lower)
		let lowerP = new String(lower)
		// let lowerExists = HasProperty(obj, lowerP) // ???
		let lowerExists = Object.hasOwnProperty(obj, lowerP) // ???
		if (lowerExists) {
			lowerExists = Get(obj, lowerP)
		}

		// let upperExists = HasProperty(obj, upperP) // ???
		let upperExists = Object.hasOwnProperty(obj, upperP) // ???
		if (upperExists) {
			upperExists = Get(obj, upperP)
		}
		
		if (lowerExists && upperExists) {
			Set(obj, lowerP, upperValue, true)
			Set(obj, upperP, lowerValue, true)

		} else if (!lowerExists && upperExists) {
			Set(obj, lowerP, upperValue, true)
			DeletePropertyOrThrow(obj, upperP)

		} else if (lowerExists && !upperExists) {
			DeletePropertyOrThrow(obj, lowerP)
			Set(obj, upperP, lowerValue, true)

		} else
		// false
		lower = lower + 1
	}
	return obj
}

console.log(myReverse(testArray))
/*  .reverse() documentation/under the hood

1. Let O be ? ToObject(this value).
2. Let len be ? LengthOfArrayLike(O).
3. Let middle be floor(len / 2).
4. Let lower be 0.
5. Repeat, while lower ≠ middle,
	a. Let upper be len - lower - 1.
	b. Let upperP be ! ToString(𝔽(upper)).
	c. Let lowerP be ! ToString(𝔽(lower)).

	d. Let lowerExists be ? HasProperty(O, lowerP).
	e. If lowerExists is true, then
		i. Let lowerValue be ? Get(O, lowerP).

	f. Let upperExists be ? HasProperty(O, upperP).
	g. If upperExists is true, then
		i. Let upperValue be ? Get(O, upperP).

	h. If lowerExists is true and upperExists is true, then
		i. Perform ? Set(O, lowerP, upperValue, true).
		ii. Perform ? Set(O, upperP, lowerValue, true).

	i. Else if lowerExists is false and upperExists is true, then
		i. Perform ? Set(O, lowerP, upperValue, true).
		ii. Perform ? DeletePropertyOrThrow(O, upperP).

	j. Else if lowerExists is true and upperExists is false, then
		i. Perform ? DeletePropertyOrThrow(O, lowerP).
		ii. Perform ? Set(O, upperP, lowerValue, true).

	k. Else,
		i. Assert: lowerExists and upperExists are both false.
		ii. No action is required.
	l. Set lower to lower + 1.
6. Return O.

*/
const filterOutOdds = (...args) => args.filter((num) => num % 2 === 0);

const findMin = (...args) => args.reduce((min, nextVal) => (nextVal < min ? nextVal : min));
findMin(1, 4, 12, -3); // -3
findMin(1, -1); // -1
findMin(3, 1); // 1

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }); // {a:1, b:2, c:3, d:4}

const doubleAndReturnArgs = (arr, ...args) => [ ...arr, ...args.map((num) => num * 2) ];
doubleAndReturnArgs([ 1, 2, 3 ], 4, 4); // [1,2,3,8,8]
doubleAndReturnArgs([ 2 ], 10, 4); // [2, 20, 8]

/** remove a random element in the items array
and return a new array without that item. */
const removeRandom = (items) => {
	const randomIdx = Math.floor(Math.random() * items.length);
	return [ ...items.slice(0, randomIdx), ...items.slice(randomIdx + 1) ];
};

/** Return a new array with every item in array1 and array2. */
const extend = (array1, array2) => [ ...array1, ...array2 ];

/** Return a new object with all the keys and values
from obj and a new key/value pair */
const addKeyVal = (obj, key, val) => {
	let container = {};
	container[key] = val;
	return { ...obj, ...container };
};

/** Return a new object with a key removed. */
const removeKey = (obj, key) => {
	let container = { ...obj };
	delete container[key];
	return { ...container };
};
//https://stackoverflow.com/questions/3455405/how-do-i-remove-a-key-from-a-javascript-object

/** Combine two objects and return a new object. */
const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

/** Return a new object with a modified key and value. */
const update = (obj, key, val) => {
	let container = {};
	container[key] = val;
	return { ...obj, ...container };
};

// Spread opperator

const first = [1, 2, 3];
const second = [4, 5, 6];

// To combine the two arrays the old way
const combined = first.concat(second);

// combining the two arrays using the spread opperator
const combined2 = [...first, ...second];

console.log(combined);
console.log(combined2);

// COMBINING OBJECTS
const identity = { name: "Nelson" };
const profession = { job: "Android developer" };

const fullDetail = { ...identity, ...profession, location: 'Nairobi'};
console.log(fullDetail);

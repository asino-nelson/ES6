/*

the two code instances are same 
1. The first instance is basic
2. The second instance has arrow functios and is simplified

*/

const square = function (number) {
  return number * number;
};
console.log(square(8));

const square2 = (number) => number * number;
console.log(square2(9));

const jobs = [
    { id: 1, isActive: true },
    { id: 2, isActive: false },
    { id: 3, isActive: true }
];

// const activeJobs = jobs.filter(function(job){});
// the commented line above can be simplified by arrow functions into the code below

const activeJobs = jobs.filter( job => job.isActive);
console.log(activeJobs);

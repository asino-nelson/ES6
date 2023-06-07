// Did you know? Every function in JS is an object 😂

const person = {
  name: "Nelson",
  walk: function () {}, // can be simplified tp walk(){}
  talk() {},
};

console.log(person.talk());
console.log(person["name"]);

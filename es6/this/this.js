// "this" returns reference to the current object

const human = {
  name: "Nelson",
  walk() {
    console.log(this);
  },
};

const walk = human.walk;

console.log(walk);
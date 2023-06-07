export function Swim() {
  console.log("Swim");
}

export default class Person {
    constructor(name) {
      this.name = name;
    }
  
    talk() {
      console.log("talk");
    }
  }
  
  const person = new Person("Nelson");
  console.log(person);
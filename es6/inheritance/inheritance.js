class Person {
  constructor(name) {
    this.name = name;
  }

  talk() {
    console.log("talk");
  }
}

const person = new Person("Nelson");
console.log(person);

class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree
  }
  teach() {
    console.log("teach");
  }
}

const teacher = new Teacher("Rotich", "English");
console.log(teacher);

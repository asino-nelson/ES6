import Person from "./person";        // default import
// import { Swim } from "./person";   // named import

export class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log("teach");
  }
}

const teacher = new Teacher("Rotich", "English");
console.log(teacher);

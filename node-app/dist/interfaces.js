"use strict";
// interface User {
//   firstName: string;
//   LastName: string;
//   age: number;
// }
class Employee {
    constructor(name, age) {
        (this.name = name), (this.age = age);
    }
    greet(message) {
        console.log(message + this.name);
    }
}
const e = new Employee("edge", 24);
e.greet("hello this from parallel universe");

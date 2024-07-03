// interface User {
//   firstName: string;
//   LastName: string;
//   age: number;
// }

// function isLegal(user: User) {
//   if (user.age > 18) {
//     console.log("yes");
//     return true;
//   } else {
//     return false;
//   }
// }

// isLegal({
//   firstName: "araind",
//   LastName: "sdf",
//   age: 20,
// });
// export {};

//interface example 2
interface Person {
  name: string;
  age: number;
  greet(message: string): void;
}

class Employee implements Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }
  greet(message: string): void {
    console.log(message + this.name);
  }
}

const e = new Employee("edge", 24);
e.greet("hello this from parallel universe");

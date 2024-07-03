let x: number = 1; //it is similar to writing int x=1 in languages like c++ and java
console.log(x);

//use command tsc -b to transpile ts file to js or rather convert typescript into javascript

//how to write funcitons in ts
function greet(firstName: String) {
  console.log("hello " + firstName);
}

greet("Aravind");

//sum of 2 numbers
//Things to learn here is type inference:
//even if the return type is not provided ts uses type inference to recognize its return type but its a good practice to provide the same
function sum(number1: number, number2: number): number {
  return number1 + number2;
}

const result = sum(8, 4);
console.log(result);

//legal voting age
function isLegal(age: number) {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}
const aa = isLegal(45);
console.log(aa);

//passing callback functions in ts
//Things learnt here: to pass the function as callback with the return type
function runafter1s(delaySeconds: number, fn: () => void) {
  setTimeout(fn, delaySeconds);
}

runafter1s(5000, () => {
  console.log("hi there");
});

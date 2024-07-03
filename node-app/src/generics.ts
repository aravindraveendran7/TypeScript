//syntax and way to use generics in typescript
function genericTest<T>(arg: T) {
  return arg;
}

let helloTest = genericTest("hello");
let test2 = genericTest(1);
console.log(helloTest.toUpperCase());
console.log(test2);

//return first position in the array using generics
//it accepts mixed data types if not specified while calling the function
//eg:functionName<String>(argument)

function firstElement<T>(arr: T[]) {
  return arr[3];
}

let elementFirst = firstElement(["sdfa", "second", 2, 5]);
console.log(elementFirst);

//keypoint difference between types and interfaces
// 1.types cannot be implemented but interface can
// 2.in types we can use both union and intersection

//syntax of types
//using union
// if age can be number or string then we use a concept called union to identify them
type User = {
  name: string;
  age: ageType;
};
type ageType = number | string;

const us: User = {
  name: "aravind",
  age: "asdf",
};

console.log(us);
//using intersection in types
type associate = {
  name: string;
  department: string;
};

type lead = {
  name: string;
  age: number;
};

type manager = associate & lead;

const mgr: manager = { name: "sfasdf", department: "IT", age: 89 };

console.log(mgr);

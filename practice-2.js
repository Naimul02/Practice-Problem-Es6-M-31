const oddNum = [1, 3, 5, 7, 9];

const newArr = [];
for (const num of oddNum) {
  const evenNum = num + 1;
  newArr.push(evenNum);
}
// console.log(newArr);

const output = oddNum.map((num) => num + 1);
// console.log(output);

const arr = [33, 50, 79, 78, 90, 101, 30];
const result = arr.filter((arr) => arr % 10 === 0);
// console.log(result);

const result1 = arr.find((ele) => ele % 10 === 0);
// console.log(result1);

const instructor = [
  { name: "Nodi", age: 28, position: "Senior" },
  { name: "Akil", age: 26, position: "Junior" },
  { name: "Sobuj", age: 30, position: "Senior" },
];

const result3 = instructor.filter((ins) => ins.position === "Senior");
// console.log(result3);

const people = [
  { name: "Meena", age: 20 },
  { name: "Rina", age: 15 },
  { name: "Suchorita", age: 22 },
];

let sum = 0;
for (const ele of people) {
  const age = ele.age;
  sum = sum + age;
}
// console.log(sum);

const result4 = people.reduce((prev, current) => prev + current.age, 0);
console.log("your result is : ", result4);

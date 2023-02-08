//sort

let people = [
  { name: "John", age: 32 },
  { name: "Jane", age: 25 },
  { name: "Bob", age: 41 },
];

people.sort((a, b) => a.age - b.age);

console.log(people);

//positive sum

let numbers = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

let positiveSum = numbers
  .filter((num) => num > 0)
  .reduce((acc, num) => acc + num, 0);

console.log(positiveSum);

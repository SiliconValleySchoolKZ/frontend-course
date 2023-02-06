// const birthdayGreeter = (name: string, age: number): string => {
//   return `Happy birthday ${name}, you are now ${age} years old!`;
// };
// const birthdayHero = "Jane User";
// const age = 22;
// console.log(birthdayGreeter(birthdayHero, age));
var info = { name: "Jane User", age: 22 };
var birthdayGreeter = function (info) {
    return "Happy birthday ".concat(info.name, ", you are now ").concat(info.age, " years old!");
};
console.log(birthdayGreeter(info));

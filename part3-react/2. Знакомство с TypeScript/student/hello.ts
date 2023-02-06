// const birthdayGreeter = (name: string, age: number): string => {
//   return `Happy birthday ${name}, you are now ${age} years old!`;
// };

// const birthdayHero = "Jane User";
// const age = 22;

// console.log(birthdayGreeter(birthdayHero, age));

// const info = { name: "Jane User", age: 22 };

// const birthdayGreeter = (info: { name: string; age: number }): string => {
//   return `Happy birthday ${info.name}, you are now ${info.age} years old!`;
// };

// console.log(birthdayGreeter(info));

// interface IInfo {
//   name: string;
//   age: number | string;
// }

// type Info = {
//   name: string;
//   age: number | string;
//   city?: string;
// };

// const info = { name: "Jane User", age: "22" };

// const birthdayGreeter = (info: Info): string => {
//   return `Happy birthday ${info.name}, you are now ${info.age} years old! `;
// };

// console.log(birthdayGreeter(info));

// interface ICar {
//   wheels: number;
//   doors: number;
//   model: string;
//   signal: () => string;
// }

// const cars = [
//   {
//     wheels: 4,
//     doors: 4,
//     model: "BMW",
//     signal: () => {
//       return "beep beep";
//     },
//   },
//   {
//     wheels: 4,
//     doors: 4,
//     model: "KIA",
//     signal: () => {
//       return "vrum vrum";
//     },
//   },
//   {
//     wheels: 4,
//     doors: 2,
//     model: "Mercedec",
//     signal: () => {
//       return "trau trau";
//     },
//   },
// ];

// const garage = (cars: ICar[]): void => {
//   cars.forEach((car) =>
//     console.log(
//       `I am ${car.model} with ${car.wheels} wheels and ${
//         car.doors
//       } doors. My signal is ${car.signal()}`
//     )
//   );
// };

// garage(cars);

// определяем псевдоним
// type id = number | string;

// type Person = {name: string; age: number};
// let tom: Person = {name: "Tom", age: 36};

// interface Bird {
//     fly();
//     layEggs();
// }

// interface Fish {
//     swim();
//     layEggs();
// }

// function getSmallPet(): Fish | Bird {
//     // ...
// }

// let pet = getSmallPet();
// pet.layEggs(); // ок
// pet.swim();    // ошибка

// interface Bird {
//     fly();
//     layEggs();
// }

// interface Fish {
//     swim();
//     layEggs();
// }

// function getSmallPet(): Fish & Bird {
//     // ...
// }

// let pet = getSmallPet();
// pet.layEggs(); // ok
// pet.swim();    // ok

// function echo<T>(smthing: T): T {
//   return smthing;
// }

// const value = echo<string>("1");

function include<T>(array: T[], query: T) {
  for (const value of array) {
    if (value === query) {
      return true;
    }
  }
  return false;
}

// передаём string в качестве типа
include<string>(["igor", "sasha", "ira"], "ira"); // true

// передаём number в качестве типа
include<number>([1, 3, 5], 7); // false

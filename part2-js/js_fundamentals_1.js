// Метод prompt() отображает диалоговое окно с необязательным запросом на ввод текста.

//Calculator

let a = parseInt(prompt("Введите первое число"));
let operator = prompt("Введите оператор");
let b = parseInt(prompt("Введите второе число"));

switch (operator) {
  case "+":
    console.log(`${a}+${b}=${a + b}`);
    break;
  case "-":
    console.log(`${a}-${b}=${a - b}`);
    break;
  case "*":
    console.log(`${a}*${b}=${a * b}`);
    break;
  case "/":
    console.log(`${a}/${b}=${a / b}`);
    break;
  case "%":
    console.log(`${a}%${b}=${a % b}`);
    break;
  default:
    console.log("Operator was not defined");
    break;
}

//Leap year

let year = 2020;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("Leap year");
} else {
  console.log("Not a leap year");
}

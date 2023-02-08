//getTotal

function getTotal(...numbers) {
  let total = 0;
  for (const number of numbers) {
    total += number || 0;
  }
  return total;
}

console.log(getTotal(1, 2, 3));
console.log(getTotal(1, 2, undefined, 3));
console.log(getTotal());

//createCalculator

function createCalculator(initialValue) {
  return {
    add: function (value) {
      initialValue += value;
      return initialValue;
    },
    subtract: function (value) {
      initialValue -= value;
      return initialValue;
    },
  };
}

const calculator = createCalculator(10);
console.log(calculator.add(5));
console.log(calculator.subtract(2));

//createCounter

function createCounter(startValue) {
  let count = startValue;
  return {
    increment() {
      count++;
    },
    getValue() {
      return count;
    },
  };
}

const counter = createCounter(0);
const button = document.getElementById("click-button");
button.addEventListener("click", () => {
  counter.increment();
  const display = document.getElementById("click-display");
  display.innerText = counter.getValue();
});

//closures

function createGreeting(name) {
  return function (message) {
    return `${name}: ${message}`;
  };
}

const greetJohn = createGreeting("John");
const greetJane = createGreeting("Jane");

console.log(greetJohn("Hello!"));
console.log(greetJane("Hi there!"));

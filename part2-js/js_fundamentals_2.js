//Factorial

function factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  }
  if (n < 0) {
    return "Only not negative numbers";
  }
  return n * factorial(n - 1);
}

let result = factorial(7);
console.log(result);

//Palindrome

function isPalindrome(str, start = 0, end = str.length - 1) {
  if (start >= end) {
    return true;
  }
  if (str[start] !== str[end]) {
    return false;
  }
  return isPalindrome(str, start + 1, end - 1);
}

console.log(isPalindrome("abbcbba"));

//map function

function myMap(array, func) {
  newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(func(array[i]));
  }
  return newArray;
}

let numbers = [1, 2, 3, 4, 5];
console.log(myMap(numbers, (element) => element * 2));

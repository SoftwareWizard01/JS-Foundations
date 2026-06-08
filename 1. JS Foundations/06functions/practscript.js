// 1. Ek function greet() banao jo console me "Hello JavaScript" print kare.
function greet() {
  console.log("Hello Javascript");
}
greet();

// 2. Ek function sayHello(name) banao jo "Hello <name>" print kare.
function sayHello(name = "Aryan") {
  console.log(`Hello ${name}`);
}
sayHello();

// 3. Ek function add(a, b) banao jo do numbers ka sum return kare.
function add(a, b) {
  console.log(a + b);
}
add(5, 10);

// 4. Ek function square(num) banao jo number ka square return kare.
function square(num) {
  console.log(num ** 2);
}
square(3);

// 5. Ek function isEven(num) banao jo check kare number even hai ya nahi (true/false return kare).
function isEven(numb) {
  if (numb % 2 === 1) {
    console.log("True, the number is Even");
  } else {
    console.log("No the number is not Even");
  }
}
isEven(51);

// Return Values Practice

// 6. Ek function multiply(a, b) banao jo multiplication return kare.
function multiply(a, b) {
  console.log(a * b);
}
multiply(5, 4);

// 7. Ek function getFullName(firstName, lastName) banao jo full name return kare.
function getFullName(Firstname, Lastname) {
  console.log(`${Firstname} ${Lastname}`);
}
getFullName("Aryan", "Patil");

// 8. Ek function convertToUpper(text) banao jo string ko uppercase me return kare.
let x = prompt("Whatever you enter here will be capitalized");
function convertToUpper(text) {
  return text.toUpperCase();
}
let result = convertToUpper(x);
console.log(result);

// 9. Ek function getLength(str) banao jo string ki length return kare.
function getLength(str) {
  return str.length;
}
let ans = getLength("Hello mai a gaya hu");
console.log(ans);

// 10. Ek function findMax(a, b) banao jo dono numbers me se bada number return kare.
function findMax(c, d) {
  if (c < d) {
    return `${d} bada number hai ${c} se`;
  }
  if (c === d) {
    return `${c} aur ${d} dono equal hai`;
  } else {
    return `${c} bada number hai ${d} se`;
  }
}
console.log(findMax(20, 20));

// Conditional Logic Inside Functions

// 11. Ek function checkAge(age) banao jo return kare "Adult" agar age ≥18 ho warna "Minor".
function checkAge(age) {
  if (age >= 18) {
    return "You are an Adult now";
  } else {
    return "You are still a Minor";
  }
}
console.log(checkAge(12));

// 12. Ek function isPositive(num) banao jo check kare number positive hai ya negative.
function ifPositive(number) {
  if (number >= 1) {
    return `${number} is positive number`;
  }
  if (number === 0) {
    return `${number} is neither negative nor positive`;
  } else {
    return `${number} is negative number`;
  }
}
console.log(ifPositive(-20));

// 13. Ek function grade(score) banao jo score ke basis par "A", "B", "C", "Fail" return kare.
function grade(score) {
  if (score >= 90) {
    return `You got, A Grade`;
  }
  if (score >= 75) {
    return `You got, B Grade`;
  }
  if (score >= 50) {
    return `You got, C Grade`;
  } else {
    return `You have been failed`;
  }
}
console.log(grade(72));

// 14. Ek function isPalindrome(word) banao jo check kare word palindrome hai ya nahi.

// 15.Ek function checkPassword(password) banao jo check kare password length ≥ 8 hai ya nahi.
function checkPassword(password) {
  if (password.String.length >= 8) {
    return "Password criteria meeted";
  }
}
let password = "arpa@12345";
console.log(password);

// Arrow Function

// 16. Ek arrow function likho jo do numbers ka difference return kare.
let arrowf = (num1, num2) => {
  if (num1 > num2) return num1 - num2;
  else return num2 - num1;
};
console.log(arrowf(10, 2));

// 17. Ek arrow function cube(num) banao jo cube return kare.
let cube = (num) => {
  return num ** 3;
};
console.log(cube(3));

// 18. Ek arrow function greetUser(name) banao jo "Welcome <name>" return kare.
let greetUser = (name) => {
  return `Welcome ${name}`;
};
console.log(greetUser("ArPa"));

// 19. Ek arrow function isOdd(num) banao jo check kare number odd hai ya nahi.
let isOdd = (numb) => {
  if (numb % 2 === 1) return `${numb} is Odd`;
  else return `${numb} is either even or invalid input`;
};
console.log(isOdd(4));

// 20. Ek arrow function double(num) banao jo number ko double kare.
let double = (number) => {
  console.log(number * 2);
};
double(10);

// Function Expressions

// 21. Ek function expression use karke divide(a,b) function banao.
let bang = function divided(a, b) {
  return a / b;
};
console.log(bang(10, 5));

// 22. Ek function expression likho jo string reverse kare.
let reversed = function back(str) {
  return str.split("").reverse().join("");
};
console.log(reversed("ArPa is good"));

// 23. Ek function expression likho jo check kare number 10 se bada hai ya nahi.
let check = function big(num) {
  if (num > 10) return `${num}, 10 se bada hai`;
  else return `${num}, 10 se bada nhi hai ya fir invalid output hai`;
};
console.log(check(15));

// Default Parameters

// 24. Ek function greet(name = "Guest") banao jo agar name pass na ho toh "Hello Guest" print kare.
function greet(name = "Guest") {
  console.log(`Hello ${name}`);
}
greet();

// 25. Ek function power(base, exponent = 2) banao jo exponent default 2 rakhe.
function power(base, exponent = 2) {
  return base ** exponent;
}
console.log(power(5));

// Callback Functions

// 26. Ek function processNumber(num, callback) banao jo callback ko num pass kare.
function processNumber(num, callback) {}

// 27. Ek function banao jo array ka har element double kare using callback.

// 28. Ek function calculate(a, b, operation) banao jisme operation ek callback ho.

// Mixed Concept Questions

// 29. Ek function banao jo array ka sum calculate kare.

// 30. Ek function banao jo array me largest number find kare.

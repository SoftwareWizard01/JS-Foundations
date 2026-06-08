// Arithmetic, comparison, logical, assignment, unary, ternary

// +, -, *, /, %, **   --> Arithmetic Operators

// ==(not strict), ===(strict),<, >, <=, >=, !, !=(not strict), !==(strict)  --> Comparison Operators

// =, +=, -=, *=, /=, %=  --> Assignment Operators
let a = 12;
a += 3; // becomes a = 15
a -= 11; // now becomes a = 4
a *= 2; // now becomes a = 8
a /= 2; // now becomes a = 4
a %= 3; // now becomes a = 1

// &&, ||, !  --> Logical Operators

// +, -, typeof, ++, --  --> Unary Operators(used on one value)
// +"15"  --> string converts into number
// typeof tells the type of the value

// ?:  --> Ternary Operator
// condition ? true hui ka code : false hui ka code

12 > 13 ? console.log("true") : console.log("false"); //false

// typeof, instanceof

//typeof tells the type of the variable we want to know about but it dosen't work on Array, NaN and

// instanceof is used when we want to know that to whom is variable related to (eg:-> variable instanceof _____)

let b = [];
b instanceof Array;

//

let x = 10;
let y = 20;
if (x > 5 && y < 25) {
  console.log("True");
} else {
  console.log("False");
}

//
let Admin = true;
let LoggedIn = false;
if (Admin || LoggedIn) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

//
let temp = 10;
if (!(temp < 30)) {
  console.log("Hot");
} else {
  console.log("Pleasant");
}

//
let n = 0;
if (n) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

//
let score = 72;

let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "Fail";

console.log(grade);

//
let isLoggedIn = true;
let hasToken = false;

let access = isLoggedIn && hasToken ? "Allow" : "Deny";
console.log(access);

//
let l = 5;
let m = l++;
console.log(l, m);

//
let p = 6;
let q = ++p;
console.log(p, q);

//
let v = 10;
console.log(v--);
console.log(v);

//
let h = 5;
let result = h++ + ++h; // 5(since it is post incremented the value will remain same in this h++) + 7(since value is incremented due to last post increment h++ and pre incremented due to current ++h)
console.log(result); //5+7=12

//
let count = 5;
if (count-- == 5) {
  console.log("Matched");
} else {
  console.log("Not Matched");
}

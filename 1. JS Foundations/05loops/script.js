//Q1. Print numbers from 1 to 10 using a for loop

for (let i = 1; i < 11; i++) {
  // console.log(i);
}

//Q2. Print numbers from 10 to 1 using a while loop

let i = 10;
while (i >= 1) {
  i--;
  // console.log(i);
}

// Q3. Print even numbers from 1 to 20 using a for loop

for (let k = 1; k < 11; 2 * k++) {
  // console.log(2 * k);
}

//other method
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// Q4. Print odd numbers from 1 to 15 using a while loop

m = 1;
while (m <= 15) {
  if (m % 2 === 1) {
    // console.log(m);
  }
  m++;
}

//Q5. Print the multiplication table of 5(i.e 5 * 1 = 5 .... 5 * 10 = 50)

for (let n = 1; n < 11; n++) {
  console.log(`5 * ${n} = ${5 * n}`);
}

//Q6. Find the sum of numbers from 1 to 100 using a loop
let sum = 0;
for (let a = 1; a <= 100; a++) {
  sum += a;
}
// console.log(sum);

// Q7. Print all numbers betwen 1 to 50 that is divisible by 3
for (let b = 1; b < 51; b++) {
  if (b % 3 === 0) {
    // console.log(b);
  }
}

// Q8. Ask the user for a number and print whether each number from 1 to that number is even or odd
//eg(1 is odd,2 is even)

let x = prompt(`Give a number`);
for (let z = 1; z <= x; z++) {
  if (z % 2 === 1) {
    // console.log(`${z} is Odd`);
  } else {
    // console.log(`${z} is Even`);
  }
}

// Q9. Count how many numbers between 1 to 100 are divisble by both 3 and 5

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    // console.log(i);
  }
}

//Break and continue wale questions
/*
Q1. Stop at first Multiple of 7

Write a loop from 1 to 100 that:
 Prints eac number
 Stops completely wen it finds te first number
*/

for (let i = 1; i <= 100; i++) {
  // console.log(i);
  if (i % 7 === 0) {
    break;
  }
}

/*
Q2. Skip multiplies of 3
Write a loop from 1 to 20 that:
 Skips numbers divisible by 3
 Prints all others

// use continue
//Expected output 1 2 4 5 7 8 10 11 ...
*/

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) continue;
  // console.log(i);
}

/*Print first 5 odd Numbers only
Write a loop from 1 to 100 that:
 Prints only 5 odd numbers
 Then stops the loop
Use both if, continue, and a counter+break
Expected output: 1 3 5 7 9
*/
let count = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 1) {
    count++;
    // console.log(i);
  }
  if (count === 5) break;
}

//Print teh final result of the factorial of 5
let result = 1;
for (let i = 1; i <= 5; i++) {
  result = i * result;
}
console.log(result);

//Print an * pattern increasing by one as going down
for (let i = 1; i < 6; i++) {
  let a = *;

  
}
//Create an array of three fruits and print the 2nd fruit
let fruit = [`mango`, `pineapple`, `guava`];
console.log(fruit[1]);

//Add mango at the end and pineapple at the beginning of this array
let faal = [`apple`, `banana`];
faal.push(`mango`);
faal.unshift("pineapple");
console.log(faal);

//Replace banana with kiwi in the array given
let faalhar = [`apple`, `banana`];
faalhar.pop();
faalhar.push(`kiwi`);
console.log(faalhar);

//Insert `Red` and `Blue` at index 1 in the given array
let colors = [`Green`, `Yellow`];
colors.splice(1, 0, `Red`, `Blue`);
console.log(colors);

//Extract only 3 elements from the middle of an array
let arr = [1, 2, 3, 4, 5, 6, 7];
let newarr = arr.slice(2, 5);
console.log(newarr);

//Sort this array alphabetically and then reverse it
let name = [`Zara`, `Arjun`, `Mira`, `Bhavya`];
name.sort().reverse();
console.log(name);

//Use .map() to square each number
let num = [1, 2, 3, 4];
let sqnum = num.map(function (val) {
  return val ** 2;
});
console.log(sqnum);

//Use .filter() to keep numbers greater than 10
let numb = [5, 12, 8, 20, 3];
let filtered = numb.filter(function (val) {
  return val > 10;
});
console.log(filtered);

//Use .reduce() to find the sum of this array
let sum = [10, 20, 30];
let newsum = sum.reduce(function (acc, val) {
  return (acc += val);
}, 0);
console.log(newsum);

// Use .find() to get the first number less than 10
let smnum = [12, 15, 3, 8, 20];
let smallnum = smnum.find(function (val) {
  return val < 10;
});
console.log(smallnum);

// Use .some() to chceck if any student has scored below 35
let marks = [45, 60, 28, 90];
let check = marks.some(function (val) {
  return val < 35;
});
console.log(check);

// Use .every() to check if all numbers are even
let eve = [2, 4, 6, 8, 10];
let checking = eve.every(function (val) {
  return val % 2 === 0;
});
console.log(checking);

//Destructure this array to get firstname and lastname
let fullname = [`Toto`, `Wolf`];
let [firstname, lastname] = fullname;
console.log(firstname);
console.log(lastname);

// Merge two arrays using spread operator
let a = [1, 2];
let b = [3, 4];
let c = [...a, ...b];
console.log(c);

//Add `India` to the start of this array using spread
let countries = [`USA`, `Russia`];
let addcountry = [`India`, ...countries];
console.log(addcountry);

//Clone this array properly but not with reference
let number = [1, 2, 3];
let newnumb = [...number];
console.log(newnumb);

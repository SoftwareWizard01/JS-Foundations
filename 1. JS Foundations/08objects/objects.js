// Create an object for a student with name, age and isEnrolled

let aryan = {
  name: `Aryan Patil`,
  age: 18,
  isEnrolled: true,
};

// Can an object key be a number and boolean ? Try this
const obj = {
  true: `yes`,
  42: `answer`,
};
console.log(obj[42]);

// The answer is YES

// Access the value of `first-name` from this object:
const user = {
  "first-name": "aryan",
};
console.log(user["first-name"]);

//Given a dynamic key let key = "age", how will you access user[key]

let key = `age`;
const use = {
  age: 48,
};
console.log(use[key]);

// From the object below print the latitude

const locations = {
  city: `Kalyan`,
  coordinates: {
    lat: 23.2,
    lng: 77.4,
  },
};

console.log(locations.coordinates.lat);

//What will happen if coordinates are missing ? How can you prevent errors ?

const loc = {
  city: `Kalyan`,
  coordi: {
    lat: 23.2,
    lng: 77.4,
  },
};

console.log(loc?.coordinate?.lat);

// Destructure the city and lat from the location object above.

let { city } = loc;
let { coordi } = loc.coordi;

// Destructure the key "first-name" as a variable called firstName.

const us = {
  "first-name": "Aryan",
};
let { "first-name": firstName } = us;

console.log(firstName);

//Use for-in loop to log al keys in this object:

const course = {
  title: `JavaScript`,
  Duration: `4 Weeks`,
};

for (const key in course) {
  console.log(key);
}

// Use object.entries() to print all key-value pairs from the above object:

Object.entries(course).forEach(function (val) {
  console.log(`${val[0]}: ${val[1]}`);
});

//Copy the below object using spread operator

const original = { a: 1, b: 2 };
const copy = { ...original };

//Deep-clone the obj1 safely:
const obj1 = { info: { score: 80 } };
const newobj = JSON.parse(JSON.stringify(obj1));
newobj.info.score = 95;
console.log(obj1);
console.log(newobj);

//Rewrite this safely using optional chaining

const person = {};
console.log(person.profile.name); //--> this will give error ❌
console.log(person?.profile?.name); //--> this will not give error

//Use a variable to dynamically assign a property

const keys = `role`;
let empinfo = {
  name: `Aryan`,
  [keys]: `Aryan`,
};
console.log(empinfo);

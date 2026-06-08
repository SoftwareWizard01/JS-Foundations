//var, let, const line-by-line comparison

//var let const

var a;
var a = 12;
let a = 12;
const a = 12;

//-------------------------------------------------------

//declarations and initialization

var a; //declaration
var a = 12; //declaration and initialization

var a = 12; /* Problems: window mai add hot hai
hamesha function scoped hota hai
aap firse declare kar sakte ho same name se and error nhi ayega */

let a = 13; //let is better than var because

//-------------------------------------------------------

//Scope (global, block, functional)

var a = 12; //global scope can be used in an entire program

{
  var b = 12; // can still be used in the entire program since 'var' dosen't respect the block

  let a = 34; // can be used only in this block since let respects the block
}

function abcd() {
  if (true) {
    var c = 12; //only accessed in the braces
  }
}

function abcd() {
  if (true) {
    let d = 12; // can only be used in thedbraces it is declared in this case it can only be used in the braces of it statement
  }
}

//-------------------------------------------------------

//Reassignment, redeclaration

var a = 12; //declare and initialize
a = 32; //reassign but this is a problem

let z = 34; // declare and initialize
z = 32; // reassign

let z; // shows error because you can't reassign values in let

//-------------------------------------------------------

//Temporal Dead Zone --utna area jitne mai js ko pata toh hai ki variavle exist karta hai par wo apko value nhi de sakta (dosen't apply for "var")
console.log(a); /*tdz of a from this line till
...
...
...
...
...
...
...
...
*/
let a = 12; //this line

//-------------------------------------------------------

var a = undefined;
//Hoisting impact per type
//hoisting -> ek variable ko jab hum js mai banate hai to wo variable  hisso mai toot jata hai and uska declare part upar chala jata hai and uska initialization part niche reh jata hai

console.log(a);

var a = undefined; //part 1
//now this undefined wala part will go at the very top of this code part making a accessible to print but since the value is undefined in part 1 so it will display undefined
a = 12; //part 2

/* var -> hoist hota hai -> value undefined ati hai
   let -> hoist -> X no value initialized (shows error)
   const -> hoist -> X
*/

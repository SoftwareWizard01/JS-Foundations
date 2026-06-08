//Q1: What's the difference between function declaration and expression in terms of hoisting
arpa();

function arpa() {
  console.log(`hoisting will work in function declaration`); //-->This is function declaration or function statement
}

jyra();

let jyra = function () {
  console.log("Hoisting won't work in function  expression"); //--> This is function expression
};

//Kya log karega
function outer() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
  count;
}

//Data types - Data ke types

//primitives -> aisi saari values jinko copy karne par tumhe ek real copy mil jaaye (eg:-> string, number, boolean, null, undefined, symbol, bigint)

let a = 12;
let b = a;
//here a and b have their own value as 12
//means change in the value of 'a' won't affect the value of 'b' and vice-versa

//reference -> inko copy karne par real copy nhi milegi but apko reference milega parent ka (eg:-> arrays, objects, functions)
//jahape bracket wahape reference (), {}, []

let c = [1, 2, 3];
let d = c;
d.pop();
//now value will pop from c as well as d

/*Primitive
String -> anything wrapped in '' -> quotes
"" -> double quotes
`` -> backticks

Number -> any number 1,2,3,4.5 are numbers

Boolean -> value which is either true or false is called as boolean

Null -> Null ka matlab hai aapne jan bujh kar koi value nhi di

Undefined -> Undefined ka matlab ki aapne ek variable banaya aur usey value nhi di to jo value by default mili wo hai undefined

//Symbol -> unique immutable value
Future mai hum koi libraries use karenge abh is case mai un libraries mai kai baar kuch fields hoti hai jinse similar hum bhi kuch bana dete hai aur galti se hamari banayi hui fields uss library ki original fields ko over-write kar deti hai

Bigint - 9007199254740991 is the max_safe_value in any variable to calculate further we must use Bigint or else it gives precision issues with the result

let a = 9007199254740991n // number ke end mai 'n' lagake usko bigint banaya ja sakta hai

*/

/* Dynamic Typing -> js mai static typing nhi hai and yaha par hai dynamic typing jiska matlab hai aap data ko change kar sakte ho kyuki yahape dynamic data types hai

//typeof quirks (eg:-> typeof null === 'object')


//Type coercion (== vs ===)




/*Truty vs falsy values
0, false, null, undefined, "", '', NaN, document.all -> falsy values

rest all -> truthy values*/

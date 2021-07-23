'use strict'
/**
 * Basic Operator *
 **** Airthmatic Operation => +,-,/,*,%,++,--
 **** Comparison Operator => ==, ===,!=, > (Greater than) , < (Less than),>=,<=
 **** Logical Operator => ||, &&, !
 **** Assignment Operators => =,+=,-=,*=,/=
 **** Ternary Operators => :?
 **** typeof Operator => typeOf Variable

 */
// Airthmatic Operations 

let addition = 3+4; //7
let substraction = 90-7; // 83
let multiplication = 9*8;
let division = 901/5;

// ++

addition++; // 7+1 = 8 adding one to whatever the number is

addition += 6; // 8 + 6 = 14
substraction--;   // 83 -1 = 82
substraction -=6; // 82 -6 =  76


// Comparison Operator

let a = 90;
// let b = 90;

let b= "90";

// ==  => Non Strict Checking (It will not check for the datatypes)
// === => Strict Check

// Logical Operator - ||, &&, !
// || -> OR
// && -> AND
// ! => Not equal 

let cv = 5;
let fg = 0;

// if (!fg) console.log("Number is 5")
// else  console.log("Number is not 5")

// Assignment Operators - =,+=,-=,*=,/=


cv += 5; // cv = cv +5; // 10
cv =+ 5; // 5
console.log(cv)






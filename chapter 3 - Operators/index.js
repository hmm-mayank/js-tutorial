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

// // let airthmatic = 12;
// --airthmatic; // 11 
// --airthmatic; // 10 
// airthmatic = airthmatic++; // 10
// airthmatic++; // 11

// var airthmatic =+ 10; // TELL WHERE VARIABLE STORE IN PROTO - to ME
// clg(airthmatic);  //  ERROR 1, NULL 1, UNDEFINED , GARGBRE , 10

// let airthmatic = 0 + 6;

// airthmatic *= 800; // airthmatic =  airthmatic + 800;

// clg(airthmatic); 


let  myNum = 3;

// if (!(myNum % 2) == 0 ) clg(myNum)


let myName = 'sdsd' ; // null, undefined, NaN, flase , 0 , "",'';

if (myName) { // true
    clg(myName)
} 
else { clg("THIS IS TRUTHY VALUE")}



// % => Modulo

// even odd number check



function isEven (num1){
    return num1 % 2 == 0 ? 'Even' : 'Odd'
}

// ++

let testNum = 5;
let changeNum = testNum++;
let update= changeNum + 4;



// const users = [
//     {firstName: "mayank", lastName:"Dwivedi",age:27},
//     {firstName: "Sachin", lastName:"Tendulkar",age:50},
//     {firstName: "Maria", lastName:"Sharapova",age:45},
//     {firstName: "Akshay", lastName:"Saini",age:26}
// ]

// const result = users.reduce((acc,curr)=>{
//     if(curr.age < 30){
//     acc.push(curr.firstName)
//     }
//     return  acc;
// },[])
// console.log(result)











function clg (value,color="#bada55") {
    console.log(`%c ${value}`, `background: #222; color: ${color};font-size:50px`);

 }


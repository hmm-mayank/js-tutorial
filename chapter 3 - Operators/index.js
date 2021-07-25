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

// % => Modulo

// even odd number check


function isEven (num1){
    return num1 % 2 == 0 ? 'Even' : 'Odd'
}

// ++

let testNum = 5;
let changeNum = testNum++;
let update= changeNum + 4;



const users = [
    {firstName: "mayank", lastName:"Dwivedi",age:27},
    {firstName: "Sachin", lastName:"Tendulkar",age:50},
    {firstName: "Maria", lastName:"Sharapova",age:45},
    {firstName: "Akshay", lastName:"Saini",age:26}
]

const result = users.reduce((acc,curr)=>{
    if(curr.age < 30){
    acc.push(curr.firstName)
    }
    return  acc;
},[])
console.log(result)











function clg (value,color="#bada55") {
    console.log(`%c ${value}`, `background: #222; color: ${color};font-size:50px`);

 }


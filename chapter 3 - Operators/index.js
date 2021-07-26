'use strict'
// hoisting -> 




// function name(params) {} // DO NOT USE

// let name = function (params) {}

let numberCheck = (params) => {
    if (params % 2 === 0 ) {
        return `${params} is Even`; // Template String
    } else {
       return `${params} is ODD`;
    }
} // Fat Arrow notation

let myNumber = numberCheck(19);
clg(myNumber);
 

function clg (value,color="#bada55") {
    console.log(`%c ${value}`, `background: #222; color: ${color};font-size:50px`);

 }




 








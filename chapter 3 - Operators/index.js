// Programming Life

// Ternerry / Switch Case

// TERNERRY   -  CONTDINTON ? TRUE : FALSE



// clg  ( "HEAD" == "HEAD" ? "BATTING" : "BOWLING");
let winner = null ;
let cointFlip = "head";

switch (cointFlip) {
    case "head":
        winner = "Batting"
        break;
    case "tail":
        winner =   "Bowling"
        break;
    default:
    winner = "Sikka gaya pani maine"; 
}


clg(winner);


function clg (value,color="#bada55") {
    console.log(`%c ${value}`, `background: #222; color: ${color};font-size:50px`);

 }




 








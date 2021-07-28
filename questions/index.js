// // Mithilesh 
// //twoSum

let arr = [3,2,4];
// Variables    
let n = arr.length;
    let sum = 6;
    let count = 0;

// Variables 

function twoSum () {  // n2
   // log(n) => Jitna Array Size , utne Times
   // log (1) => Kevel 1 Baar
   // log (n2) => Multiple Times More then size of Array
    console.time("multipleFor");
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[i] + arr[j] == sum) {

                console.log("(" + arr[i] + ", "
                    + arr[j] + ")");
                console.timeEnd("multipleFor");
                return;
            }

        }
  
    }
}

twoSum();

 
// rohit

let numbers = [3,2,4];  // n2
let sums = 6;
console.time("singleFor")
for(var i=0;i<numbers.length;i++){
  if(numbers[i]<sums + 1 && (sums - numbers[i]) in numbers){
      console.log(numbers[i], sum-numbers[i]);
      console.timeEnd("singleFor")
      break;
  }
}
 
var twoSum = function(nums, target) { // log(n)
    const arrayMap = new Map ();
    console.time("md")
  for (let i = 0; i<nums.length;i++){  //[3,2,4]
      let cur = nums[i];
    //    x = 6 - 3;
      let x = target - cur; // 3
      if(arrayMap.has(x)) { // set maine x exist kartna h ki nai
        console.timeEnd("md")
          return [arrayMap.get(x),i]
      } else arrayMap.set(cur,i) 
  }   
};
let getData = twoSum([3,2,4],6)
clg(getData)

   


function clg (value,color="#bada55") {
    console.log(`%c ${value}`, `background: #222; color: ${color};font-size:50px`);

 }


//  iteration - Array 
//  NO Itrtantoon  -> setMap ->  // 
// HashMap -> KeyboardEvent, value 


// Map  
// HashMap 
// Array 
// Object  






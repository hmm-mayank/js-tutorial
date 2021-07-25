/**
 * types of Data
* There are 8 basic data types in JavaScript.

* number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
bigint is for integer numbers of arbitrary length.
string for strings. A string may have zero or more characters, there’s no separate single-character type.
boolean for true/false.
null for unknown values – a standalone type that has a single value null.
undefined for unassigned values – a standalone type that has a single value undefined.
object for more complex data structures.
symbol for unique identifiers. 
*/
// 9007199254740991


// Integer

// Integer - 0,1,2,3,45
// Float - 12.323
// bigInt - 12122122n

let integerTest = 12000232032n;
// clg(integerTest);


// STRING

let stringTest = "youtube"
// clg(stringTest);

// BOOLEAN

let boolTest = true;
// clg( 4/2 == 3);

// NULL

let nullTest = null;
// clg(nullTest);

// object

let objectTestArray = [1,2,3,4,5,"asd"]
let objectTestObj = {key:1,name:"chapter2"}

// clg(typeof integerTest);




/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 */
 var twoSum = function(nums, target) {
  
    const arrayMap = new Map ();
  for (let i = 0; i<nums.length;i++){
      let cur = nums[i];
      let x = target - cur;
      if(arrayMap.has(x)) {
          return [arrayMap.get(x),i]
      } else arrayMap.set(cur,i) 
  }
    
};
let getData = twoSum([3,2,4],6)
clg(getData)























function clg (value,color="#bada55") {
    console.log(`%c ${value}`, `background: #222; color: ${color};font-size:50px`);

 }
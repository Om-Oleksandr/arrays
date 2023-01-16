/**
 * @param {[number]} 
 * @return {boolean}
 */
debugger
function hasSameNumbers(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      return true;
    }
  }
  return false;
}

console.log(hasSameNumbers([1,2,2,3,2]));

// const string1 = "hello";
// console.log(arr1);
// const arr2 = arr1.splice(2, 1, '1', '2', '3');
// console.log(arr1);
// console.log(arr2);
// console.log(arr1.concat(1, 3, 6, 4));
// console.log(arr1);
// console.log(arr1.indexOf(key));
// console.log(arr1.lastIndexOf(key));
// console.log(arr1.includes(key));
// console.log(arr1.slice(2, 5));

/* 
indexOf
lastIndexOf
concat
slice
splice
reduce
*/

// function isInclude(array, string) {
//   if (array.includes(string)) {
//     return true;
//   }
//   return false;
// }

// /**
//  *
//  * @param {[number]} array
//  * @returns {number | null}
//  */
// function findAverageInArray(array) {
//   if (array.length === 0) {
//     return null;
//   }
//   const sum = array.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue;
//   });
//   return sum / array.length;
// }
// console.log(findAverageInArray(arr1));


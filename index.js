function hasTargetSum(array, target) {
  let numIndex = 0
  
  for (let number of array){
    let sumArray = array.slice(numIndex+=1).map(num => number + num)
      for(let sum of sumArray){
        if (sum === target){
          return true
        }
      }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  for each item in the array
    add number to the remaining items in the array
    compare each sum to the target number
    if the numbers are equal
      return true
  
*/

/*
  Given an array of numbers, and another number, determine whether any pair of numbers in the array, when added together, equal the second argument/number
  */

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("My test - expecting: false");
  console.log("=>", hasTargetSum([2, 7, 3, 1], 1))

  console.log("");

  console.log("My test - expecting: true");
  console.log("=>", hasTargetSum([0, 2, 7, 3, 1], 1))

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

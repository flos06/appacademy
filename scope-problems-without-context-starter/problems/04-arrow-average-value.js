/***********************************************************************
Write a function using fat arrow syntax, `arrowAvgValue(array)` that takes in an
array of numbers and returns the average number. Assign the below function to a
variable using the const keyword.

Examples:


***********************************************************************/

// your code here!

const arrowAvgValue = array => {
  const sum = array.reduce((previousValue, currentValue) =>  previousValue + currentValue )
  const avg = sum / array.length
  console.log(avg)
  return avg
}


arrowAvgValue([10, 20]); // => 15
arrowAvgValue([2, 3, 7]); // => 4
arrowAvgValue([100, 60, 64]); // => 74.66666666666667
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowAvgValue;
} catch (e) {
  return undefined;
}

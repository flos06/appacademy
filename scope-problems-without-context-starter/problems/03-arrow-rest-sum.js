/***********************************************************************
Write a function named `arrowRestSum` that accepts all incoming parameters
and sums them. Assign the below function to a variable using the const keyword.

**Hint**: Use rest parameter syntax!

Examples:

***********************************************************************/

// your code here!

const arrowRestSum = (...num) => {
  sum = num[0]
  for (let i = 1; i < num.length; i++){
    sum = sum + num[i] 
  }
  console.log(sum)
  return sum;
}


arrowRestSum(3,5,6); // => 14
arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 14
arrowRestSum(0); // => 0
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowRestSum;
} catch (e) {
  return undefined;
}

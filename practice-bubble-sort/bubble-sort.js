
function bubbleSort(arr) {
  
  let swaps = false
    // Iterate through the array
  for (let i = 0; i < arr.length - 1; i ++){

    if (arr[i] > arr[i + 1]){
      let tmp = arr[i];
      arr[i] = arr[i+1]
      arr[i + 1] = tmp
      swaps = true
    }

  }
  console.log(arr)
  if (swaps == false){
    return arr;
  } else {
    bubbleSort(arr)
  }
      // If the current value is greater than its neighbor to the right
        // Swap those values
      
        // Do not move this console.log
        console.log(arr.join(","));
        
    // If you get to the end of the array and no swaps have occurred, return

    // Otherwise, repeat from the beginning

}


module.exports = bubbleSort;
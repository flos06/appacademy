const [addNums, addManyNums] = require("./phase-1");


// Runs `addManyNums` in 10 increasing increments


function addNums10Timing(increment) {
  // Copy your `addNums10` code here



    let array =[]
    for (let i = increment; i <= 10 * increment; i += increment){
      let startTime =Date.now()
      array.push(addNums(i))
      let endTime = Date.now()
      console.log(endTime - startTime)
      console.time()
      console.timeLog()
      console.timeEnd()
      
    }
    return array;
  
  

}

console.log(addNums10Timing(10))


function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here




  let newArray =[]
  for (let i = increment; i <= 10 * increment; i += increment){
    

    let startTime =Date.now()
    newArray.push(addManyNums(i))
    let endTime = Date.now()
    console.log(endTime - startTime)
    console.time()
    console.timeLog()
    console.timeEnd()
  }
  return newArray;
}




n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
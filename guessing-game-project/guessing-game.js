const { resolve } = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



let secretNumber 
let randomInRange = function(min, max){
    min = Math.ceil(min + 1);
    max = Math.floor(max);
    secretNumber = Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is also exclusive
  
}

let askRange = function() {
    rl.question("Enter the minimum value ", answer1 => {
        rl.question("Enter the maximum value ", answer2 => {
            console.log("I'm thinking of a number between " + answer1 + " and " + answer2)
            randomInRange(Number(answer1), Number(answer2))
            askGuess()
        })
    })
    
}

let askGuess = function(){
rl.question("Enter a guess ", answer => {

    if(!checkGuess(Number(answer))) {
        console.log("Try again")
        askGuess()
    }
    
    else {
        console.log("You win!")
        rl.close()
    }


  });
}




let checkGuess = function(num) {
    if (num > secretNumber){
        console.log("Too high");
        return false;
    }
    if (num < secretNumber){

        console.log("Too low");
        return false;
    }
    if (num === secretNumber){

        console.log("Correct!");
        return true;
    }
}

askRange()

import inquirer from "inquirer"

 // 1) The computer will produce a random number.
 // 2) The user will guess the number.
 // 3) Match the user input with the randomly generated number.

 const randomNumber = Math.floor(Math.random() * 10 + 1);

 const answer = await inquirer.prompt([
{
name: "userGuessNumber",
type: "number",
message: "pleas predict the number within the range of 1 to 10"

}
 ]);

  if (answer.userGuessNumber == randomNumber){
    console.log("Congrulationss ! You are guess right number")
  }
else{
    console.log("sorry you Guess wrong number")
}


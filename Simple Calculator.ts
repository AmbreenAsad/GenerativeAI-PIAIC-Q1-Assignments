import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";

const answer = await inquirer.prompt([
  { message: "Enter First number", type: "number", name: "firstNumber" },
  { message: "Enter Second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perform operations :",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

if (answer.operator === "Addition") {
  console.log("your value after addition is");
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Subtraction") {
  console.log("your value after Subtraction is");
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication") {
  console.log("your value after Multiplication is");
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division") {
  console.log("your value after Division is");
  console.log(answer.firstNumber / answer.secondNumber);
} else console.log("Enter a valid operator");

#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellowBright("\n....<<<<<<<<<<<<<<<WELCOME TO TYPESCRIPT QUIZ SYSTEM>>>>>>>>>>>>>>>....\n"));
const quiz = await inquirer.prompt([
    {
        name: "Question_1",
        type: "list",
        message: chalk.magentaBright("Q1. What is the correct way to check if two values are not equal in typescript?"),
        choices: ["a == b", "a === b", "a = b", "a !== b"],
    },
    {
        name: "Question_2",
        type: "list",
        message: chalk.magentaBright("Q2. Which of the following characters is commonly allowed in variable name in typescript?"),
        choices: ["$", "@", "#", "&"],
    },
    {
        name: "Question_3",
        type: "list",
        message: chalk.magentaBright("Q3. Which operator is commonly used for string concatination in typescript?"),
        choices: ["+", "-", "*", "/"],
    },
    {
        name: "Question_4",
        type: "list",
        message: chalk.magentaBright("Q4. In typescript, which symbol is commonly used to terminate a statement?"),
        choices: [".", ":", ";", ","],
    },
    {
        name: "Question_5",
        type: "list",
        message: chalk.magentaBright("Q5. Which method of inquirer.js is used to start the prompt interface and recieve user input?"),
        choices: ["start()", "prompt()", "init()", "run()"],
    },
]);
let score = 0;
switch (quiz.Question_1) {
    case "a !== b":
        console.log(chalk.greenBright("1.Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.redBright("1.Incorrect!"));
}
switch (quiz.Question_2) {
    case "$":
        console.log(chalk.greenBright("2.Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.redBright("2.Incorrect!"));
}
switch (quiz.Question_3) {
    case "+":
        console.log(chalk.greenBright("3.Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.redBright("3.Incorrect!"));
}
switch (quiz.Question_4) {
    case ";":
        console.log(chalk.greenBright("4.Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.redBright("4.Incorrect!"));
}
switch (quiz.Question_5) {
    case "prompt()":
        console.log(chalk.greenBright("5.Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.redBright("5.Incorrect!"));
}
console.log(chalk.yellowBright(`Score: ${score}`));

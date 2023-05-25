import chalk from "chalk";
import validator from "validator";


const response = validator.isEmail('abc@gmail.com')
console.log(response ? chalk.green.bold.inverse(response) : chalk.red.bold.inverse(response));
console.log(chalk.green.bold.inverse("Login Sucessfull"));



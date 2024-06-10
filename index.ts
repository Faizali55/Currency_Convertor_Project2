#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.yellow("\n <<<<==== Wellcome To The FaizCode Currency-Convertor-App2 ====>>>> \n"));
console.log(`\t\t     $          $         `);
console.log(`\t\t  $$$$$$$    $$$$$$$    `);
console.log(`\t\t $$  $      $$  $         `);
console.log(`\t\t  $$$$$$$    $$$$$$$    `);
console.log(`\t\t     $  $$      $   $$   `);
console.log(`\t\t  $$$$$$$    $$$$$$$    `);
console.log(`\t\t     $          $          `);

console.log(`\t$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\n`);

let Currency: any = {
  USD: 1, //base currency
  PKR: 279.72,
  SAUDI_Riyal: 3.75,
  IND_Rupee: 83.36,
  EURO: 0.93,
};

let myloop = true;

while (myloop) {
  let UserInput = await inquirer.prompt([
    {
      name: "from",
      type: "list",
      message: "Select A Currency You Want To Convert From:",
      choices: ["USD", "PKR", "SAUDI_Riyal", "IND_Rupee", "EURO"],
    },
    {
      name: "to",
      type: "list",
      message: "Select A Currency You Want To Convert Into:",
      choices: ["USD", "PKR", "SAUDI_Riyal", "IND_Rupee", "EURO"],
    },
    {
      name: "amount",
      type: "number",
      message: "Enter Amount You Want To Convert:",
    },
  ]);
  //destructuring

  let { from, to, amount } = UserInput;

  let from_amount = Currency[from];
  let to_amount = Currency[to];

  let Base_Currency = amount / from_amount;
  let Converted_Amount = Base_Currency * to_amount;

  //now we want limit the digit after decimal.

  let finalOutput = Converted_Amount.toFixed(2); //tofixed is a digit limit method.
  console.log(
    chalk.greenBright(`\n${from} Amount ${amount} Converted To ${to} = ${finalOutput}\n`)
  );

  //now we want to ask to user if he want to more conversion.

  let askAgain = await inquirer.prompt([
    {
      type: "confirm",
      name: "more",
      message: "Do You Want To More Conversion ?",
      default: false,
    },
  ]);
  if (!askAgain.more) {
    myloop = false;
    console.log(chalk.magentaBright("\nThank You For Using Convertor.\n"));
  }
}

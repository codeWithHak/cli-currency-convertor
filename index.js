import inquirer from "inquirer";
let currencies = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
let user_answer = await inquirer.prompt([{
        name: "from",
        message: "enter from message",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        message: "enter to message",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "set amount",
        type: "number"
    }
]);
let fromAmount = currencies[user_answer.from];
let toAmount = currencies[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convert = baseAmount * toAmount;
console.log(fromAmount);
console.log(toAmount);
console.log(amount);
console.log(baseAmount);
console.log(convert.toFixed(2));

import inquirer from "inquirer";
const currency = {
    USD: 1, // base currency
    EUR: 0.92,
    AFN: 70.82,
    BDT: 117.00,
    INR: 83.94,
    PKR: 278.60,
    YER: 249.98,
    GBP: 0.79
};
let userName = await inquirer.prompt([
    {
        name: "from",
        message: "\n Select the currecny you want to convert : ",
        type: "list",
        choices: ["USD", "EUR", "AFN", "BDT", "INR", "PKR", "YER", "GBP"]
    },
    {
        name: "to",
        message: "\n In which currency you want to convert, Please select :",
        type: "list",
        choices: ["USD", "EUR", "AFN", "BDT", "INR", "PKR", "YER", "GBP"]
    },
    {
        name: "amount",
        message: "\n Enter Your Amount : ",
        type: "number"
    }
]);
let fromAmount = currency[userName.from];
let toAmount = currency[userName.to];
let amount = userName.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = Math.floor(baseAmount * toAmount);
console.log(convertedAmount);

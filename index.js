import inquirer from "inquirer";
const currency = {
    USD: 1,
    PKR: 280,
    INR: 85,
    RIYAL: 5,
    LIRA: 32,
    OMANIRIYAL: 0.5
};
let userchoice = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: ['USD', 'PKR', 'INR', 'RIYAL', 'LIRA', 'OMANIRIYAL']
    },
    {
        name: "to",
        message: "Enter to Currency",
        type: "list",
        choices: ['USD', 'PKR', 'INR', 'RIYAL', 'LIRA', 'OMANIRIYAL']
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: 'number'
    }
]);
//console.log(userchoice);    
let fromAmount = currency[userchoice.from];
let toAmount = currency[userchoice.to];
let amount = userchoice.amount;
let baseamount = amount / fromAmount;
let convertedamount = baseamount * toAmount;
console.log(`Your Amount is:${convertedamount} ${userchoice.to}`);

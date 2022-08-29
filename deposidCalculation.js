function depositCalculator(input) {
 let depositAmount = Number(input[0]);
 let termDeposit = Number(input[1]);
 let amountInterestRate = Number(input[2]);

 let yearDepositAlmount = depositAmount * ( amountInterestRate/ 100);
 let mountDeposit = yearDepositAlmount / 12;

 let total = mountDeposit * termDeposit; 
 let totalMoney = total + depositAmount;

 console.log(totalMoney);
}
 depositCalculator(["200", "3", "5,7"]) 


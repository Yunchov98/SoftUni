function depositCalculator(input) {

    let depositedAmount = Number(input[0]);
    let termOfTheDeposit = Number(input[1]);
    let annualInterestRate = Number(input[2]);

    let accruedInterest = depositedAmount * (annualInterestRate / 100);
    let interestForOneMonth = accruedInterest / 12;

    let totalSum = depositedAmount + termOfTheDeposit * interestForOneMonth;

    console.log(totalSum);
}

depositCalculator(["200", "3", "5.7"]);
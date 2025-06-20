function calculateCompoundInterest() {
  const P = parseFloat(document.getElementById('principal').value);
  const r = parseFloat(document.getElementById('rate').value) / 100;
  const n = parseInt(document.getElementById('timesCompounded').value);
  const t = parseFloat(document.getElementById('years').value);
  if ([P, r, n, t].some(isNaN)) {
    alert('Please fill all fields with valid numbers.');
    return;
  }
  const A = P * Math.pow(1 + r / n, n * t);
  document.getElementById('compoundInterestResult').textContent = `Future Value (A) = $${A.toFixed(2)}`;
}

// Simple Interest Calculator
function calculateSimpleInterest() {
  const P = parseFloat(document.getElementById('simplePrincipal').value);
  const r = parseFloat(document.getElementById('simpleRate').value) / 100;
  const t = parseFloat(document.getElementById('simpleTime').value);
  if ([P, r, t].some(isNaN)) {
    alert('Please fill all fields with valid numbers.');
    return;
  }
  const I = P * r * t;
  document.getElementById('simpleInterestResult').textContent = `Simple Interest (I) = $${I.toFixed(2)}`;
}

// Loan Payment Calculator
function calculateLoanPayment() {
  const P = parseFloat(document.getElementById('loanAmount').value);
  const annualRate = parseFloat(document.getElementById('annualRateLoan').value);
  const n = parseInt(document.getElementById('loanTermMonths').value);
  if ([P, annualRate, n].some(isNaN)) {
    alert('Please fill all fields with valid numbers.');
    return;
  }
  const r = (annualRate / 100) / 12;
  let M;
  if (r === 0) {
    M = P / n;
  } else {
    M = P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  }
  document.getElementById('loanPaymentResult').textContent = `Monthly Payment (M) = $${M.toFixed(2)}`;
}

// Savings Goal Calculator
function calculateSavingsGoal() {
  const P = parseFloat(document.getElementById('monthlyDeposit').value);
  const rAnnual = parseFloat(document.getElementById('goalRate').value) / 100;
  const t = parseFloat(document.getElementById('goalYears').value);
  if ([P, rAnnual, t].some(isNaN)) {
    alert('Please fill all fields with valid numbers.');
    return;
  }
  const rMonthly = rAnnual / 12;
  const n = t * 12;
  const FV = P * ( (Math.pow(1 + rMonthly, n) - 1) / rMonthly );
  document.getElementById('savingsGoalResult').textContent = `Future Value (FV) = $${FV.toFixed(2)}`;
}

// Mortgage Calculator
function calculateMortgage() {
  const P = parseFloat(document.getElementById('mortgagePrincipal').value);
  const annualRate = parseFloat(document.getElementById('mortgageRate').value);
  const years = parseInt(document.getElementById('mortgageYears').value);
  if ([P, annualRate, years].some(isNaN)) {
    alert('Please fill all fields with valid numbers.');
    return;
  }
  const r = (annualRate / 100) / 12;
  const n = years * 12;
  const M = P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  document.getElementById('mortgageResult').textContent = `Monthly Mortgage Payment = $${M.toFixed(2)}`;
}

// Investment Return (ROI) Calculator
function calculateROI() {
  const gain = parseFloat(document.getElementById('roiGain').value);
  const cost = parseFloat(document.getElementById('roiCost').value);
  if ([gain, cost].some(isNaN)) {
    alert('Please fill all fields with valid numbers.');
    return;
  }
  const roi = ((gain - cost) / cost) * 100;
  document.getElementById('roiResult').textContent = `Return on Investment (ROI) = ${roi.toFixed(2)}%`;
}

// Retirement Planning Calculator (Simple)
function calculateRetirement() {
  const currentAge = parseInt(document.getElementById('retirementCurrentAge').value);
  const retirementAge = parseInt(document.getElementById('retirementAge').value);
  const currentSavings = parseFloat(document.getElementById('retirementSavings').value);
  const monthlyContribution = parseFloat(document.getElementById('retirementMonthlyContribution').value);
  const annualRate = parseFloat(document.getElementById('retirementRate').value) / 100;

  if ([currentAge, retirementAge, currentSavings, monthlyContribution, annualRate].some(isNaN)) {
    alert('Please fill all fields with valid numbers.');
    return;
  }
  if (retirementAge <= currentAge) {
    alert('Retirement age must be greater than current age.');
    return;
  }

  const months = (retirementAge - currentAge) * 12;
  const rMonthly = annualRate / 12;

  // Future Value of current savings
  const fvCurrentSavings = currentSavings * Math.pow(1 + rMonthly, months);

  // Future Value of monthly contributions (ordinary annuity)
  const fvContributions = monthlyContribution * ( (Math.pow(1 + rMonthly, months) - 1) / rMonthly );

  const total = fvCurrentSavings + fvContributions;
  document.getElementById('retirementResult').textContent = `Estimated Retirement Savings = $${total.toFixed(2)}`;
}

// Emergency Fund Calculator
function calculateEmergencyFund() {
  const monthlyExpenses = parseFloat(document.getElementById('emergencyMonthlyExpenses').value);
  const monthsCovered = parseFloat(document.getElementById('emergencyMonths').value);
  if ([monthlyExpenses, monthsCovered].some(isNaN)) {
    alert('Please fill all fields with valid numbers.');
    return;
  }
  const fund = monthlyExpenses * monthsCovered;
  document.getElementById('emergencyResult').textContent = `Emergency Fund Needed = $${fund.toFixed(2)}`;
}

// Budget Tracker - Simple Savings Rate Calculator
function calculateSavingsRate() {
  const income = parseFloat(document.getElementById('income').value);
  const savings = parseFloat(document.getElementById('savings').value);
  if ([income, savings].some(isNaN) || income === 0) {
    alert('Please fill all fields with valid numbers and income must be > 0.');
    return;
  }
  const rate = (savings / income) * 100;
  document.getElementById('savingsRateResult').textContent = `Savings Rate = ${rate.toFixed(2)}%`;
}

// Net Worth Tracker
function calculateNetWorth() {
  const assets = parseFloat(document.getElementById('netAssets').value);
  const liabilities = parseFloat(document.getElementById('netLiabilities').value);
  if ([assets, liabilities].some(isNaN)) {
    alert('Please fill all fields with valid numbers.');
    return;
  }
  const netWorth = assets - liabilities;
  document.getElementById('netWorthResult').textContent = `Net Worth = $${netWorth.toFixed(2)}`;
}

// Debt Payoff Calculator (Snowball/Avalanche Simple)
// Calculates months to payoff based on total debt, interest rate, and monthly payment
function calculateDebtPayoff() {
  const debtAmount = parseFloat(document.getElementById('debtAmount').value);
  const annualRate = parseFloat(document.getElementById('debtInterest').value) / 100;
  const monthlyPayment = parseFloat(document.getElementById('debtMonthlyPayment').value);
  if ([debtAmount, annualRate, monthlyPayment].some(isNaN) || monthlyPayment <= 0) {
    alert('Please fill all fields with valid numbers and payment must be > 0.');
    return;
  }
  const monthlyRate = annualRate / 12;
  // Calculate number of months needed to payoff using formula for amortizing loan
  const numerator = Math.log(monthlyPayment) - Math.log(monthlyPayment - debtAmount * monthlyRate);
  const denominator = Math.log(1 + monthlyRate);
  const months = numerator / denominator;
  if (!isFinite(months) || months < 0) {
    document.getElementById('debtPayoffResult').textContent = `Monthly payment too low to pay off debt.`;
    return;
  }
  document.getElementById('debtPayoffResult').textContent = `Months to Payoff = ${Math.ceil(months)}`;
}

// Inflation Calculator
function calculateInflation() {
  const initialPrice = parseFloat(document.getElementById('inflationInitialPrice').value);
  const finalPrice = parseFloat(document.getElementById('inflationFinalPrice').value);
  const years = parseFloat(document.getElementById('inflationYears').value);
  if ([initialPrice, finalPrice, years].some(isNaN) || initialPrice <= 0 || years <= 0) {
    alert('Please fill all fields with valid numbers, initial price and years must be > 0.');
    return;
  }
  const inflationRate = (Math.pow(finalPrice / initialPrice, 1 / years) - 1) * 100;
  document.getElementById('inflationResult').textContent = `Average Annual Inflation Rate = ${inflationRate.toFixed(2)}%`;
}

// Capital Gains Tax Calculator
function calculateCapitalGainsTax() {
  const salePrice = parseFloat(document.getElementById('capitalSalePrice').value);
  const purchasePrice = parseFloat(document.getElementById('capitalPurchasePrice').value);
  const taxRate = parseFloat(document.getElementById('capitalTaxRate').value) / 100;
  if ([salePrice, purchasePrice, taxRate].some(isNaN)) {
    alert('Please fill all fields with valid numbers.');
    return;
  }
  const gain = salePrice - purchasePrice;
  const tax = gain > 0 ? gain * taxRate : 0;
  document.getElementById('capitalGainsResult').textContent = `Capital Gains Tax = $${tax.toFixed(2)}`;
}

// Dividend Yield Calculator
function calculateDividendYield() {
  const annualDividend = parseFloat(document.getElementById('dividendAnnual').value);
  const stockPrice = parseFloat(document.getElementById('dividendPrice').value);
  if ([annualDividend, stockPrice].some(isNaN) || stockPrice === 0) {
    alert('Please fill all fields with valid numbers and price must be > 0.');
    return;
  }
  const yieldPercent = (annualDividend / stockPrice) * 100;
  document.getElementById('dividendYieldResult').textContent = `Dividend Yield = ${yieldPercent.toFixed(2)}%`;
}

// Break-even Analysis Calculator
function calculateBreakEven() {
  const fixedCosts = parseFloat(document.getElementById('breakEvenFixedCosts').value);
  const pricePerUnit = parseFloat(document.getElementById('breakEvenPrice').value);
  const variableCostPerUnit = parseFloat(document.getElementById('breakEvenVariableCost').value);
  if ([fixedCosts, pricePerUnit, variableCostPerUnit].some(isNaN) || pricePerUnit <= variableCostPerUnit) {
    alert('Please fill all fields with valid numbers and price per unit must be greater than variable cost per unit.');
    return;
  }
  const breakEvenUnits = fixedCosts / (pricePerUnit - variableCostPerUnit);
  document.getElementById('breakEvenResult').textContent = `Break-even Units = ${Math.ceil(breakEvenUnits)}`;
}

// Time Value of Money Calculator (Present Value)
function calculatePresentValue() {
  const futureValue = parseFloat(document.getElementById('pvFutureValue').value);
  const rate = parseFloat(document.getElementById('pvRate').value) / 100;
  const periods = parseInt(document.getElementById('pvPeriods').value);
  if ([futureValue, rate, periods].some(isNaN) || periods <= 0) {
    alert('Please fill all fields with valid numbers and periods must be > 0.');
    return;
  }
  const presentValue = futureValue / Math.pow(1 + rate, periods);
  document.getElementById('presentValueResult').textContent = `Present Value = $${presentValue.toFixed(2)}`;
}

// Future Value Calculator
function calculateFutureValue() {
  const presentValue = parseFloat(document.getElementById('fvPresentValue').value);
  const rate = parseFloat(document.getElementById('fvRate').value) / 100;
  const periods = parseInt(document.getElementById('fvPeriods').value);
  if ([presentValue, rate, periods].some(isNaN) || periods <= 0) {
    alert('Please fill all fields with valid numbers and periods must be > 0.');
    return;
  }
  const futureValue = presentValue * Math.pow(1 + rate, periods);
  document.getElementById('futureValueResult').textContent = `Future Value = $${futureValue.toFixed(2)}`;
}

// Opportunity Cost Calculator
function calculateOpportunityCost() {
  const return1 = parseFloat(document.getElementById('opportunityReturn1').value) / 100;
  const return2 = parseFloat(document.getElementById('opportunityReturn2').value) / 100;
  const investment = parseFloat(document.getElementById('opportunityInvestment').value);
  if ([return1, return2, investment].some(isNaN)) {
    alert('Please fill all fields with valid numbers.');
    return;
  }
  const cost = (return1 - return2) * investment;
  document.getElementById('opportunityCostResult').textContent = `Opportunity Cost = $${cost.toFixed(2)}`;
}

// Business Profit Margin Calculator
function calculateProfitMargin() {
  const revenue = parseFloat(document.getElementById('profitRevenue').value);
  const cost = parseFloat(document.getElementById('profitCost').value);
  if ([revenue, cost].some(isNaN) || revenue === 0) {
    alert('Please fill all fields with valid numbers and revenue must be > 0.');
    return;
  }
  const margin = ((revenue - cost) / revenue) * 100;
  document.getElementById('profitMarginResult').textContent = `Profit Margin = ${margin.toFixed(2)}%`;
}

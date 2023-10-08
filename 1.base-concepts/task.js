"use strict"

function solveEquation(a, b, c) {
	let arr = [];
  let d = b**2 - 4 * a * c;
  
  if (d === 0) {
  arr = [-b / (2 * a)];
  } else if (d > 0) {
  arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
  }
  return arr;
  }
console.log(solveEquation(1, 2, 1));


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let interestRate = percent / 100 / 12;
	let loanBody = amount - contribution;
	let payment = loanBody * (interestRate + (interestRate / (((1 + interestRate)**countMonths) - 1)));
	let sum = payment * countMonths;
	let newSum = sum.toFixed(2);
	return Number(newSum);
}
console.log(calculateTotalMortgage(10, 1000, 50000, 12))
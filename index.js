var amount = document.getElementById('amount');
var rate = document.getElementById('rate');
var months = document.getElementById('months');

var total = document.getElementById('total');

// default values
amount.value = 0;
rate.value = 0;
months.value = 0;
// Result is 0
total.innerText = 0;

// Add event listeners
amount.addEventListener("mouseout", calculateLoan);
rate.addEventListener("mouseout", calculateLoan);
months.addEventListener("mouseout", calculateLoan);
// add more alternative event listeners
amount.addEventListener("change", calculateLoan);
rate.addEventListener("change", calculateLoan);
months.addEventListener("change", calculateLoan);


function calculateLoan() {
    
    // I don't know how to calculate loan, so I adopt it from the internet
    var principal = parseFloat(amount.value);
    var interest = parseFloat(rate.value) / 100 / 12;
    var payments = parseFloat(months.value);
  
    // compute the monthly payment figure
    var x = Math.pow(1 + interest, payments); //Math.pow computes powers
    var monthly = (principal*x*interest)/(x-1);
    

    total.innerText = monthly.toFixed(2);
}


if (true) {
    calculateLoan();
}
// get all input value
function totalExpenses() {
  const foodCost = document.getElementById("food-cost");
  const rentCost = document.getElementById("rent-cost");
  const clothCost = document.getElementById("cloth-cost");

  const incomeText = document.getElementById("income");
  let income = parseInt(incomeText.value);
  
  let total =
    parseInt(foodCost.value) +
    parseInt(rentCost.value) +
    parseInt(clothCost.value);

    if (income < total) {
      return alert('Please enter valid number'), total = 0, income = 0;
    }

    else if ( income > total ){
      return total;
    }
}

// get balance 
function balance() {
  const total = totalExpenses();
  const expenses = (document.getElementById("expenses").innerText = total);
  const incomeText = document.getElementById("income");
  const income = parseInt(incomeText.value);
  const balance = (document.getElementById("balance").innerText = income - expenses);
  
    return balance;
 
   }

   // handle calculate button
const balanceCalculate = document.getElementById("calculate").addEventListener("click", function () {
   balance() 
     
  });

//get saving amount
function savingAmount() {
  const percentageText = document.getElementById("percentage").value;
  const percentage = parseInt(percentageText);
  let saving = ( document.getElementById("saving-amount").innerText = (balance() * percentage) / 100);
  if (saving < 0) {
    return alert('Please enter positive number'), saving = 0;
  }
  else if (saving > 0) {
    return saving
  }
};

//get remaining balance
function remainingBalance() {
 let remainingBalance = document.getElementById('remaining-balance').innerText = balance() - savingAmount();

 if (remainingBalance < 0) {
   return alert('Please enter valid percentage amount'), remainingBalance = (document.getElementById('remaining-balance').innerText = balance()), saving = 0;
 } else if (remainingBalance > 0 ){
   return remainingBalance
 }
};


 //handle save button
document.getElementById("saving").addEventListener("click", function () {
  if(savingAmount() < 0 && remainingBalance() < 0){
    return alert("Please enter positive number")
  } else if (savingAmount() > 0){
    savingAmount();
    remainingBalance()
  }

});

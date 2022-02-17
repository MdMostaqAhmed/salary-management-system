function totalExpenses() {
  const foodCost = document.getElementById("food-cost");
  const rentCost = document.getElementById("rent-cost");
  const clothCost = document.getElementById("cloth-cost");
  const total =
    parseInt(foodCost.value) +
    parseInt(rentCost.value) +
    parseInt(clothCost.value);

  return total;
}

function balance() {
  const total = totalExpenses();
  const expenses = (document.getElementById("expenses").innerText = total);
   const incomeText = document.getElementById("income");
   const income = parseInt(incomeText.value);
   const balance = (document.getElementById("balance").innerText = income - expenses);
   return balance;
   }

const balanceCalculate = document.getElementById("calculate").addEventListener("click", function () {
    balance()
  });


function savingAmount() {
  const percentageText = document.getElementById("percentage").value;
  const percentage = parseInt(percentageText);
  const saving = ( document.getElementById("saving-amount").innerText = (balance() * percentage) / 100);
  return saving;
}

function remainingBalance() {
  document.getElementById('remaining-balance').innerText = balance() - savingAmount();
  console.log();
}


 
document.getElementById("saving").addEventListener("click", function () {
savingAmount();
remainingBalance();
});

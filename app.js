const foodCost = document.getElementById("food-cost");
const rentCost = document.getElementById("rent-cost");
const clothCost = document.getElementById("cloth-cost");

const balanceCalculate = document
  .getElementById("calculate")
  .addEventListener("click", function () {
    const total =
      parseInt(foodCost.value) +
      parseInt(rentCost.value) +
      parseInt(clothCost.value);

    // Total Expenses
    const expenses = (document.getElementById("expenses").innerText = total);
    //Balance

    const incomeText = document.getElementById("income");
    const income = parseInt(incomeText.value);

    const balance = (document.getElementById("balance").innerText =
      income - expenses);
  });

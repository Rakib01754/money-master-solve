const calculateexpense = () => {
  const incomeField = document.querySelector("#income");
  const income = incomeField.value;
  const foodField = document.querySelector("#food");
  const food = foodField.value;
  const rentField = document.querySelector("#rent");
  const rent = rentField.value;
  const clothesField = document.querySelector("#clothes");
  const clothes = clothesField.value;

  if (
    isNaN(income) ||
    income < 0 ||
    income == "" ||
    isNaN(food) ||
    food < 0 ||
    food == "" ||
    isNaN(rent) ||
    rent < 0 ||
    rent == "" ||
    isNaN(clothes) ||
    clothes < 0 ||
    clothes == ""
  ) {
    alert("Inputs must be positive numbers or valid value");
    return;
  }
  // calculate expense
  const expense =
    parseInt(food) + parseInt(rent) + parseInt(clothes);
  console.log(expense)

  // calculate balance
  const balance = parseInt(income) - expense;
  //   validate income
  if (expense > income) {
    alert("Expenses cannot be more than income");
  } else {
    // view total expense and balance
    document.getElementById("total-expense").innerText = expense;
    document.getElementById("balance").innerText = balance;
  }
  foodField.value = '';
  rentField.value = ''
  clothesField.value = ''
};

const calculateSavings = () => {
  // calculate saving amount
  const savePercentageField = document.getElementById('save')
  const savePercentage = savePercentageField.value;
  //   Validate saving percentage value
  if (isNaN(savePercentage) || savePercentage < 0) {
    alert("Provide positive saving value");
    savePercentageField.value = '';
    return;
  }
  // const incomeField = document.querySelector("#income");
  // const income = incomeField.value;
  const balance = document.getElementById("balance").innerText;
  console.log(balance)
  const income = document.querySelector("#income").value;
  const savingAmount = (income * savePercentage) / 100;

  // calculate remaining balance

  const remainingBalance = parseFloat(balance) - savingAmount;
  console.log(balance, savingAmount)

  //   validate saving amount
  if (savingAmount > balance) {
    alert("SavingAmount is greater than balance");
  } else {
    // view saving amount and remaining balance
    document.getElementById("saving-amount").innerText = savingAmount;
    document.getElementById("remaining-balance").innerText = remainingBalance;
  }
};

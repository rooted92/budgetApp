// try invoking functions when page first loads 

// imports
import { MakeBudgetForm, injectBudgetForm, MakeBudgetButtons } from "./injections.js";
import { GetBudgets, RemoveFromLocalStorage, SaveBudgetToLocalStorage } from "./localStorage.js";
// global variables
let budget = {
    budName: '',
    budgetAmount: 0,
    budgetExpenses: 0,
    budgetBalance: 0,
    expenses: []
}

// dom selectors
let createBudgetDiv = document.querySelector('#createBudgetDiv');
let createBudgetBtn = document.querySelector('#createBudgetBtn');
let currentBudgetText = document.querySelector('#currentBudgetText');
let injectCurrentBudget = document.querySelector('#injectCurrentBudget');
let refreshBtn = document.getElementById('refreshBtn');
let monthlyBudget, budgetName, expenseName, expenseAmount, addExpenseBtn, budAmt, expAmt, balAmt, saveBudgetBtn;

const addExpenseToBudgetObjectArray = (name, amount) => {
    const expenseObj = {
        expName: name,
        expAmount: parseInt(amount)
    }
    budget.expenses.push(expenseObj);
    expenseName.value = '';
    expenseAmount.value = '';
}
// try passing in expAmount from expenseObj as bAmount, use expenses from budget with reduce method for total expense, balance will be bAmount - bExpenses
const DisplayExpensesTotal = (arr, budgetAmount) => {
    let expenses = arr.reduce((acc, cur) => acc + cur.expAmount, 0);
    let getBalance = parseInt(budgetAmount) - expenses;
    let formatBudgetAmount = parseInt(budgetAmount);
    let convertBalance = getBalance.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    let convertExpenses = expenses.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    let convertBudgetAmount = formatBudgetAmount.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    budAmt.textContent = `${convertBudgetAmount}`;
    expAmt.textContent = `${convertExpenses}`;
    balAmt.textContent = `${convertBalance}`;
}

createBudgetBtn.addEventListener('click', function () {
    console.log('Budget Started');
    createBudgetDiv.style.display = 'none';
    MakeBudgetForm();
    budgetName = document.querySelector('#budgetName');
    monthlyBudget = document.querySelector('#monthlyBudget');
    expenseName = document.querySelector('#expenseName');
    expenseAmount = document.querySelector('#expenseAmount');
    addExpenseBtn = document.querySelector('#addExpenseBtn');
    saveBudgetBtn = document.querySelector('#saveBudgetBtn');
    balAmt = document.querySelector('#balAmt');
    expAmt = document.querySelector('#expAmt');
    budAmt = document.querySelector('#budAmt');
    addExpenseBtn.addEventListener('click', function () {
        if (expenseName.value === '' || expenseAmount.value === '') {
            alert('Please enter expense name and amount');
        }
        else {
            budget.budgetAmount = parseInt(monthlyBudget.value);
            budget.budName = budgetName.value;
            addExpenseToBudgetObjectArray(expenseName.value, expenseAmount.value);
            DisplayExpensesTotal(budget.expenses, monthlyBudget.value);
        }

    });
    saveBudgetBtn.addEventListener('click', function () {
        if (budgetName.value === '' || monthlyBudget.value === '') {
            alert('Please fill out required fields');
            setTimeout(() => {
                budgetName.classList.add('border-danger');
                budgetName.placeholder = 'input required';
                monthlyBudget.classList.add('border-danger');
                monthlyBudget.placeholder = 'input required';
            });
        }
        else {
            budgetName.value = '';
            monthlyBudget.value = '';
            budAmt.textContent = '0';
            balAmt.textContent = '0';
            expAmt.textContent = '0';
            SaveBudgetToLocalStorage(budget);
            PopulateList();
        }
    });
});

refreshBtn.addEventListener('click', function () {
    PopulateList();
    console.log('Refreshed!');
});

const PopulateList = () => {
    injectCurrentBudget.textContent = '';
    let budgetList = GetBudgets();
    budgetList.length > 0 ? currentBudgetText.style.display = 'none' : currentBudgetText.style.display = 'block';
    budgetList.map(item => MakeBudgetButtons(item.budName));
}
PopulateList();

export { injectCurrentBudget, budget };
// try invoking functions when page first loads 

// imports
import { MakeBudgetForm, injectBudgetForm, MakeCreateButton } from "./injections.js";
import { GetBudgets, SaveBudgetToLocalStorage } from "./localStorage.js";
// global variables
let id = 0;
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
let mainCont = document.querySelector('#mainCont');
let monthlyBudget, budgetName, expenseName, expenseAmount;
let addExpenseBtn;
let budAmt;
let expAmt;
let balAmt;
let saveBudgetBtn;

const addExpenseToBudgetObjectArray = (name, amount) => {
    if (name === '' || amount === '') {
        alert('Please make an entry');
    }
    else {
        const expenseObj = {
            expName: name,
            expAmount: parseInt(amount)
        }
        budget.expenses.push(expenseObj);
        // displayExpenses(budget.expAmount, budget.expenses);
        expenseName.value = '';
        expenseAmount.value = '';
    }
}
// try passing in expAmount from expenseObj as bAmount, use expenses from budget with reduce method for total expense, balance will be bAmount - bExpenses
const DisplayExpensesTotal = (arr, budgetAmount) => {
    let expenses = arr.reduce((acc, cur) => acc + cur.expAmount, 0);
    budAmt.textContent = `${parseInt(budgetAmount)}`;
    expAmt.textContent = `${expenses}`;
    balAmt.textContent = `${parseInt(budgetAmount) - expenses}`;
}


createBudgetBtn.addEventListener('click', function () {
    console.log('Budget Created');
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
        budAmt.textContent = `${monthlyBudget.value}`;
        budget.budgetAmount = parseInt(monthlyBudget.value);
        budget.budName = budgetName.value;
        addExpenseToBudgetObjectArray(expenseName.value, expenseAmount.value);
        DisplayExpensesTotal(budget.expenses, monthlyBudget.value);
    });
    saveBudgetBtn.addEventListener('click', function () {
        budgetName.value = '';
        monthlyBudget.value = '';
        SaveBudgetToLocalStorage(budget);
        createBudgetDiv.style.display = 'block';
        injectBudgetForm.style.display = 'none';
    });
});


const PopulateList = () => {
    let budgetList = GetBudgets();
    budgetList.map()
}
//inject budget form
import {injectCurrentBudget, budget} from './app.js';
import { RemoveFromLocalStorage } from './localStorage.js';
let injectBudgetForm = document.querySelector('#injectBudgetForm');

const MakeBudgetForm = () => {
    // save budget button
    let saveBudBtn = document.createElement('button');
    saveBudBtn.className = 'btn btn-success';
    saveBudBtn.type = 'button';
    saveBudBtn.id = 'saveBudgetBtn';
    saveBudBtn.textContent = 'Save Budget';
    let saveBtnCol = document.createElement('div');
    saveBtnCol.className = 'col-12 d-flex d-flex-row justify-content-center mt-2';
    saveBtnCol.append(saveBudBtn);
    let fourthRow = document.createElement('div');
    fourthRow.className = 'row';
    fourthRow.append(saveBtnCol);
    // third row of injectedBudgetFrom container
    let balAmt = document.createElement('span');
    balAmt.id = 'balAmt';
    balAmt.textContent = 0;
    let pBal = document.createElement('p');
    pBal.classList.add('text-info', 'fw-bold');
    pBal.textContent = 'Balance';
    let divBal = document.createElement('div');
    divBal.classList.add('col-4', 'text-center');
    divBal.append(pBal, balAmt);

    let expAmt = document.createElement('span');
    expAmt.id = 'expAmt';
    expAmt.textContent = 0;
    let pExp = document.createElement('p');
    pExp.classList.add('text-danger', 'fw-bold');
    pExp.textContent = 'Expenses';
    let divExp = document.createElement('div');
    divExp.classList.add('col-4', 'text-center');
    divExp.append(pExp, expAmt);

    let budAmt = document.createElement('span');
    budAmt.id = 'budAmt';
    budAmt.textContent = 0;
    let pBud = document.createElement('p');
    pBud.classList.add('text-success', 'fw-bold');
    pBud.textContent = 'Budget';
    let divBud = document.createElement('div');
    divBud.classList.add('col-4', 'text-center');
    divBud.append(pBud, budAmt);

    let thirdRow = document.createElement('div');
    thirdRow.classList.add('row', 'mt-4');
    thirdRow.append(divBud, divExp, divBal);
    // second row of injectBudgetForm container
    //third column
    let addExpBtn = document.createElement('button');
    addExpBtn.id = 'addExpenseBtn';
    addExpBtn.type = 'button';
    addExpBtn.classList.add('btn', 'btn-primary');
    addExpBtn.textContent = 'Add Expense';
    let expBtnCol = document.createElement('div');
    expBtnCol.classList.add('col-12', 'd-flex', 'flex-row', 'justify-content-end', 'mt-4', 'p-0');
    expBtnCol.append(addExpBtn);
    // second column
    let expAmtInput = document.createElement('input');
    expAmtInput.classList.add('border-primary');
    expAmtInput.placeholder = 'Enter expense amount';
    expAmtInput.id = 'expenseAmount';
    expAmtInput.type = 'number';
    let expAmtLabel = document.createElement('label');
    expAmtLabel.classList.add('fw-bold');
    expAmtLabel.for = 'expenseAmount';
    expAmtLabel.textContent = 'Expense Amount:';
    let expAmtCol = document.createElement('div');
    expAmtCol.className = 'col-12 d-flex flex-row justify-content-between mt-4 p-0';
    expAmtCol.append(expAmtLabel, expAmtInput);
    // first column
    let expNameInput = document.createElement('input');
    expNameInput.className = 'border-primary';
    expNameInput.placeholder = 'Enter expense name';
    expNameInput.id = 'expenseName';
    expNameInput.type = 'text';
    let expNameLabel = document.createElement('label');
    expNameLabel.className = 'fw-bold';
    expNameLabel.for = 'expenseName';
    expNameLabel.textContent = 'Expense Name:';
    let expNameCol = document.createElement('div');
    expNameCol.className = 'col-12 d-flex flex-row justify-content-between p-0';
    expNameCol.append(expNameLabel, expNameInput);
    // second row
    let secondRow = document.createElement('div');
    secondRow.className = 'row border border-primary p-2 m-1';
    secondRow.append(expNameCol, expAmtCol, expBtnCol);
    // second question
    let secondQuestion = document.createElement('p');
    secondQuestion.className = 'text-primary text-center mt-4';
    secondQuestion.textContent = 'What are your total monthly expenses?';

    // first row in injectedBudgetForm
    let monBudInput = document.createElement('input');
    monBudInput.classList.add('border-primary');
    monBudInput.placeholder = 'Enter monthly budget';
    monBudInput.id = 'monthlyBudget';
    monBudInput.type = 'number';
    let monBudLabel = document.createElement('label');
    monBudLabel.classList.add('fw-bold');
    monBudLabel.for = 'monthlyBudget';
    monBudLabel.textContent = 'Budget/Income:';
    let budNameInput = document.createElement('input');
    budNameInput.classList.add('border-primary');
    budNameInput.placeholder = 'Enter budget name';
    budNameInput.id = 'budgetName';
    budNameInput.type = 'text';
    let budNameLabel = document.createElement('label');
    budNameLabel.classList.add('fw-bold');
    budNameLabel.for = 'budgetName';
    budNameLabel.textContent = 'Budget Name:';
    let monBudCol = document.createElement('div');
    monBudCol.className = 'col-12 d-flex flex-column justify-content-between';
    monBudCol.append(budNameLabel, budNameInput, monBudLabel, monBudInput);
    // first row
    let firstRow = document.createElement('div');
    firstRow.classList.add('row');
    firstRow.append(monBudCol);
    // first question
    let firstQuestion = document.createElement('p');
    firstQuestion.className = 'text-primary text-center mt-4';
    firstQuestion.textContent = 'What is your monthly budget?';
    //build elements
    injectBudgetForm.append(firstQuestion, firstRow, secondQuestion, secondRow, thirdRow, fourthRow);
}

const MakeBudgetButtons = (budName) => {
    let delBtn = document.createElement('button');
    delBtn.type = 'button';
    delBtn.textContent = 'Delete';
    delBtn.className = 'btn btn-danger';
    delBtn.id = 'deleteBtn';

    let p = document.createElement('p');
    p.textContent = budName;

    let col = document.createElement('div');
    col.className = 'col-12 text-center d-flex flex-row justify-content-between';
    col.append(p, delBtn);

    let row = document.createElement('div');
    row.classList.add('row', 'mt-2');
    row.append(col);
    injectCurrentBudget.append(row);

    delBtn.addEventListener('click', function(){
        RemoveFromLocalStorage(budget.budName);
        injectCurrentBudget.removeChild(row);
    })
}

export { injectBudgetForm, MakeBudgetForm, MakeBudgetButtons };
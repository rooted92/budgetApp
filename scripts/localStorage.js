function SaveBudgetToLocalStorage(budget) {
    let budgets = GetBudgets();
    console.log('Budget array:')
    console.log(budgets);
    if (!budgets.includes(budget))
    {
        budgets.push(budget);
        console.log('pushed item' + JSON.stringify(budget));
        localStorage.setItem('Budgets', JSON.stringify(budgets));
    }
}

//create function get local storage
function GetBudgets() {
    let localStorageData = localStorage.getItem('Budgets');
    console.log(localStorageData);
    if (localStorageData === null) {
        return [];
    }
    
    return JSON.parse(localStorageData); //we need to return our data parsed as jSON
}

//function to delete favorties from list
function RemoveFromLocalStorage(budget) {
    let budgets = GetBudgets();
    //find the index of the name in local storage
    let budgetIndex = budgets.indexOf(budget);//reread docs on indexOf()!
    console.log('budget index: ' + budgetIndex);
    //remove the name from the array using the splice method
    budgets.splice(budgetIndex, 1);

    //save updated array to local storage
    localStorage.setItem('Budgets', JSON.stringify(budgets));
}

export { SaveBudgetToLocalStorage, GetBudgets, RemoveFromLocalStorage };
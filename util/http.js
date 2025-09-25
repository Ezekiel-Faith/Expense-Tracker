import axios from 'axios';

export function storeExpense(expenseData) {
  axios.post(
    'https://expense-tracker-2e64b-default-rtdb.firebaseio.com/expenses.json',
    expenseData
  );
}

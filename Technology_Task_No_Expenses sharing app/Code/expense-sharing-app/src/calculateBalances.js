// src/utils/calculateBalances.js
export const calculateBalances = (users, expenses) => {
    const balances = {};
  
    // Initialize balances for each user to 0
    users.forEach((user) => {
      balances[user.id] = 0;
    });
  
    // Calculate balances based on expenses
    expenses.forEach((expense) => {
      const splitAmount = expense.amount / expense.participants.length;
      expense.participants.forEach((userId) => {
        if (userId === expense.payer) {
          balances[userId] += expense.amount - splitAmount;
        } else {
          balances[userId] -= splitAmount;
        }
      });
    });
  
    return balances;
  };
  
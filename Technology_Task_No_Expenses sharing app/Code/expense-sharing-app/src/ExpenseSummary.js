// src/components/ExpenseSummary.js
import React from 'react';
import { calculateBalances } from './calculateBalances';

const ExpenseSummary = ({ users, expenses }) => {
  const balances = calculateBalances(users, expenses);

  return (
    <div>
      <h2>Expense Summary</h2>
      {users.map((user) => {
        const balance = balances[user.id] || 0;
        return (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{balance > 0 ? `Owed: $${balance.toFixed(2)}` : `Owes: $${Math.abs(balance).toFixed(2)}`}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ExpenseSummary;

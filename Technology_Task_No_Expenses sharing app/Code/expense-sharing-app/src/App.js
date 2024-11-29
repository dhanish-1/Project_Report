// src/components/App.js
import React, { useState } from 'react';
import './App.css';
import AddUser from './AddUser';
import AddExpense from './AddExpense';
import ExpenseSummary from './ExpenseSummary';

const App = () => {
  const [users, setUsers] = useState([]);
  const [expenses, setExpenses] = useState([]);

  // Add new user to the group
  const addUser = (name) => {
    setUsers((prevUsers) => [...prevUsers, { name, id: Date.now() }]);
  };

  // Add expense
  const addExpense = (amount, category, payer, participants) => {
    const newExpense = { amount, category, payer, participants, id: Date.now() };
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  return (
    <div className="App">
      <h1>Expense Sharing App</h1>

      {/* Add User Section */}
      <AddUser addUser={addUser} />

      {/* Add Expense Section */}
      <AddExpense users={users} addExpense={addExpense} />

      {/* Expense Summary Section */}
      <ExpenseSummary users={users} expenses={expenses} />
    </div>
  );
};

export default App;

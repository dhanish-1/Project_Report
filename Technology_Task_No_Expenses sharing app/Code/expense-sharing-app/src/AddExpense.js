// src/components/AddExpense.js
import React, { useState } from 'react';

const AddExpense = ({ users, addExpense }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [payer, setPayer] = useState('');
  const [participants, setParticipants] = useState([]);

  const handleAddExpense = () => {
    if (amount && category && payer && participants.length > 0) {
      addExpense(amount, category, payer, participants);
      setAmount('');
      setCategory('');
      setPayer('');
      setParticipants([]);
    }
  };

  const toggleParticipant = (userId) => {
    setParticipants((prevParticipants) =>
      prevParticipants.includes(userId)
        ? prevParticipants.filter((id) => id !== userId)
        : [...prevParticipants, userId]
    );
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <div>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        {/* Payer Selection */}
        <select value={payer} onChange={(e) => setPayer(e.target.value)}>
          <option value="">Select Payer</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>

        {/* Participants Selection */}
        <h3>Select Participants</h3>
        {users.map((user) => (
          <div key={user.id}>
            <input
              type="checkbox"
              checked={participants.includes(user.id)}
              onChange={() => toggleParticipant(user.id)}
            />
            {user.name}
          </div>
        ))}

        <button onClick={handleAddExpense}>Add Expense</button>
      </div>
    </div>
  );
};

export default AddExpense;

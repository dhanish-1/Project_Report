// src/components/AddUser.js
import React, { useState } from 'react';

const AddUser = ({ addUser }) => {
  const [userName, setUserName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName.trim()) {
      addUser(userName);
      setUserName('');
    }
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter user's name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;

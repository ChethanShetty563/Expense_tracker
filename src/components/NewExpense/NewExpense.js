import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [formState, setFormState] = useState(false);
  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const newFormHandler = () => {
    setFormState((prevstate) => {
      return !prevstate;
    });
  };
  return (
    <div className="new-expense">
      {formState ? (
        <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancel={newFormHandler} />
      ) : (
        <button onClick={newFormHandler}>Add New Expenses</button>
      )}
    </div>
  );
};

export default NewExpense;

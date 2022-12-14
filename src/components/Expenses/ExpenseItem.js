import ExpenseDate from './ExpenseDate';
import './Expenseitem.css';
import Card from './Card';
import { useState } from 'react';

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  console.log('Expense Item evaluated by React');

  const clickHandler = () => {
    setTitle('Updated');
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;

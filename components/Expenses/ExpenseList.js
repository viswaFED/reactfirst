import React from 'react';

import ExpenseItem from './Expenseitems.js';
import './ExpenseList.css';

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }
  if (props.items.length === 1) {
    return ( <div>
        {props.items.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
            
            ))}
            <h2 className='expenses-list__fallback'>Only single Expense here. Please add more...</h2>;
         </div>
    )};


 
  return (
    <ul className='expenses-list'>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      
    </ul>
  );
};

export default ExpensesList;
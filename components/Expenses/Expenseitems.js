import React from "react";
import Card from "../UI/Card";

import ExpenseDate from "./ExpenseDate";

import "./Expenseitems.css";

const ExpenseItem = (props) => {
  //   const [title, setTitle] = useState(props.title);
  //   const [amount , setAmount]= useState(props.amount);

  //   const clickHandler = () => {
  //     setTitle('Updated!');
  //     console.log(title);
  //   };

  //   const onItemClick = () => {
  //     setAmount(100);
  //     console.log(amount);
  // }
  return (
    // <Card className='expense-item'>
    //   <ExpenseDate date={props.date} />
    //   <div className='expense-item__description'>
    //     <h2>{title}</h2>
    //     <div className='expense-item__price'>${amount}</div>
    //   </div>
    //   <button onClick={clickHandler}>Change Title</button>
    //   <button onClick={onItemClick}>change amount</button>
    // </Card>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;

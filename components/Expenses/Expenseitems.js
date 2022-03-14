import "./Expenseitems.css";
import ExpenseDate from "./ExpenseDate.js";
import React from "react";

const  ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      {/*<div>{props.location}</div>*/}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price"> {props.amount}</div>
      </div>
     
      </div>
/**/
  );
}
export default ExpenseItem;

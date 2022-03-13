import "./Expenseitems.css";
import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate.js";
import React from "react";

function ExpenseItem(props) {
  return (

		<div className='expense-item'>

			<ExpenseDate date ={props.date} />
      
			<ExpenseDetails amount={props.amount} />
      

		</div>
    

)
}
export default ExpenseItem;

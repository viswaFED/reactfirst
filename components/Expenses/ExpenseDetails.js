const ExpenseDetails= (props)=> {
  const amount = props.amount;
/*const location = props.locatio}
  const title = props.title}*/

  return (
    <div className="expense-description">
      {/*<div>{title}</div>*/}
      {/*<div>{location}</div>*/}
      <div className="expense-item__price">{amount}</div>
    </div>
  );
}


export default ExpenseDetails;

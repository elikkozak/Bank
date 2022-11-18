import React from "react";

export default function Transaction(props) {
  let transaction = props.transaction;

  const deleteTransaction = () => {
    props.deleteTransaction(transaction.id)
  }

  return (
    <div className="transaction">
      <span>{transaction.amount}</span>
      <span className="vendor">{transaction.vendor}</span>
      <span className="category">{transaction.category}</span>
      <button onClick={deleteTransaction}>DELETE ME</button>
    </div>
  );
}

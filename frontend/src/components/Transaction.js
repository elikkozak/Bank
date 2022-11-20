import React from "react";
import "../styles/transaction.css";

export default function Transaction(props) {
  let transaction = props.transaction;

  const deleteTransaction = () => {
    props.deleteTransaction(transaction.id);
  };

  return (
    <div className="transaction">
      <h3>
        <strong>{transaction.vendor}</strong>
        <small>{transaction.category}</small>
      </h3>
      <span>{transaction.amount} USD</span>
      {/* <i className="fas fa-trash-alt" ></i> */}
      <i class="fa fa-trash" onClick={deleteTransaction}></i>
    </div>
  );
}

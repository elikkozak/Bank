import React from "react";

export default function Transaction(props) {
  let transaction = props.transaction;

  return (
    <div className="transaction">
      <span>{transaction.amount}</span>
      <span className="vendor">{transaction.vendor}</span>
      <span className="category">{transaction.category}</span>
    </div>
  );
}

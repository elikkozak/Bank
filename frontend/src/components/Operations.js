import React, { useState } from "react";
import axios from "axios";
import "../styles/operations.css";

export default function Operations() {
  const [operationInputs, setOperationInputs] = useState({
    amount: "",
    vendor: "",
    category: "",
  });

  const inputHandler = function (e) {
    let target = e.target;
    setOperationInputs({ ...operationInputs, [target.name]: target.value });
  };

  const addTransaction = function (transaction) {
    axios({
      method: "post",
      url: "http://localhost:8000/transactions",
      data: transaction,
    });
  };

  const handleOperation = function (event) {
    let transaction = { ...operationInputs };
    transaction["amount"] =
      event.target.name === "withdraw"
        ? -parseInt(transaction.amount)
        : parseInt(transaction.amount);
    addTransaction(transaction);
  };

  return (
    <div className="operations-container">
      <h2>Insert transactions</h2>
      <div className="inputs-container">
        <input
          className="input"
          value={operationInputs.amount}
          name="amount"
          placeholder="Transaction amount"
          onChange={inputHandler}
        ></input>
        <input
          className="input"
          value={operationInputs.vendor}
          name="vendor"
          placeholder="Transaction vendor"
          onChange={inputHandler}
        ></input>
        <input
          className="input"
          value={operationInputs.category}
          name="category"
          placeholder="Transaction category"
          onChange={inputHandler}
        ></input>
      </div>

      <div className="buttons-container">
        <button
          className="deposit-button"
          name="deposit"
          onClick={handleOperation}
        >
          Deposit
        </button>
        <button
          className="withdraw-button"
          name="withdraw"
          onClick={handleOperation}
        >
          Withdraw
        </button>
      </div>
    </div>
  );
}

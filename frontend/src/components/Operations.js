import React, { useState } from "react";
import axios from "axios";

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

  return (
    <div className="operations-container">
      <div className="inputs">
        <input
          value={operationInputs.amount}
          name="amount"
          placeholder="Transaction amount"
          onChange={inputHandler}
        ></input>
        <input
          value={operationInputs.vendor}
          name="vendor"
          placeholder="Transaction vendor"
          onChange={inputHandler}
        ></input>
        <input
          value={operationInputs.category}
          name="category"
          placeholder="Transaction category"
          onChange={inputHandler}
        ></input>
      </div>

      <div className="buttons-container">
        <button name="deposit" onClick={addTransaction}>
          Deposit
        </button>
        <button name="withdraw" onClick={addTransaction}>
          Withdraw
        </button>
      </div>
    </div>
  );
}

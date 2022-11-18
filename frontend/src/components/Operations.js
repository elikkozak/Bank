import React from "react";
import axios from "axios";

export default function Operations() {
  const addTransaction = function (transaction) {
    axios({
      method: "post",
      url: "http://localhost:8000/transactions",
      data: transaction,
    });
  };
  const testAddTransaction = function () {
    let fakeTransaction = {
      amount: 1500,
      vendor: "Nike",
      category: "Shopping",
    };
    addTransaction(fakeTransaction);
  };

  return (
    <div className="operations-container">
      <button onClick={testAddTransaction}>Add Fake Transaction</button>
    </div>
  );
}

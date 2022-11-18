import React, { useEffect, useState } from "react";
import Transaction from "./Transaction";
import axios from "axios";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  const getAllTransactions = async function () {
    let response = await axios.get("http://localhost:8000/transactions");
    let allTransactions = response["data"];
    setTransactions(allTransactions);
  };

  const deleteTransaction = async function (transactionId) {
    await axios.delete(`http://localhost:8000/transactions/${transactionId}`);
    getAllTransactions();
  };

  useEffect(() => {
    getAllTransactions();
  }, []);

  return (
    <div className="transactions-container">
      {transactions.map((transaction) => (
        <Transaction
          key={transaction.id}
          transaction={transaction}
          deleteTransaction={deleteTransaction}
        />
      ))}
    </div>
  );
}

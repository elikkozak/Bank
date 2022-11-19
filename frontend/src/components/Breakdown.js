import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Breakdown() {
  const [breakdownOfTransactions, setBreakdownOfTransactions] = useState([]);

  const getSumOfTransactionByCategory = async function () {
    let response = await axios.get(
      "http://localhost:8000/transactions/breakdown"
    );
    let allTransactions = response["data"];
    setBreakdownOfTransactions(allTransactions);
  };

  useEffect(() => {
    getSumOfTransactionByCategory();
  }, []);
  return (
    <div className="breakdown">
      <h1>Breakdown</h1>
      <ul>
        {breakdownOfTransactions.map((category, index) => (
          <li key={index}>
            <span>{category.category}: </span>
            <span>{category.sum}$</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/balance.css";

export default function Balance(props) {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    async function getBalance() {
      let response = await axios.get("http://localhost:8000/balance");
      let currBalance = response["data"];
      setBalance(currBalance["balance"] || 0);
    }

    getBalance();
  }, []);

  return (
    <div className={`balance ${balance < 0 ? "neg" : "pos"}`}>
      Balance:<br></br>
      {balance} USD
    </div>
  );
}

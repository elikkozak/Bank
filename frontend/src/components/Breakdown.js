import React, { useEffect, useState } from "react";
import axios from "axios";
import { CanvasJSChart } from "canvasjs-react-charts";
import "../styles/breakdown.css";

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

  const getChartOptions = function(operationType){
    return {
      animationEnabled: true,
      title: {
        text: "Breakdown",
      },
      data: [
        {
          type: "pie",
          startAngle: 75,
          toolTipContent: "<b>{label}</b>: {y}$",
          showInLegend: "true",
          legendText: "{label}",
          indexLabelFontSize: 16,
          indexLabel: "{label}: {y}$",
          dataPoints: breakdownOfTransactions.map((category) => ({
            y: category.sum,
            label: category.category,
          })),
        },
      ],
    };
  }

  return (
    <div className="breakdown-container">
      {/* <h1>Breakdown</h1> */}
      <div className="breakdown">
        <CanvasJSChart options={getChartOptions()} />
      </div>
      
   
    </div>
  );
}

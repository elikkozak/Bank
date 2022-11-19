import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Transactions from "./components/Transactions";
import Operations from "./components/Operations";
import Breakdown from "./components/Breakdown";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Route exact path="/" render={() => <Transactions />}></Route>
        <Route exact path="/operations" render={() => <Operations />}></Route>
        <Route exact path="/breakdown" render={() => <Breakdown />}></Route>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { Link } from "react-router-dom";
import '../styles/navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">Transactions</Link>
        </li>
        <li>
          <Link to="/operations">Operations</Link>
        </li>
        <li>
          <Link to="/breakdown">Breakdown</Link>
        </li>
      </ul>
    </div>
  );
}

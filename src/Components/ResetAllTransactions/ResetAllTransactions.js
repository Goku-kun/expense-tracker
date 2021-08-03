import React from "react";
import { reset_it } from "../../store/store";
import "./ResetAllTransactions.css";

export default function ResetAllTransactions() {
  return (
    <button onClick={(e) => reset_it()} className="reset btn">
      Clear all Transactions
    </button>
  );
}

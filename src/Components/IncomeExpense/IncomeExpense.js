import React from "react";
import "./IncomeExpense.css";
import { useSelector } from "react-redux";

export default function IncomeExpense() {
  const income = useSelector((state) => state.income);
  const expense = useSelector((state) => state.expense);

  return (
    <>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-${-expense}</p>
        </div>
      </div>
    </>
  );
}

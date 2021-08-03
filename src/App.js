import React from "react";
import "./App.css";
import AddTransaction from "./Components/AddTransaction/AddTransaction";
import Balance from "./Components/Balance/Balance";
import Header from "./Components/Header/Header";
import IncomeExpense from "./Components/IncomeExpense/IncomeExpense";
import TransactionList from "./Components/TransactionList/TransactionList";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header heading="Expense Tracker" />
        <Balance />
        <IncomeExpense />
        <TransactionList />
      </div>
      <AddTransaction />
      <h2 className="acknowledgement">
        Made with <span className="red">♥️</span> by{" "}
        <a href="https://github.com/Goku-kun">Goku kun</a>
      </h2>
    </div>
  );
}

export default App;

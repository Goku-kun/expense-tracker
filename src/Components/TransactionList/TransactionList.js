import React from "react";
import { useSelector } from "react-redux";
import Transaction from "../Transaction/Transaction";
import "./TransactionList.css";

export default function TransactionList() {
  const records = useSelector((state) => state.records);

  return (
    <div className="transaction-list">
      <h3>History</h3>
      <ul className="list">
        {records.map((record) => (
          <Transaction record={record} key={record.id} />
        ))}
      </ul>
    </div>
  );
}

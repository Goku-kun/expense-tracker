import React from "react";
import { delete_it } from "../../store/store";
import "./Transaction.css";

export default function Transaction({ record }) {
  return (
    <li className={record.amount > 0 ? "plus" : "minus"}>
      {record.text} <span>{record.amount}</span>
      <button onClick={() => delete_it(record.id)} className="delete-btn">
        x
      </button>
    </li>
  );
}

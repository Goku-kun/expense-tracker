import React, { useState } from "react";
import "./AddTransaction.css";
import { add_it } from "../../store/store";

export default function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  function submit(event) {
    event.preventDefault();
    add_it({ text, amount: Number(amount) });
    setText("");
    setAmount(0);
  }
  return (
    <div className="add-transaction">
      <h3>Add new transaction</h3>
      <form onSubmit={submit}>
        <div className="form-control">
          <label htmlFor="text">
            <strong>Expense Name</strong>
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount" className="tooltip">
            <strong>Amount</strong>
            <br />
            <span class="tooltiptext">
              postive value represents income
              <br /> negative represents expense
            </span>
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn" type="submit">
          Add transaction
        </button>
      </form>
    </div>
  );
}

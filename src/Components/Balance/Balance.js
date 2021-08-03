import React from "react";
import { useSelector } from "react-redux";
import "./Balance.css";

export default function Balance() {
  const balance = useSelector((state) => state.total);
  return (
    <>
      <h4>Your balance</h4>
      <h1 id="balance">${balance.toFixed(2)}</h1>
    </>
  );
}

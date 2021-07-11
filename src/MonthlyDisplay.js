import React, { useState } from "react";
import BalanceSheet from "./BalanceSheet";
import "firebase/auth";
import firebase from "firebase/app";
import { Button } from "react-bootstrap";

function MonthlyDisplay(props) {
  const date = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());

  function changeMonth(e) {
    const { value } = e.target;
    setYear(parseInt(value.slice(0, 4)));
    setMonth(parseInt(value.slice(-2)) - 1);
  }

  return (
    <div>
      <h3>{months[month]}</h3>
      <h3>{year}</h3>
      <Button>Setting</Button>
      <input
        type="month"
        name="month-selection"
        value={`${year}-${("0" + (month + 1)).slice(-2)}`}
        onChange={changeMonth}
      ></input>

      <BalanceSheet name="income" />
      <BalanceSheet name="expense" />
    </div>
  );
}

export default MonthlyDisplay;

import React from "react";

export default function Answer({currentV}) {
  return <div className="answer-box">
    <input className="answer-field" type="text" />
    <button id="my-button">{ currentV ? "OK" : "Start" }</button>
  </div>
}
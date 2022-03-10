import React from "react";

export default function Answer({currentV, message, handleClick}) {
  return <div className="answer-box">
    <input className="answer-field" type="text" />
    {message === "Start" ?
      <button onClick={handleClick} id="my-button">{message}</button> :
      <button id="my-button">{message}</button>
     }
  </div>
}
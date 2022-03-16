import React from "react";
import Image from "../img/DE.svg";

export default function Target(props) {
  return <div className="target-box">
    <img className="flag-img" src={Image} />
    <div className="target-label">{props.display}</div>
    <div className="result-label">{props.eval}</div>
  </div>
}
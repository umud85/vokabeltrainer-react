import React from "react";
import Image from "../img/DE.svg";

export default function Target() {
  return <div className="target-box">
    <img className="flag-img" src={Image} />
    <div className="target-label">Test</div>
    <div>x</div>
  </div>
}
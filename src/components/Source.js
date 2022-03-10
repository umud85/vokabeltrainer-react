import React from "react";
import Image from "../img/GB.svg"

export default function Source() {
  return <div className="source-box">
    <img className="flag-img" src={Image} />
    <div className="source-label"></div>
    <div></div>
  </div>
}
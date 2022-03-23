import React from "react";
import Image from "../img/GB.svg"

export default function Source({voc, status}) {
  return <div className="source-box">
    <img className="flag-img" src={Image} />
    <div className="source-label">{status ? "" : voc}</div>
    <div></div>
  </div>
}
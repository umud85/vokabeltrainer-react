import React from "react";
import Image from "../img/DE.svg";

export default function Target(props) {
  return <div className="target-box">
    <img className="flag-img" src={Image} />
    <div className="target-label"></div>
    {props.gameStatus ? props.feedback ? <div>korrekt</div> : <div>X</div> : <div></div>}
  </div>
}
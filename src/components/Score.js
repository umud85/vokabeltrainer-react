import React from "react";

export default function Score({ stats }) {
  return (
    <div className="score-box">
      <div className="score-label">Start<br /><span id="basis-value">{ stats.basisScore }</span></div>
      <div className="score-label">Stufe 1<br/><span className="score-value">0</span></div>
      <div className="score-label">Stufe 2<br/><div className="score-value">0</div></div>
      <div className="score-label">Gelernt<br /><div id="learned-value">{ stats.learnedScore}</div></div>
    </div>
  )
}
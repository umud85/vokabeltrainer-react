import React from "react";

export default function Score({stats}) {
  return (
    <div className="score-box">
      <div className="score-label">Start<br /><span id="basis-value">{stats.base}</span></div>
      <div className="score-label">Stufe 1<br /><span className="score-value">{stats.step1}</span></div>
      <div className="score-label">Stufe 2<br/><div className="score-value">{stats.step2}</div></div>
      <div className="score-label">Gelernt<br /><div id="learned-value">{stats.learned}</div></div>
    </div>
  )
}
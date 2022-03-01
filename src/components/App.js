import React, { Fragment } from "react";
import Source from "./Source";
import Target from "./Target";
import Answer from "./Answer";
import "./App.css";

export default function App() {
  return <Fragment>
    <h1>Umuts Vokabeltrainer</h1>
    <div className="container">
      <Source />
      <Target />
      <Answer />
    </div>
  </Fragment>
}
import React, { Fragment, useState, useEffect } from "react";
import Score from "./Score";
import Source from "./Source";
import Target from "./Target";
import Answer from "./Answer";
import "./App.css";
import Vokabeln from "../vokabeln.csv"

export default function App() {

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(Vokabeln);
      const rawData = await response.text();
      const formattedData = rawData.split("\n").splice(1);
      const learningVocs = choseLearningVocs(formattedData);
     /*  const english = sourceVocs(learningVocs);
      const german = targetVocs(learningVocs);
      console.log(english)
      console.log(german) */
      setData(learningVocs)
    }
    getData();
  }, []);

  const [data, setData] = useState([]);
  const [currentVoc, setCurrentVoc] = useState("");

  const choseLearningVocs = (vocList) => {
    const learningVocs = [];
    while (learningVocs.length < 5) {
      let randomNumber = Math.floor(Math.random() * vocList.length);
      if (!learningVocs.includes(vocList[randomNumber])) {
        learningVocs.push(vocList[randomNumber]);
      }
    }
    return learningVocs;
  } 

  const sourceVocs = (chosenVocs) => {
    const sourceV = [chosenVocs.map(voc => {
      return voc.split(",")[0];
    })]
    return sourceV;
  };

  const targetVocs = (chosenVocs) => {
    const targetV = [chosenVocs.map(voc => {
      return voc.split(",")[1];
    })]
    return targetV;
  };

  return <Fragment>
    <div className="container">
      <div className="box-title">
      <h2>Vokabeln Englisch / Deutsch</h2>
      </div>
      <Score />
      <Source />
      <Target />
      <Answer currentV={currentVoc} />
    </div>
  </Fragment>
}
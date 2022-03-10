import React, { Fragment, useState, useEffect } from "react";
import Score from "./Score";
import Source from "./Source";
import Target from "./Target";
import Answer from "./Answer";
import "./App.css";
import Vokabeln from "../vokabeln.csv"

export default function App() {

  const [data, setData] = useState([]);
  const [currentVoc, setCurrentVoc] = useState("");
  const [gameStarted, setGameStarted] = useState(false);
  const [english, setEnglish] = useState([]);
  const [german, setGerman] = useState([]);

  useEffect(() => {
    let loadingData = true;
    if (loadingData) {
      const getData = async () => {
        const response = await fetch(Vokabeln);
        const rawData = await response.text();
        const formattedData = rawData.split("\n").splice(1);
        const learningVocs = choseLearningVocs(formattedData);
        setData(learningVocs)
      }
      getData();
    }
    return () => {
      loadingData = false;
    }
  }, []);

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

  const startGame = () => {
    setGameStarted(true);
    setEnglish(sourceVocs(data));
    console.log(english);

  }

  return <Fragment>
    <div className="container">
      <div className="box-title">
      <h2>Vokabeln Englisch / Deutsch</h2>
      </div>
      <Score />
      <Source />
      <Target />
      {
        gameStarted ? <Answer currentV={currentVoc} message={"OK"} /> :
        <Answer handleClick={startGame} currentV={currentVoc} message={"Start"} /> 
      }
      {console.log(english)}
    </div>
  </Fragment>
}
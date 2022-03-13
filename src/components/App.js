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
    const getData = async () => {
      const response = await fetch(Vokabeln);
      const rawData = await response.text();
      const formattedData = rawData.split("\n").splice(1);
      const learningVocs = choseLearningVocs(formattedData);
      setData(learningVocs)
    }
    getData();
  }, []);

  const choseLearningVocs = (vocList) => {
    const learningVocs = new Map();
    while (learningVocs.size < 5) {
      let randomNumber = Math.floor(Math.random() * vocList.length);
      if (!learningVocs.has(vocList[randomNumber].split(",")[0])) {
        let trimmedPair = vocList[randomNumber].trim();
        learningVocs.set(trimmedPair.split(",")[0], trimmedPair.split(",")[1]);
      }
    }
    return learningVocs;
  } 

  const nextVoc = () => {}

  const sourceVocs = (chosenVocs) => {
    console.log(chosenVocs.keys())
  };

  const targetVocs = (chosenVocs) => {
   console.log(chosenVocs)
  };

  const startGame = () => {
    setGameStarted(true);
    setEnglish(sourceVocs(data));
  }

  return <Fragment>
    {console.log(data)}
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
    </div>
  </Fragment>
}
import React, { Fragment, useState, useEffect, useRef } from "react";
import Score from "./Score";
import Source from "./Source";
import Target from "./Target";
import Answer from "./Answer";
import "./App.css";
import Vokabeln from "../vokabeln.csv"

export default function App() {

  const [basis, setBasis] = useState([]);
  const [currentVoc, setCurrentVoc] = useState("");
  const [gameStarted, setGameStarted] = useState(false);
  const [learned, setLearned] = useState([]);
  const focusRef = React.createRef();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(Vokabeln);
      const rawData = await response.text();
      const formattedData = rawData.split("\n").splice(1);
      const learningVocs = choseLearningVocs(formattedData);
      setBasis(learningVocs)
    }
    getData();
  }, []);

  const choseRandom = (arr) =>  Math.floor(Math.random() * arr.length);

  const choseLearningVocs = (vocList) => {
    const learningVocs = [];
    while (learningVocs.length < 5) {
      let randomNumber = choseRandom(vocList)
      if (!learningVocs.includes(vocList[randomNumber].split(",")[0])) {
        let trimmedPair = vocList[randomNumber].trim();
        learningVocs.push(trimmedPair.split(","));
      }
    }
    return learningVocs;
  } 

  const choseNextVoc = (vocs) => {
    let randomNumber = choseRandom(vocs);
    setCurrentVoc(basis[randomNumber]);
  }

  const startGame = (e) => {
    e.preventDefault();
    choseNextVoc(basis);
    focusRef.current.focus();
    setGameStarted(true);
  }

  const submitAnswer = (e) => {
    e.preventDefault();
    focusRef.current.focus();
  }

  return <Fragment>
    <div className="container">
      <div className="box-title">
      <h2>Vokabeln Englisch / Deutsch</h2>
      </div>
      <Score />
      <Source voc={currentVoc[0]} />
      <Target />
      {
        gameStarted ? <Answer ref={focusRef} handleClick={submitAnswer} currentV={currentVoc} message={"OK"} /> :
        <Answer ref={focusRef} handleClick={startGame} currentV={currentVoc} message={"Start"} /> 
      }
    </div>
  </Fragment>
}
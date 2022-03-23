import React, { Fragment, useState, useEffect } from "react";
import Score from "./Score";
import Source from "./Source";
import Target from "./Target";
import Answer from "./Answer";
import "./App.css";
import Vokabeln from "../vokabeln.csv"

export default function App() {

  const [data, setData] = useState([]);
  const[score, setScore] = useState({
    base: 0,
    step1: 0,
    step2: 0,
    learned: 0,
  })
  const [currentVoc, setCurrentVoc] = useState("");
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [targetLabel, setTargetLabel] = useState("");
  const [result, setResult] = useState("");


  useEffect(() => {
    const getData = async () => {
      const response = await fetch(Vokabeln);
      const rawData = await response.text();
      const formattedData = rawData.split("\n").splice(1);
      const learningVocs = choseLearningVocs(formattedData).map(item => [...item, 0]);
      setData(learningVocs)
    }
    getData();
  }, []);

  useEffect(() => {
    if (gameStarted === true) {
      const score = Array(4).fill(0);
      data.forEach(voc => {
      switch (voc[2]) {
        case 0:
          score[0] += 1;
          break;
        case 1:
          score[1] += 1;
          break;
        case 2:
          score[2] += 1;
          break;
        case 3:
          score[3] += 1;
          break;
      }
    })
    setScore({
      base: score[0],
      step1: score[1],
      step2: score[2],
      learned: score[3],
      }) 
    }
  }, [data]);

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
    while (data[randomNumber][2] === 3) {
      randomNumber = choseRandom(vocs);
    }
    setCurrentVoc(data[randomNumber]);
  }

  const startGame = (e) => {
    e.preventDefault();
    choseNextVoc(data);
    setGameStarted(true);
    setScore({
      base: data.length,
      step1: 0,
      step2: 0,
      learned: 0,
    })
  }

  const submitAnswer = (e) => {
    e.preventDefault();
    if (score.learned === data.length) {
      setGameOver(true);
      setResult("");
      setTargetLabel("");
      setTargetLabel("Completed");
      return null;
    }
    if (!showSolution) {
      let count = currentVoc[2]
      if (inputValue !== "" && inputValue !== ";" && currentVoc[1].includes(inputValue)) {
        setTargetLabel(currentVoc[1]);
        setResult("korrekt");
        if (count < 3) {
          count++;
        }

      } else {
          setTargetLabel(currentVoc[1]);
          setResult("falsch");
          if (count > 0) {
            count--;
            }
      }
      setData(prevState => {
        const newState = [...prevState];
        newState[prevState.indexOf(currentVoc)][2] = count;
        console.log(newState);
        return newState;
      })
    } else {
        setResult("");
        setTargetLabel("");
        if (!gameOver) {
          choseNextVoc(data);
        } 
      }
    setInputValue("");
    e.target.value = "";
    setShowSolution(!showSolution);
  }

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  return <Fragment>
    <div className="container">
      <div className="box-title">
      <h2>Vokabeln Englisch / Deutsch</h2>
      </div>
      <Score stats={score} />
      <Source status={gameOver} voc={currentVoc[0]} />
      <Target gameStatus={gameStarted} display={targetLabel} eval={result} />
      {
        gameStarted ? <Answer value={inputValue} handleChange={handleChange} handleClick={submitAnswer} currentV={currentVoc} message={"OK"} /> :
        <Answer value={inputValue} handleChange={handleChange} handleClick={startGame} status={gameOver} message={"Start"} /> 
      }
    </div>
  </Fragment>
}
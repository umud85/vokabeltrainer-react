import React, {useEffect, useRef} from "react";

const Answer = ({ amount, status, message, handleAmountChange, handleClick, handleChange, value }) => {

  const inputElement = useRef(null)

  useEffect(() => {
    if (inputElement.current && message === "OK") {
      inputElement.current.focus()
    }
  })

  const createLabel = () => {
    const numberVocs = new Array(16).fill(0);
    return (
      <label htmlFor="numberVocs">Vokabelanzahl:
        <select value={amount} onChange={handleAmountChange} name="numberVocs" id="numberVocs">
          {numberVocs.map((item, index) => <option key={index} value={index + 5}>{index + 5}</option>)}
        </select>
      </label>
    );
  }

  const GameOverStatus = () => {
    return <form onSubmit={() => this.disabled = true}>
    <div className="answer-box">
      <input
        id="answer"
        className="answer-field"
        type="text"
        name="answer"
        value=""
        />
        <div className="button-dropdown-wrapper">
         {createLabel()}
          <input type="submit" id="my-button" value="Start again" />
        </div>
    </div>
  </form>
  }

  const LearningStatus = () => {
    return <form onSubmit={handleClick}>
    <div className="answer-box">
      <input
        id="answer"
        className="answer-field"
        type="text"
        name="answer"
        value={value}
        onChange={handleChange}
        ref={inputElement}
        />
        
        {message === "Start" ?
          <div className="button-dropdown-wrapper">
            {createLabel()}
            <div><input type="submit" id="my-button" value={message} /></div>
            </div>
          :
          
          <div className="button-dropdown-wrapper">
          {createLabel()}
            <div><input type="submit" id="my-button" value={message} /></div>
            </div>
          }
        
        
    </div>
  </form>
  }
  
  if (status) {
    return <GameOverStatus />
  }
  return <LearningStatus />
}

export default Answer
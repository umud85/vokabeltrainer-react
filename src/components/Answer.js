import React, {useEffect, useRef} from "react";

const Answer = ({ status, message, handleClick, handleChange, value }) => {

  const inputElement = useRef(null)

  useEffect(() => {
    if (inputElement.current && message === "OK") {
      inputElement.current.focus()
    }
  })

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
      <div><input type="submit" id="my-button" value="Start again" /></div>
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
        <div><input type="submit" id="my-button" value={message} /></div> :
        <div><input type="submit" id="my-button" value={message} /></div>
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
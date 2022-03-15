import React, {useEffect, useRef} from "react";

const Answer = ({ currentV, message, handleClick, handleChange, value }) => {

  const inputElement = useRef(null)

  useEffect(() => {
    if (inputElement.current && message === "OK") {
      inputElement.current.focus()
    }
  })

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

export default Answer
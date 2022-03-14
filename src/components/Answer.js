import React from "react";

const answer = React.forwardRef(({ currentV, message, handleClick }, ref) => {

  return <form>
    <div className="answer-box">
      <input ref={ref} id="answer" className="answer-field" type="text" name="answer" />
      {message === "Start" ?
        <div><input type="submit" id="my-button" onClick={handleClick} value={message} /></div> :
        <div><input type="submit" id="my-button" onClick={handleClick} value={message} /></div>
      }
    </div>
  </form>
})

export default answer;
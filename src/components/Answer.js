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
        <div className="button-dropdown-wrapper">
          <label htmlFor="numberVocs">Vokabelanzahl:
            <select name="numberVocs" id="numberVocs">
              <option value="five">5</option>
              <option value="six">6</option>
              <option value="seven" selected>7</option>
              <option value="eight">8</option>
              <option value="nine">9</option>
              <option value="ten">10</option>
              <option value="eleven">11</option>
              <option value="twelve">12</option>
              <option value="thirteen">13</option>
              <option value="fourteen">14</option>
              <option value="fifteen">15</option>
              <option value="sixteen">16</option>
              <option value="seventeen">17</option>
              <option value="eighteen">18</option>
              <option value="nineteen">19</option>
              <option value="twenty">20</option>
            </select>
          </label>
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
        <div className="button-dropdown-wrapper">
          <label htmlFor="numberVocs">Vokabelanzahl:
            <select name="numberVocs" id="numberVocs">
              <option value="five">5</option>
              <option value="six">6</option>
              <option value="seven" selected>7</option>
              <option value="eight">8</option>
              <option value="nine">9</option>
              <option value="ten">10</option>
              <option value="eleven">11</option>
              <option value="twelve">12</option>
              <option value="thirteen">13</option>
              <option value="fourteen">14</option>
              <option value="fifteen">15</option>
              <option value="sixteen">16</option>
              <option value="seventeen">17</option>
              <option value="eighteen">18</option>
              <option value="nineteen">19</option>
              <option value="twenty">20</option>
            </select>
          </label>
          {message === "Start" ?
            <div><input type="submit" id="my-button" value={message} /></div> :
            <div><input type="submit" id="my-button" value={message} /></div>
          }
        </div>
        
    </div>
  </form>
  }
  
  if (status) {
    return <GameOverStatus />
  }
  return <LearningStatus />
}

export default Answer
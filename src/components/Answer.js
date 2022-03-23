import React, {useEffect, useRef} from "react";

const Answer = ({ amount, status, message, handleAmountChange, handleClick, handleChange, value }) => {

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
            <select value={amount} onChange={handleAmountChange} name="numberVocs" id="numberVocs">
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
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
        
        {message === "Start" ?
          <div className="button-dropdown-wrapper">
          <label htmlFor="numberVocs">Vokabelanzahl:
          <select value={amount} onChange={handleAmountChange} name="numberVocs" id="numberVocs">
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
            </select>
          </label>
            <div><input type="submit" id="my-button" value={message} /></div>
            </div>
          :
          
          <div className="button-dropdown-wrapper">
          <label htmlFor="numberVocs">Vokabelanzahl:
          <select disabled name="numberVocs" id="numberVocs">
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
            </select>
          </label>
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
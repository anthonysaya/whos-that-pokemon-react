import { useState } from "react";
import "./GUI.css";
import { nameArray } from "./nameArray.js";
function GUI(props) {
  const [userInput, setUserInput] = useState("");
  function handleUserInput(e) {
    setUserInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!props.revealed) {
      setUserInput("");
      props.onGuess(userInput);
    } else {
      return;
    }
  }

  function handleQuitNext() {
    props.onQuitNext();
  }

  function handleHintButton() {
    props.onHintButton();
  }

  return (
    <>
      <section className="UI">
        <section className="UI-name" id="name">
          {props.revealed ? (
            <a href={props.bulbaLink} target="_blank">
              {props.displayName}
            </a>
          ) : (
            props.displayName
          )}
        </section>
        <section className="UI-inputs">
          <div className="UI-sideCol">
            <div className="UI-stat" id="correct">
              Correct Guesses: {props.numCorrect}
            </div>
            <div className="UI-stat" id="wrong">
              Wrong Guesses: {props.numWrong}
            </div>
          </div>
          <form className="UI-guessBox" id="form">
            <input
              className="UI-inputBox"
              type="text"
              list="pokeList"
              id="inputBox"
              name="inputBox"
              onChange={handleUserInput}
              value={userInput}
            />
            <datalist id="pokeList">
              {nameArray.map((name, i) => (
                <option key={"#" + i}>{name}</option>
              ))}
            </datalist>
            <button className="UI-submit" id="submit" onClick={handleSubmit}>
              Submit
            </button>
          </form>
          <div className="UI-sideCol">
            <button className="UI-button" id="hint" onClick={handleHintButton}>
              Hint
            </button>
            <button
              className="UI-button"
              id="quitNext"
              onClick={handleQuitNext}
            >
              {props.quitNext}
            </button>
          </div>
        </section>
      </section>
    </>
  );
}
export default GUI;

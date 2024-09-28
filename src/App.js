import { useState, useEffect, useCallback } from "react";
import logo from "./headerlogo.png";
import Display from "./Display.js";
import GUI from "./GUI.js";
import { Pokemon } from "./Pokemon.js";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState(new Pokemon(randomNum()));
  const [numCorrect, setNumCorrect] = useState(0);
  const [numWrong, setNumWrong] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [wrongGuess, setWrongGuess] = useState(false);

  const [hintCount, setHintCount] = useState(0);
  const [hintVisible, setHintVisible] = useState(false);
  const [hint1, setHint1] = useState("");
  const [hint2, setHint2] = useState("");
  const [hint3, setHint3] = useState("");
  const [hint4, setHint4] = useState("");
  const [hint5, setHint5] = useState("");
  const [hint6, setHint6] = useState("");

  const hintFunc = async () => {
    setHint1(await pokemon.getType1());
    setHint2(await pokemon.getType2());
    setHint3(await pokemon.getHeight());
    setHint4(await pokemon.getWeight());
    setHint5(await pokemon.getGeneration());
    setHint6(await pokemon.getSpecies());
  };

  useEffect(() => {
    hintFunc();
  }, [pokemon]);

  function randomNum() {
    return Math.floor(Math.random() * 1025) + 1;
  }

  function handleGuess(guess) {
    if (guess == "") {
      return;
    } else if (guess == pokemon.name) {
      setWrongGuess(false);
      setRevealed(true);
      setNumCorrect(numCorrect + 1);
      setHintVisible(true);
      setHintCount(6);
    } else if (guess != pokemon.name) {
      setWrongGuess(true);
      setHintVisible(true);
      setHintCount(Math.min(hintCount + 1, 6));
      setNumWrong(numWrong + 1);
    }
  }

  function handleHintButton() {
    setHintVisible(true);
    if (hintCount < 6) {
      setHintCount(hintCount + 1);
    } else {
      return;
    }
  }

  function handleQuitNext() {
    if (revealed) {
      setHintVisible(false);
      setHintCount(0);
      setWrongGuess(false);
      setRevealed(false);
      setPokemon(new Pokemon(randomNum()));
    } else if (!revealed) {
      setHintVisible(true);
      setHintCount(6);
      setWrongGuess(false);
      setRevealed(true);
      setNumWrong(numWrong + 1);
    }
  }

  return (
    <>
      <header className="Header">
        <img className="Header-image" src={logo} alt="Who's That Pokémon?" />
      </header>
      <Display
        imgSrc={pokemon.getImageUrl()}
        handleClick={() => pokemon.playAudio()}
        revealed={revealed}
        hintCount={hintCount}
        hint1={hint1}
        hint2={hint2}
        hint3={hint3}
        hint4={hint4}
        hint5={hint5}
        hint6={hint6}
        hintVisible={hintVisible}
      />
      <GUI
        displayName={
          wrongGuess ? "Try again." : revealed ? pokemon.name : "???"
        }
        quitNext={revealed ? "Next Pokémon" : "Give Up"}
        numCorrect={numCorrect}
        numWrong={numWrong}
        onGuess={handleGuess}
        revealed={revealed}
        bulbaLink={pokemon.getBulbapediaLink()}
        onQuitNext={handleQuitNext}
        onHintButton={handleHintButton}
      />
      <footer className="Footer">
        This is a free interactive web project created for educational purposes.
        The Pokémon logo and all related names and characters are TM and
        copyright The Pokémon Company and its respective owners (Nintendo, Game
        Freak, CREATURES Inc.) © 1996-2024. All rights reserved. Poké Ball
        silhouette created by Iconic of The Noun Project (CC-BY-3.0). Pokémon
        images and additional data queried from PokéAPI.
      </footer>
    </>
  );
}

export default App;

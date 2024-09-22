import logo from "./headerlogo.png";
import Display from "./Display.js";
import GUI from "./GUI.js";
import "./App.css";

function App() {
  return (
    <>
      <header className="Header">
        <img className="Header-image" src={logo} alt="Who's That Pokémon?" />
      </header>
      <Display />
      <GUI />
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

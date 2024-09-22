import "./Display.css";
function Display() {
  return (
    <>
      <main className="Main">
        <figure className="Main-imageWrapper">
          <img
            className="Main-image"
            draggable="false"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1025.png"
          />
        </figure>
        <div className="Main-hintBox" id="hint1"></div>
        <div className="Main-hintBox" id="hint2"></div>
        <div className="Main-hintBox" id="hint3"></div>
        <div className="Main-hintBox" id="hint4"></div>
        <div className="Main-hintBox" id="hint5"></div>
        <div className="Main-hintBox" id="hint6"></div>
      </main>
    </>
  );
}

export default Display;

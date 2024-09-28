import "./Display.css";
function Display(props) {
  return (
    <>
      <main className="Main">
        <figure className="Main-imageWrapper">
          <img
            className="Main-image"
            draggable="false"
            src={props.imgSrc}
            onClick={props.handleClick}
            style={{ filter: props.revealed ? "brightness(100%)" : undefined }}
          />
        </figure>
        <div className="Main-hintBox" id="hint1">
          {props.hintCount >= 1 && props.hintVisible ? props.hint1 : ""}
        </div>
        <div className="Main-hintBox" id="hint2">
          {props.hintCount >= 2 && props.hintVisible ? props.hint2 : ""}
        </div>
        <div className="Main-hintBox" id="hint3">
          {props.hintCount >= 3 && props.hintVisible ? props.hint3 : ""}
        </div>
        <div className="Main-hintBox" id="hint4">
          {props.hintCount >= 4 && props.hintVisible ? props.hint4 : ""}
        </div>
        <div className="Main-hintBox" id="hint5">
          {props.hintCount >= 5 && props.hintVisible ? props.hint5 : ""}
        </div>
        <div className="Main-hintBox" id="hint6">
          {props.hintCount >= 6 && props.hintVisible ? props.hint6 : ""}
        </div>
      </main>
    </>
  );
}

export default Display;

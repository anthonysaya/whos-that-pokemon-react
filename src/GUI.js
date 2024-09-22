import "./GUI.css";
function GUI() {
  return (
    <>
      <section class="UI">
        <section class="UI-name" id="name">
          ???
        </section>
        <section class="UI-inputs">
          <div class="UI-sideCol">
            <div class="UI-stat" id="correct">
              Correct Guesses: 0
            </div>
            <div class="UI-stat" id="wrong">
              Wrong Guesses: 0
            </div>
          </div>
          <form class="UI-guessBox" id="form">
            <input
              class="UI-inputBox"
              type="text"
              list="pokeList"
              id="inputBox"
              name="inputBox"
            />
            <datalist id="pokeList"></datalist>
            <button class="UI-submit" id="submit">
              Submit
            </button>
          </form>
          <div class="UI-sideCol">
            <button class="UI-button" id="hint">
              Hint
            </button>
            <button class="UI-button" id="quitNext">
              Give Up
            </button>
          </div>
        </section>
      </section>
    </>
  );
}
export default GUI;

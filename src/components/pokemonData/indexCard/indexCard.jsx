import { useState } from "react";
import "./indexCard.css";

export function IndexCard(params) {
  const { pokemon } = params;
  const [backgroundImage, setBackgroundImage] = useState(
    pokemon.sprites.front_default
  );
  const audio = new Audio(pokemon.cries.latest);
  audio.volume = 0.1;

  console.log(backgroundImage);
  if (backgroundImage) {
    return (
      <div
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className="ImageCard"
      >
        <button
          className="ShinyButton"
          onClick={() => {
            audio.play();
          }}
        >
          🗣
        </button>

        <button
          className="ShinyButton"
          onClick={() => {
            backgroundImage === pokemon.sprites.front_default
              ? setBackgroundImage(pokemon.sprites.front_shiny)
              : setBackgroundImage(pokemon.sprites.front_default);
          }}
        >
          ★
        </button>
      </div>
    );
  } else {
    return <h1>loading...</h1>;
  }
}

import { normalize } from "../../../utils/normalize";
import "./pokemonStats.css";

export function PokemonStats(params) {
  const { pokemon } = params;

  console.log(pokemon);
  const minHp = 1;
  const maxHp = 255;
  const minAttack = 5;
  const maxAttack = 181;
  const minDefence = 5;
  const maxDefence = 230;
  const minSpecialAttack = 10;
  const maxSpecialAttack = 173;
  const minSpecialDefence = 20;
  const maxSpecialDefence = 230;
  const minSpeed = 5;
  const maxSpeed = 200;

  return (
    <section className="PokemonStats">
      <div>
        <div className="Stats">
          <h3>HP</h3>
          <div
            className="StatBar"
            style={{
              "--width": normalize(pokemon.stats[0].base_stat, minHp, maxHp),
            }}
            data-label={pokemon.stats[0].base_stat}
          ></div>
        </div>
        <div className="Stats">
          <h3>Attack</h3>
          <div
            className="StatBar"
            style={{
              "--width": normalize(
                pokemon.stats[1].base_stat,
                minAttack,
                maxAttack
              ),
            }}
            data-label={pokemon.stats[1].base_stat}
          ></div>
        </div>
        <div className="Stats">
          <h3>Defence</h3>
          <div
            className="StatBar"
            style={{
              "--width": normalize(
                pokemon.stats[2].base_stat,
                minDefence,
                maxDefence
              ),
            }}
            data-label={pokemon.stats[2].base_stat}
          ></div>
        </div>
      </div>
      <div>
        <div className="Stats">
          <h3>Special Attack</h3>
          <div
            className="StatBar"
            style={{
              "--width": normalize(
                pokemon.stats[3].base_stat,
                minSpecialAttack,
                maxSpecialAttack
              ),
            }}
            data-label={pokemon.stats[3].base_stat}
          ></div>
        </div>
        <div className="Stats">
          <h3>Special Defence</h3>
          <div
            className="StatBar"
            style={{
              "--width": normalize(
                pokemon.stats[4].base_stat,
                minSpecialDefence,
                maxSpecialDefence
              ),
            }}
            data-label={pokemon.stats[4].base_stat}
          ></div>
        </div>
        <div className="Stats">
          <h3>Speed</h3>
          <div
            className="StatBar"
            style={{
              "--width": normalize(
                pokemon.stats[5].base_stat,
                minSpeed,
                maxSpeed
              ),
            }}
            data-label={pokemon.stats[5].base_stat}
          ></div>
        </div>
      </div>
    </section>
  );
}

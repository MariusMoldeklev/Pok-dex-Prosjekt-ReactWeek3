import { firstToUpperCase } from "../../../utils/firstToUpperCase";
import "./measurmentAndAbilities.css";

export function MeasurmentAndAbilities(params) {
  const { pokemon } = params;

  console.log(pokemon);

  return (
    <div className="MeasurmentAndAbilities">
      <div className="HeightAndWeight">
        <div>
          <h3>Weight</h3>
          <p>{pokemon.weight}</p>
        </div>
        <div>
          <h3>Height</h3>
          <p>{pokemon.height}</p>
        </div>
      </div>
      <div className="Abilities">
        <h3>Abilities</h3>

        <p>
          {pokemon.abilities.map((ability, index) => {
            if (index === pokemon.abilities.length - 1) {
              return firstToUpperCase(ability.ability.name);
            }
            return firstToUpperCase(ability.ability.name) + ", ";
          })}
        </p>
      </div>
    </div>
  );
}

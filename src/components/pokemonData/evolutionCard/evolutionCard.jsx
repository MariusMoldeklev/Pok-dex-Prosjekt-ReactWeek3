import { useFetchApi } from "../../../hooks/useFetchApi";
import { firstToUpperCase } from "../../../utils/firstToUpperCase";
import { pokemonIdFormatter } from "../../../utils/numberFormatting";
import { TypeButton } from "../typeButton/typeButton";
import "./evolutionCard.css";

export function EvolutionCard(params) {
  let { pokemonName } = params;
  const useFetch = useFetchApi(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`
  );

  const pokemon = useFetch.data;
  console.log(pokemon);
  if (!pokemon) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <a className="EvolutionLink" href={pokemon.id}>
        <div className="EvolutionContainer">
          <div
            className="EvolutionImage"
            style={{ backgroundImage: `url(${pokemon.sprites.front_default})` }}
          ></div>
          <p>#{pokemonIdFormatter(pokemon.id)}</p>
          <p className="EvolutionName">{firstToUpperCase(pokemonName)}</p>
          {pokemon.types.map((type) => (
            <TypeButton key={type.type.name} type={type.type.name} />
          ))}
        </div>
      </a>
    );
  }
}

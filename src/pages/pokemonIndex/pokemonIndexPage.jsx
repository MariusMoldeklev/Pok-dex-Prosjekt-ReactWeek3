import { useParams } from "react-router-dom";
import { useFetchApi } from "../../hooks/useFetchApi";
import { nextPokemon, prevPokemon } from "../../utils/nextPokemon";
import { pokemonIdFormatter } from "../../utils/numberFormatting";
import { IndexCard } from "../../components/pokemonData/indexCard/indexCard";
import { TypeButton } from "../../components/pokemonData/typeButton/typeButton";
import { firstToUpperCase } from "../../utils/firstToUpperCase";
import { MeasurmentAndAbilities } from "../../components/pokemonData/measurmentAndAbilities/measurmentAndAbilities";
import "./pokemonIndexPage.css";
import { PokemonStats } from "../../components/pokemonData/pokemonStats/pokemonStats";
import { Evolutions } from "../../components/pokemonData/evolution/evolution";

export function PokemonIndex() {
  let { pokemonId } = useParams();
  const useFetch = useFetchApi(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
  );

  const pokemon = useFetch.data;
  console.log(useFetch);

  if (!pokemon) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  } else {
    return (
      <main className="Container">
        <header className="IndexPageHeader">
          <h2 className="IndexSwitcher">
            <a href={prevPokemon(pokemonId)}>〈 </a> #
            {pokemonIdFormatter(pokemonId)}
            <a href={nextPokemon(pokemonId)}> 〉</a>
          </h2>
          <h1 className="PokemonName">{firstToUpperCase(pokemon.name)}</h1>
        </header>
        <section className="MainSection">
          <div className="PokemonSection">
            <IndexCard pokemon={pokemon} />
            <div className="TypeAndAbilities">
              <div className="PokemonTypes">
                <h2>Type:</h2>
                {pokemon.types.map((type) => (
                  <TypeButton key={type.type.name} type={type.type.name} />
                ))}
              </div>
              <MeasurmentAndAbilities pokemon={pokemon} />
            </div>
          </div>
          <PokemonStats className="PokemonStats" pokemon={pokemon} />
          <Evolutions pokemonId={pokemonId} />
        </section>
      </main>
    );
  }
}

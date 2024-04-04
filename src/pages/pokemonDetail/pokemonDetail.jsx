import { PokemonSearch } from "../../components/Search";
//må linke inn API ?//

export function PokemonDetail({ pokemon }) {
  if (!pokemon) {
    return null;
  }

  return (
    <div>
      <div>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <h3>Type</h3>
        <ul>
          {pokemon.types.map((type, index) => (
            <li key={index}>{type.type.name}</li>
          ))}
        </ul>
        <h3>Abilities</h3>
        <ul>
          {pokemon.abilities.map((ability, index) => (
            <li key={index}>{ability.ability.name}</li>
          ))}
        </ul>
        <h3>Stats</h3>
        <ul>
          {pokemon.stats.map((stat, index) => (
            <li key={index}>{stat.stat.name}: {stat.base_stat}</li>
          ))}
        </ul>
        <h3>Weight</h3>
        <p>{pokemon.weight}</p>
        <h3>Height</h3>
        <p>{pokemon.height}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
  
}

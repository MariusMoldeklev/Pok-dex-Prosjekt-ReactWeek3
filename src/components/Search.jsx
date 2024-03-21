import { useState, useEffect } from 'react';
import style from './search.module.css'

export function PokemonSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState(null);
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
      if (!response.ok) {
        throw new Error('Pokemon not found');
      }
      const data = await response.json();
      setPokemonData(data);
      setError(null);
    } catch (error) {
      setPokemonData(null);
      setError('Pokemon not found');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    if (searchTerm.length >= 3) {
      fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`)
        .then((response) => response.json())
        .then((data) => {
          const filtered = data.results.filter((pokemon) =>
            pokemon.name.includes(searchTerm.toLowerCase())
          );
          setFilteredPokemon(filtered);
        })
        .catch((error) => {
          console.error('Error fetching Pokemon:', error);
          setFilteredPokemon([]);
        });
    } else {
      setFilteredPokemon([]);
    }
  }, [searchTerm]);

  return (
    <div>
        <h3>Enter Pokémon name or number</h3>
      <input
        type="text"
        placeholder="Enter name or number"
        value={searchTerm}
        onChange={handleSearchChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSearch}>Search</button>

      {error && <div>{error}</div>}

      {filteredPokemon.length > 0 && (
        <div>
          <ul className={style.searchList} >
            {filteredPokemon.map((pokemon, index) => (
              <li key={index}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</li>
            ))}
          </ul>
        </div>
      )}
      {pokemonData && (
        <div>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <h2>{pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</h2>
          {/* <p>Height: {pokemonData.height}</p>
          <p>Weight: {pokemonData.weight}</p>
          <p>Abilities:</p>
          <ul>
            {pokemonData.abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul> */}
        </div>
      )}

    </div>
  );
}


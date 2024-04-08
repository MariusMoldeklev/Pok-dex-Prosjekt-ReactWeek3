import { useState, useEffect } from 'react';
import style from './search.module.css';
import {RandomPokemonButton} from './RandomPokemonButton';
import { TypeButton } from './pokemonData/typeButton/typeButton';
import { Link } from 'react-router-dom';

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

  const handlePokemonClick = async (pokemonName) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      if (!response.ok) {
        throw new Error('Pokemon not found');
      }
      const data = await response.json();
      setPokemonData(data);
      setError(null);
      setSearchTerm(''); // Clear the input bar when clicking on a filtered
    } catch (error) {
      setPokemonData(null);
      setError('Pokemon not found');
    }
  };

  const handleRandomPokemon = async () => {
    try {
      const randomId = Math.floor(Math.random() * 898) + 1; // Generate random ID between 1 and 898
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
      if (!response.ok) {
        throw new Error('Pokemon not found');
      }
      const data = await response.json();
      setPokemonData(data);
      setError(null);
      setSearchTerm(''); // Clear the input bar
    } catch (error) {
      setPokemonData(null);
      setError('Pokemon not found');
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
    <div className='searchDiv'>
      <div className='inputButton'>

      {/* <h3>Enter Pokémon name or number</h3> */}
      <input
        type="text"
        placeholder="Enter name or number"
        value={searchTerm}
        onChange={handleSearchChange}
        onKeyPress={handleKeyPress}
        className='inputPokemon'
        />
      <button className='searchButton' onClick={handleSearch}>Search</button> <br /><br />
      <RandomPokemonButton onClick={handleRandomPokemon} />
        </div>

      {error && <div>{error}</div>}

      {filteredPokemon.length > 0 && (
          <div className='inputButton'>
          <ul className={style.searchList}>
            {filteredPokemon.map((pokemon, index) => (
                <li
                key={index}
                onClick={() => handlePokemonClick(pokemon.name)}
                className={style.searchListItem}
              >
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
              </li>
            ))}
          </ul>
        </div>
      )}
      {pokemonData && (
        <Link to={"/pokemonIndex/" + pokemonData.id}>
          <div className='pokemonCard'>
            <p className='pokemonID'># {pokemonData.id}</p>
            <img className={style.pokemonImg} src={pokemonData.sprites.front_default} alt={pokemonData.name} />
            <h2>{pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</h2>
            <TypeButton type={pokemonData.types[0].type.name}/>
          </div>
        </Link>
      )}
    </div>
  );
}


export function nextPokemon(currentPokemonId) {
  const maxPokemonId = 898;
  const nextPokemonId = Number(currentPokemonId) + 1;

  if (nextPokemonId > maxPokemonId) {
    return 1;
  }
  return nextPokemonId;
}

export function prevPokemon(currentPokemonId) {
  const maxPokemonId = 898;
  const nextPokemonId = Number(currentPokemonId) - 1;

  if (nextPokemonId < 1) {
    return maxPokemonId;
  }
  return nextPokemonId;
}

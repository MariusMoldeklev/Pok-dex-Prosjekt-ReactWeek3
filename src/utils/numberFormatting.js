export function pokemonIdFormatter(id) {
  const s = "000" + id;
  return s.substring(s.length - 4);
}

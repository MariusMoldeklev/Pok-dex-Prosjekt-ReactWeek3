export function normalize(number, min, max) {
  return ((number - min) / (max - min)) * 100;
}

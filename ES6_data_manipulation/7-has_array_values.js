function hasValuesFromArray(set, arr) {
  // Utilizamos el método every para verificar si todos los elementos del
  // array están presentes en el set.
  return arr.every((element) => set.has(element));
}

export default hasValuesFromArray;

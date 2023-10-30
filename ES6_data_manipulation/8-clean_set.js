function cleanSet(set, startString) {
  // Utilizamos el método filter para obtener los valores del set que comienzan con startString.
  const filteredValues = Array.from(set).filter((value) => value.startsWith(startString));

  // Utilizamos join para combinar los valores en una sola cadena, separados por '-'.
  return filteredValues.join('-');
}

export default cleanSet;

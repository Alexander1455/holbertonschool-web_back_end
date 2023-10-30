function updateUniqueItems(map) {
  // Verificamos si el argumento es un mapa.
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iteramos a través de las entradas del mapa.
  for (const [key, value] of map.entries()) {
    if (value === 1) {
      // Actualizamos la cantidad a 100 si es igual a 1.
      map.set(key, 100);
    }
  }
}

export default updateUniqueItems;

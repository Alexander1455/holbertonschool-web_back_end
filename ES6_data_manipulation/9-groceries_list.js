function groceriesList() {
  // Creamos un nuevo objeto Map y agregamos los elementos y cantidades como pares clave-valor.
  const groceryMap = new Map([
        ['Apples', 10],
        ['Tomatoes', 10],
        ['Pasta', 1],
        ['Rice', 1],
        ['Banana', 5],
  ]);

  return groceryMap;
}

export default groceriesList;

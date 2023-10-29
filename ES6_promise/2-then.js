function handleResponseFromAPI(promise) {
  // Objeto que representa una respuesta exitosa.
  const body = { status: 200, body: 'success' };

  return promise
    .then(() => body) // Si la promesa se resuelve, devuelve el objeto de respuesta exitosa.
    .catch((error) => error) // Si la promesa se rechaza, devuelve el objeto de error.
    .finally(() => console.log('Got a response from the API')); // Registra un mensaje en la consola, sin importar si la promesa se resuelve o se rechaza.
}

export default handleResponseFromAPI;

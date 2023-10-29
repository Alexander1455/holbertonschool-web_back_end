function handleResponseFromAPI(promise) {
  promise
    .then(() => {
    console.log('Recibido una respuesta de la API'); // Log cuando la Promesa se resuelve
    return { status: 200, body: 'éxito' }; // Devuelve un objeto con los atributos especificados
    })
    .catch(() => {
    console.log('Recibido una respuesta de la API'); // Log cuando la Promesa se rechaza
    return new Error(); // Devuelve un objeto Error vacío
    });
}

export default handleResponseFromAPI;

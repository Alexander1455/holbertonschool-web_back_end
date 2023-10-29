function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Realiza alguna operación asincrónica aquí
    // Por ejemplo, puedes usar fetch() para hacer una solicitud a una API

    // Simulando una Promesa resuelta con un temporizador
    setTimeout(() => {
      resolve('Datos de respuesta de la API'); // Reemplaza esto con la respuesta real de la API
    }, 1000); // Simulando un retraso de 1 segundo
  });
}

export default getResponseFromAPI;

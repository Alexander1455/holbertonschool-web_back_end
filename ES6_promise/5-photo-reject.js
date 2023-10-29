// Exportamos una función llamada uploadPhoto que acepta un argumento fileName (cadena).
export default function uploadPhoto(fileName) {
  // Devolvemos una Promesa rechazada con un objeto Error que contiene el mensaje especificado.
  return Promise.reject(new Error(`${fileName} cannot be processed`));
}

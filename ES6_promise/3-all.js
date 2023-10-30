import { createUser, uploadPhoto } from './utils';

// Definimos una función llamada handleProfileSignup que manejará el proceso de registro del perfil.
function handleProfileSignup() {
  // Usamos Promise.all para ejecutar ambas funciones (uploadPhoto y createUser) en paralelo.
  return Promise.all([uploadPhoto(), createUser()])
    .then((data) => {
      // Cuando ambas promesas se resuelven, obtenemos los resultados en el array 'data'.
      // Imprimimos en la consola una cadena que combina los datos de la respuesta de uploadPhoto 
      // y createUser.
      console.log(`${data[0].body} ${data[1].firstName} ${data[1].lastName}`);
    })
    .catch(() => {
      // Si ocurre un error en alguna de las promesas, entramos en el bloque 'catch'.
      // Imprimimos en la consola el mensaje 'Signup system offline'.
      console.log('Signup system offline');
    });
}

// Exportamos la función handleProfileSignup para que pueda ser utilizada en otros archivos.
export default handleProfileSignup;

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    // Llamamos a ambas funciones y esperamos a que se resuelvan o rechacen.
    const userPromise = await signUpUser(firstName, lastName);
    const photoPromise = await uploadPhoto(fileName);

    // Devolvemos un array con el estado y el valor o error de cada promesa.
    return [
      { status: 'fulfilled', value: userPromise },
      { status: 'fulfilled', value: photoPromise },
    ];
  } catch (error) {
    // En caso de error, devolvemos un array con el estado y el error.
    return [
      { status: 'rejected', reason: error },
      { status: 'rejected', reason: error },
    ];
  }
}

export default handleProfileSignup;

// Exportamos una función llamada divideFunction que acepta dos argumentos: numerator y denominator.
export default function divideFunction(numerator, denominator) {
  // Verificamos si el denominador es igual a 0.
  if (denominator === 0) {
    // Si es igual a 0, lanzamos un error con el mensaje "cannot divide by 0".
    throw new Error('cannot divide by 0');
  }
  // Si el denominador no es igual a 0, realizamos la división y devolvemos el resultado.
  return numerator / denominator;
}

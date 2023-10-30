function createInt8TypedArray(length, position, value) {
  // Verificamos si la posición está dentro del rango válido.
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Creamos un ArrayBuffer de la longitud especificada.
  const buffer = new ArrayBuffer(length);

  // Creamos una vista DataView del ArrayBuffer.
  const view = new DataView(buffer);

  // Establecemos el valor Int8 en la posición especificada.
  view.setInt8(position, value);

  return view;
}

export default createInt8TypedArray;

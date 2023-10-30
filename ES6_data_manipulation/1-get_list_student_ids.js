function getListStudentIds(list) {
  if (!Array.isArray(list)) {
    return [];
  }

  // Usamos la función `map` para obtener un nuevo array de ids a partir de la lista de objetos.
  return list.map((student) => student.id);
}

export default getListStudentIds;

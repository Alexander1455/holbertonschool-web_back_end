function getStudentsByLocation(students, city) {
  // Utilizamos la función `filter` para obtener un nuevo array con
  // estudiantes que tienen la ubicación deseada.
  return students.filter((student) => student.location === city);
}

export default getStudentsByLocation;

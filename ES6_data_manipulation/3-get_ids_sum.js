function getStudentIdsSum(students) {
  // Utilizamos la función `reduce` para sumar todos los ids de los estudiantes.
  return students.reduce((sum, student) => sum + student.id, 0);
}

export default getStudentIdsSum;

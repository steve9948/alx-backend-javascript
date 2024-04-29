export default function getStudentIdsSum(listOfStudents) {
  if (!Array.isArray(listOfStudents)) {
    return 0; // Return 0 instead of an empty array for non-array inputs
  }
  return listOfStudents.reduce((sum, student) => sum + student.id, 0);
}

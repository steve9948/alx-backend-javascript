export default function getListStudentIds(listOfStudents) {
  // Check if the input is an array
  if (!Array.isArray(listOfStudents)) {
    // If it's not an array, return an empty array
    return [];
  }
  // If it's an array, map over it and extract the IDs
  return listOfStudents.map((student) => student.id);
}

export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  if (!Array.isArray(listOfStudents)) {
    return [];
  }
  return listOfStudents
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeValue = newGrades.find((grade) => grade.studentId === student.id);

      if (gradeValue) {
        return {
	  ...student,
	  grade: gradeValue.grade,
        };
      }
      return {
	...student,
	grade: 'N/A',
      };
    });
}

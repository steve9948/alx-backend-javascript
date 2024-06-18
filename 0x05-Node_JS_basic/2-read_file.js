const fs = require('fs');
const path = require('path');

function countStudents(filePath) {
  const resolvedPath = path.resolve(filePath);

  if (!fs.existsSync(resolvedPath)) {
    throw new Error('Cannot load the database');
  }

  const data = fs.readFileSync(resolvedPath, 'utf8');
  const lines = data.split('\n');
  const studentCountByField = {};
  let totalStudents = 0;

  for (const line of lines) {
    if (line.trim() !== '') {
      const columns = line.split(',');
      const field = columns[3];
      const firstname = columns[0];

      if (totalStudents > 0) { // Skip the header line
        if (!Object.hasOwnProperty.call(studentCountByField, field)) {
          studentCountByField[field] = [];
        }
        studentCountByField[field].push(firstname);
      }
      totalStudents += 1;
    }
  }

  console.log(`Number of students: ${totalStudents - 1}`);
  for (const field in studentCountByField) {
    if (Object.hasOwnProperty.call(studentCountByField, field)) {
      const studentList = studentCountByField[field];
      console.log(`Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}`);
    }
  }
}

module.exports = countStudents;

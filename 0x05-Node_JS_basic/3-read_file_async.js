const fs = require('fs').promises;

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8')
      .then((data) => {
        const lines = data.split('\n');
        const studentCountByField = {};
        let totalStudents = -1; // Start at -1 to account for the header line

        for (const line of lines) {
          if (line.trim() !== '') {
            const columns = line.split(',');
            const field = columns[3];
            const firstname = columns[0];

            if (totalStudents >= 0) { // Skip the header line
              if (!Object.hasOwnProperty.call(studentCountByField, field)) {
                studentCountByField[field] = [];
              }
              studentCountByField[field].push(firstname);
            }
            totalStudents += 1;
          }
        }

        console.log(`Number of students: ${totalStudents}`);
        for (const field in studentCountByField) {
          if (Object.hasOwnProperty.call(studentCountByField, field)) {
            const studentList = studentCountByField[field];
            console.log(`Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}`);
          }
        }

        resolve();
      })
      .catch((error) => {
        reject(new Error(`Cannot load the database: ${error.message}`));
      });
  });
}

module.exports = countStudents;

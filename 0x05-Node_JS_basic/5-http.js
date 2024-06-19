const http = require('http');
const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.split('\n');
      const hashtable = {};
      let students = -1;
      let result = '';
      for (const line of lines) {
        if (line.trim() !== '') {
          const columns = line.split(',');
          const field = columns[3];
          const firstname = columns[0];
          if (students >= 0) {
            if (!Object.hasOwnProperty.call(hashtable, field)) {
              hashtable[field] = [];
            }
            hashtable[field].push(firstname);
          }
          students += 1;
        }
      }
      result += `Number of students: ${students}\n`;
      for (const key in hashtable) {
        if (Object.hasOwnProperty.call(hashtable, key)) {
          result += `Number of students in ${key}: ${hashtable[key].length}. List: ${hashtable[key].join(', ')}\n`;
        }
      }
      return result;
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((data) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`This is the list of our students\n${data}`);
      })
      .catch((error) => {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end(`This is the list of our students\n${error.message}`);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

app.listen(1245);

module.exports = app;

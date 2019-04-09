const fs = require('fs');
const rs = fs.createReadStream('./1_streams.md');
const ws = fs.createWriteStream('./1_streams-copy.md');

rs.pipe(ws);

// OR THIS ALSO WORKS

// rs.on('data', chunk => {
//   ws.write(chunk);
// });

// rs.on('end', () => {
//   ws.end();
// });

const fs = require('fs');

const ws = fs.createWriteStream('./spot.json', {
  // flags: 'a' - APPENDS
  // flags: 'w' - OVERWRITES (DEFAULT)
});

ws.write('{');
ws.write('\n\t');
ws.write('"name": "spot",');
ws.write('\n\t');
ws.write('"age": 12,');
ws.write('\n\t');
ws.write('"weight": "40kg"');
ws.write('\n');
ws.write('}');

ws.end();

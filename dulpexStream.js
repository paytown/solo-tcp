const fs = require('fs');

fs.createReadStream('./1_streams.md').pipe(fs.createWriteStream('./1_streams-copy.md'));

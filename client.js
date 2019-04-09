const net = require('net');

const client = net.createConnection(6969, 'localhost', () => {
  console.log('Connected!!!!!');
  client.write('sup');
});

const net = require('net');

const server = net.createServer(client => {
  console.log('client connected ;)');

  // client.pipe(client);

  client.on('data', data => {
    console.log(data.toString());
    client.write(`${data}`);
  });
});

server.listen(6969);

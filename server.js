const net = require('net');

// const allClients = [];

const server = net.createServer(client => {
  console.log('client connected ;)');

  // allClients.push(client);

  client.on('data', data => {
    console.log(data.toString());
    client.write(`${data}`);
  });
});

server.listen(6969);

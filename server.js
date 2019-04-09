const net = require('net');

const server = net.createServer(socket => {
  console.log('client connected ;)');
  socket.on('data', data => {
    console.log(data.toString());
  });
});

server.listen(6969);

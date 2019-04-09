const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});


const client = net.createConnection(6969, 'localhost', () => {
  console.log('Connected!!!!!');

  const user = { name: 'Payton' };

  rl.prompt();
  rl.on('line', line => {
    client.write(`${user.name}: ${line}`);
    rl.prompt();
  });
});


client.on('data', data => {
  console.log(`\n${data.toString()}`);
  rl.prompt();
});

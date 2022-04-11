var PORT = 33333;
var HOST = '0.0.0.0';

const { info } = require('console');
var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.on('listening', function() {
  var address = server.address();
 console.log(`UDP Server listening on ${address.address}:${address.port}`);
});
server.on('message', function(message, remote) {
 console.log(remote.address + ':' + remote.port +' - ' + message);
 const reply = 'Mesazhi ka arritur me sukses ne server!';
 server.send(reply, 0, reply.length, remote.port, remote.address, function(err, bytes) {
  if (err) throw err;
  });
});

server.bind(PORT, HOST);

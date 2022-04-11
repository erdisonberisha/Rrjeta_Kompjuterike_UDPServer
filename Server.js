var PORT = 33333;
var HOST = '0.0.0.0';
const fs = require ('fs');
var path = 'mesazhi.txt';
errorcode = "NUK KENI QASJE!"



const { info } = require('console');
var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.on('listening', function() {
  var address = server.address();
 console.log(`Serveri udp eshte aktiv ne adresen:  ${address.address}:${address.port}`);
});
server.on('message', function(message, remote) {
 console.log(remote.address + ':' + remote.port +' - ' + message);
 const reply = 'Mesazhi ka arritur me sukses ne server!';
 server.send(reply, 0, reply.length, remote.port, remote.address, function(err, bytes) {
  if (err) throw err;
  console.log(
    `Pergjigja e serverit u dergua tek klienti ${remote.address}:${remote.port}`
  );
  });
});

server.bind(PORT, HOST);

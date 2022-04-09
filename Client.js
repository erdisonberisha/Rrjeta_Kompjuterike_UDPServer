const prompt = require("prompt-sync")({ sigint: true });
var PORT = 33333;
const ipAddress = prompt("Sheno IP Addresen me te cilen doni te lidheni : ");
var HOST = ipAddress;

var dgram = require('dgram');
const mesazhi = prompt("Send a message to server: ");
var message = new Buffer.from(mesazhi);


var client = dgram.createSocket('udp4');
client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
  if (err) throw err;
  console.log('UDP message sent to ' + HOST +':'+ PORT);
  client.close();
});

const prompt = require("prompt-sync")({ sigint: true });
var PORT = 33333;
const clientIP = prompt("Sheno IP Addresen tuaj: ");
var client = clientIP;
const ipAddress = prompt("Sheno IP Addresen me te cilen doni te lidheni : ");
var HOST = ipAddress;
const fs = require ('fs');
var path = 'mesazhi.txt';
errorcode = "NUK KENI QASJE!"


var dgram = require('dgram');
// fs.chmod(path, 777, () => {
//   console.log("\nReading the file contents");
//   console.log(fs.readFileSync(path, 'utf8'));
  
//   console.log("\nTrying to write to file");
//   try {
//     fs.writeFileSync(path, "This file has now been edited.");
//   }
//   catch (e) {
//     console.log("Error Code:",errorcode);
//   }
// });

if (client == '192.168.0.25') {
  console.log("\nGranting read and write access to user");
  fs.chmod("mesazhi.txt", 0o600, () => {
    
    console.log("\nReading the file contents");
    console.log(fs.readFileSync("mesazhi.txt", 'utf8'));
    const ndryshimi = prompt("Ndryshoni file si read and write: ");

    console.log("Ndryshimi i bere: ");
    fs.writeFileSync('mesazhi.txt',ndryshimi);
    console.log(ndryshimi);

  });
}
else {
  fs.chmod(path, 777, () => {
    console.log("\nReading the file contents");
    console.log(fs.readFileSync(path, 'utf8'));
    
    console.log("\nTrying to write to file");
    try {
      fs.writeFileSync(path, "This file has now been edited.");
    }
    catch (e) {
      console.log("Error Code:",errorcode);
    }});


var client = dgram.createSocket('udp4');
client.on('message', function (message, remote) {
  console.log(remote.address + ':' + remote.port +' - ' + message);

});
const mesazhi = prompt("Send a message to server: ");
var message = new Buffer.from(mesazhi);

client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
  if (err) throw err;
  console.log('UDP message sent to ' + HOST +':'+ PORT);
  });



}

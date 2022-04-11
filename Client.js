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


if (client == '192.168.0.28') {
  console.log("\nKeni qasje ne lexim the mbishkrim te file");
  fs.chmod("mesazhi.txt", 0o600, () => {
    
    console.log("\nPermbajtja e file");
    console.log(fs.readFileSync("mesazhi.txt", 'utf8'));
    const ndryshimi = prompt("Ndryshoni file si read and write: ");

    console.log("Ndryshimi i bere: ");
    fs.appendFileSync('mesazhi.txt',ndryshimi);
    console.log(fs.readFileSync("mesazhi.txt", 'utf8'));

  });
}
else {
  fs.chmod(path, 777, () => {
    console.log("\nPermbajtja e file");
    console.log(fs.readFileSync(path, 'utf8'));
    
    console.log("\nDuke lexuar file");
    try {
      fs.writeFileSync(path, "Ky file sapo u editua.");
    }
    catch (e) {
      console.log("Kujdes:",errorcode);
    }});


var client = dgram.createSocket('udp4');
client.on('message', function (message, remote) {
  console.log(remote.address + ':' + remote.port +' - ' + message);

});
const mesazhi = prompt("Dergoni mesazh tek serveri: ");
var message = new Buffer.from(mesazhi);

client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
  if (err) throw err;
  console.log('Mesazhi udp u dergua me sukses ' + HOST +':'+ PORT);
  });



}

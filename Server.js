var PORT = 33333;
var HOST = '0.0.0.0';
const fs = require ('fs');
var path = 'mesazhi.txt';
errorcode = "NUK KENI QASJE!"
// var privilege = fs.chmod(path, 777, (err) => { 
//   if (err) { 
//   console.log(err); 
//   }
// });
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

// if (HOST = '192.168.0.28') {
//   console.log("\nGranting read and write access to user");
//   fs.chmod("example.txt", 0o600, () => {
//     console.log("Trying to write to file");
//     fs.writeFileSync('example.txt',' ');
  
//     console.log("\nReading the file contents");
//     console.log(fs.readFileSync("example.txt", 'utf8'));
//   });

// }
// else {
// fs.chmod(path, 0o400, () => {
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
// }


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
  console.log(
    `UDP server message send to ${remote.address}:${remote.port}`
  );
  });
});

server.bind(PORT, HOST);

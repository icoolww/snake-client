const net = require("net");

const {connect} = require("./client.js");

// establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: '10.0.2.15',
//     port: 50541,
//   });


  
//   conn.on("connect", () => {
//     // code that does something when the connection is first established
//     console.log("successfully connected");
//     conn.write("you ded cuz you idled");
//   });
  
//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   return conn;
// };

console.log("Connecting ...");
connect();

// Host: 165.227.47.243
// Port: 50541
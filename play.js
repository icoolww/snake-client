

const { connect } = require("./constant");
const { setupInput } = require("./input");

console.log("Connecting ...");
connect();

setupInput(connect());








// const net = require("net");

// const {connect} = require("./client.js");

// const setupInput = function () {
//   const stdin = process.stdin;
//   stdin.on("data", handleUserInput);
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   return stdin;
// };

// const handleUserInput = function (key) {
//   if (key === '\u0003') {
//     process.exit();
//   }
// };

// console.log("Connecting ...");
// connect();

// setupInput();

// module.exports = {
//   setupInput
// }


// // establishes a connection with the game server
// // const connect = function () {
// //   const conn = net.createConnection({
// //     host: '10.0.2.15',
// //     port: 50541,
// //   });

// //   conn.on("connect", () => {
// //     // code that does something when the connection is first established
// //     console.log("successfully connected");
// //     conn.write("you ded cuz you idled");
// //   });
  
// //   // interpret incoming data as text
// //   conn.setEncoding("utf8");

// //   return conn;
// // };


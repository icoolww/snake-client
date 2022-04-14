// const net = require("net");

// const { IP, PORT } = require("./constants");

// establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: '10.0.2.15',
//     port: 50541,
//   });

//   conn.on("connect", () => {
//     console.log("Successfully connected to game server");
//   })
  
//   conn.setEncoding("utf8");

//   conn.write("Name: WWJ");
  
//   conn.on("data", (data) => {
//     // code that does something when the connection is first established
//     console.log(data);
//   });

//   return conn;
// };


// module.exports = {
//   connect
// };


// conn.on("connect", () => {
//   setTimeout(() => {
//     conn.write("Move: up");
//   }, 500);

// });

// conn.on("connect", () => {
//     conn.write("Move: up");
// });

// interpret incoming data as text
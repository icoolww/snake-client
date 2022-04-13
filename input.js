// const net = require("net");

const {connect} = require("./client.js");
// const {setupInput} = require("./play.js");


const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.on("data", handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};



console.log("Connecting ...");
connect();
setupInput();


module.exports = {
  setupInput
}


// const setupInput = function () {
//   const stdin = process.stdin;
//   stdin.on("data", handleUserInput);
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   return stdin;
// };
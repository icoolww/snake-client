// const net = require("net");

const {connect} = require("./constant.js");
// const {setupInput} = require("./play.js");

let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();


  const handleUserInput = function (key) {
    
    if (key === "w") {
      conn.write("Move: up")
    } else if (key === "s") {
      conn.write("Move: down")
    } else if (key === "a") {
      conn.write("Move: left")
    } else if (key === "d") {
      conn.write("Move: right")
    } else if (key === '\u0003') {
      process.exit();
    }
  }; 
    
    const specialKey = function (key) {
      if (key === "c") {
        conn.write("Say: cool and awesome !!")
      } else if (key === "t") {
        conn.write("Say: there you go !!")
      } else if (key === "o") {
        conn.write("Say: oouch !!")
      }
    };
      
      stdin.on("data", handleUserInput);
      stdin.on("data", specialKey);
      
      
    return stdin;
    
  };
  
  
  console.log("Connecting ...");
  const conn = connect();
  setupInput(conn);
  // handleUserInput();
  // specialKey();
  
  module.exports = {
    setupInput
  };
  
  
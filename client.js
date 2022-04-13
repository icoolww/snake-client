const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541,
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: TPT");
  })


  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log(data);
  });
  
  return conn;
};

module.exports = {
  connect
};
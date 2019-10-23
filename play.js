const net = require("net");

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: "192.168.15.225",
    port: 50541
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  //To receive data from the server
  conn.on("data", data => {
    console.log("Server says: ", data);
  });
  return conn;
};

console.log("Connecting ...");
connect();

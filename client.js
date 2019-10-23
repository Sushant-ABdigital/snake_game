const net = require("net");
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: "192.168.15.225", //Server Address
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //To receive data from the server
  conn.on("data", data => {
    console.log("Server says: ", data);
  });

  //To message from client to server - logging here just to see if client is connected!!
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: SBB");
  });

  return conn;
};

module.exports = { connect };

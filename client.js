const {IP, PORT } = require('./constants');
const net = require("net");
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: IP, //Server Address
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //To message from client to server - logging here just to see if client is connected!!
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: SBB");
  });

  //Moves
  conn.on("connect", () => {
    // const m = setInterval(() => {
    //   conn.write("Move: up");
    // }, 500);

    // //Settting timeout to run after 5000 ms
    // setTimeout(() => clearInterval(m), 1000);
  });

  //To receive data from the server
  conn.on("data", data => {
    console.log("Server says: ", data);
  });

  return conn;
};

module.exports = { connect };

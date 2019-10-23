/* eslint-disable func-style */
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

  //To message from client to server - logging here just to see if client is connected!!
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: SBB");
  });

  //Moves
  conn.on("connect", () => {
    const m = setInterval(() => {
      conn.write("Move: up");
      conn.write("Move: right");
    }, 500);

    //Settting timeout to run after 5000 ms
    setTimeout(() => clearInterval(m), 3000);
  });

  //To receive data from the server
  conn.on("data", data => {
    console.log("Server says: ", data);
  });

  return conn;
};

module.exports = { connect };

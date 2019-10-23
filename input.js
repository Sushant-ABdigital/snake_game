/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */

// Stores the active TCP connection object.
let connection;

//Handling user input data
const handleUserInput = key => {
  if (key === "\u0003") {
    process.exit();
  }

  if (key === "w") {
    console.log("up");
    connection.write("Move: up");
  }
  if (key === "a") {
    console.log("left");
    connection.write("Move: left");
  }
  if (key === "s") {
    console.log("down");
    connection.write("Move: down");
  }
  if (key === "d") {
    console.log("right");
    connection.write("Move: right");
  }

  if (key === "m") {
    connection.write("Say: GO!GO!");
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = { setupInput };

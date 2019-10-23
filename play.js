const { connect } = require("./client");
console.log("Connecting ...");
/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
//Handling user input data
const handleUserInput = key => {
  if (key === "\u0003") {
    process.exit();
  }
};

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

connect();
setupInput();

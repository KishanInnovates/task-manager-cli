const { handleCommand } = require("./utils/cli");

const args = process.argv.slice(2);
handleCommand(args);
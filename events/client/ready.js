const { loadCommands } = require("../../handlers/commandHandler.js");
module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    console.log("Client Now Ready!");

    loadCommands(client);
  },
};

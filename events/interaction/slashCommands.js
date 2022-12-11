const { ChatInputCommandInteraction } = require("discord.js");

module.exports = {
  name: "interactionCreate",
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  execute(interaction, client) {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (!command)
      return interaction.reply({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });

    if (command.developer && interaction.user.id !== "431642577112924170")
      return interaction.reply({
        content: "There command is only for the developer of this bot!",
        ephemeral: true,
      });

    command.execute(interaction, client);
  },
};

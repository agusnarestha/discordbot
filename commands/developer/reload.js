const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  PermissionFlagsBits,
  Client,
} = require("discord.js");

const { loadCommands } = require("../../handlers/commandHandler.js");
const { loadEvents } = require("../../handlers/eventHandler.js");

module.exports = {
  developer: true,
  data: new SlashCommandBuilder()
    .setName("reload")
    .setDescription("Reloads all commands")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addSubcommand((options) =>
      options.setName("events").setDescription("Reloads all events")
    )
    .addSubcommand((options) =>
      options.setName("commands").setDescription("Reloads all commands")
    ),
  /**
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   *
   */

  execute(interaction, client) {
    const subCommand = interaction.options.getSubcommand();

    switch (subCommand) {
      case "events":
        {
          for (const [key, value] of client.events)
            client.removeListener(`${key}`, value, true);
          loadEvents(client);
          interaction.reply({
            content: "Reloaded all events",
            ephemeral: true,
          });
        }
        break;
      case "commands":
        {
          loadCommands(client);
          interaction.reply({
            content: "Reloaded all commands",
            ephemeral: true,
          });
        }
        break;
    }
  },
};

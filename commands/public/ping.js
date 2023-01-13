const {
  SlashCommandBuilder,
  EmbedBuilder,
  ChatInputCommandInteraction,
  PermissionFlagsBits,
  AttachmentBuilder,
} = require("discord.js");

module.exports = {
  developers: true,
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Bot's Realtime Ping"),
  /**
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    let ping;
    let color;
    if (100 > client.ws.ping || 100 === client.ws.ping) {
      color = "Green";
    } else if (300 > client.ws.ping && 300 === client.ws.ping) {
      color = "Orange";
    } else if (500 > client.ws.ping || 500 === client.ws.ping) {
      color = "Red";
    } else {
      color = "Yellow";
    }
    await interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setColor(color || "Random")
          .setTitle("Bot Ping")
          .setDescription(`**Ping:** \`${client.ws.ping}ms\``),
      ],
      ephemeral: true,
    });
  },
};

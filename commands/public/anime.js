const {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonStyle,
  ButtonBuilder,
  SlashCommandBuilder,
  ChatInputCommandInteraction,
} = require("discord.js");
const mal = require("mal-scraper");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("anime")
    .setDescription("Search for information about Anime by given name")
    .addStringOption((option) =>
      option.setName("search").setDescription("Anime name").setRequired(true)
    ),
  /**
   * @param { ChatInputCommandInteraction } interaction
   */
  async execute(interaction) {
    const search = interaction.options.getString("search");
    await interaction.deferReply();
    mal.getInfoFromName(search).then((data) => {
      const embed = new EmbedBuilder()
        .setAuthor({ name: `My Anime List search result for ${search}` })
        .setImage(data.picture)
        .setColor("#5865F2")
        .addFields(
          {
            name: "English Title",
            value: `${data.englishTitle || "None!"}`,
            inline: true,
          },
          {
            name: "Japanese Title",
            value: `${data.japaneseTitle || "None!"}`,
            inline: true,
          },
          {
            name: "Synopsis",
            value: `${data.synopsis || "None!"}`,
          },
          {
            name: "🏆 Rank",
            value: `${data.ranked || "N/A!"}`,
          },
          {
            name: "Type",
            value: `${data.type || "N/A!"}`,
          },
          {
            name: "💽 Total Episodes",
            value: `${data.episodes || "N/A!"}`,
            inline: true,
          },
          { name: "⭐ Score", value: `${data.score || "N/A!"}`, inline: true },
          {
            name: "➡️ Genres",
            value: `${data.genres || "None!"}`,
          }
        )
        .setFooter({
          text: `Requested by ${interaction.user.username}`,
          iconURL: interaction.user.displayAvatarURL({
            dynamic: true,
            format: "png",
            size: 2048,
          }),
        })
        .setTimestamp();
      const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setStyle(ButtonStyle.Link)
          .setURL(data.url)
          .setLabel("View more")
      );
      interaction.followUp({ embeds: [embed], components: [row] });
    });
  },
};

const {
  EmbedBuilder,
  SlashCommandBuilder,
  ChatInputCommandInteraction,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("dota2")
    .setDescription("Shows your stats from Dota 2")
    .addStringOption((option) =>
      option.setName("search").setDescription("Dota 2 id").setRequired(true)
    ),
  /**
   * @param { ChatInputCommandInteraction } interaction
   */
  async execute(interaction) {
    const search = interaction.options.getString("search");
    await interaction.deferReply();
    const request = require("request");

    request(
      `https://api.opendota.com/api/players/${search}`,
      function (error, response, body) {
        if (!error && response.statusCode === 200) {
          request(
            `https://api.opendota.com/api/players/${search}/wl`,
            function (err, resp, bdy) {
              if (!error && response.statusCode === 200) {
                const player = JSON.parse(body);
                const wl = JSON.parse(bdy);
                if (player["profile"] === undefined) {
                  interaction.editReply(
                    `Player with Dota 2 id ${search} not found!`
                  );
                } else {
                  const embed = new EmbedBuilder()
                    .setAuthor({
                      name: `Dota Player Profile ${player["profile"]["personaname"]}`,
                    })
                    .setURL(`${player["profile"]["profileurl"]}`)
                    .setImage(`${player["profile"]["avatarfull"]}`)
                    .setColor("#5865F2")
                    .addFields(
                      {
                        name: "🪪 Steam Name",
                        value: `${player["profile"]["personaname"] || "N/A!"}`,
                        inline: true,
                      },
                      {
                        name: "🌍 Country",
                        value: `${
                          player["profile"]["loccountrycode"] || "N/A!"
                        }`,
                        inline: true,
                      },
                      {
                        name: "🆔 Steam ID",
                        value: `${player["profile"]["steamid"] || "N/A!"}`,
                      },
                      {
                        name: "🏅 Medal",
                        value: `${player["rank_tier"] || "N/A!"}`,
                        inline: true,
                      },
                      {
                        name: "🏆 Leaderboard Rank",
                        value: `${player["leaderboard_rank"] || "N/A!"}`,
                        inline: true,
                      },
                      {
                        name: "🚩 MMR Estimate",
                        value: `${
                          player["mmr_estimate"]["estimate"] || "N/A!"
                        }`,
                      },
                      {
                        name: "⚔️ Total Matches",
                        value: `${wl["win"] + wl["lose"] || "N/A!"}`,
                      },
                      {
                        name: "📈 Win/Loss",
                        value: `${wl["win"]}/${wl["lose"] || "N/A!"}`,
                        inline: true,
                      },
                      {
                        name: "📉 Win Rate",
                        value: `${
                          (
                            (wl["win"] / (wl["win"] + wl["lose"])) *
                            100
                          ).toFixed(2) || "N/A!"
                        }%`,
                        inline: true,
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

                  interaction.followUp({ embeds: [embed] });
                }
              }
            }
          );
        }
      }
    );
  },
};

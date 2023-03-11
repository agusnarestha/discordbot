const {
  EmbedBuilder,
  SlashCommandBuilder,
  ChatInputCommandInteraction,
  AttachmentBuilder,
} = require("discord.js");

const fs = require("fs");

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
                    `Player with Dota 2 account id \`${search}\` not found!`
                  );
                } else {
                  let countryCode = player["profile"]["loccountrycode"];
                  var CountryNames = new Intl.DisplayNames(["en"], {
                    type: "region",
                  });
                  let flag;

                  function getFlagEmoji(countryCode) {
                    if (countryCode !== null) {
                      const codePoints = countryCode
                        .toUpperCase()
                        .split("")
                        .map((char) => 127397 + char.charCodeAt());
                      return (flag = String.fromCodePoint(...codePoints));
                    } else {
                      return flag;
                    }
                  }

                  function getCountryNames(countryCode) {
                    if (countryCode !== null) {
                      return (CountryNames =
                        " " + CountryNames.of(countryCode));
                    } else {
                      return (CountryNames = null);
                    }
                  }

                  getFlagEmoji(countryCode);
                  getCountryNames(countryCode);

                  const file = new AttachmentBuilder(
                    "assets/logo/dota2-logo.jpg"
                  );
                  const embed = new EmbedBuilder()
                    .setTitle(
                      `Dota Player Profile ${player["profile"]["personaname"]}`
                    )
                    .setDescription("Click on the title to open the profile.")
                    .setThumbnail("attachment://dota2-logo.jpg")
                    .setURL(`${player["profile"]["profileurl"]}`)
                    .setImage(`${player["profile"]["avatarfull"]}`)
                    .setColor("#ff0000")
                    .addFields({ name: "\u2009", value: "\u2009" })
                    .addFields(
                      {
                        name: "🪪 Steam Name",
                        value: `${player["profile"]["personaname"] || "N/A!"}`,
                        inline: true,
                      },
                      {
                        name: "🌍 Country",
                        value: flag + CountryNames || "N/A",
                        inline: true,
                      },
                      {
                        name: "🆔 Steam ID",
                        value: `\`${player["profile"]["steamid"] || "N/A!"}\``,
                      },
                      { name: "\u2009", value: "\u2009" },
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
                      { name: "\u2009", value: "\u2009" },
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

                  interaction.followUp({ embeds: [embed], files: [file] });
                }
              }
            }
          );
        }
      }
    );
  },
};

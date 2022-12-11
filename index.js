// const {
//   Client,
//   Collection,
//   Events,
//   GatewayIntentBits,
//   REST,
//   Routes,
// } = require("discord.js");
// const { clientId, guildId, token } = require("./config.json");
// const fs = require("node:fs");
// const path = require("node:path");

// const commands = [];

// const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// client.once(Events.ClientReady, () => {
//   console.log(`Ready! Logged in as ${client.user.tag}`);
//   client.user.setActivity("Welcome Gamers");
// });

// client.commands = new Collection();
// client.SlashCommands = new Collection();

// const commandsPath = path.join(__dirname, "/commands");
// const commandFiles = fs
//   .readdirSync(commandsPath)
//   .filter((file) => file.endsWith(".js"));

// for (const file of commandFiles) {
//   const filePath = path.join(commandsPath, file);
//   const command = require(filePath);
//   commands.push(command.data.toJSON());
//   if ("data" in command && "execute" in command) {
//     client.commands.set(command.data.name, command);
//   } else {
//     console.log(
//       `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`
//     );
//   }
// }

// const rest = new REST({ version: "10" }).setToken(token);
// (async () => {
//   try {
//     console.log(
//       `Started refreshing ${commands.length} application (/) commands.`
//     );

//     const data = await rest.put(
//       Routes.applicationGuildCommands(clientId, guildId),
//       { body: commands }
//     );
//     console.log(
//       `Successfully reloaded ${data.length} application (/) commands.`
//     );
//   } catch (error) {
//     console.error(error);
//   }
// })();

// client.on(Events.InteractionCreate, async (interaction) => {
//   if (!interaction.isChatInputCommand()) return;

//   const command = interaction.client.commands.get(interaction.commandName);
//   if (!command) {
//     console.error(`No command matching ${interaction.commandName} was found.`);
//     return;
//   }
//   try {
//     await command.execute(interaction);
//   } catch (error) {
//     console.error(error);
//     await interaction.reply({
//       content: "There was an error while executing this command!",
//       ephemeral: true,
//     });
//   }
// });

// client.login(token);

const {
  Client,
  Collection,
  GatewayIntentBits,
  Partials,
} = require("discord.js");
const { loadCommands } = require("./handlers/commandHandler.js");
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;
const client = new Client({
  intents: [Guilds, GuildMembers, GuildMessages],
  partials: [User, Message, GuildMember, ThreadMember],
});

const { loadEvents } = require("./handlers/eventHandler.js");

client.config = require("./config.json");
client.events = new Collection();
client.commands = new Collection();

loadEvents(client);
client.login(client.config.token);

const {
  Client,
  Collection,
  GatewayIntentBits,
  Partials,
  ActivityType,
} = require("discord.js");
const { loadCommands } = require("./handlers/commandHandler.js");
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;
const client = new Client({
  intents: [Guilds, GuildMembers, GuildMessages],
  partials: [User, Message, GuildMember, ThreadMember],
  presence: {
    status: "online",
    afk: false,
    activities: [
      {
        name: "Welcome Gamers",
        type: ActivityType.Playing,
      },
    ],
  },
});

const { loadEvents } = require("./handlers/eventHandler.js");

client.config = require("./config.json");
client.events = new Collection();
client.commands = new Collection();

loadEvents(client);
client.login(client.config.token);

[main]: assets/main.png
[img1]: assets/1.png
[img2]: assets/2.png
[img3]: assets/3.png
[img4]: assets/4.png
[img5]: assets/5.png
[img6]: assets/6.png
[img7]: assets/7.png
[img8]: assets/8.png
[img9]: assets/9.png

## About DiscordBot

An free and open-source discord bot built with Discord.js version 14.

### Commands

![1][main]

#### All Role

- /anime : Search for information about Anime by given name
- /dota2 : Shows your stats from Dota 2
- /ping : Bot's Realtime Ping
- /serverinfo : Provides information about the server
- /userinfo : Provides information about the user
- **Coming Soon**

#### Admin Only

- /reload events : Reloads all events (so you do need to run bot again)
- /reload commands : Reloads all commands (so you do need to run bot again)
- **Coming Soon**

#### Built with :

- [Discord.js 14.x](https://discord.js.org/#/)

## Instalation

Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services.

- [Clone Repository](#clone-repository)
- [Instal NPM Packages](#instal-npm-packages)
- [Configuration File Config.json](#configuration-file-configjson)
- [Run Bot](#run-bot)
- [Invite Bot to your server](#invite-bot-to-your-server)

### Clone Repository

Clone repository using `git clone`

```
git clone https://github.com/agusnarestha/discordbot.git
```

### Instal NPM Packages

Instal NPM Packages using `npm install`

```
npm install
```

### Configuration File Config.json

- Create a file named `config.json`
- Paste the code below, and fill in according to the token and clientId you have

```
{
  "token": "Paste your token here",
  "clientId": "Paste your clientId here"
}
```

For the `token` can be seen in this section [Discord Developer Portal](https://discord.com/developers/applications/), or for those who have not been able to follow the steps below :

- Click button "New Application"
  ![2][img1]
- Fill in according to the desired bot name
  ![3][img2]
- Click the "Bot" section and click "Add Bot"
  ![4][img3]
- Then click "Reset Token"
  ![5][img4]
- Then click "Copy"
  ![6][img5]

  For `clientId` can be seen in the Discord section

- Open the Discord application on your PC/Laptop
- Right click your discord profile then "Copy ID"
  ![7][img6]

### Run Bot

To run the bot using commands

```
node .
```

### Invite Bot to your server

- Click the "OAuth2" section then "URL Generator"
- Make sure the "bot" and "Administrator" sections are checked
  ![8][img7]
- Then copy the link on the "GENERATED URL" and paste it in your browser
  ![9][img8]
- Then select the server you want then click "Continue"
  ![10][img9]
- If your bot is online, it means it's ready to use

### Contributing :

You are welcome to contribute by submitting a Pull Request to the repository.

## Contact
[Putu Agus Narestha Adi Pratama](mailto:agusnaresthaa@gmail.com)
<p align="center">
   <a href="https://instagram.com/agusnarestha" target="blank"><img align="center" src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="agusnarestha"/></a>
  <a href="https://twitter.com/agusnarestha" target="blank"><img align="center" src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="agusnarestha"/></a>
  <a href="https://linkedin.com/in/agusnarestha" target="blank"><img align="center" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="agusnarestha"/></a>
  <a href="https://fb.com/agusnarestha" target="blank"><img align="center" src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" alt="agusnarestha"/></a>
  <a href="https://instagram.com/agusnarestha" target="blank"><img align="center" src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="agusnarestha"/></a>
</p>

## License

[MIT](https://github.com/agusnarestha/discordbot/blob/master/LICENSE.md)

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

## Tentang Discord Bot

Bot Discord ini dibuat dengan JS dan mengimplementasikan Slash Commands

### Commands

![1][main]

#### All Role

- /anime : Pencarian informasi anime tertentu
- /dota2 : Pencarian informasi tentang statistik akun Dota 2
- /ping : Melakukan ping ke server bot
- /serverinfo : Informasi tentang server
- /userinfo : Informasi tentang user
- **Coming Soon**

#### Admin Only

- /reload events : Memuat ulang events
- /reload commands : Memuat ulang commands
- **Coming Soon**

#### Dibuat dengan :

- [Discord.js 14.x](https://discord.js.org/#/)

### Contributor :

- Putu Agus Narestha Adi Pratama

## Tata Cara Menggunakan Discord Bot

- [Mengunduh repository ke dalam komputer](#mengunduh-repository)
- [Mengunduh Dependency](#mengunduh-dependency)
- [Konfigurasi File Config.json](#konfigurasi-file-configjson)
- [Jalankan Bot](#jalankan-bot)
- [Invite Bot ke server anda](#invite-bot-ke-server-anda)

### Mengunduh Repository

Unduh repository ke dalam komputer menggunakan perintah `git clone`. Url
repository dapat dilihat di dalam repository yang diinginkan.

```
git clone https://github.com/agusnarestha/discordbot.git
```

### Mengunduh Dependency

Mengunduh dependency menggunakan perintah `npm install`

### Konfigurasi File Config.json

- Membuat file dengan nama config.json
- Paste code di bawah ini, dan isi sesuai token dan clienId yang dimiliki

```
{
  "token": "Paste tokenmu disini",
  "clientId": "Paste cliendIdmu disini"
}
```

Untuk `token` bisa dilihat pada bagian [Discord Developer Portal](https://discord.com/developers/applications/), atau bagi yang belum bisa mengikuti langkah berikut :

- Klik tombol "New Application"
  ![2][img1]
- Isi sesuai nama bot yang diinginkan
  ![3][img2]
- Klik bagian "Bot" dan klik "Add Bot"
  ![4][img3]
- Kemudian klik "Reset Token"
  ![5][img4]
- Kemudian klik "Copy"
  ![6][img5]

  Untuk `cliendId` bisa dilihat pada bagian Discord

- Buka aplikasi Discord pada PC/Laptop anda
- Klik kanan profil discord anda lalu "Copy ID"
  ![7][img6]

### Jalankan Bot

Untuk menjalankan bot dengan perintah `node .`

### Invite Bot ke server anda

- Klik bagian "OAuth2" kemudian "URL Generator"
- Pastikan bagian "bot" dan "Administrator" sudah tercentang
  ![8][img7]
- Kemudian copy link pada "GENERATED URL" dan paste pada browser anda
  ![9][img8]
- Kemudian pilih server yang anda inginkan kemudian klik "Continue"
  ![10][img9]
- Jika bot anda sudah online berarti sudah siap dipakai

## Discord WMGS

Join Our Discord Server

<a href="https://discord.gg/d47cRDj"><img src="https://invidget.switchblade.xyz/d47cRDj"/></a>

## License

[MIT](https://github.com/agusnarestha/discordbot/blob/main/LICENSE.md)

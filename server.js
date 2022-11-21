const dbd = require("dbd.js")
var fs = require('fs') 
const bot = new dbd.Bot({
token: "MTAzNjYxMzI4NTkyMDkxMTQ1MQ.Gr3lum.l7az_7M8GKRkbuOQjhKNV8SQI3wAjivmO_mkoA", //Discord Bot Token
prefix: "-" //Customizable
})
bot.onMessage() //Allows to run Commands
bot.onInteractionCreate()

var reader = fs.readdirSync("./cmds/").filter(file => file.endsWith(".js"))
for(const file of reader) {
  const command = require(`./cmds/${file}`)
  bot.command({
    name: command.name,
    code: command.code
  })
}

bot.status({
  text: "Vad1chka",
  type: "STREAMING",
  url: "https://www.twitch.tv/vadi_twitch",
  time: 12
})

bot.musicStartCommand({
  channel: "1044232414110683156",
  code: `$title[Сейчас играет:]
  $description[$songInfo[title]]
  $color[0000ff]
  $footer[$username;$authorAvatar]`
})

bot.musicEndCommand({
  channel: "1044232414110683156",
  code: `$title[Очередь закончилась]
  $description[Выхожу из голосового канала]
  $color[0000ff]`
})


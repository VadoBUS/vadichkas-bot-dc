const dbd = require("dbd.js")
const bot = new dbd.Bot({
token: "MTAzNjYxMzI4NTkyMDkxMTQ1MQ.Gr3lum.l7az_7M8GKRkbuOQjhKNV8SQI3wAjivmO_mkoA", //Discord Bot Token
prefix: "-" //Customizable
})
bot.onMessage() //Allows to run Commands
bot.onInteractionCreate()


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

bot.interactionCommand({
    name: "test", 
    code: `$interactionReply[Я топ!]`
})

bot.interactionCommand({
name: "stop",
  code: `$interactionReply[$if[$channelID==1044232414110683156]
  $title[Аривидерчи]
  $description[Пока мой друг]
  $color[0000ff]
  $footer[$username;$authorAvatar]
  $stopSong
  $else
  $title[<a:no:840961533848846356> Ошибка!]
	$description[-В данном канале нельзя выполнить эту команду]
	$color[ff0000]
	$footer[$username;$authorAvatar]
  $endif]`

})

bot.loopCommand({
code: `
$createSlashCommand[$guildID;stop;Stop Music]
$createSlashCommand[$guildID;play;Play Music]
$createSlashCommand[$guildID;eval;ONLY CREATOR]
$createSlashCommand[$guildID;ping;Pong!]
$createSlashCommand[$guildID;clear;Clear Messages]
`,
channel: "1044276276216725544",
executeOnStartup: true,
every: 500000
})

bot.interactionCommand({
name: "play",
  code: `
  $interactionReply[$if[$channelID==1044232414110683156]
  $title[Найдено:]
  $description[$playSong[$message]]
  $color[0000ff]
  $footer[$username;$authorAvatar]
  $else
  $title[<a:no:840961533848846356> Ошибка!]
	$description[-В данном канале нельзя выполнить эту команду]
	$color[ff0000]
	$footer[$username;$authorAvatar]
  $endif]`

})
bot.interactionCommand({
name: "eval",
  code: `
  $interactionReply[$if[$authorID==852906146385231872]
	$eval[$message]
	$else
	$title[<a:no:840961533848846356> Ошибка!]
	$description[-Вы не являетесь создателем данного бота!]
	$color[ff0000]
		$endif]`

})
bot.interactionCommand({
name: "clear",
  code: `
  $interactionReply[$if[$message!=]
  $clear[$message]
  $title[Очистка чата]
  $description[Участник \`$username\` очистил чат на \`$message\` сообщений]
  $color[0000аа]
  $else
$title[<a:no:840961533848846356> Ошибка!]
	$description[-Вы забыли написать кол-во удаляемыъ сообщений]
	$color[ff0000]
	$footer[$username;$authorAvatar]
  $endif]`

})
bot.interactionCommand({
name: "ping",
  code: `$interactionReply[$title[Pong!]
	$description[$ping]
	$color[0000FF]
	$footer[$username;$authorAvatar]]`

})

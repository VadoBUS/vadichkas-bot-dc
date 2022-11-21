module.exports = {
	name: "stop",
	aliases: ['s'],
  code: `
$if[$channelID==1044232414110683156]
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
  $endif`
}

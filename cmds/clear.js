module.exports = {
	name: "clear",
  code: `
  $if[$message!=]
  $clear[$message]
  $title[Очистка чата]
  $description[Участник \`$username\` очистил чат на \`$message\` сообщений]
  $color[0000ff]
  $else
$title[<a:no:840961533848846356> Ошибка!]
	$description[-Вы забыли написать кол-во удаляемыъ сообщений]
	$color[ff0000]
	$footer[$username;$authorAvatar]
  $endif
  `
}

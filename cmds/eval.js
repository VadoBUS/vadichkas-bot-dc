module.exports = {
	name: "eval",
	code: `
$if[$authorID==852906146385231872]
	$eval[$message]
	$else
	$title[<a:no:840961533848846356> Ошибка!]
	$description[-Вы не являетесь создателем данного бота!]
	$color[ff0000]
	$footer[$username;$authorAvatar]
	$endif`

}
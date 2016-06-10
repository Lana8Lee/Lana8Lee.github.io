<?php

$recepient = "lyt.svitlana@gmail.com";
$sitename = "MyCV_Site";

$name = trim($_GET["name"]);
$email = trim($_GET["email"]);
$text = trim($_GET["message"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nemail: $email \nТекст: $text";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
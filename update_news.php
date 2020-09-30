<?php
  $update = $_POST["current_news"];

  $filename = "data/newslist.json";
  $fo = fopen($filename, 'w');
  $fw = fwrite($fo, $update);
  fclose($fo);
  if ($fw) echo "Новости обновлены!";
  else echo "Error";
  echo "<br><br>";
  echo "<button><a href='http://radioznb.ru/admin.html'>Вернуться на админскую страницу</a></button>";
  echo "<button><a href='http://radioznb.ru'>Перейти на сайт радио</a></button>";
?> 

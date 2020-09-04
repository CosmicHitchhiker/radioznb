<?php
  $update = $_POST["current_schedule"];

  $filename = "data/schedule.txt";
  $fo = fopen($filename, 'w');
  $fw = fwrite($fo, $update);
  fclose($fo);
  if ($fw) echo "Расписание обновлено!";
  else echo "Error";
  echo "<br><br>";
  echo "<button><a href='http://srv88072.ht-test.ru/admin.html'>Вернуться на админскую страницу</a></button>";
  echo "<button><a href='http://srv88072.ht-test.ru'>Перейти на сайт радио</a></button>";
?>

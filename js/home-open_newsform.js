document.onkeyup=function(e){
  var e = e || window.event; // for IE to cover IEs window event-object
  var formbox = document.getElementById('home-newsform');

  if (e.altKey && e.which == 90) {
    formbox.innerHTML += '<form  id="newsform-nadd" class="newsform-nadd" onsubmit="publish()" method="post"> <input id="newsform-ntitle" class="newsform-ntitle" type="text" placeholder="Заголовок" required>  <textarea id="newsform-ncontent" type="textarea" name="newsform-ncontent"  rows="7" placeholder="Текст комментария" required></textarea> <input id="newsform-publish-btn" class="newsform-btn btn-default" type="submit" value="Добавить"></form>';

    return false;
  }
}

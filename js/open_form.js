document.onkeyup=function(e){
  var e = e || window.event; // for IE to cover IEs window event-object
  var formbox = document.getElementById('newsForm');

  if (e.altKey && e.which == 90) {
    formbox.innerHTML += '<form  id="nadd" class="nadd" onsubmit="publish()" method="post"> <input id="ntitle" class="form-control" type="text" name="ntitle"  placeholder="Заголовок" required>  <textarea id="ncontent" type="textarea" name="ncontent"  rows="7" placeholder="Текст комментария" required></textarea> <input id="publish-btn" class="btn btn-default" type="submit" value="Добавить"></form>';

    return false;
  }
}

var audio = $("#sound");
var flag = 0;
var stream_url = "https://c18.radioboss.fm:18158/stream?cb=";
var stream_url2 = "http://c22.radioboss.fm:8033/stream?cb=";

$("#player-play-button").click(function() {
  if (flag == 0) {
    audio.attr('src', stream_url + new Date().getTime());
    audio.trigger('play');
    flag = 1;
  }
});

$("#player-play-button").mouseenter(function() {
    $("#player-play-button").css("height", "17%");
}).mouseleave(function() {
  $("#player-play-button").css("height", "15%");
});

$("#player-stop-button").click(function() {
  if (flag == 1) {
    audio.trigger('pause');
    flag = 0;
  }
});

$("#player-stop-button").mouseenter(function() {
    $("#player-stop-button").css("height", "17%");
}).mouseleave(function() {
  $("#player-stop-button").css("height", "15%");
});

$("#volume-dot").mousedown(function() {
  $("#volume-dot").css("height", "75%");
}).mouseup(function() {
  $("#volume-dot").css("height", "70%");
});

/*$("#container").mouseenter(function() {
  audio.trigger('play');
}).mouseleave(function() {
  audio.trigger('pause');
  audio.prop("currentTime",audio.prop("duration"));
});*/
var audio = $("#sound");
var flag = 0;
var controlling_volume = 0;
var stream_url = "https://c18.radioboss.fm:18158/stream?cb=";
var stream_url2 = "http://c28.radioboss.fm:8068/stream?cb=";

$("img, a").on("dragstart", function(event) { event.preventDefault(); });

$("#player-play-button").click(function() {
  if (flag == 0) {
    audio.attr('src', stream_url2 + new Date().getTime());
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

// $("#volume-dot").mousedown(function() {
//   $("#volume-dot").css("height", "75%");
// }).mouseup(function() {
//   $("#volume-dot").css("height", "70%");
// });

$("#volume-control").click(function(e) {
  var pos = e.pageX - $("#volume-control").offset().left;
  var width_dot = $("#volume-dot").width();
  var width_line = $("#volume-control").width();
  var max_pos = width_line - width_dot;
  var des_pos = pos-width_dot/2
  if (des_pos < 0) des_pos = 0;
  if (des_pos > max_pos) des_pos = max_pos;
  $("#volume-dot").css("left", des_pos);
  audio.prop("volume", des_pos/max_pos);
});

$("#volume-dot").mousedown(function() {
  controlling_volume = 1;
  var pos = e.pageX - $("#volume-control").offset().left;
  var width_dot = $("#volume-dot").width();
  var width_line = $("#volume-control").width();
  var max_pos = width_line - width_dot;
  var des_pos = pos-width_dot/2
  if (des_pos < 0) des_pos = 0;
  if (des_pos > max_pos) des_pos = max_pos;
  $("#volume-dot").css("left", des_pos);
  audio.prop("volume", des_pos/max_pos);
});

$("#volume-dot").mouseup(function() {
  controlling_volume = 0;
});

$("#volume-dot").mouseleave(function() {
  controlling_volume = 0;
});

$("#volume-control").mousemove(function(e) {
  if (controlling_volume == 1) {
    var pos = e.pageX - $("#volume-control").offset().left;
    var width_dot = $("#volume-dot").width();
    var width_line = $("#volume-control").width();
    var max_pos = width_line - width_dot;
    var des_pos = pos-width_dot/2
    if (des_pos < 0) des_pos = 0;
    if (des_pos > max_pos) des_pos = max_pos;
    $("#volume-dot").css("left", des_pos);
    audio.prop("volume", des_pos/max_pos);
  }
});

/*$("#container").mouseenter(function() {
  audio.trigger('play');
}).mouseleave(function() {
  audio.trigger('pause');
  audio.prop("currentTime",audio.prop("duration"));
});*/

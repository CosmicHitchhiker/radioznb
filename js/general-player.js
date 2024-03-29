var audio = $("#player-sound");
var is_music_on = 0;
var controlling_volume = 0;
var stream_url = "https://c2.radioboss.fm:18242/stream?cb=";
var stream_url2 = "http://c28.radioboss.fm:8068/stream?cb=";

$("img, a").on("dragstart", function(event) { event.preventDefault(); });

$("#player-play-button").click(function() {
  if (is_music_on == 0) {
    audio.attr('src', stream_url + new Date().getTime());
    audio.trigger('play');
    is_music_on = 1;
  };
  $("#waves").css("visibility", "visible");
  $("#player-play-button").css("opacity", "55%");
  $("#player-stop-button").css("opacity", "100%");
});

// $("#player-play-button").mouseenter(function() {
//     $("#player-play-button").css("height", "17%");
// }).mouseleave(function() {
//   $("#player-play-button").css("height", "15%");
// });

$("#player-stop-button").click(function() {
  if (is_music_on == 1) {
    audio.trigger('pause');
    is_music_on = 0;
  };
  $("#waves").css("visibility", "hidden");
  $("#player-stop-button").css("opacity", "55%");
  $("#player-play-button").css("opacity", "100%");
});

// $("#player-stop-button").mouseenter(function() {
//     $("#player-stop-button").css("height", "17%");
// }).mouseleave(function() {
//   $("#player-stop-button").css("height", "15%");
// });

$("#player-volume-control").click(function(e) {
  var pos = e.pageX - $("#player-volume-control").offset().left;
  var width_dot = $("#player-volume-dot").width();
  var width_line = $("#player-volume-control").width();
  var max_pos = width_line - width_dot;
  var des_pos = pos-width_dot/2
  if (des_pos < 0) des_pos = 0;
  if (des_pos > max_pos) des_pos = max_pos;
  $("#player-volume-dot").css("left", des_pos);
  audio.prop("volume", des_pos/max_pos);
});

$("#player-volume-dot").mousedown(function(e) {
  controlling_volume = 1;
  var pos = e.pageX - $("#player-volume-control").offset().left;
  var width_dot = $("#player-volume-dot").width();
  var width_line = $("#player-volume-control").width();
  var max_pos = width_line - width_dot;
  var des_pos = pos-width_dot/2
  if (des_pos < 0) des_pos = 0;
  if (des_pos > max_pos) des_pos = max_pos;
  $("#player-volume-dot").css("left", des_pos);
  audio.prop("volume", des_pos/max_pos);
});

$("html").mouseup(function() {
  controlling_volume = 0;
});

// $("#player-volume-control").mouseleave(function() {
//   controlling_volume = 0;
// });

$("html").mousemove(function(e) {
  if (controlling_volume == 1) {
    var pos = e.pageX - $("#player-volume-control").offset().left;
    var width_dot = $("#player-volume-dot").width();
    var width_line = $("#player-volume-control").width();
    var max_pos = width_line - width_dot;
    var des_pos = pos-width_dot/2
    if (des_pos < 0) des_pos = 0;
    if (des_pos > max_pos) des_pos = max_pos;
    $("#player-volume-dot").css("left", des_pos);
    audio.prop("volume", des_pos/max_pos);
  }
});
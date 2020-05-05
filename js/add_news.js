// json c новостями
var newslist = {"items":[ {"title": "Lorem ipsum", "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.","date": "3 мая 2020 г."}, {"title": "Lorem ipsum", "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.","date": "2 мая 2020 г."},{"title": "Lorem ipsum", "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.","date": "2 мая 2020 г."}]};


// загружает все новости из json
function load_news() {
	var newsfeed = document.getElementById('newsFeed');
	for (i in newslist.items) {
		newsfeed.innerHTML += "<li>"+ "<div class='titleText'>" + "<label>" + newslist.items[i].title + "</label>" + "</div>" + "<div class='contentText'>" + "<p>" + newslist.items[i].content + "</p>"+ "<span class='date sub-text'>" + newslist.items[i].date + "</span>" + "</div>" + "</li>" } 
}


// загружает новую новость в json
function publish() {
	var ntitle = document.getElementById("ntitle").value;  
	var ncontent = document.getElementById("ncontent").value;
	var d = new Date();
	var months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября" , "декабря"]
	var current_date = [d.getDate(), months[d.getMonth()], d.getFullYear()].join(" ")
	var nitem = {"title": ntitle, "content": ncontent, "date": current_date};
	alert(JSON.stringify(nitem));
}



































// var newsfeed = document.getElementById('newsFeed');
// for (var i = 0; i < newslist.items[0].length; i++) {
// 	var item = newslist.items[0][i];
// 	for (var key in item) {
// 		newsfeed.innerHTML += "<li>"+ "<div class='titleText'>" + "<label>" + item.title + "</label>" + "</div>" + "<div class='contentText'>" + "<p>" + item.content + "</p>"+ "<span class='date sub-text'>" + item.date + "</span>" + "</div>" + "</li>";	
// 	}
// }


// for var (i = 0; i < data.list.length; ++i) {
// 	var item = document.createElement("li"); 
// 	item.innerHTML = data.list[i].content;
// 	newsfeed.appendChild(item);
// }




//

// newsfeed.innerHTML += newslist + "<br>"


























	// var newsfeed = document.getElementById('newsFeed');





  // newsfeed.innerHTML = "<li>"+ "<div class='titleText'>" + "<label>" + x.title + "</label>" + "</div>" + "<div class='contentText'>" + "<p>" + x.content + "</p>"+ "<span class='date sub-text'>" + x.date + "</span>" + "</div>" + "</li>" 







// var newsfeed = document.getElementById('newsFeed');

// var newslist, x;

// newslist = JSON.parse(news);


// newsfeed.innerHTML += newslist + "<br>"
// for (x in newslist) {
// 	newsfeed.innerHTML += x + "<br>";
// }

// for var (i = 0; i < data.list.length; ++i) {
// 	var item = document.createElement("li"); 
// 	item.innerHTML = data.list[i].content;
// 	newsfeed.appendChild(item);
// }




//  $.(function() {

//    var items = [];

//    $.getJSON('news.json', function(data) {
//        each(data.new-items, function(key, val) {
//        	  items.push("<li>"+ "<div class='titleText'>" + "<label>" + val.title + "</label>" + "</div>" + "<div class='contentText'>" + "<p>" + val.content + "</p>"+ "<span class='date sub-text'>" + val.date + "</span>" + "</div>" + "</li>");
//      });
//     $ 

//    });

// });

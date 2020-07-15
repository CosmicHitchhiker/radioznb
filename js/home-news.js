
// загружает все новости из json

function load_news() {

	var newsfeed = document.getElementById('home-newsfeed');

	// читает json-файл по ссылке
	$.getJSON("https://ansorox.github.io/experiments/newslist.json", function(newslist) {

		// alert(JSON.stringify(newslist.items))

	 	for (i in newslist.items) {
	 		var title = newslist.items[i].title;
	 		var content = newslist.items[i].content.replace(/\n/g, "<br/>"); 
	 		var date = newslist.items[i].date; 

			newsfeed.innerHTML += "<li>"+ "<div class='home-newsfeed-title-text'>" + "<label>" + title + "</label>" + "</div>" + "<div class='home-newsfeed-content-text'>" + "<p>" + content + "</p>" +  "<span class='home-newsfeed-date sub-text'>" + date + "</span>" + "</div>" + "</li>"
		}
	});
}


// загружает новую новость в json
function publish() {
	var ntitle = document.getElementById("newsform-ntitle").value;  
	var ncontent = document.getElementById("newsform-ncontent").value;

	var d = new Date();
	var months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября" , "декабря"]
	var current_date = [d.getDate(), months[d.getMonth()], d.getFullYear()].join(" ")
	var nitem = {"title": ntitle, "content": ncontent, "date": current_date};
	alert(JSON.stringify(nitem));

}



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

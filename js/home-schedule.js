// Загружает расписание из файла и оправляет его функции, генерирующей html
function load_schedule() {
	fetch("data/schedule.txt")
		.then(response => response.text())
		.then(text => show_schedule(text))
};

function show_schedule(sched_text) {
	// Элемент, в который вставляется код
	const schedule_table = document.getElementById('home-schedule-table');

	// Предваряющий текст до времени передач (всё до двойного переноса строки)
	var pretext = sched_text.split(/[\n\r]{3}/g)[0];	
	const schedule_pretext = document.getElementById('home-schedulde-pretext');
	schedule_pretext.innerHTML += "<p>" + pretext.replace(/[\r\n]+/g, "<br>"); + "</p>";

	// Из текста расписания выбираются строки с указанием времени
	function check_program(line) {
		const regex = RegExp(/\d\d*:\d\d\s+-\s+/g);
		return regex.test(line)
	};
	const program_array = sched_text.split(/[\n\r]/g).filter(check_program);

	// Для каждой программы создается строка в таблице
	for (i = 0; i < program_array.length; i++) {
		var prog_time = program_array[i].split(/\s\-\s(.+)/)[0];
		var prog_description = program_array[i].split(/\s\-\s(.+)/)[1];
		schedule_table.innerHTML += "<tr>" + "<td class='prog_time'>" + prog_time + "</td>" + 
										"<td>" + prog_description + "</td>" + "</tr>";
	};
}
	

// Сравнение текущего времени со временем передач и выделение текущей программы 
function updateSchedule(hours, min) {

	var curr_time = [hours, min].join(":");

	// Парсер времени в формате "HH:ММ"
	var parseTime = d3.timeParse("%H:%M");
	
	// Собираем время передач из расписания в массив
	var prog_time_ByCLass = document.getElementsByClassName('prog_time');
	var prog_time_array = [];
	for (i = 0; i < prog_time_ByCLass.length; i++) {
		prog_time_array.push(prog_time_ByCLass[i].innerText);
	}

	// Определяется положение текущего времени в сортированном массиве со временем передач
	prog_time_array.push(curr_time);
	var prog_time_array_sorted = prog_time_array.sort();

	// Передачи до 2х ночи включаются в текущий день
	var add2evening = prog_time_array_sorted.filter(function(item){
		prog_time_h = item.split(":")[0];
		return prog_time_h == "00" ||  prog_time_h == "01" ||  prog_time_h == "02";
	});
	var prog_time_array_real = prog_time_array_sorted.splice(add2evening.length, prog_time_array_sorted.length);
	prog_time_array_real.push(add2evening);

	curr_time_index = prog_time_array_real.indexOf(curr_time);

	// Прошедшим и текущей передачам добавляются соответствующие классы
	for (i = 0; i < prog_time_ByCLass.length; i++) {
		var prog = prog_time_ByCLass[i];
		if (i < curr_time_index - 1) {
			prog.parentElement.classList.add("shedule-prog-past");
		}
		if (i == curr_time_index - 1) {
			for (j = 0; j < prog_time_ByCLass.length; j++){
				// Убрать статус текущей у всех остальных передач
				prog.parentElement.classList.remove("shedule-prog-current");
			}
			prog.parentElement.classList.add("shedule-prog-current"); 
		}
	}
}

/* Функция проверки текущего времени. Выполняется с интервалом 
указанным при вызове функции в index.html */
function updateClock() {
	var dat = new Date();
	var hours = dat.getHours();
	var min = dat.getMinutes();

	if (hours < 10) { hours = "0" + hours}; 
	if (min < 10) { min = "0" + min}; 

	updateSchedule(hours, min);
}


// Загрузка новой новости в json
// function publish() {
// 	var ntitle = document.getElementById("newsform-ntitle").value;  
// 	var ncontent = document.getElementById("newsform-ncontent").value;

// 	var d = new Date();
// 	var months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября" , "декабря"]
// 	var current_date = [d.getDate(), months[d.getMonth()], d.getFullYear()].join(" ")
// 	var nitem = {"title": ntitle, "content": ncontent, "date": current_date};
// 	alert(JSON.stringify(nitem));

// }



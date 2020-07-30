var programs_current = [	
							{
								"title": "музыкальная кухня",
								"description": "",
								"author": "Яна Сидорова",
								"tags": [""]
							},
							{
								"title": "фрустайл",
								"description": "",
								"author": "Юля",
								"tags": [""]
							},
							{
								"title": "крок мадам",
								"description": "крок мадам",
								"author": "Саша",
								"tags": [""]
							},
							{
								"title": "заплыв",
								"description": "заплыв",
								"author": "Лиза Плавинская",
								"tags": [""]
							},
							{
								"title": "лапша в уши",
								"description": "лапша в уши",
								"author": "Катя Лапша",
								"tags": [""]
							},
							{
								"title": "медицина по верхам",
								"description": "",
								"author": "Доктор Наташа",
								"tags": [""]
							},
							{
								"title": "лекторий",
								"description": "",
								"author": "Ульяна Леонова",
								"tags": [""]
							},
							{
								"title": "радиосаша",
								"description": "радио саша",
								"author": "Саша Сергиенко",
								"tags": [""]
							},
							{
								"title": "пип",
								"description": "пип",
								"author": "Андрей и Тася",
								"tags": [""]
							},
							{
								"title": "элементарное слушание музыки",
								"description": "элементарное слушание музыки",
								"author": "Муся Короткова",
								"tags": ["музыкальная", "классика"]
							},
							{
								"title": "звёздный час",
								"description": "программа про астрономию",
								"author": "Сева Ландер", 
								"tags": ["познавательная", "научпоп"]			
							},
							{
								"title": "сто магнитоальбомов",
								"description": "чтение и слушание кушнира",
								"author": "Матвей", 								
								"tags": ["музыкальная", "отечественная музыка"]
							}
						];


var programs_past = [
						{
							"title": "чешем языком",
							"description": "программа про лингвистику и философию",
							"author": "муха",
							"tags": ["философия", "чесание"]
						}
					];

// Текущие передачи
var list = document.getElementById('regulars-accordion-current-list');
for (i = 0; i < programs_current.length; i++) { 
	list.innerHTML += '<li>' +
						'<button class="accordion-program-title" id="accordion-control-' + i + '">' + 
						'<span>' + programs_current[i].title + '</span>' +
						'</button>' + 
						'<div class="accordion-program-content" id="content-' + i + '">' + 
							'<p>' + programs_current[i].description +'</p>' + 
							'<p>ведущий: ' + programs_current[i].author +'</p>' + 
							'<tag>теги: ' + programs_current[i].tags.join(', ') + '</tag>' +
						'</div>'+
					  '</li>'
} 

var list_past = document.getElementById('regulars-accordion-past-list');
for (i = 0; i < programs_past.length; i++) { 
	list_past.innerHTML += '<li>' +
						'<button class="accordion-program-title" id="accordion-control-' + i + '">' + 
						'<span>' + programs_past[i].title + '</span>' + 
						'</button>' + 
						'<div class="accordion-program-content" id="content-' + i + '">' + 
							'<p>' + programs_past[i].description +'</p>' + 
							'<p>ведущий: ' + programs_past[i].author +'</p>' + 
							'<tag>теги: ' + programs_past[i].tags.join(', ') + '</tag>' +
						'</div>'+
					  '</li>'
} 
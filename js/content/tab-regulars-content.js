/* -------------------- Загрузка списка передач --------------------- */

// Загрузка данных из файла
fetch("data/program_list.json")
  .then(response => response.json())
  .then(data => insert_all(data));

//  Загрузка данных, закончившиеся передачи
fetch("data/program_past_list.json")
  .then(response => response.json())
  .then(data => insert_programs(data,  "regulars-accordion-past-list"));

// Вставить в аккордеон
// function insert_programs(data, list_id) {
//   let list = document.getElementById(list_id);
//   for (i = 0; i < data.length; i++) { 
//     list.innerHTML += '<li>' +
//               '<div class="accordion-program-title" id="accordion-control-' + i + '">' + 
//               '<span>' + data[i].title + '</span>' +
//               '</div>' + 
//               '<div class="accordion-program-content" id="content-' + i + '">' + 
//                 '<p>' + data[i].description +'</p>' + 
//                 '<p>ведёт: ' + data[i].author +'</p>' +
//                 '</div>'+
//               '</li>';
//   };
// };


// function insert_programs(data, list_id) {
//   let list = document.getElementById(list_id);
//   for (i = 0; i < data.length; i++) {
//     list.innerHTML += `<li>
//                         <button class="accordion-program-title">
//                           <span>` + data[i].title.replace(/[\r\n]+/g, "<br>")+ `</span>
//                         </button>
//                         <div class="accordion-program-content">
//                           <p>` + data[i].description + `</p>` + show_author(data[i].author) + 
//                        `</div>
//                        </li>`;
//   };
// }

function show_author(name) {
  if(name !== "") {
    return "<p>ведёт: " + name + "</p>"
  } else {return ""} 
}


function insert_tabs(data) {
  let tablinks_l = document.getElementById("prog_tablinks-left");
  let tablinks_r = document.getElementById("prog_tablinks-right");
  let tabpages = document.getElementById("prog_tabpages");

  for (i = 0; i < data.length; i++) {
    if (i <= data.length / 2) {
    tablinks_l.innerHTML += `<button class="tab-program-title" onclick="openProg(event, 'prog-tab-` + i+ `')">
                            <span>` + data[i].title.replace(/[\r\n]+/g, "<br>") + `</span>
                          </button>`;
    } else { tablinks_r.innerHTML += `<button class="tab-program-title" onclick="openProg(event, 'prog-tab-` + i+ `')">
                            <span>` + data[i].title.replace(/[\r\n]+/g, "<br>") + `</span>
                          </button>`;
    }
    tabpages.innerHTML += `<div class="tab-program-content" id="prog-tab-` + i + `">
                            <h2>` + data[i].title.replace(/[\r\n]+/g, " ")+ `</h2>
                            <p>` + data[i].description.replace(/[\r\n]+/g, "<br>") + `</p>` + show_author(data[i].author) + 
                          `</div>`;    
  };
}

function insert_all(data) {
  insert_tabs(data);  
}
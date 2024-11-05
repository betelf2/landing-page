import { loadJsonData } from './utils/json-reader.js'

var data = await loadJsonData("data/avisos.json");
var noticeBoardContainer = document.getElementById("avisos");

var noticeBoardHead =
`
 <link href="styles/notice-board.css" rel="stylesheet">
 <section id="notice-board" class="bg-light">
    <div class="container">
        <h2 class="text-center mb-4">Quadro de Avisos</h2>
        <div class="row justify-content-center">
            <div class="col-md-8">
                <ul class="list-group">`

var noticeBoardBody = ""               
data.forEach(element => {
    noticeBoardBody += `<li class="list-group-item d-flex 
                            justify-content-between 
                            align-items-center 
                            notice-board-item">`

    noticeBoardBody += element.link != "" ? `<a href="${element.link}">` : `<a>`

    noticeBoardBody += `<b>${element.titulo}</b> ${element.descricao} </a></li>`
});

var noticeBoardTail =
`
                </ul>
            </div>
        </div>
    </div>
 </section><!-- Quadro de Avisos -->`

noticeBoardContainer.innerHTML = noticeBoardHead + noticeBoardBody + noticeBoardTail
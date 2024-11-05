import { loadJsonData } from './utils/json-reader.js'

var data = await loadJsonData("data/horarios.json");
var scheduleContainer = document.getElementById("horarios");

var scheduleHead =
`
 <link href="styles/schedule.css" rel="stylesheet">
 <section id="worship-schedule" class="bg-light">
    <div class="container">
        <h2 class="text-center mb-4">Horários dos Cultos</h2>
        <div class="row justify-content-center">
            <div class="col-md-8">
                <ul class="list-group">`

var scheduleBody = ""               
data.forEach(element => {
    scheduleBody +=
    `<li class="list-group-item d-flex justify-content-between align-items-center schedule-item">
        ${element.dia} – ${element.tipo}
        <span>${element.horario}</span>
    </li>`
});

var scheduleTail =
`
                </ul>
            </div>
        </div>
    </div>
 </section><!-- Horário dos Cultos -->`

scheduleContainer.innerHTML = scheduleHead + scheduleBody + scheduleTail
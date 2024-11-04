import { loadJsonData } from './utils/json-reader.js'

async function gerarAvisos()
{
    var data = await loadJsonData("data/avisos.json");
    var avisosContainer = document.getElementById("avisos");

    var classeFundoClaro = "avs-light-bg";
    var classeFundoEscuro = "avs-dark-bg";
}

const avisosContainer = document.getElementById("avisos");

const avisosData = `
            <footer>
                <style>
                    footer 
                    {
                        background-color: #000000;
                        padding: 20px 0;
                        color: #ffffff;
                    }
                </style>
                <div class="container text-center"> <!-- Centraliza elementos na linha -->
                    <p>Betel Brasileiro Funcionários II &copy; 2024</p>
                </div>
            </footer>
        `;

avisosContainer.innerHTML += avisosData;
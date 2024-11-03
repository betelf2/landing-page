import { getDataFromCurrentURL } from "./utils/url-handler.js";
import { loadJsonData } from './utils/json-reader.js'

async function getHeaderData(dadosDaURL)
{
    var data = [ 'Erro', 'Ministério ou departamento não encontrado', ''  ]

    // Ministerios
    var ministerios = await loadJsonData("data/ministerios.json")

    if(ministerios != null && ministerios != undefined && dadosDaURL.ministerio != undefined)
    {
        ministerios.forEach((ministerio) => {
            if(ministerio.hrefKey.toUpperCase() == dadosDaURL.ministerio.toUpperCase())
            {
                data = [ ministerio.titulo, ministerio.descricao, ministerio.imagem ]
            }
        })
    }

    // Departamentos
    var departamentos = await loadJsonData("data/departamentos.json")

    if(departamentos != null && departamentos != undefined && dadosDaURL.departamento != undefined)
    {
        departamentos.forEach((departamento) => {
            if(departamento.hrefKey.toUpperCase() == dadosDaURL.departamento.toUpperCase())
            {
                data = [ departamento.titulo, departamento.descricao, departamento.imagem ];
            }
        })
    }

    return data
}

async function generateHeader()
{
    var dadosDaURL = getDataFromCurrentURL();
    var headerData = await getHeaderData(dadosDaURL);

    console.log(headerData)
   
    var headerContainer = document.getElementById("header");
    var headerHtml = `
        <header class="hero d-flex align-items-center" id="home">

        <style>
        .hero {
            background-image: url('${headerData[2]}'); 
        }
        </style>

        <div class="container text-center">
            <h1>${headerData[0]}</h1>
            <p class="lead">${headerData[1]}</p>
        </div>
        </header>
    `;

    headerContainer.innerHTML += headerHtml;
}

generateHeader()
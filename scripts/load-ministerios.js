import { loadJsonData } from './utils/json-reader.js'

async function criarMinisterios()
{
    var ministerios = await loadJsonData("data/ministerios.json")

    if(ministerios == null)
        return

    const ministeriosSection = document.getElementById("ministerios-section");

    // Gera os cards em grupos de três
    ministerios.forEach((ministerio, index) => {
        // Cria um novo contêiner a cada três elementos
        if (index % 3 === 0) {
            const row = document.createElement("div");
            row.className = "row mb-4 justify-content-center"; // Centraliza elementos na linha
            row.id = `ministerios-container-${Math.floor(index / 3)}`;
            ministeriosSection.appendChild(row);
        }

        // Seleciona o último contêiner de linha para inserir o card
        const ministeriosContainer = document.getElementById(`ministerios-container-${Math.floor(index / 3)}`);

        // Cria o HTML do cartão de cada ministério
        const cartaoDoMinisterio = `
            <div class="col-md-4 mb-4 d-flex align-items-stretch">
            <div class="card h-100 shadow-sm border-0">
                <!--<img src="${ministerio.imagem}" class="card-img-top" alt="${ministerio.titulo}">-->
                <div class="card-body">
                <h5 class="card-title">${ministerio.titulo}</h5>
                <p class="card-text">${ministerio.descricao}</p>
                <a href="side-sections.html?ministerio=${ministerio.link}" class="btn btn-primary ministerios-btn">Saiba Mais</a>
                </div>
            </div>
            </div>
        `;

        // Adiciona o card ao contêiner atual
        ministeriosContainer.innerHTML += cartaoDoMinisterio;
    });
}

criarMinisterios()
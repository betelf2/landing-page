import { getDataFromCurrentURL } from "./utils/url-handler.js";

const DEPARTAMENTOS =
{ 
    INFANTIL: 'DEIBB'.toUpperCase(), 
    ADOLESCENTES: 'TEENS'.toUpperCase(), 
    JOVENS: 'ELO'.toUpperCase(), 
    HOMENS: 'DEHOBB'.toUpperCase(), 
    MULHERES: 'DEMUBB'.toUpperCase()
};

const MINISTERIOS =
{ 
    MISSOES: 'MISSOES'.toUpperCase(), 
    SOCIAL: 'SOCIAL'.toUpperCase(), 
    INFANTIL: 'INFANTIL'.toUpperCase(), 
    LOUVOR: 'LOUVOR'.toUpperCase(), 
    DANCA: 'DANCA'.toUpperCase(), 
    TEATRO: 'TEATRO'.toUpperCase(), 
    COMUNICACAO: 'COMUNICACAO'.toUpperCase(), 
    INTERCESSAO: 'INTERCESSAO'.toUpperCase(), 
    CASAIS: 'CASAIS'.toUpperCase()
};

const IMAGE_ROOT = "../../images/projetos"

const projetos = [
    { 
        titulo: "Seara dos Pequeninos", 
        descricao: "Evangelização Infantil", 
        imagem: `${IMAGE_ROOT}/seara.jpg`, 
        ministerios: [MINISTERIOS.INFANTIL, MINISTERIOS.MISSOES] ,
        departamentos: [DEPARTAMENTOS.INFANTIL]
    },
    { 
        titulo: "Feira das nações", 
        descricao: "Feira", 
        imagem: `${IMAGE_ROOT}/feiraDasNacoes.jpg`, 
        ministerios: [MINISTERIOS.MISSOES] ,
        departamentos: []
    },
    { 
        titulo: "EMADE", 
        descricao: "Encontro das Mulheres Amadas por Deus", 
        imagem: `${IMAGE_ROOT}/emade.jpg`, 
        ministerios: [] ,
        departamentos: [DEPARTAMENTOS.MULHERES]
    },
    { 
        titulo: "Projeto Presente", 
        descricao: "Projeto que visa...", 
        imagem: `${IMAGE_ROOT}/projetoPresente.jpg`, 
        ministerios: [MINISTERIOS.SOCIAL] ,
        departamentos: []
    },  
    { 
        titulo: "CrossOver", 
        descricao: "Projeto que visa...", 
        imagem: `${IMAGE_ROOT}/projetoPresente.jpg`, 
        ministerios: [] ,
        departamentos: [DEPARTAMENTOS.JOVENS]
    },    
    { 
        titulo: "Celebra Teen", 
        descricao: "Projeto que visa...", 
        imagem: `${IMAGE_ROOT}/projetoPresente.jpg`, 
        ministerios: [] ,
        departamentos: [DEPARTAMENTOS.ADOLESCENTES]
    },  
]

function getProjetosWithData(data)
{
    if(data == null)
        return []
        
    var tmp = [];

    projetos.forEach((projeto) => 
    {
        if(projeto.ministerios.includes(data.ministerio))
        {
            tmp.push(projeto);
        }
        else if(projeto.departamentos.includes(data.departamento))
        {
            console.log(projeto.departamentos)
            tmp.push(projeto);
        }
    });

    return tmp;
}

// INSERINDO DENTRO DO HTML -------------------------
function desativarSessaoDosProjetos()
{
    document.getElementById("projetos").classList.add("disabled");
}

function configurarSessaoDosProjetos()
{
    var dadosDaURL = getDataFromCurrentURL();
    var projetosFiltrados = getProjetosWithData(dadosDaURL);

    if(projetosFiltrados.length <= 0)
    {
        desativarSessaoDosProjetos();
        return;
    }
        
    var section = document.getElementById("projetos-section");

    // Gera os cards em grupos de três
    projetosFiltrados.forEach((projeto, index) => {
        // Cria um novo contêiner a cada três elementos
        if (index % 3 === 0) {
            const row = document.createElement("div");
            row.className = "row mb-4 justify-content-center"; // Centraliza elementos na linha
            row.id = `projetos-container-${Math.floor(index / 3)}`;
            section.appendChild(row);
        }
        
        // Seleciona o último contêiner de linha para inserir o card
        const container = document.getElementById(`projetos-container-${Math.floor(index / 3)}`);
        
        // Cria o HTML do card
        const card = `
            <div class="col-md-4 mb-4 d-flex align-items-stretch">
            <div class="card h-100 shadow-sm border-0">
                <img src="${projeto.imagem}" class="card-img-top" alt="${projeto.titulo}">
                <div class="card-body">
                <h5 class="card-title">${projeto.titulo}</h5>
                <p class="card-text">${projeto.descricao}</p>
                </div>
            </div>
            </div>
        `;
        
        // Adiciona o card ao contêiner atual
        container.innerHTML += card;
    }); 
}

configurarSessaoDosProjetos();
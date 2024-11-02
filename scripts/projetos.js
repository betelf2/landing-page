const DEPARTAMENTOS =
{ 
    DEIBB: 'DEIBB', 
    CONECTA_TEENS: 'ConectaTeens', 
    ELO: 'ELO', 
    DEHOBB: 'DEHOBB', 
    DEMUBB: 'DEMUBB'
};

const MINISTERIOS =
{ 
    MISSOES: 'MISSOES', 
    SOCIAL: 'SOCIAL', 
    INFANTIL: 'INFANTIL', 
    LOUVOR: 'LOUVOR', 
    DANCA: 'DANCA', 
    TEATRO: 'TEATRO', 
    COMUNICACAO: 'COMUNICACAO', 
    INTERCESSAO: 'INTERCESSAO', 
    CASAIS: 'CASAIS'
};

const IMAGE_ROOT = "../../images/projetos"

const projetos = [
    { 
        titulo: "Seara dos Pequeninos", 
        descricao: "Evangelização Infantil", 
        imagem: `${IMAGE_ROOT}/seara.jpg`, 
        ministerios: [MINISTERIOS.INFANTIL, MINISTERIOS.MISSOES] ,
        departamentos: [DEPARTAMENTOS.DEIBB]
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
        departamentos: [DEPARTAMENTOS.DEMUBB]
    },
    { 
        titulo: "Projeto Presente", 
        descricao: "Projeto que visa...", 
        imagem: `${IMAGE_ROOT}/projetoPresente.jpg`, 
        ministerios: [MINISTERIOS.SOCIAL] ,
        departamentos: []
    },   
]

// Receuperar dados passados via url
function getDataFromURL()
{
    var url = document.location.href

    try 
    {
        var params = url.split('?')[1].split('&')
    } 
    catch (error) 
    {
        return null
    }
    
    var data = {}
    var tmp;

    for(var i = 0, l = params.length; i < l; i++)
    {
        tmp = params[i].split('=');
        data[tmp[0]] = tmp[1].toUpperCase()
    }

    return data;
}

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
    var dadosDaURL = getDataFromURL();
    var projetosFiltrados = getProjetosWithData(dadosDaURL);

    console.log(projetos)

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
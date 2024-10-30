const ministerios = [
{ 
    titulo: "Missões", 
    descricao: "Levando a palavra de Deus aos quatro cantos do mundo, nosso ministério de missões atua em diversas frentes.", 
    imagem: "images/missoes.jpg", 
    link: "#missoes"
},
{ 
    titulo: "Social", 
    descricao: "Com ações voltadas para a comunidade, o ministério social trabalha para transformar vidas.", 
    imagem: "images/social.jpg", 
    link: "#social"
},
{ 
    titulo: "Infantil", 
    descricao: "Nosso ministério infantil oferece um ambiente seguro e acolhedor para as crianças aprenderem sobre Deus.", 
    imagem: "images/infantil.jpg", 
    link: "#infantil"
},
{ 
    titulo: "Louvor", 
    descricao: "Nosso ministério de louvor busca guiar a congregação em adoração a Deus.", 
    imagem: "images/louvor.jpg", 
    link: "#louvor"
},
{ 
    titulo: "Dança", 
    descricao: "Expressamos nossa adoração a Deus através da dança, um ministério de celebração.", 
    imagem: "images/danca.jpg", 
    link: "#danca"
},
{ 
    titulo: "Teatro", 
    descricao: "Usamos o teatro para transmitir mensagens impactantes e inspirar a comunidade.", 
    imagem: "images/teatro.jpg", 
    link: "#teatro"
},
{ 
    titulo: "Comunicação", 
    descricao: "Usamos o teatro para transmitir mensagens impactantes e inspirar a comunidade.", 
    imagem: "images/comunicacao.jpg", 
    link: "#comunicacao"
},
{ 
    titulo: "Interseção", 
    descricao: "Intercedemos.", 
    imagem: "images/comunicacao.jpg", 
    link: "#comunicacao"
},
{ 
    titulo: "Casais", 
    descricao: "Somos casados.", 
    imagem: "images/comunicacao.jpg", 
    link: "#comunicacao"
},
];

const section = document.getElementById("ministerios-section");

// Gera os cards em grupos de três
ministerios.forEach((ministerio, index) => {
// Cria um novo contêiner a cada três elementos
if (index % 3 === 0) {
    const row = document.createElement("div");
    row.className = "row mb-4 justify-content-center"; // Centraliza elementos na linha
    row.id = `ministerios-container-${Math.floor(index / 3)}`;
    section.appendChild(row);
}

// Seleciona o último contêiner de linha para inserir o card
const container = document.getElementById(`ministerios-container-${Math.floor(index / 3)}`);

// Cria o HTML do card
const card = `
    <div class="col-md-4 mb-4 d-flex align-items-stretch">
    <div class="card h-100 shadow-sm border-0">
        <img src="${ministerio.imagem}" class="card-img-top" alt="${ministerio.titulo}">
        <div class="card-body">
        <h5 class="card-title">${ministerio.titulo}</h5>
        <p class="card-text">${ministerio.descricao}</p>
        <a href="${ministerio.link}" class="btn btn-primary ministerios-btn">Saiba Mais</a>
        </div>
    </div>
    </div>
`;

// Adiciona o card ao contêiner atual
container.innerHTML += card;
});

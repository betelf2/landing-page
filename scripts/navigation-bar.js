import { loadJsonData } from './utils/json-reader.js'

let navigationBarContainer = document.getElementById("navigation-bar");

const navb_logo =  `
<a class="navbar-brand" href="index.html">
    <img src="images/logo-betel-branca.png" width="20%" alt="Feature 1">
</a>`

const navb_toggler = `
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>`

const navb_historiaDaIgreja = 
`<!-- História da Igreja -->
<li class="nav-item"> <a class="nav-link" href="#historia">História da Igreja</a> </li>`

const navb_localizacao = 
`
<!-- Localização -->
<li class="nav-item"> <a class="nav-link" href="#localizacao">Localização</a> </li>
`

const navb_horario = 
`
<!-- Horário -->
<li class="nav-item"> <a class="nav-link" href="#horario">Horário dos Cultos</a> </li>
`

const navb_avisos = 
`
<!-- Horário -->
<li class="nav-item"> <a class="nav-link" href="#avisos">Avisos</a> </li>
`

const navb_contato = 
`
<!-- Horário -->
<li class="nav-item"> <a class="nav-link" href="#contatos">Contato</a> </li>
`

const navigationBarStyle =
`
.dropdown-item
{
    color: black;
    background-color: white;
}

.dropdown-item:hover
{
    color: black;
    background-color: #FCAC21;
}

.nav-link
{
    color: #ffffff !important;
}

.navbar
{
    background-color: #000000;
    position: fixed;
    z-index: 1000;
    top: 0;
    width: 100%;
}

.navbar-toggler
{
    border: none;
}
`

async function createDropdown(title, options, hrefTag)
{
    var dataHead = `
    <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        ${title}
    </a>
    <div class="dropdown-menu" aria-labelledby="navbarDropdown">`

    var dataBody = ""

    var dataTail = `    </div>
                    </li>`

    options.forEach((option) => {
        dataBody += `<a class="dropdown-item" href="side-sections.html?${hrefTag}=${option.link}">${option.titulo}</a>`
    });

    return dataHead + dataBody + dataTail
}

async function createDropdownFromJson(title, jsonAddr, hrefTag)
{
    var options = await loadJsonData(jsonAddr)

    if(options == null)
        return null

    return createDropdown(title, options, hrefTag);
}

async function createNavigationBar()
{
    var navb_ministerios = await createDropdownFromJson('Ministérios', "data/ministerios.json", 'ministerio');
    var navb_departamentos = await createDropdownFromJson('Departamentos', "data/departamentos.json", 'departamento');

    const navigationBarData = 
    `
        <!-- Navigation Bar -->
        <nav class="navbar navbar-expand-lg navbar-dark">
            <style>${navigationBarStyle}</style>
            <div class="container">
                ${navb_logo}\n
                ${navb_toggler}\n
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        ${navb_historiaDaIgreja}
                        ${navb_ministerios}
                        ${navb_departamentos}
                        ${navb_localizacao}
                        ${navb_horario}
                        ${navb_avisos}
                        ${navb_contato}
                    </ul>
                </div> <!-- colapse -->
            </div> <!-- container -->
        </nav><!-- Navigation Bar -->
    `;

    navigationBarContainer.innerHTML += navigationBarData;
}

createNavigationBar();
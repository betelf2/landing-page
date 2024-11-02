let navigationBarContainer = document.getElementById("navigation-bar");

const logo =  `
<a class="navbar-brand" href="#">
    <img src="images/logo-betel-branca.png" width="25%" alt="Feature 1">
</a>`

const toggler = `
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>`

const historiaDaIgreja = 
`<!-- História da Igreja -->
<li class="nav-item"> <a class="nav-link" href="#historia">História da Igreja</a> </li>`

const galeriaDeFotos = 
`
<!-- Galeria de Fotos -->
<li class="nav-item"> <a class="nav-link" href="#galeria">Galeria de Fotos</a> </li>
`

const ministerios = 
`
<!-- Dropdown de Ministérios -->
<li class="nav-item dropdown">
<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Ministérios
</a>
<div class="dropdown-menu" aria-labelledby="navbarDropdown">
    <a class="dropdown-item" href="#ministerios">Missões</a>
    <a class="dropdown-item" href="#ministerios">Social</a>
    <a class="dropdown-item" href="#ministerios">Infantil</a>
    <a class="dropdown-item" href="#ministerios">Aviva-nos (Louvor)</a>
    <a class="dropdown-item" href="#ministerios">Maleah (Dança)</a>
    <a class="dropdown-item" href="#ministerios">Teatro</a>
    <a class="dropdown-item" href="#ministerios">Comunicação</a>
</div>
</li><!-- Dropdown de Ministérios -->
`

const departamentos = 
`
<!-- Dropdown de Departamentos -->
<li class="nav-item dropdown">
<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Departamentos
</a>
<div class="dropdown-menu" aria-labelledby="navbarDropdown">
    <a class="dropdown-item" href="#departamentos">DEIBB (Infantil)</a>
    <a class="dropdown-item" href="#departamentos">Conecta Teens (Adolescentes)</a>
    <a class="dropdown-item" href="#departamentos">ELO (Jovens)</a>
    <a class="dropdown-item" href="#departamentos">DEHOBB (Homens)</a>
    <a class="dropdown-item" href="#departamentos">DEMUBB (Mulheres)</a>
</div>
</li><!-- Dropdown de Departamentos -->
`

const localizacao = 
`
<!-- Localização -->
<li class="nav-item"> <a class="nav-link" href="#localizacao">Localização</a> </li>
`

const membros = 
`
<!-- Membros -->
<li class="nav-item"> <a class="nav-link" href="#localizacao">Para Membros</a> </li>
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
}

.navbar-toggler
{
    border: none;
}
`

const navigationBarData = `
    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-dark">
        <style>${navigationBarStyle}</style>
        <div class="container">
            ${logo}\n
            ${toggler}\n
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    ${historiaDaIgreja}
                    ${galeriaDeFotos}
                    ${ministerios}
                    ${departamentos}
                    ${localizacao}
                    ${membros}
                </ul>
            </div> <!-- colapse -->
        </div> <!-- container -->
    </nav><!-- Navigation Bar -->
`;

navigationBarContainer.innerHTML += navigationBarData;
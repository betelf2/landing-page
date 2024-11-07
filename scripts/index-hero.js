import { parallaxEffect, gifEffect, darkOverlayEffect } from './utils/visual-effects.js'

// Gera hero com os dados passados
function generateHTML(images, title, description, buttonText, buttonHref)
{
    var data = `<header class="hero d-flex align-items-center">
                    <div class="hero-img-overlay">`

    // Adiciona array de imagens
    images.forEach((image, index) => 
    {
        data += `<img src="${image}" alt="Imagem ${index}" class="hero-bg-image ${index === 0 ? 'hero-img-active' : ''}">`;
    });      

    data += `   <div class="hero-dark-overlay"></div>
                </div> <!-- hero-img-overlay -->
                <div class="container text-center position-relative">
                    <h1>${title}</h1>
                    <p class="lead">${description}</p>
                    <a href="${buttonHref}" class="btn btn-hero mt-4">${buttonText}</a>
                </div> <!-- container -->
            </header>`

    // aplica no html
    const heroContainer = document.getElementById("index-hero");
    heroContainer.innerHTML += data;
}

// Ativa efeitos visual no hero
function enableListeners()
{
    document.addEventListener('DOMContentLoaded', function () 
    {
        const images = document.querySelectorAll('.hero-img-overlay .hero-bg-image');
        const darkOverlayElement = document.querySelector('.hero-dark-overlay');
        var parallaxFactor = 0.5;
        var gifTransitionTime = 5000;

        parallaxEffect(images, parallaxFactor);
        gifEffect(images, gifTransitionTime, 'hero-img-active');
        darkOverlayEffect(darkOverlayElement);
    }); 
}

function generateMainHero()
{
    var images = []; 

    for(let i = 0; i <= 6; i++)
        images.push(`images/hero/main/${i}.jpg`)

    var title = "Betel Brasileiro Funcionários II";
    var description = "Maneja bem a palavra da verdade";
    var buttonText = "Venha nos visitar";
    var buttonHref = "#localizacao";

    generateHTML(images, title, description, buttonText, buttonHref);
    enableListeners();
}

function generateAlternativeHero()
{
    var images = []; 

    for(let i = 0; i <= 6; i++)
        images.push(`images/hero/alternative/${i}.jpg`)

    var title = "Avanço Missionário 2024";
    var description = "Bahia da Traição";
    var buttonText = "Faça a sua Inscrição";
    var buttonHref = "side-sections.html?ministerio=missoes";

    generateHTML(images, title, description, buttonText, buttonHref);
    enableListeners();
}

generateMainHero()
//generateAlternativeHero()
enableListeners()
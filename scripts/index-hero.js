// Efeito parallax ao rolar pela tela
function parallaxEffect(images, factor)
{
    var images = document.querySelectorAll('.hero-img-overlay .hero-bg-image');

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        images.forEach(image => {
        image.style.transform = `translateY(${scrollTop * factor}px)`;
        });
    });
}

// Apresenta fotos semelhante ao formato gif
function gifEffect(images, transitionTime)
{
    let currentIndex = 0;

    setInterval(() => {
        images[currentIndex].classList.remove('hero-img-active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('hero-img-active');
    }, transitionTime); // Troca a imagem a cada x segundos
}

// Escurece imagem ao rolar pela tela
function darkOverlayEffect()
{
    const darkOverlay = document.querySelector('.hero-dark-overlay');

    // Efeito de escurecimento com rolagem
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const maxScroll = window.innerHeight; // Ajuste o valor máximo de rolagem
        const opacity = Math.min(scrollTop / maxScroll, 1); // Limita a opacidade de 0 a 1
        darkOverlay.style.opacity = opacity;
    });
}

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
        var parallaxFactor = 0.5;
        var gifTransitionTime = 5000;

        parallaxEffect(images, parallaxFactor);
        gifEffect(images, gifTransitionTime);
        darkOverlayEffect();
    }); 
}

function generateMainHero()
{
    var images = ["images/1600x900.png", "images/1080x1920.png"]; 
    var title = "Betel Brasileiro Funcionários II";
    var description = "Maneja bem a palavra da verdade";
    var buttonText = "Venha nos visitar";
    var buttonHref = "#localizacao";

    generateHTML(images, title, description, buttonText, buttonHref);
    enableListeners();
}

generateMainHero()
enableListeners()
// Efeito parallax ao rolar pela tela
export function parallaxEffect(items, factor)
{
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        items.forEach(image => {
        image.style.transform = `translateY(${scrollTop * factor}px)`;
        });
    });
}

// Apresenta fotos semelhante ao formato gif
export function gifEffect(items, transitionTime, onEnabledClassName)
{
    let currentIndex = 0;

    setInterval(() => {
        items[currentIndex].classList.remove(onEnabledClassName);
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add(onEnabledClassName);
    }, transitionTime); // Troca a imagem a cada x segundos
}

// Escurece imagem ao rolar pela tela
export function darkOverlayEffect(element)
{
    // Efeito de escurecimento com rolagem
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const maxScroll = window.innerHeight; // Ajuste o valor máximo de rolagem
        const opacity = Math.min(scrollTop / maxScroll, 1); // Limita a opacidade de 0 a 1
        element.style.opacity = opacity;
    });
}
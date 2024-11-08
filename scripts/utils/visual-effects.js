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

    // Configurações iniciais: torna a primeira imagem visível e as outras invisíveis
    items.forEach((item, index) => {
        if (index === 0) {
            items[index].style.setProperty("z-index", "1", "important"); // Z-index maior para garantir prioridade
        } else {
            items[index].style.setProperty("z-index", "0", "important"); // Z-index menor para evitar sobreposição
        }
    });

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
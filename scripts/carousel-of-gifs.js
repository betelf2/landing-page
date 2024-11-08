import { createCarouselHtml } from "./utils/carousel-creator.js";
import { gifEffect } from './utils/visual-effects.js'

// Fazendo items do carrossel
var quantityOfItems = 5;
var items = []
var gifTransitionTime = 5000;
var carouselItemClass = "carousel-item-gif"

for(let i = 0; i < quantityOfItems; i++)
{
    // TODO:
    // adicionar estrutura html relacionada aos projetos e suas imagens
    var data = `<div class="${carouselItemClass}-${i}">
                    <style>.${carouselItemClass}-${i} { position: relative !important; }</style>
                    <img src="images/slider/${0}.jpg" style="position: relative;" class="gif-image gif-image-enabled" alt="Imagem ${i+1}"></img>
                    <img src="images/slider/${1}.jpg" class="d-block w-100 gif-image" alt="Imagem ${i+1}"></img>
                    <img src="images/slider/${2}.jpg" class="d-block w-100 gif-image" alt="Imagem ${i+1}"></img>
                    <img src="images/slider/${3}.jpg" class="d-block w-100 gif-image" alt="Imagem ${i+1}"></img>
                </div>
                <div class="carousel-caption">
                    <h5>Projeto ${i}</h5>
                    <p>Descrição do projeto ${i}.</p>
                </div>`

    items.push(data)
}

// Adicionando no index.html
let carouselContainer = document.getElementById("carousel-of-gifs");
carouselContainer.innerHTML += `<link href="styles/gif.css" rel="stylesheet">`
carouselContainer.innerHTML += createCarouselHtml(items, false);

for(let i = 0; i < quantityOfItems; i++)
{
    var images = document.querySelectorAll(`.${carouselItemClass}-${i} .gif-image`);
    gifEffect(images, gifTransitionTime, 'gif-image-enabled');
}
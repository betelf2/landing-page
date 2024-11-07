import { createCarouselHtml } from "./utils/carousel-creator.js";

// Fazendo items do carrossel
var quantityOfItems = 10;
var items = []
for(let i = 0; i < quantityOfItems; i++)
{
    items.push(`<img src="images/slider/${i}.jpg" class="d-block w-100" alt="Imagem ${i+1}"></img>`)
}

// Adicionando no index.html
let carouselContainer = document.getElementById("carousel");
carouselContainer.innerHTML += createCarouselHtml(items);
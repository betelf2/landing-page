import { createCarouselHtml } from "./carousel-creator.js";
import { gifEffect } from './visual-effects.js'
import { loadJsonData } from './json-reader.js'

const carouselItemClass = "carousel-item-gif";
const gifTransitionTime = 7000;

function createGifItem(images)
{
    var firstItemVariables = `style="position: relative;" class="gif-image gif-image-enabled"`;
    var anotherItemsVariables = `class="d-block w-100 gif-image"`
    var htmlData = ""

    for(let i = 0; i < images.length; i++)
    {
        htmlData += `<img src="${images[i]}"
                          ${i === 0 ? firstItemVariables : anotherItemsVariables}
                          alt="Imagem ${i+1}"></img>`
    }

    return htmlData;
}

function createCarouselItem(title, description, gifItem, index)
{
    return `<div class="${carouselItemClass}-${index}">
                <style>.${carouselItemClass}-${index} { position: relative !important; }</style>
                ${gifItem}
            </div>
            <div class="carousel-caption">
                <h5>${title}</h5>
                <p>${description}</p>
            </div>`
}

async function createGifCarouselElementsUsingFile(address)
{
    var fileData = await loadJsonData(address);
    fileData.reverse(); // datas mais recentes aparecem primeiro
    var carouselItems = []

    if(fileData)
    {
        fileData.forEach((element, index) => { 
            var gifHtml = createGifItem(element.imagens)
            carouselItems.push(createCarouselItem(element.titulo, element.descricao, gifHtml, index))
        });    
    }

    return carouselItems;
}

// Fazendo os itens do carrossel
let carouselContainer = document.getElementById("carousel-of-gifs");
let carouselInnerItems = await createGifCarouselElementsUsingFile("./data/ministerios/danca.json")
carouselContainer.innerHTML += `<link href="styles/gif.css" rel="stylesheet">`
carouselContainer.innerHTML += createCarouselHtml(carouselInnerItems, false);

for(let i = 0; i < carouselInnerItems.length; i++)
{
    var images = document.querySelectorAll(`.${carouselItemClass}-${i} .gif-image`);
    gifEffect(images, gifTransitionTime, 'gif-image-enabled');
}
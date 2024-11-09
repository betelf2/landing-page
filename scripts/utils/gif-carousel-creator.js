import { createCarouselHtml } from "./carousel-creator.js";
import { gifEffect } from './visual-effects.js'

const carouselItemClass = "carousel-item-gif";
const gifTransitionTime = 7000;

/** 
 * Array of elements of in format:
 * [
 *      "titulo": string,
 *      "descricao": "string,
 *      "imagens": Array of strings with image paths to create gif
 * ]
*/
export async function createGifCarousel(array_of_elements)
{
    // Fazendo os itens do carrossel
    let carouselContainer = document.getElementById("carousel-of-gifs");
    let carouselInnerItems = await createGifCarouselElements(array_of_elements);
    carouselContainer.innerHTML += `<link href="styles/gif.css" rel="stylesheet">`
    carouselContainer.innerHTML += createCarouselHtml(carouselInnerItems, false);

    // Colocando Gifs no carrossel
    for(let i = 0; i < carouselInnerItems.length; i++)
    {
        var images = document.querySelectorAll(`.${carouselItemClass}-${i} .gif-image`);
        gifEffect(images, gifTransitionTime, 'gif-image-enabled');
    }
}

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

async function createGifCarouselElements(items)
{
    var carouselItems = [];

    if(items)
    {
        items.forEach((item, index) => { 
            var gifHtml = createGifItem(item.imagens);
            carouselItems.push(createCarouselItem(item.titulo, item.descricao, gifHtml, index));
        });    
    }

    return carouselItems;
}
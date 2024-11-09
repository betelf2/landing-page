import { loadJsonData } from './utils/json-reader.js'
import { getAssociatedData } from './data-dictionary.js'
import { getDataFromCurrentURL } from './utils/url-handler.js';
import { createGifCarousel } from './utils/gif-carousel-creator.js'

// Capturando dados da URL
var urlData = getDataFromCurrentURL();
var urlKey = (urlData.ministerio && urlData.ministerio != undefined) 
                  ? urlData.ministerio 
                  : urlData.departamento;

// Tratando arquivos
var fileToRead = getAssociatedData(urlKey);
var fileData = await loadJsonData(fileToRead);

// Criando carrossel
if(fileData && fileData.length > 0)
{
    fileData.reverse() // Ordena ao contrário para mais recentes aparecerem primeiro
    await createGifCarousel(fileData); // Criando carrossel
}
// Apresenta fotos semelhante ao formato gif
/*function gifEffect(images, transitionTime)
{
    let currentIndex = 0;

    setInterval(() => {
        images[currentIndex].classList.remove('hero-img-active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('hero-img-active');
    }, transitionTime); // Troca a imagem a cada x segundos
}

function createCarouselHead()
{
    return `<section id="carouselSection" class="py-5 bg-light">
                <div class="container">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">`
}

function createCarouselIndicators(quantity)
{
    var carouselIndicators = `<ol class="carousel-indicators">`
    for(let i = 0; i <= quantity; i++)
    {
        carouselIndicators += `<li data-target="#carouselExampleIndicators" 
                               data-slide-to="${i}" 
                               ${i === 0 ? 'class="active"' : ''}"></li>`
    }
    carouselIndicators += `</ol>`
    return carouselIndicators
}

function createCarouselInner(quantity)
{
    var carouselInner = `<div class="carousel-inner">`
    for(let i = 0; i <= quantity-1; i++)
    {
        carouselInner += `<div class="carousel-item ${i === 0 ? 'active' : ''}">
                            <img src="images/slider/${i}.jpg" class="d-block w-100" alt="Imagem ${i+1}"></img>
                            <img src="images/slider/${i+1}.jpg" class="d-block w-100" alt="Imagem ${i+1}"></img>
                        </div>`
    }
    carouselInner += `</div>`
    return carouselInner
}

function createCarouselTail()
{
    return `           
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Anterior</span>
                    </a>

                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Próximo</span>
                    </a>
                </div><!-- carouselExampleIndicators -->
            </div><!-- container -->
        </section>`
}

let carouselContainer = document.getElementById("carousel");

var carouselHead = createCarouselHead()
var carouselIndicators = createCarouselIndicators(9)
var carouselInner = createCarouselInner(9)
var carouselTail = createCarouselTail()

carouselContainer.innerHTML += carouselHead + carouselIndicators + carouselInner + carouselTail;*/